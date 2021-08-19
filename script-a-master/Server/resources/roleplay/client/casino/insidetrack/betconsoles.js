import * as alt from 'alt-client';
import * as native from 'natives';
import { loadModelAsync, loadScaleformMovieAsync, registerTarget } from '../../utilities';
let betConsoles = [
    "vw_vwint01_betting_sreen_01",
    "vw_vwint01_betting_sreen_02",
    "vw_vwint01_betting_sreen_03",
    "vw_vwint01_betting_sreen_04",
    "vw_vwint01_betting_sreen_05",
    "vw_vwint01_betting_sreen_06",
    "vw_vwint01_betting_sreen_07",
    "vw_vwint01_betting_sreen_08",
    "vw_vwint01_betting_sreen_09",
    "vw_vwint01_betting_sreen_10",
    "vw_vwint01_betting_sreen_11",
    "vw_vwint01_betting_sreen_12",
    "vw_vwint01_betting_sreen_13",
    "vw_vwint01_betting_sreen_14",
    "vw_vwint01_betting_sreen_15",
    "vw_vwint01_betting_sreen_16"
];
let betConsolesScreen = [
    "casinoscreen_03",
    "casinoscreen_04",
    "casinoscreen_05",
    "casinoscreen_06",
    "casinoscreen_07",
    "casinoscreen_08",
    "casinoscreen_09",
    "casinoscreen_10",
    "casinoscreen_11",
    "casinoscreen_12",
    "casinoscreen_13",
    "casinoscreen_14",
    "casinoscreen_15",
    "casinoscreen_16",
    "casinoscreen_17",
    "casinoscreen_18"
];
let screenTargets = [];
let scaleform = -1;
let drawTick = -1;
class BetConsoles {
    static async awaitRegisterTarget(name, objectModel) {
        await registerTarget(name, objectModel);
        return native.getNamedRendertargetRenderId(name);
    }
    static async loadBetConsoles() {
        for(let i = 0; i < betConsoles.length; i++){
            await loadModelAsync(betConsoles[i]);
            screenTargets.push(await BetConsoles.awaitRegisterTarget(betConsolesScreen[i], betConsoles[i]));
        }
        scaleform = await loadScaleformMovieAsync("HORSE_RACING_CONSOLE");
        native.beginScaleformMovieMethod(scaleform, "SHOW_SCREEN");
        native.scaleformMovieMethodAddParamInt(0);
        native.endScaleformMovieMethod();
        native.setScaleformFitRendertarget(scaleform, true);
        drawTick = alt.everyTick(BetConsoles.startBetConsoles);
    }
    static async startBetConsoles() {
        for(let i = 0; i < screenTargets.length; i++){
            native.setTextRenderId(screenTargets[i]);
            native.setScriptGfxDrawOrder(4);
            native.setScriptGfxDrawBehindPausemenu(true);
            native.drawScaleformMovieFullscreen(scaleform, 255, 255, 255, 255, 0);
            native.setTextRenderId(native.getDefaultScriptRendertargetRenderId());
        }
    }
    static unloadBetConsoles() {
        alt.clearEveryTick(drawTick);
        drawTick = -1;
        for(let i = 0; i < betConsoles.length; i++){
            native.setModelAsNoLongerNeeded(alt.hash(betConsoles[i]));
        }
        for(let i1 = 0; i1 < betConsolesScreen.length; i1++){
            native.releaseNamedRendertarget(betConsolesScreen[i1]);
        }
        native.setScaleformMovieAsNoLongerNeeded(scaleform);
        screenTargets = [];
        scaleform = -1;
    }
}
export { BetConsoles as default };
