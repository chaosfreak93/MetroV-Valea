import * as alt from 'alt-client';
import * as native from 'natives';
import { isPlayerDead } from './hud';

let normalCuffTick: number = null;

export default class CuffHandler {
    static GiveNormalCuffs(): void {
        normalCuffTick = alt.everyTick(() => {
            native.disableControlAction(0, 12, true);
            native.disableControlAction(0, 13, true);
            native.disableControlAction(0, 14, true);
            native.disableControlAction(0, 15, true);
            native.disableControlAction(0, 16, true);
            native.disableControlAction(0, 17, true);
            native.disableControlAction(0, 22, true);
            native.disableControlAction(0, 24, true);
            native.disableControlAction(0, 25, true);
            native.disableControlAction(0, 37, true);
            native.disableControlAction(0, 44, true);
            native.disableControlAction(0, 45, true);
            native.disableControlAction(0, 257, true);
            native.disableControlAction(0, 263, true);
            native.disableControlAction(0, 264, true);
            native.disableControlAction(0, 345, true);
        });
    }

    static TakeNormalCuffs(): void {
        alt.clearEveryTick(normalCuffTick);
        if (!isPlayerDead) {
            native.enableControlAction(0, 12, true);
            native.enableControlAction(0, 13, true);
            native.enableControlAction(0, 14, true);
            native.enableControlAction(0, 15, true);
            native.enableControlAction(0, 16, true);
            native.enableControlAction(0, 17, true);
            native.enableControlAction(0, 22, true);
            native.enableControlAction(0, 24, true);
            native.enableControlAction(0, 25, true);
            native.enableControlAction(0, 37, true);
            native.enableControlAction(0, 44, true);
            native.enableControlAction(0, 45, true);
            native.enableControlAction(0, 257, true);
            native.enableControlAction(0, 263, true);
            native.enableControlAction(0, 264, true);
            native.enableControlAction(0, 345, true);
        }
    }

    static GiveFootCuffs(): void {
        alt.toggleGameControls(false);
    }

    static TakeFootCuffs(): void {
        if (!isPlayerDead) {
            alt.toggleGameControls(true);
        }
    }
}

//alt.onServer("Client:CuffManager:GiveNormalCuffs", CuffHandler.GiveNormalCuffs);
//alt.onServer("Client:CuffManager:TakeNormalCuffs", CuffHandler.TakeNormalCuffs);
alt.onServer("Client:CuffManager:GiveFootCuffs", CuffHandler.GiveFootCuffs);
alt.onServer("Client:CuffManager:TakeFootCuffs", CuffHandler.TakeFootCuffs);