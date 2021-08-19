import * as alt from 'alt-client';
import SingleRace from './insidetrack/singlerace';
import CasinoLobby from './lobby';
import Podium from './podium';
import Wheel from './wheel';

export default class CasinoMain {
    static async startCasino(): Promise<void> {
        await CasinoLobby.loadCasinoLobby();
        await Podium.loadPodium();
        await Wheel.loadWheel();
        //await SingleRace.loadSingleTrack();
    }

    static stopCasino(): void {
        CasinoLobby.unloadCasinoLobby();
        Podium.unloadPodium();
        Wheel.unloadWheel();
    }
}

alt.onServer("Client:Casino:Enter", CasinoMain.startCasino);
alt.onServer("Client:Casino:Leave", CasinoMain.stopCasino);
alt.onServer("Client:Casino:PrepareRoll", Wheel.prepareRoll);
alt.onServer("Client:Casino:StartRoll", Wheel.startRoll);
alt.onServer("Client:Casino:FinishRoll", Wheel.finishRoll);
alt.onServer("Client:Casino:ShowBigWin", CasinoLobby.showBigWin);