/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as game from 'natives';
import {Raycast} from './utilities.js';

var canUseEKey = true;
var lastInteract = 0;
let toggleCrouch = false;

function canInteract() {
    return lastInteract + 1000 < Date.now()
}

alt.on('keyup', (key) => {
    if (!canInteract) return;
    lastInteract = Date.now();
    if (key == 'E'.charCodeAt(0)) {
        alt.emitServer("Server:KeyHandler:PressE");
    } else if (key == 'U'.charCodeAt(0)) {
        alt.emitServer("Server:KeyHandler:PressU");
    } else if (key == 'Y'.charCodeAt(0)) {
        let result = Raycast.line(1.5, 2.5);
        if (result == undefined || !alt.Player.local.vehicle) return;
        if (result.isHit && result.entityType != 0) {
            if (result.entityType == 1) {
                let player = alt.Player.all.find(x => x.scriptID == result.hitEntity);
                if (!player.valid || player == undefined) return;
                alt.emitServer("Server:CarryPlayer", player, player.getStreamSyncedMeta("IsUnconscious"), player.getSyncedMeta("HasFootCuffs"));
            }
        }
    }
});

alt.on('keydown', (key) => {
    if (!canInteract) return;
    lastInteract = Date.now();
    if (key === 17) { //STRG
        game.disableControlAction(0, 36, true);
        if (!game.isPlayerDead(alt.Player.local) && !game.isPedSittingInAnyVehicle(alt.Player.local.scriptID)) {
            if (!game.isPauseMenuActive()) {

                game.requestAnimSet("move_ped_crouched");
                if (!toggleCrouch) {
                    game.setPedMovementClipset(alt.Player.local.scriptID, "move_ped_crouched", 0.45);
                    toggleCrouch = true;
                } else {
                    game.clearPedTasks(alt.Player.local.scriptID);
                    game.resetPedMovementClipset(alt.Player.local.scriptID, 0.45);
                    toggleCrouch = false;
                }
            }
        }
    }
});

alt.onServer("Client:DoorManager:ManageDoor", (doorHash, doorHash2, pos, pos2, isLocked) => {
    alt.log(doorHash + ", " + doorHash2 + ", " + pos + ", " + pos2 + ", " + isLocked);
    if (doorHash != undefined && doorHash2 != undefined && pos != undefined && pos2 != undefined && isLocked != undefined) {
        // game.doorControl(alt.hash(hash), pos.x, pos.y, pos.z, isLocked, 0.0, 50.0, 0.0); //isLocked (0) = Open | isLocked (1) = True
        game.setStateOfClosestDoorOfType(alt.hash(doorHash), pos.x, pos.y, pos.z, isLocked, 0, 0);
        if (doorHash2 != "None") {
            game.setStateOfClosestDoorOfType(alt.hash(doorHash2), pos2.x, pos2.y, pos2.z, isLocked, 0, 0);
        }
    }
});

alt.setInterval(() => {
    if ((alt.Player.local.getSyncedMeta("HasHandcuffs") == true || alt.Player.local.getSyncedMeta("HasRopeCuffs") == true) && !game.isEntityPlayingAnim(alt.Player.local.scriptID, "mp_arresting", "sprint", 3)) {
        game.taskPlayAnim(alt.Player.local.scriptID, "mp_arresting", "sprint", 8.0, -8, -1, 49, 0, false, false, false);
    } else if (alt.Player.local.getSyncedMeta("HasFootCuffs") == true && !game.isEntityPlayingAnim(alt.Player.local.scriptID, "mp_arresting", "idle", 3)) {
        game.taskPlayAnim(alt.Player.local.scriptID, "mp_arresting", "idle", 8.0, -8, -1, 49, 0, false, false, false);
    }
    if ((alt.Player.local.getSyncedMeta("IsUnconscious") == true && alt.Player.local.getSyncedMeta("IsReviving") == false) && !game.isEntityPlayingAnim(alt.Player.local.scriptID, "missheistfbi3b_ig8_2", "cower_loop_victim", 3)) {
        game.taskPlayAnim(alt.Player.local.scriptID, "missheistfbi3b_ig8_2", "cower_loop_victim", 1, 1, -1, 1, 1, false, false, false);
    } else if ((alt.Player.local.getSyncedMeta("IsUnconscious") == true && alt.Player.local.getSyncedMeta("IsReviving") == true) && !game.isEntityPlayingAnim(alt.Player.local.scriptID, "missheistfbi3b_ig8_2", "cpr_loop_victim", 3)) {
        game.taskPlayAnim(alt.Player.local.scriptID, "missheistfbi3b_ig8_2", "cpr_loop_victim", 1, 1, -1, 1, 1, false, false, false);
    } else if ((alt.Player.local.getSyncedMeta("IsUnconscious") == false && alt.Player.local.getSyncedMeta("IsReviving") == true) && !game.isEntityPlayingAnim(alt.Player.local.scriptID, "missheistfbi3b_ig8_2", "cpr_loop_paramedic", 3)) {
        game.taskPlayAnim(alt.Player.local.scriptID, "missheistfbi3b_ig8_2", "cpr_loop_paramedic", 1, 1, -1, 1, 1, false, false, false);
    }
}, 100);