/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as game from 'natives';

let isBlackedOut = false;
let oldBodyDamage = 0;

function blackout(speed) {
    if (!isBlackedOut) {
        let blackoutTime = 1000 * (speed / 10);
        alt.log(blackoutTime);
        isBlackedOut = true;
        game.doScreenFadeOut(100);
        alt.setTimeout(() => {
            game.doScreenFadeIn(250);
            isBlackedOut = false;
        }, blackoutTime);
    }
}

alt.setInterval(() => {
    let vehicle = game.getVehiclePedIsIn(alt.Player.local.scriptID, false);
    if (game.doesEntityExist(vehicle)) {
        let currentDamage = game.getVehicleBodyHealth(vehicle);
        if (currentDamage != oldBodyDamage) {
            if (!isBlackedOut && (currentDamage < oldBodyDamage) && ((oldBodyDamage - currentDamage) >= 25)) {
                let currentSpeed = game.getEntitySpeed(vehicle) * 3.6;
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