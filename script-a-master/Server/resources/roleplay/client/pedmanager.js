import * as alt from 'alt-client';
import * as native from 'natives';
import { loadModelAsync } from './utilities';
class PedManager {
    static getPedsToSpawn(pedArray) {
        pedArray = JSON.parse(pedArray);
        for(var i in pedArray){
            PedManager.spawnPed(pedArray[i].model, pedArray[i].posX, pedArray[i].posY, pedArray[i].posZ, pedArray[i].rotation);
        }
    }
    static async spawnPed(model, x, y, z, rotation) {
        await loadModelAsync(model);
        let deg = rotation * (180 / Math.PI);
        let pedHandle = native.createPed(4, alt.hash(model), x, y, z, deg, false, false);
        native.freezeEntityPosition(pedHandle, true);
        native.setEntityAsMissionEntity(pedHandle, true, false);
        native.setPedCanBeTargetted(pedHandle, false);
        native.setPedCanBeKnockedOffVehicle(pedHandle, 1);
        native.setPedCanBeDraggedOut(pedHandle, false);
        native.setPedSuffersCriticalHits(pedHandle, false);
        native.setPedDropsWeaponsWhenDead(pedHandle, false);
        native.setPedDiesInstantlyInWater(pedHandle, false);
        native.setPedCanRagdoll(pedHandle, false);
        native.setPedDiesWhenInjured(pedHandle, false);
        native.taskSetBlockingOfNonTemporaryEvents(pedHandle, true);
        native.setPedFleeAttributes(pedHandle, 0, false);
        native.setPedConfigFlag(pedHandle, 32, false); // ped cannot fly thru windscreen
        native.setPedConfigFlag(pedHandle, 281, true); // ped no writhe
        native.setPedGetOutUpsideDownVehicle(pedHandle, false);
        native.setPedCanEvasiveDive(pedHandle, false);
    }
}
export { PedManager as default };
alt.onServer("Client:Pedcreator:spawnPed", PedManager.getPedsToSpawn);
