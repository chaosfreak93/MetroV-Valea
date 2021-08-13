import * as alt from 'alt-client';
import CasinoLobby from './lobby';

export default class CasinoMain {
    static async startCasino(): Promise<void> {
        await CasinoLobby.loadCasionLobby();
    }

    static stopCasino(): void {
        CasinoLobby.unloadCasinoLobby();
    }
}

alt.onServer("Client:Casino:Enter", CasinoMain.startCasino);
alt.onServer("Client:Casino:Leave", CasinoMain.stopCasino);