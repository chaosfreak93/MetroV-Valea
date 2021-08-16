import * as alt from 'alt-client';
import * as native from 'natives';
import { isPlayerDead } from './hud';

export default class CuffHandler {
    static NormalCuffsCheck(): void {
        if ((alt.Player.local.getSyncedMeta("HasHandcuffs") == true || alt.Player.local.getSyncedMeta("HasRopeCuffs") == true) && alt.Player.local.getSyncedMeta("IsCefOpen") == false) {
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
        } else if ((alt.Player.local.getSyncedMeta("HasHandcuffs") == false || alt.Player.local.getSyncedMeta("HasRopeCuffs") == false) && alt.Player.local.getSyncedMeta("IsCefOpen") == false) {
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
    }

    static FootCuffsCheck(): void {
        if (alt.Player.local.getSyncedMeta("HasFootCuffs") == true && alt.Player.local.getSyncedMeta("IsCefOpen") == false) {
            alt.toggleGameControls(false);
        } else if (alt.Player.local.getSyncedMeta("HasFootCuffs") == false && alt.Player.local.getSyncedMeta("IsCefOpen") == false) {
            if (!isPlayerDead) {
                alt.toggleGameControls(true);
            }
        }
    }
}

alt.setInterval(CuffHandler.NormalCuffsCheck, 10);
alt.setInterval(CuffHandler.FootCuffsCheck, 10);