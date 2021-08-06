/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as game from 'natives';

let isBlackedOut = false;
let oldBodyDamage = 0;

function blackout(speed) {
    if (!isBlackedOut) {
        let blackoutTime = 100 * speed;
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
    let vehicle = alt.Player.local.vehicle;
    if (vehicle != null) {
        let currentBodyDamage = game.getVehicleBodyHealth(vehicle.scriptID);
        if (currentBodyDamage != oldBodyDamage) {
            if (!isBlackedOut && (currentBodyDamage < oldBodyDamage) && ((oldBodyDamage - currentBodyDamage) >= 25)) {
                blackout(vehicle.speed * 3.6);
            }
            oldBodyDamage = currentBodyDamage;
        }
    } else {
        oldBodyDamage = 0;
    }

    if (isBlackedOut) {
        game.disableControlAction(0, 71, true);
        game.disableControlAction(0, 72, true);
        game.disableControlAction(0, 63, true);
        game.disableControlAction(0, 64, true);
        game.disableControlAction(0, 75, true);
    }
}, 10);