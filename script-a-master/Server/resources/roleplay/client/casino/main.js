import * as alt from 'alt-client';
import CasinoLobby from './lobby';
class CasinoMain {
    static async startCasino() {
        await CasinoLobby.loadCasinoLobby();
    }
    static stopCasino() {
        CasinoLobby.unloadCasinoLobby();
    }
}
export { CasinoMain as default };
alt.onServer("Client:Casino:Enter", CasinoMain.startCasino);
alt.onServer("Client:Casino:Leave", CasinoMain.stopCasino);
