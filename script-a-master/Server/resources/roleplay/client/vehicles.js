/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as game from 'natives';

alt.onServer("Client:Vehicles:ToggleDoorState", (veh, doorid, state) => {
    toggleDoor(veh, parseInt(doorid), state);
});

alt.on("gameEntityCreate", (entity) => {
    if (entity instanceof alt.Vehicle) {
        if (!entity.hasStreamSyncedMeta("IsVehicleCardealer")) return;
        if (entity.getStreamSyncedMeta("IsVehicleCardealer") == true) {
            game.freezeEntityPosition(entity.scriptID, true);
            game.setEntityInvincible(entity.scriptID, true);
        }
    }
});

function toggleDoor(vehicle, doorid, state) {
    if (state) {
        game.setVehicleDoorOpen(vehicle.scriptID, doorid, false, false);
    } else {
        game.setVehicleDoorShut(vehicle.scriptID, doorid, false);
    }
}

/* SIRENS */

let dict = {}

alt.on("enteredVehicle", (vehicle, seat) => {
    if (game.getVehicleClass(vehicle.scriptID) == 18) game.setVehicleRadioEnabled(vehicle.scriptID, false);
});

alt.on("gameEntityCreate", (entity) => {
    if (entity instanceof alt.Vehicle && dict[entity.id] != undefined) game.setVehicleHasMutedSirens(alt.Vehicle.getByID(entity.id).scriptID, dict[entity.id]);
});

alt.everyTick(() => {
    if (!alt.Player.local.vehicle || game.getVehicleClass(alt.Player.local.vehicle.scriptID) != 18) return;
    game.disableControlAction(1, 86, true);
});

alt.on('keydown', (key) => {
    if (key === "Q".charCodeAt(0) && alt.Player.local.vehicle && alt.Player.local.scriptID == game.getPedInVehicleSeat(alt.Player.local.vehicle.scriptID, -1) && game.getVehicleClass(alt.Player.local.vehicle.scriptID) == 18) {
        if (game.isVehicleSirenOn(alt.Player.local.vehicle.scriptID)) {
            game.setVehicleHasMutedSirens(alt.Player.local.vehicle.scriptID, false);
            alt.emitServer("Server:Sirens:ForwardSirenMute", alt.Player.local.vehicle.id, false);
            game.setVehicleSiren(alt.Player.local.vehicle.scriptID, false);
        } else {
            game.setVehicleHasMutedSirens(alt.Player.local.vehicle.scriptID, true);
            alt.emitServer("Server:Sirens:ForwardSirenMute", alt.Player.local.vehicle.id, true);
            game.setVehicleSiren(alt.Player.local.vehicle.scriptID, true);

        }
    } else if (key === 18 && alt.Player.local.vehicle && alt.Player.local.scriptID == game.getPedInVehicleSeat(alt.Player.local.vehicle.scriptID, -1) && game.getVehicleClass(alt.Player.local.vehicle.scriptID) == 18) {
        if (game.isVehicleSirenOn(alt.Player.local.vehicle.scriptID) && !game.isVehicleSirenAudioOn(alt.Player.local.vehicle.scriptID)) alt.emitServer("Server:Sirens:ForwardSirenMute", alt.Player.local.vehicle.id, false);
        else if (game.isVehicleSirenOn(alt.Player.local.vehicle.scriptID) && game.isVehicleSirenAudioOn(alt.Player.local.vehicle.scriptID)) alt.emitServer("Server:Sirens:ForwardSirenMute", alt.Player.local.vehicle.id, true);
    } else if (key == "J".charCodeAt(0) && alt.Player.local.vehicle && (alt.Player.local.scriptID == game.getPedInVehicleSeat(alt.Player.local.vehicle.scriptID, -1) || alt.Player.local.scriptID == game.getPedInVehicleSeat(alt.Player.local.vehicle.scriptID, 0)) && game.getVehicleClass(alt.Player.local.vehicle.scriptID) == 18) {
        alt.emit("SaltyChat:UseMegaphone", true);
    }
});

alt.on('keyup', (key) => {
    if (key == "J".charCodeAt(0) && alt.Player.local.vehicle && (alt.Player.local.scriptID == game.getPedInVehicleSeat(alt.Player.local.vehicle.scriptID, -1) || alt.Player.local.scriptID == game.getPedInVehicleSeat(alt.Player.local.vehicle.scriptID, 0)) && game.getVehicleClass(alt.Player.local.vehicle.scriptID) == 18) {
        alt.emit("SaltyChat:UseMegaphone", false);
    }
});

alt.onServer("Client:Sirens:setVehicleHasMutedSirensForAll", (vehId, state) => {
    dict[vehId] = state;
    game.setVehicleHasMutedSirens(alt.Vehicle.getByID(vehId).scriptID, state);
});

alt.everyTick(() => {
    // Passenger
    game.disableControlAction(0, 58, true);
    if (game.isDisabledControlJustPressed(0, 58)) {
        enterVehicleAsPassenger();
        return;
    }
    
    // Driver
    game.disableControlAction(0, 23, true);
    if (game.isDisabledControlJustPressed(0, 23)) {
        enterVehicleAsDriver();
        return;
    }
});

function enterVehicleAsDriver() {
    if (alt.Player.local.vehicle == null) {
        const player = alt.Player.local;

        var vehicles = alt.Vehicle.all;
        var closestVehicle;
        var playerPos = alt.Player.local.pos;

        var lastDistance = 5;

        alt.log('Searching through ' + vehicles.length + ' vehicles.');

        vehicles.forEach(vehicle => {
            var vehiclePosition = vehicle.pos;
            var distance = Distance(playerPos, vehiclePosition);
            if (distance < lastDistance) {
                closestVehicle = vehicle;
                lastDistance = distance;
            }
        });
		
        if (closestVehicle == undefined) return;
        var vehicle = closestVehicle.scriptID;

        alt.log('Vehicle: ' + vehicle);

        let boneFLDoor = game.getEntityBoneIndexByName(vehicle, 'door_dside_f');//Front Left
        const posFLDoor = game.getWorldPositionOfEntityBone(vehicle, boneFLDoor);
        const distFLDoor = Distance({ x: posFLDoor.x, y: posFLDoor.y, z: posFLDoor.z }, alt.Player.local.pos);

        let boneFRDoor = game.getEntityBoneIndexByName(vehicle, 'door_pside_f');//Front Right
        const posFRDoor = game.getWorldPositionOfEntityBone(vehicle, boneFRDoor);
        const distFRDoor = Distance({ x: posFRDoor.x, y: posFRDoor.y, z: posFRDoor.z }, alt.Player.local.pos);

        if (game.isVehicleSeatFree(vehicle, -1, false)) {
            let vehicleClass = game.getVehicleClass(vehicle);
            if (vehicleClass == 14) {
                // Boats
                game.setPedIntoVehicle(player.scriptID, vehicle, -1);
            } else {
                game.taskEnterVehicle(alt.Player.local.scriptID, vehicle, 5000, -1, 2, 1, 0);
            }
        } else {
            if (distFRDoor < distFLDoor) return;

            game.taskEnterVehicle(alt.Player.local.scriptID, vehicle, 5000, -1, 2, 1, 0);
        }
    }
}


function enterVehicleAsPassenger() {
    if (alt.Player.local.vehicle) return;

    var vehicles = alt.Vehicle.all;
    var closestVehicle;
    var playerPos = alt.Player.local.pos;

    var lastDistance = 5;

    alt.log('Searching through ' + vehicles.length + ' vehicles.');

    vehicles.forEach(vehicle => {
        var vehiclePosition = vehicle.pos;
        var distance = Distance(playerPos, vehiclePosition);
        if (distance < lastDistance) {
            closestVehicle = vehicle;
            lastDistance = distance;
        }
    });

    if (closestVehicle == undefined) return;
    var vehicle = closestVehicle.scriptID;

    alt.log('Vehicle: ' + vehicle);

    if (!game.isVehicleSeatFree(vehicle, 0, false) && !game.isVehicleSeatFree(vehicle, 1, false) && !game.isVehicleSeatFree(vehicle, 2, false)) return;

    let boneFRDoor = game.getEntityBoneIndexByName(vehicle, 'door_pside_f');//Front right
    const posFRDoor = game.getWorldPositionOfEntityBone(vehicle, boneFRDoor);
    const distFRDoor = Distance({ x: posFRDoor.x, y: posFRDoor.y, z: posFRDoor.z }, alt.Player.local.pos);

    let boneBLDoor = game.getEntityBoneIndexByName(vehicle, 'door_dside_r');//Back Left
    const posBLDoor = game.getWorldPositionOfEntityBone(vehicle, boneBLDoor);
    const distBLDoor = Distance({ x: posBLDoor.x, y: posBLDoor.y, z: posBLDoor.z }, alt.Player.local.pos);

    let boneBRDoor = game.getEntityBoneIndexByName(vehicle, 'door_pside_r');//Back Right
    const posBRDoor = game.getWorldPositionOfEntityBone(vehicle, boneBRDoor);
    const distBRDoor = Distance({ x: posBRDoor.x, y: posBRDoor.y, z: posBRDoor.z }, alt.Player.local.pos);

    let minDist = Math.min(distFRDoor, distBLDoor, distBRDoor);

    if (minDist == distFRDoor) {
        if (minDist > 1.8) return;

        if (game.isVehicleSeatFree(vehicle, 0, false)) {
            game.taskEnterVehicle(alt.Player.local.scriptID, vehicle, 5000, 0, 2, 1, 0);
        } else if (game.isVehicleSeatFree(vehicle, 2, false)) {
            game.taskEnterVehicle(alt.Player.local.scriptID, vehicle, 5000, 2, 2, 1, 0);
        }
        else {
            return;
        }
    }
    if (minDist == distBLDoor) {
        if (minDist > 1.8) return;

        if (game.isVehicleSeatFree(vehicle, 1, false)) {
            game.taskEnterVehicle(alt.Player.local.scriptID, vehicle, 5000, 1, 2, 1, 0);
        } else {
            return;
        }
    }
    if (minDist == distBRDoor) {
        if (minDist > 1.8) return;

        if (game.isVehicleSeatFree(vehicle, 2, false)) {
            game.taskEnterVehicle(alt.Player.local.scriptID, vehicle, 5000, 2, 2, 1, 0);
        } else if (game.isVehicleSeatFree(vehicle, 0, false)) {
            game.taskEnterVehicle(alt.Player.local.scriptID, vehicle, 5000, 0, 2, 1, 0);
        } else {
            return;
        }
    }
}

function Distance(vector1, vector2) {
    if (vector1 === undefined || vector2 === undefined) {
        throw new Error('AddVector => vector1 or vector2 is undefined');
    }

    return Math.sqrt(
        Math.pow(vector1.x - vector2.x, 2) +
        Math.pow(vector1.y - vector2.y, 2) +
        Math.pow(vector1.z - vector2.z, 2)
    );
}
