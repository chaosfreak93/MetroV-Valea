import * as alt from "alt-client";
import * as native from "natives";
import { loadClipsetAsync } from "./utilities";
const player = alt.Player.local;
let enabled = false;
const movementClipSet1 = "MOVE_M@TOUGH_GUY@";
const movementClipSet2 = "move_ped_crouched";
const strafeClipSet = "move_ped_crouched_strafing";
const clipSetSwitchTime = 0.25;
let interval = null;
class Crouch {
    static async start() {
        if (enabled) return;
        enabled = true;
        await loadClipsetAsync(movementClipSet1);
        await loadClipsetAsync(movementClipSet2);
        await loadClipsetAsync(strafeClipSet);
        native.setPedUsingActionMode(player.scriptID, false, -1, "DEFAULT_ACTION");
        interval = alt.setInterval(Crouch.checkCrouch, 200);
    }
    static stop() {
        if (!enabled) return;
        enabled = false;
        native.setPedUsingActionMode(player.scriptID, false, -1, "DEFAULT_ACTION");
        native.setPedMovementClipset(player.scriptID, movementClipSet1, clipSetSwitchTime);
        alt.clearInterval(interval);
        alt.setTimeout(()=>{
            native.resetPedMovementClipset(player.scriptID, 0);
            native.resetPedStrafeClipset(player.scriptID);
        }, 200);
    }
    static checkCrouch() {
        native.setPedMovementClipset(player.scriptID, movementClipSet2, clipSetSwitchTime);
        native.disableControlAction(0, 22, true); //Jump
        native.setPedUsingActionMode(player.scriptID, false, -1, "DEFAULT_ACTION");
        if (native.isAimCamActive()) {
            native.setPedStrafeClipset(player.scriptID, strafeClipSet);
            native.setPedUsingActionMode(player.scriptID, false, -1, "DEFAULT_ACTION");
        }
    }
}
export { Crouch as default };
