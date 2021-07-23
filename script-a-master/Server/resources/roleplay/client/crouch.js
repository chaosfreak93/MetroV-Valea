/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as game from 'natives';

const movementClipSet = "move_ped_crouched";
const strafeClipSet = "move_ped_crouched_strafing";
const clipSetSwitchTime = 0.25;
alt.onServer("Client:Crouch:toggleCrouch", async (isCrouching) => {
    if (!isCrouching) {
        await loadClipsetAsync(movementClipSet);
        await loadClipsetAsync(strafeClipSet);
        game.setPedMovementClipset(alt.Player.local.scriptID, movementClipSet, clipSetSwitchTime);
        game.setPedStrafeClipset(alt.Player.local.scriptID, strafeClipSet);
    } else {
        game.resetPedMovementClipset(alt.Player.local.scriptID, clipSetSwitchTime);
        game.resetPedStrafeClipset(alt.Player.local.scriptID);
    }
});

function loadClipsetAsync(model) {
    return new Promise((resolve, reject) => {
        if (typeof model === 'string') {
            model = alt.hash(model);
        }

        if (game.hasClipSetLoaded(model))
            return resolve(true);

        game.requestClipSet(model);

        let interval = alt.setInterval(() => {
            if (game.hasClipSetLoaded(model)) {
                alt.clearInterval(interval);
                return resolve(true);
            }
        }, 0);
    });
}