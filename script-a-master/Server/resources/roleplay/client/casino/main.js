import * as alt from 'alt-client';
import CasinoLobby from './lobby';
import Podium from './podium';
class CasinoMain {
    static async startCasino() {
        await CasinoLobby.loadCasinoLobby();
        await Podium.loadPodium();
    }
    static stopCasino() {
        CasinoLobby.unloadCasinoLobby();
        Podium.unloadPodium();
    }
}
export { CasinoMain as default };
alt.onServer("Client:Casino:Enter", CasinoMain.startCasino);
alt.onServer("Client:Casino:Leave", CasinoMain.stopCasino);
alt.onServer("Client:Casino:ShowBigWin", CasinoLobby.showBigWin);
