/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as game from 'natives';

let screenTarget, bigScreenScaleform = -1;
let bigScreenCoords = new alt.Vector3(1091.75, 265.25, -52.04);
let bigScreenRender, isBigScreenLoaded, isLoading = false;

function registerTarget(name, objectModel) {
    if (!game.isNamedRendertargetRegistered(name)) {
        game.registerNamedRendertarget(name, false);
        game.linkNamedRendertarget(alt.hash(objectModel));
    }

    return game.getNamedRendertargetRenderId(name);
}

function loadBigScreen(tryNumber = 0) {
    isLoading = true;
    screenTarget = registerTarget("casinoscreen_02", "vw_vwint01_betting_screen");
    bigScreenScaleform = game.requestScaleformMovie('HORSE_RACING_WALL');

    if (!game.hasScaleformMovieLoaded(bigScreenScaleform)) {
        if (tryNumber > 100) {
            alt.logError("Could Not Load Scaleform HORSE_RACING_WALL . Aborting");
            return;
        }

        alt.setTimeout(() => {
            loadBigScreen(++tryNumber);
        }, 25);
        return;
    }

    game.beginScaleformMovieMethod(bigScreenScaleform, "SHOW_SCREEN");
    game.scaleformMovieMethodAddParamInt(0);
    game.endScaleformMovieMethod();

    game.setScaleformFitRendertarget(bigScreenScaleform, true);

    isBigScreenLoaded = true;
    isLoading = false;
}

alt.everyTick(() => {
    let ped = alt.Player.local.scriptID;
    let playerPos = alt.Player.local.pos;
    let inRange = playerPos.isInRange(bigScreenCoords, 30);

    if (inRange) {
        if (!isBigScreenLoaded) {
            if (!isLoading) {
                loadBigScreen();
            }
        }

        if (!bigScreenRender) {
            bigScreenRender = true;
        }

        game.setTextRenderId(screenTarget);
        game.setScriptGfxDrawOrder(4);
        game.setScriptGfxDrawBehindPausemenu(true);
        game.drawScaleformMovieFullscreen(bigScreenScaleform, 255, 255, 255, 255, 0);
        game.setTextRenderId(game.getDefaultScriptRendertargetRenderId());
    } else {
        bigScreenRender = false;
        isBigScreenLoaded = false;
        isLoading = false;

        game.releaseNamedRendertarget("casinoscreen_02");
        game.setScaleformMovieAsNoLongerNeeded(bigScreenScaleform);
    }
});



















alt.onServer("Casino:Enter", () => {});

alt.onServer("Casino:Leave", () => {});