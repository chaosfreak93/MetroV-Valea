import * as alt from 'alt-client';
import * as native from 'natives';
import { getScaleformReturnValueIntAsync, getScaleformReturnValueBoolAsync, loadScaleformMovieAsync, registerTarget } from '../../utilities';

let scaleform: number  = null;
let ChooseHorseVisible: boolean = false;
let BetVisible: boolean = false;
let PlayerBalance: number = -1;
let CurrentHorse: number = -1;
let CurrentBet: number = 1000;
let CurrentGain: number = 2000;
let HorsesPositions: number[] = [];
let CurrentSoundId: number= -1;
let CurrentWinner: number = -1;
let checkRaceStatus: boolean = false;
let drawTick: number = null;
let handleTick: number = null;
let winTick: number = null;
let fakeTick: number = null;
let cooldown: number = 60;
let HorseStyles = [
    [15553363,5474797,9858144,4671302],
    [16724530,3684408,14807026,16777215],
    [13560920,15582764,16770746,7500402],
    [16558591,5090807,10446437,7493977],
    [5090807,16558591,3815994,9393493],
    [16269415,16767010,10329501,16777215],
    [2263807,16777215,9086907,3815994],
    [4879871,16715535,3815994,16777215],
    [16777215,2263807,16769737,15197642],
    [16338779,16777215,11166563,6974058],
    [16777215,16559849,5716493,3815994],
    [16760644,3387257,16701597,16777215],
    [6538729,2249420,16777215,3815994],
    [15913534,15913534,16304787,15985375],
    [15655629,16240452,16760474,13664854],
    [16320263,16777215,14920312,16773316],
    [7176404,15138618,6308658,13664854],
    [4879871,8453903,11382189,15724527],
    [16777215,16777215,16754809,16777215],
    [16732497,16732497,3815994,16777215],
    [5739220,5739220,11382189,15724527],
    [16712909,6935639,8742735,3877137],
    [2136867,16777215,16761488,3877137],
    [3118422,10019244,14932209,6121086],
    [2136867,10241979,8081664,3815994],
    [16769271,13724403,9852728,14138263],
    [13724403,16769271,6444881,14138263],
    [10017279,4291288,16304787,15985375],
    [1071491,4315247,14935011,6121086],
    [3861944,16627705,14932209,6121086],
    [15583546,4671303,11836798,3090459],
    [15567418,4671303,9985296,3815994],
    [5701417,16711680,16771760,6970713],
    [16760303,5986951,12353664,15395562],
    [8907670,2709022,9475214,4278081],
    [5429688,6400829,16777215,16773316],
    [15138618,5272210,14920312,16773316],
    [10241979,12396337,14920312,15395562],
    [16777215,13481261,13667152,3815994],
    [5077874,16777215,15444592,7820105],
    [10408040,2960685,7424036,10129549],
    [7754308,16777215,12944259,3815994],
    [16736955,16106560,16771760,6970713],
    [16106560,16770224,16767659,15843765],
    [9573241,14703194,9789279,3815994],
    [44799,14703194,10968156,16777215],
    [7143224,16753956,10975076,4210752],
    [7895160,4013373,5855577,11645361],
    [16075595,6869196,13530742,7105644],
    [16090955,6272992,16777215,16777215],
    [13313356,13313356,5849409,11623516],
    [13911070,5583427,14935011,6121086],
    [8604661,10408040,12944259,3815994],
    [9716612,2960685,16767659,6708313],
    [7806040,16777215,16765601,14144436],
    [15632075,11221989,16777215,16770037],
    [1936722,14654697,16763851,3815994],
    [10377543,3815994,14807026,16777215],
    [16775067,11067903,16770746,7500402],
    [16741712,8669718,16777215,16777215],
    [16515280,6318459,3815994,9393493],
    [65526,16515280,10329501,16777215],
    [16711680,4783925,3815994,3815994],
    [65532,4783925,16766671,15197642],
    [16760303,16760303,3815994,14207663],
    [16770048,16770048,3815994,3815994],
    [16737792,16737792,11166563,6974058],
    [12773119,12773119,5716493,3815994],
    [16777215,16763043,16701597,16777215],
    [6587161,6587161,16777215,3815994],
    [6329328,16749602,3815994,3815994],
    [15793920,16519679,14920312,15395562],
    [15466636,10724259,16760474,13664854],
    [11563263,327629,6308658,13664854],
    [58867,16777215,16754809,8082236],
    [4909311,16777215,5849409,11623516],
    [3700643,7602233,9852728,14138263],
    [16777215,1017599,8742735,3877137],
    [16772022,16772022,16761488,3877137],
    [7849983,5067443,8081664,3815994],
    [15913534,7602233,6444881,14138263],
    [12320733,16775618,11836798,3090459],
    [15240846,16777215,9985296,3815994],
    [14967137,3702939,3815994,14207663],
    [6343571,3702939,12353664,15395562],
    [16761374,15018024,9475214,4278081],
    [16743936,3756172,16777215,16773316],
    [2899345,5393472,16777215,4210752],
    [11645361,16777215,16771542,10123632],
    [3421236,5958825,16771542,3815994],
    [15851871,5395026,15444592,7820105],
    [16777215,9463517,7424036,10129549],
    [16760556,16733184,16767659,15843765],
    [4781311,15771930,16765601,14144436],
    [16760556,10287103,16767659,6708313],
    [13083490,16777215,9789279,3815994],
    [13810226,9115524,5855577,11645361],
    [14176336,9115524,13530742,7105644],
    [16770310,16751169,16772294,16777215]
];

export default class SingleRace {
    static async loadSingleTrack(): Promise<void> {
        if (scaleform == null) {
            scaleform = await loadScaleformMovieAsync("HORSE_RACING_CONSOLE");
            native.requestScriptAudioBank("DLC_VINEWOOD/CASINO_GENERAL", false, 0);

            alt.emit("Client:HUD:setCefStatus", true);
            alt.emit("Client:HUD:destroyCEF");
            native.setPlayerControl(alt.Player.local.scriptID, false, 0);

            alt.setTimeout(() => {
                SingleRace.showMainScreen();
                SingleRace.setMainScreenCooldown(cooldown);
            
                SingleRace.addHorses();
            
                drawTick = alt.everyTick(SingleRace.drawSingleTrack);
                handleTick = alt.everyTick(SingleRace.handleControls);
                winTick = alt.everyTick(SingleRace.checkRaceWinStatus);
            }, 500);
        }
    }

    static showMainScreen(): void {
        native.beginScaleformMovieMethod(scaleform, "SHOW_SCREEN");
        native.scaleformMovieMethodAddParamInt(0);
        native.endScaleformMovieMethod();

        native.beginScaleformMovieMethod(scaleform, "SET_MAIN_EVENT_IN_PROGRESS");
        native.scaleformMovieMethodAddParamBool(true);
        native.endScaleformMovieMethod();

        native.beginScaleformMovieMethod(scaleform, "CLEAR_ALL");
        native.endScaleformMovieMethod();
    }

    static setMainScreenCooldown(cooldown: number): void {
        native.beginScaleformMovieMethod(scaleform, "SET_COUNTDOWN");
        native.scaleformMovieMethodAddParamInt(cooldown);
        native.endScaleformMovieMethod();
    }

    static getRandomHorseName(): string {
        let random = Math.floor(Math.random() * 100);
        let randomName = random < 10 ? "ITH_NAME_00" + random : "ITH_NAME_0" + random;

        return randomName;
    }

    static addHorses(): void {
        for (let i = 1; i < 7; i++) {
            let name = SingleRace.getRandomHorseName();

            native.beginScaleformMovieMethod(scaleform, "SET_HORSE");
            native.scaleformMovieMethodAddParamInt(i);

            native.beginTextCommandScaleformString(name);
            native.endTextCommandScaleformString();

            native.scaleformMovieMethodAddParamPlayerNameString("1/6");
            native.scaleformMovieMethodAddParamInt(HorseStyles[Math.floor(Math.random() * HorseStyles.length)][0]);
            native.scaleformMovieMethodAddParamInt(HorseStyles[Math.floor(Math.random() * HorseStyles.length)][1]);
            native.scaleformMovieMethodAddParamInt(HorseStyles[Math.floor(Math.random() * HorseStyles.length)][2]);
            native.scaleformMovieMethodAddParamInt(HorseStyles[Math.floor(Math.random() * HorseStyles.length)][3]);
            native.endScaleformMovieMethod();
        }
    }

    static drawSingleTrack(): void {
        if (scaleform == null) return;
        let xMouse = native.getDisabledControlNormal(2, 239);
        let yMouse = native.getDisabledControlNormal(2, 240);

        fakeTick = fakeTick + 10;

        if (fakeTick == 750) {
            if (cooldown == 1) {
                cooldown = 60;
            }

            cooldown = cooldown - 1;
            fakeTick = 0;

            SingleRace.setMainScreenCooldown(cooldown);
        }

        native.beginScaleformMovieMethod(scaleform, "SET_MOUSE_INPUT");
        native.scaleformMovieMethodAddParamFloat(xMouse);
        native.scaleformMovieMethodAddParamFloat(yMouse);
        native.endScaleformMovieMethod();

        native.drawScaleformMovieFullscreen(scaleform, 255, 255, 255, 255, 0);
    }

    static async handleControls(): Promise<void> {
        if (native.isControlJustPressed(2, 202)) {
            SingleRace.unloadSingleTrack();
        }

        if (native.isControlJustPressed(2, 237)) {
            let clickedButton = await SingleRace.getMouseClickedButton();

            if (ChooseHorseVisible) {
                if (clickedButton != 12 && clickedButton != -1) {
                    CurrentHorse = (clickedButton - 1);
                    alt.emitServer("Server:Casino:SingleRace:UpdateBetValues", CurrentHorse, CurrentBet, CurrentGain, true);
                    ChooseHorseVisible = false;
                }
            }

            if (clickedButton == 15) {
                SingleRace.showRules();
            }

            if (clickedButton == 12) {
                if (ChooseHorseVisible) {
                    ChooseHorseVisible = false;
                }

                if (BetVisible) {
                    SingleRace.showHorseSelection();
                    BetVisible = false;
                    CurrentHorse = -1;
                } else {
                    SingleRace.showMainScreen();
                }
            }

            if (clickedButton == 1) {
                SingleRace.showHorseSelection();
            }

            if (clickedButton == 10) {
                alt.emitServer("Server:Casino:SingleRace:StartRace", CurrentBet);
                checkRaceStatus = true;
            }

            if (clickedButton == 8) {
                if (CurrentBet < PlayerBalance && CurrentBet < 10000) {
                    CurrentBet = (CurrentBet + 100);
                    CurrentGain = (CurrentBet * 2);
                    alt.emitServer("Server:Casino:SingleRace:UpdateBetValues", CurrentHorse, CurrentBet, CurrentGain, false);
                }
            }

            if (clickedButton == 9) {
                if (CurrentBet > 1000) {
                    CurrentBet = (CurrentBet - 100);
                    CurrentGain = (CurrentBet * 2);
                    alt.emitServer("Server:Casino:SingleRace:UpdateBetValues", CurrentHorse, CurrentBet, CurrentGain, false);
                }
            }

            if (clickedButton == 13) {
                SingleRace.addHorses();
                SingleRace.showMainScreen();
            }
        }
    }

    static async getMouseClickedButton(): Promise<number> {
        let returnValue = -1;

        native.callScaleformMovieMethodWithNumber(scaleform, "SET_INPUT_EVENT", 237.0, -1082130432, -1082130432, -1082130432, -1082130432);
        native.beginScaleformMovieMethod(scaleform, "GET_CURRENT_SELECTION");

        returnValue = native.endScaleformMovieMethodReturnValue();

        return await getScaleformReturnValueIntAsync(returnValue);
    }

    static updateBetValues(horse: number, bet: number, balance: number, gain: number): void {
        PlayerBalance = balance;
        native.beginScaleformMovieMethod(scaleform, "SET_BETTING_VALUES");
        native.scaleformMovieMethodAddParamInt(horse);

        native.scaleformMovieMethodAddParamInt(bet);
        native.scaleformMovieMethodAddParamInt(balance);
        native.scaleformMovieMethodAddParamInt(gain);
        native.endScaleformMovieMethod();
    }

    static showBetScreen(): void {
        native.beginScaleformMovieMethod(scaleform, "SHOW_SCREEN");
        native.scaleformMovieMethodAddParamInt(3);
        native.endScaleformMovieMethod();

        native.beginScaleformMovieMethod(scaleform, "SET_BETTING_ENABLED");
        native.scaleformMovieMethodAddParamBool(true);
        native.endScaleformMovieMethod();

        BetVisible = true;
    }

    static showRules(): void {
        native.beginScaleformMovieMethod(scaleform, "SHOW_SCREEN");
        native.scaleformMovieMethodAddParamInt(9);
        native.endScaleformMovieMethod();
    }

    static showHorseSelection(): void {
        ChooseHorseVisible = true;

        native.beginScaleformMovieMethod(scaleform, "SHOW_SCREEN");
        native.scaleformMovieMethodAddParamInt(1);
        native.endScaleformMovieMethod();
    }

    static GenerateHorsesOrder() {
        for (let i = 1; i < 6; i++) {
            let randomPos = Math.floor(Math.random() * 6) + 1;
            if (!HorsesPositions.includes(randomPos)) {
                HorsesPositions.push(randomPos);
            }
        }
        if (HorsesPositions.length != 6) {
            SingleRace.GenerateHorsesOrder();
        }
    }

    static startRace(): void {
        CurrentSoundId = native.getSoundId();
        native.playSoundFrontend(CurrentSoundId, 'race_loop', 'dlc_vw_casino_inside_track_betting_single_event_sounds', false);
        SingleRace.GenerateHorsesOrder();

        CurrentWinner = HorsesPositions[0];

        native.beginScaleformMovieMethod(scaleform, "START_RACE");
        native.scaleformMovieMethodAddParamFloat(15000.0);
        native.scaleformMovieMethodAddParamInt(Math.floor(Math.random() * 100) + 1);

        native.scaleformMovieMethodAddParamInt(HorsesPositions[0]);
        native.scaleformMovieMethodAddParamInt(HorsesPositions[1]);
        native.scaleformMovieMethodAddParamInt(HorsesPositions[2]);
        native.scaleformMovieMethodAddParamInt(HorsesPositions[3]);
        native.scaleformMovieMethodAddParamInt(HorsesPositions[4]);
        native.scaleformMovieMethodAddParamInt(HorsesPositions[5]);

        native.scaleformMovieMethodAddParamFloat(0.0);
        native.endScaleformMovieMethod();
    }

    static async IsRaceFinished(): Promise<boolean> {
        native.beginScaleformMovieMethod(scaleform, "GET_RACE_IS_COMPLETE");

        let returnValue = native.endScaleformMovieMethodReturnValue();

        return await getScaleformReturnValueBoolAsync(returnValue);
    }

    static async checkRaceWinStatus(): Promise<void> {
        if (checkRaceStatus) {
            let raceFinished = await SingleRace.IsRaceFinished();

            if (raceFinished && checkRaceStatus) {
                native.stopSound(CurrentSoundId);
                native.releaseSoundId(CurrentSoundId);

                CurrentSoundId = -1;

                if (CurrentHorse == CurrentWinner) {
                    alt.emitServer("Server:Casino:SingleRace:WinRace", CurrentGain);
                    alt.emitServer("Server:Casino:SingleRace:UpdateBetValues", CurrentHorse, CurrentBet, CurrentGain, false);
                }

                SingleRace.showResults();

                CurrentHorse = -1;
                CurrentWinner = -1;
                HorsesPositions = [];

                checkRaceStatus = false;
            }
        }
    }

    static showResults(): void {
        native.beginScaleformMovieMethod(scaleform, "SHOW_SCREEN");
        native.scaleformMovieMethodAddParamInt(7);
        native.endScaleformMovieMethod();
    }

    static unloadSingleTrack(): void {
        alt.clearEveryTick(drawTick);
        drawTick = null;
        alt.clearEveryTick(handleTick);
        handleTick = null;
        alt.clearEveryTick(winTick);
        winTick = null;
        native.setScaleformMovieAsNoLongerNeeded(scaleform);
        scaleform = null;
        native.releaseNamedScriptAudioBank("DLC_VINEWOOD/CASINO_GENERAL");
        cooldown = 60;
        native.stopSound(CurrentSoundId);
        native.releaseSoundId(CurrentSoundId);
        CurrentSoundId = -1;
        CurrentHorse = -1;
        CurrentWinner = -1;
        HorsesPositions = [];
        checkRaceStatus = false;

        native.setPlayerControl(alt.Player.local.scriptID, true, 0);
        alt.emitServer("Server:HUD:CreateCEF");
        alt.emit("Client:HUD:setCefStatus", false);
    }
}