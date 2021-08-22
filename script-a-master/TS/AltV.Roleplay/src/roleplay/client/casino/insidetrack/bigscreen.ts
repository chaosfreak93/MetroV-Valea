import * as alt from  'alt-client';
import * as native from 'natives';
import { loadModelAsync, loadScaleformMovieAsync, registerTarget } from '../../utilities';

let scaleform: number = null;
let screenTarget: number = null;
let drawTick: number = null;

export default class BigScreen {
    static async awaitRegisterTarget(name: string, objectModel: string): Promise<number> {
        await registerTarget(name, objectModel);
    
        return native.getNamedRendertargetRenderId(name);
    }

    static async loadBigScreen(): Promise<void> {
        await loadModelAsync("vw_vwint01_betting_screen");
        screenTarget = await BigScreen.awaitRegisterTarget("casinoscreen_02", "vw_vwint01_betting_screen");

        scaleform = await loadScaleformMovieAsync("HORSE_RACING_WALL");

        native.beginScaleformMovieMethod(scaleform, "SHOW_SCREEN");
        native.scaleformMovieMethodAddParamInt(3);
        native.endScaleformMovieMethod();
        native.setScaleformFitRendertarget(scaleform, true);

        drawTick = alt.everyTick(BigScreen.draw);
    }

    static draw(): void {
        native.setTextRenderId(screenTarget);
        native.setScriptGfxDrawOrder(4);
        native.setScriptGfxDrawBehindPausemenu(true);
        native.drawScaleformMovieFullscreen(scaleform, 255, 255, 255, 255, 0);
        native.setTextRenderId(native.getDefaultScriptRendertargetRenderId());
    }

    static unloadBigScreen(): void {
        alt.clearEveryTick(drawTick);
        drawTick = null;
        native.releaseNamedRendertarget("casinoscreen_02");
        screenTarget = null;
        native.setModelAsNoLongerNeeded(alt.hash("vw_vwint01_betting_screen"));
        native.setScaleformMovieAsNoLongerNeeded(scaleform);
        scaleform = null;
    }
}