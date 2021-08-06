/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as game from 'natives';

let isBlackedOut = false;
let oldBodyDamage = 0;

function blackout() {
    if (!isBlackedOut) {
        isBlackedOut = true;
        game.doScreenFadeOut(100);
        alt.setTimeout(() => {
            game.doScreenFadeIn(250);
            isBlackedOut = false;
        }, 2000);
    }
}

alt.setInterval(() => {
    let vehicle = game.getVehiclePedIsIn(alt.Player.local.scriptID, false);
    if (game.doesEntityExist(vehicle)) {
        alt.log("Entity exist");
        let currentDamage = game.getVehicleBodyHealth(vehicle);
        if (currentDamage != oldBodyDamage) {
            alt.log("Health changed");
            if (!isBlackedOut && (currentDamage < oldBodyDamage) && ((oldBodyDamage - currentDamage) >= 25)) {
                alt.log("Blackout");
                blackout();
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