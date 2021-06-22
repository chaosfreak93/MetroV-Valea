/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as game from 'natives';

alt.onServer('Client:Pedcreator:spawnPed', (pedArray) => {
    pedArray = JSON.parse(pedArray);
    for (var i in pedArray) {
        spawnPed(pedArray[i].model, pedArray[i].posX, pedArray[i].posY, pedArray[i].posZ, pedArray[i].rotation);
    }
});

function spawnPed(model, x, y, z, rotation) {
    let modelHash = alt.hash(model);
    new Promise((resolve, reject) => {
        if (game.hasModelLoaded(modelHash)) {
            resolve();
        }
        game.requestModel(modelHash);
        const timer = alt.setInterval(() => {
            if (game.hasModelLoaded(modelHash)) {
                alt.clearInterval(timer);
                resolve();
            }
        }, 10);
    }).then(() => {
        let deg = rotation * (180/Math.PI);
        let pedHandle = game.createPed(4, modelHash, x, y, z, deg, false, false);
        game.setBlockingOfNonTemporaryEvents(pedHandle, true);
        game.taskSetBlockingOfNonTemporaryEvents(pedHandle, true);
        game.setEntityInvincible(pedHandle, true);
        game.setPedFleeAttributes(pedHandle, 15, false);
        game.disablePedPainAudio(pedHandle, true);
        game.freezeEntityPosition(pedHandle, true);
    });
}
