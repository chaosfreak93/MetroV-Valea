/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as game from 'natives';

let isBlackedOut = false;
let oldBodyDamage = 0;

function blackout(speed) {
    if (!isBlackedOut) {
        isBlackedOut = true;
        game.doScreenFadeOut(100);
        alt.setTimeout(() => {
            game.doScreenFadeIn(250);
            isBlackedOut = false;
        }, 1000 * (speed / 12));
    }
}

alt.setInterval(() => {
    let vehicle = game.getVehiclePedIsIn(alt.Player.local.scriptID, false);
    if (game.doesEntityExist(vehicle)) {
        let currentDamage = game.getVehicleBodyHealth(vehicle);
        let currentSpeed = game.getEntitySpeed(vehicle) * 2.23;
        if (currentDamage != oldBodyDamage) {
            if (!isBlackedOut && (currentDamage < oldBodyDamage) && ((oldBodyDamage - currentDamage) >= 25)) {
                blackout(currentSpeed);
            }
            oldBodyDamage = currentDamage;
        }
    }

    if (isBlackedOut) {
        game.disableControlAction(0, 71, true);
        game.disableControlAction(0, 72, true);
        game.disableControlAction(0, 63, true);
        game.disableControlAction(0, 64, true);
        game.disableControlAction(0, 75, true);
    }
}, 100);