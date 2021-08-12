import * as alt from 'alt-client';
import * as native from 'natives';
import { setIntoVehicle } from './utilities';
let dict = [];
class VehicleHandler {
    static returnVehicleMods(curVeh, modId) {
        if (curVeh == null || curVeh == undefined) return;
        native.setVehicleModKit(curVeh.scriptID, 0);
        let maxMods = native.getNumVehicleMods(curVeh.scriptID, modId);
        if (maxMods === 0) {
            alt.log("Keine Mods gefunden: " + maxMods);
        } else {
            for(var i = 0; i < maxMods; i++){
                alt.log(`ModId: ${i} | Modname: ${native.getLabelText(native.getModTextLabel(curVeh.scriptID, modId, i))}`);
                alt.emitServer("Server:Utilities:createNewMod", `${native.getLabelText(native.getModTextLabel(curVeh.scriptID, modId, i))}`, modId, i + 1);
            }
        }
    }
    static repairVehicle(curVeh) {
        if (curVeh != null && curVeh instanceof alt.Vehicle) {
            native.setVehicleFixed(curVeh.scriptID);
            native.setVehicleDeformationFixed(curVeh.scriptID);
        }
    }
    static async setPedIntoVehicle(curVeh) {
        await setIntoVehicle(curVeh);
    }
    static toggleDoor(vehicle, doorid, state) {
        if (state) {
            native.setVehicleDoorOpen(vehicle.scriptID, doorid, false, false);
        } else {
            native.setVehicleDoorShut(vehicle.scriptID, doorid, false);
        }
    }
    static gameEntityCreate(entity) {
        if (entity instanceof alt.Vehicle) {
            if (dict[entity.id] != undefined) native.setVehicleHasMutedSirens(alt.Vehicle.getByID(entity.id).scriptID, dict[entity.id]);
            if (!entity.hasStreamSyncedMeta("IsVehicleCardealer")) return;
            if (entity.getStreamSyncedMeta("IsVehicleCardealer") == true) {
                native.freezeEntityPosition(entity.scriptID, true);
                native.setEntityInvincible(entity.scriptID, true);
            }
        }
    }
    static enteredVehicle(vehicle, seat) {
        if (native.getVehicleClass(vehicle.scriptID) == 18) native.setVehicleRadioEnabled(vehicle.scriptID, false);
    }
    static setVehicleHasMutedSirensForAll(vehId, state) {
        dict[vehId] = state;
        native.setVehicleHasMutedSirens(alt.Vehicle.getByID(vehId).scriptID, state);
    }
}
export { VehicleHandler as default };
alt.onServer("returnVehicleMods", VehicleHandler.returnVehicleMods);
alt.onServer("Client:Utilities:repairVehicle", VehicleHandler.repairVehicle);
alt.onServer("Client:Utilities:setIntoVehicle", VehicleHandler.setPedIntoVehicle);
alt.onServer("Client:Vehicles:ToggleDoorState", VehicleHandler.toggleDoor);
alt.onServer("Client:Sirens:setVehicleHasMutedSirensForAll", VehicleHandler.setVehicleHasMutedSirensForAll);
alt.on("gameEntityCreate", VehicleHandler.gameEntityCreate);
alt.on("enteredVehicle", VehicleHandler.enteredVehicle);
