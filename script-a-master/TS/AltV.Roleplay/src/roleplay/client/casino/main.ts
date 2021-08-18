import * as alt from 'alt-client';
import CasinoLobby from './lobby';
import Podium from './podium';

export default class CasinoMain {
    static async startCasino(): Promise<void> {
        await CasinoLobby.loadCasinoLobby();
        await Podium.loadPodium();
    }

    static stopCasino(): void {
        CasinoLobby.unloadCasinoLobby();
        Podium.unloadPodium();
    }
}

alt.onServer("Client:Casino:Enter", CasinoMain.startCasino);
alt.onServer("Client:Casino:Leave", CasinoMain.stopCasino);
alt.onServer("Client:Casino:ShowBigWin", CasinoLobby.showBigWin);