import * as alt from 'alt-client';
import * as native from  'natives';
import { loadStreamedTextureDictAsync } from '../utilities';

let screenTarget: number = null;
let everyTick: number = null;

export default class CasinoLobby {
    static registerTarget(name: string, objectModel: string): number {
        if (!native.isNamedRendertargetRegistered(name)) {
            native.registerNamedRendertarget(name, false);
            native.linkNamedRendertarget(alt.hash(objectModel));
        }
    
        return native.getNamedRendertargetRenderId(name);
    }

    static async loadCasinoLobby() {
        await loadStreamedTextureDictAsync('Prop_Screen_Vinewood');
        screenTarget = CasinoLobby.registerTarget('casinoscreen_01', 'vw_vwint01_video_overlay');

        everyTick = alt.everyTick(CasinoLobby.startCasinoLobby);
    }

    static startCasinoLobby() {
        native.setTvChannelPlaylist(0, 'CASINO_DIA_PL', true);
        native.setTvAudioFrontend(true);
        native.setTvVolume(-100);
        native.setTvChannel(0);

        native.setTextRenderId(screenTarget);
        native.setScriptGfxDrawOrder(4);
        native.setScriptGfxDrawBehindPausemenu(true);
        native.drawInteractiveSprite('Prop_Screen_Vinewood', 'BG_Wall_Colour_4x4', 0.25, 0.5, 0.5, 1.0, 0.0, 255, 255, 255, 255);
        native.drawTvChannel(0.5, 0.5, 1.0, 1.0, 0.0, 255, 255, 255, 255);
        native.setTextRenderId(native.getDefaultScriptRendertargetRenderId());
    }

    static unloadCasinoLobby() {
        alt.clearEveryTick(everyTick);
        screenTarget = null;
        native.releaseNamedRendertarget('casinoscreen_01');
        native.setStreamedTextureDictAsNoLongerNeeded('Prop_Screen_Vinewood');
    }
}