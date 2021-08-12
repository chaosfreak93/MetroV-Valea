import * as alt from 'alt-client';
import * as native from 'natives';
import { loadModelAsync } from './utilities';
class PedManager {
    static getPedsToSpawn(pedArray) {
        pedArray = JSON.parse(pedArray);
        for(var i in pedArray){
            this.spawnPed(pedArray[i].model, pedArray[i].posX, pedArray[i].posY, pedArray[i].posZ, pedArray[i].rotation);
        }
    }
    static async spawnPed(model, x, y, z, rotation) {
        await loadModelAsync(model);
        let deg = rotation * (180 / Math.PI);
        let pedHandle = native.createPed(4, alt.hash(model), x, y, z, deg, false, false);
        native.setEntityAsMissionEntity(pedHandle, true, false);
        native.freezeEntityPosition(pedHandle, true);
        native.setPedCanRagdoll(pedHandle, false);
        native.taskSetBlockingOfNonTemporaryEvents(pedHandle, true);
        native.setBlockingOfNonTemporaryEvents(pedHandle, true);
        native.setPedFleeAttributes(pedHandle, 0, false);
        native.setPedCombatAttributes(pedHandle, 17, true);
        native.setEntityInvincible(pedHandle, true);
        native.setPedSeeingRange(pedHandle, 0);
    }
}
export { PedManager as default };
alt.onServer("Client:Pedcreator:spawnPed", PedManager.getPedsToSpawn);
