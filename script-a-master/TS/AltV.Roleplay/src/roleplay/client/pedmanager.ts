import * as alt from 'alt-client';
import * as native from 'natives';
import { loadModelAsync } from './utilities';

export default class PedManager { 
    static getPedsToSpawn(pedArray: any): void {
        pedArray = JSON.parse(pedArray);
        for (var i in pedArray) {
            PedManager.spawnPed(pedArray[i].model, pedArray[i].posX, pedArray[i].posY, pedArray[i].posZ, pedArray[i].rotation);
        }
    }

    static async spawnPed(model: string, x: number, y: number, z: number, rotation: number): Promise<void> {
        await loadModelAsync(model);
        let deg = rotation * (180/Math.PI);
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

alt.onServer("Client:Pedcreator:spawnPed", PedManager.getPedsToSpawn);