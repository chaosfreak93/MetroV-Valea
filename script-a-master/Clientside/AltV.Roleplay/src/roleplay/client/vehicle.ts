import * as alt from "alt-client";
import * as native from "natives";

let dict: any[] = [];

export default class VehicleHandler {
    static returnVehicleMods(curVeh: alt.Vehicle, modId: number): void {
        if (curVeh == null || curVeh == undefined) return;
        native.setVehicleModKit(curVeh.scriptID, 0);
        let maxMods = native.getNumVehicleMods(curVeh.scriptID, modId);
        if (maxMods === 0) {
            alt.log("Keine Mods gefunden: " + maxMods);
        } else {
            for (var i = 0; i < maxMods; i++) {
                alt.log(
                    `ModId: ${i} | Modname: ${native.getLabelText(native.getModTextLabel(curVeh.scriptID, modId, i))}`,
                );
                alt.emitServer(
                    "Server:Utilities:createNewMod",
                    `${native.getLabelText(native.getModTextLabel(curVeh.scriptID, modId, i))}`,
                    modId,
                    i + 1,
                );
            }
        }
    }

    static repairVehicle(curVeh: alt.Vehicle): void {
        if (curVeh != null && curVeh instanceof alt.Vehicle) {
            native.setVehicleFixed(curVeh.scriptID);
            native.setVehicleDeformationFixed(curVeh.scriptID);
        }
    }

    static toggleDoor(vehicle: alt.Vehicle, doorid: number, state: boolean): void {
        if (state) {
            native.setVehicleDoorOpen(vehicle.scriptID, doorid, false, false);
        } else {
            native.setVehicleDoorShut(vehicle.scriptID, doorid, false);
        }
    }

    static gameEntityCreate(entity: alt.Entity): void {
        if (entity instanceof alt.Vehicle) {
            if (dict[entity.id] != undefined)
                native.setVehicleHasMutedSirens(alt.Vehicle.getByID(entity.id).scriptID, dict[entity.id]);
            if (!entity.hasStreamSyncedMeta("IsVehicleCardealer")) return;
            if (entity.getStreamSyncedMeta("IsVehicleCardealer") == true) {
                native.freezeEntityPosition(entity.scriptID, true);
                native.setEntityInvincible(entity.scriptID, true);
            }
        }
    }

    static enteredVehicle(vehicle: alt.Vehicle, seat: number): void {
        if (native.getVehicleClass(vehicle.scriptID) == 18) native.setVehicleRadioEnabled(vehicle.scriptID, false);
    }

    static setVehicleHasMutedSirensForAll(vehId: number, state: boolean): void {
        dict[vehId] = state;
        native.setVehicleHasMutedSirens(alt.Vehicle.getByID(vehId).scriptID, state);
    }
}

alt.onServer("returnVehicleMods", VehicleHandler.returnVehicleMods);
alt.onServer("Client:Utilities:repairVehicle", VehicleHandler.repairVehicle);
alt.onServer("Client:Vehicles:ToggleDoorState", VehicleHandler.toggleDoor);
alt.onServer("Client:Sirens:setVehicleHasMutedSirensForAll", VehicleHandler.setVehicleHasMutedSirensForAll);
alt.on("gameEntityCreate", VehicleHandler.gameEntityCreate);
alt.on("enteredVehicle", VehicleHandler.enteredVehicle);
