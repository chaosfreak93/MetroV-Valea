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

alt.everyTick(() => {
    let vehicle = alt.Player.local.vehicle;
    if (vehicle != null && vehicle.valid) {
        let currentDamage = game.getVehicleBodyHealth(vehicle.scriptID);
        let speed = game.getEntitySpeed(vehicle.scriptID);
        if (currentDamage != oldBodyDamage) {
            if (!isBlackedOut && (currentDamage < oldBodyDamage) && ((oldBodyDamage - currentDamage) >= 25)) {
                blackout(speed * 3.6);
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
});