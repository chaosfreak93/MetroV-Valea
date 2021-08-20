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
        await SingleRace.loadSingleTrack();
    }

    static stopCasino(): void {
        CasinoLobby.unloadCasinoLobby();
        Podium.unloadPodium();
        Wheel.unloadWheel();
    }
}

alt.onServer("Client:Casino:Enter", CasinoMain.startCasino);
alt.onServer("Client:Casino:Leave", CasinoMain.stopCasino);
alt.onServer("Client:Casino:LuckyWheel:PrepareRoll", Wheel.prepareRoll);
alt.onServer("Client:Casino:LuckyWheel:StartRoll", Wheel.startRoll);
alt.onServer("Client:Casino:LuckyWheel:FinishRoll", Wheel.finishRoll);
alt.onServer("Client:Casino:LuckyWheel:ShowBigWin", CasinoLobby.showBigWin);
alt.onServer("Client:Casino:SingleRace:UpdateBetValues", SingleRace.updateBetValues);
alt.onServer("Client:Casino:SingleRace:ShowBetScreen", SingleRace.showBetScreen);
alt.onServer("Client:Casino:SingleRace:StartRace", SingleRace.startRace);