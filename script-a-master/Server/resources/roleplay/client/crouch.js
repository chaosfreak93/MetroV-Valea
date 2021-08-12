import * as alt from 'alt-client';
import * as native from 'natives';
import { loadClipsetAsync } from './utilities';
class Crouch {
    static async start() {
        if (Crouch.enabled) return;
        Crouch.enabled = true;
        await loadClipsetAsync(this.movementClipSet);
        await loadClipsetAsync(this.strafeClipSet);
        native.setPedMovementClipset(this.player.scriptID, this.movementClipSet, this.clipSetSwitchTime);
        native.setPedStrafeClipset(this.player.scriptID, this.strafeClipSet);
    }
    static stop() {
        if (!Crouch.enabled) return;
        Crouch.enabled = false;
        native.resetPedMovementClipset(this.player.scriptID, this.clipSetSwitchTime);
        native.resetPedStrafeClipset(this.player.scriptID);
    }
}
Crouch.player = alt.Player.local;
Crouch.enabled = false;
Crouch.movementClipSet = "move_ped_crouched";
Crouch.strafeClipSet = "move_ped_crouched_strafing";
Crouch.clipSetSwitchTime = 0.25;
export { Crouch as default };
