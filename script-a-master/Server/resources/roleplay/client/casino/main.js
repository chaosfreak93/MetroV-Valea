import * as alt from 'alt-client';
import BetConsoles from './insidetrack/betconsoles';
import CasinoLobby from './lobby';
import Podium from './podium';
import Wheel from './wheel';
class CasinoMain {
    static async startCasino() {
        await CasinoLobby.loadCasinoLobby();
        await Podium.loadPodium();
        await Wheel.loadWheel();
        //await SingleRace.loadSingleTrack();
        await BetConsoles.loadBetConsoles();
    }
    static stopCasino() {
        CasinoLobby.unloadCasinoLobby();
        Podium.unloadPodium();
        Wheel.unloadWheel();
        BetConsoles.unloadBetConsoles();
    }
}
export { CasinoMain as default };
alt.onServer("Client:Casino:Enter", CasinoMain.startCasino);
alt.onServer("Client:Casino:Leave", CasinoMain.stopCasino);
alt.onServer("Client:Casino:PrepareRoll", Wheel.prepareRoll);
alt.onServer("Client:Casino:StartRoll", Wheel.startRoll);
alt.onServer("Client:Casino:FinishRoll", Wheel.finishRoll);
alt.onServer("Client:Casino:ShowBigWin", CasinoLobby.showBigWin);
