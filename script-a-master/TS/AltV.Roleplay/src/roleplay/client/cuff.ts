import * as alt from 'alt-client';
import * as native from 'natives';
import { isPlayerDead } from './hud';

export default class CuffHandler {
    static TakeFootcuffs(): void {
        alt.toggleGameControls(true);
    }

    static NormalCuffsDisableControl(): void {
        if (alt.Player.local.getSyncedMeta("HasHandcuffs") == true || alt.Player.local.getSyncedMeta("HasRopeCuffs") == true) {
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
        }
    }

    static FootcuffsDisableControl(): void {
        if (alt.Player.local.getSyncedMeta("HasFootCuffs") == true) {
            alt.toggleGameControls(false);
        }
    }

    static NormalControl(): void {
        if (alt.Player.local.getSyncedMeta("HasHandcuffs") == false && alt.Player.local.getSyncedMeta("HasRopeCuffs") == false && alt.Player.local.getSyncedMeta("HasFootCuffs") == false && !isPlayerDead) {
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
}

alt.everyTick(CuffHandler.NormalCuffsDisableControl);
alt.everyTick(CuffHandler.FootcuffsDisableControl);
alt.everyTick(CuffHandler.NormalControl);