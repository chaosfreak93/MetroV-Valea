/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as game from 'natives';

let holstered = true;
let blocked = false;

alt.onServer("Player:ChangeWeapon", async (player, weapon) => {
    let ped = player.scriptID;

    await loadAnimDict("reaction@intimidation@1h");

    if (!game.isPedInAnyVehicle(ped, false)) {
        if (game.getVehiclePedIsTryingToEnter(ped) == 0 && (game.getPedParachuteState(ped) == -1 || game.getPedParachuteState(ped) == 0) && !game.isPedInParachuteFreeFall(ped)) {
            if (holstered) {
                blocked = true;
                game.setPedCurrentWeaponVisible(ped, 0, 1, 1, 1);
                game.taskPlayAnim(ped, "reaction@intimidation@1h", "intro", 5.0, 1.0, -1, 50, 0, 0, 0, 0);
                alt.setTimeout(() => {
                    game.clearPedTasks(ped);
                    game.setCurrentPedWeapon(ped, weapon, true);
                    game.setPedCurrentWeaponVisible(ped, 1, 1, 1, 1);
                    holstered = false;
                    blocked = false;
                }, 1600);
            } else {
                game.taskPlayAnim(ped, "reaction@intimidation@1h", "outro", 8.0, 1.0, -1, 50, 0, 0, 0, 0);
                alt.setTimeout(() => {
                    game.clearPedTasks(ped);
                    game.setCurrentPedWeapon(ped, weapon, true);
                    holstered = true;
                }, 1600);
            }
        } else {
            game.setCurrentPedWeapon(ped, alt.hash("WEAPON_UNARMED"), true);
        }
    } else {
        holstered = true;
    }
});

function loadAnimDict(animDict) {
    return new Promise((res, rej) => {
        if (!game.doesAnimDictExist(animDict)) {
            rej("Invalid animation dictionary");
            return;
        }
        if (game.hasAnimDictLoaded(animDict)) {
            res(true);
            return;
        }
        let tries = 0;
        let interval = alt.setInterval(() => {
            if (tries >= 100) {
                alt.clearInterval(interval);
                rej(`Timeout reached loading dictionary ${animDict}`);
            } else {
                if (!game.hasAnimDictLoaded(animDict)) {
                    game.requestAnimDict(animDict);
                    tries++;
                } else {
                    alt.clearInterval(interval);
                    res(true);
                }
            }
        }, 50);
    });
}

alt.everyTick(() => {
    if (blocked) {
        game.disableControlAction(1, 25, true);
        game.disableControlAction(1, 140, true);
        game.disableControlAction(1, 141, true);
        game.disableControlAction(1, 142, true);
        game.disableControlAction(1, 23, true);
        game.disableControlAction(1, 37, true);
        game.disablePlayerFiring(alt.Player.local.scriptID, true);
    }
})