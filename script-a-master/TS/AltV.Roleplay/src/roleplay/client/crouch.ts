import * as alt from 'alt-client';
import * as native from 'natives';
import { loadClipsetAsync } from './utilities';

const player: alt.Player = alt.Player.local;
let enabled: boolean = false;
const movementClipSet: string = "move_ped_crouched";
const strafeClipSet: string = "move_ped_crouched_strafing";
const clipSetSwitchTime: number = 0.25;

export default class Crouch {
    static async start(): Promise<void> {
        if (enabled) return;
        enabled = true;
        await loadClipsetAsync(movementClipSet);
        await loadClipsetAsync(strafeClipSet);
        native.setPedMovementClipset(player.scriptID, movementClipSet, clipSetSwitchTime);
        native.setPedStrafeClipset(player.scriptID, strafeClipSet);
    }

    static stop(): void {
        if (!enabled) return;
        enabled = false;
        native.resetPedMovementClipset(player.scriptID, clipSetSwitchTime);
        native.resetPedStrafeClipset(player.scriptID);
    }
}