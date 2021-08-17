import * as alt from 'alt-client';
import * as native from 'natives';
import { loadModelAsync, loadStreamedTextureDictAsync, registerTarget } from '../utilities';
let screenTarget = null;
let everyTick = null;
let lastUpdatedTvChannel = 0;
let showBigWin = false;
class CasinoLobby {
    static async awaitRegisterTarget(name, objectModel) {
        await registerTarget(name, objectModel);
        return native.getNamedRendertargetRenderId(name);
    }
    static async loadCasinoLobby() {
        await loadModelAsync('vw_vwint01_video_overlay');
        await loadStreamedTextureDictAsync('Prop_Screen_Vinewood');
        screenTarget = await CasinoLobby.awaitRegisterTarget('casinoscreen_01', 'vw_vwint01_video_overlay');
        everyTick = alt.everyTick(CasinoLobby.startCasinoLobby);
    }
    static startCasinoLobby() {
        let currentTime = native.getGameTimer();
        if (showBigWin) {
            native.setTvChannelPlaylist(0, 'CASINO_WIN_PL', true);
            native.setTvAudioFrontend(true);
            native.setTvVolume(-100);
            native.setTvChannel(-1);
            native.setTvChannel(0);
            lastUpdatedTvChannel = native.getGameTimer() - 33666;
            showBigWin = false;
        } else {
            if (currentTime - lastUpdatedTvChannel >= 42666) {
                native.setTvChannelPlaylist(0, 'CASINO_DIA_PL', true);
                native.setTvAudioFrontend(true);
                native.setTvVolume(-100);
                native.setTvChannel(0);
                lastUpdatedTvChannel = currentTime;
            }
        }
        native.setTextRenderId(screenTarget);
        native.setScriptGfxDrawOrder(4);
        native.setScriptGfxDrawBehindPausemenu(true);
        native.drawInteractiveSprite('Prop_Screen_Vinewood', 'BG_Wall_Colour_4x4', 0.25, 0.5, 0.5, 1, 0, 255, 255, 255, 255);
        native.drawTvChannel(0.5, 0.5, 1, 1, 0, 255, 255, 255, 255);
        native.setTextRenderId(native.getDefaultScriptRendertargetRenderId());
    }
    static unloadCasinoLobby() {
        alt.clearEveryTick(everyTick);
        screenTarget = null;
        native.releaseNamedRendertarget('casinoscreen_01');
        native.setModelAsNoLongerNeeded(alt.hash('vw_vwint01_video_overlay'));
        native.setStreamedTextureDictAsNoLongerNeeded('Prop_Screen_Vinewood');
    }
}
export { CasinoLobby as default };
