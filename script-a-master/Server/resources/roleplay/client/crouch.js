import * as alt from 'alt-client';
import * as native from 'natives';
import { loadClipsetAsync } from './utilities';
const player = alt.Player.local;
let enabled = false;
const movementClipSet = "move_ped_crouched";
const strafeClipSet = "move_ped_crouched_strafing";
const clipSetSwitchTime = 0.25;
class Crouch {
    static async start() {
        if (enabled) return;
        enabled = true;
        await loadClipsetAsync(movementClipSet);
        await loadClipsetAsync(strafeClipSet);
        native.setPedMovementClipset(player.scriptID, movementClipSet, clipSetSwitchTime);
        native.setPedStrafeClipset(player.scriptID, strafeClipSet);
    }
    static stop() {
        if (!enabled) return;
        enabled = false;
        native.resetPedMovementClipset(player.scriptID, clipSetSwitchTime);
        native.resetPedStrafeClipset(player.scriptID);
    }
}
export { Crouch as default };
