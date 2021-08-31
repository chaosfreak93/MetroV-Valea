import * as alt from 'alt-client';
import * as native from 'natives';
import IPLManager from './iplmanager';
import { setAudioData, setMinimapData } from "./miscs";
import { isCollisionLoaded, loadModelAsync } from './utilities';

let loginBrowser: alt.WebView = null;
let loginCam: number = null;
let loginPedHandle: number = null;
let loginModelHash: number = null;
let lastInteract: number = 0;

export default class LoginHandler {


    static async CreateCEF(): Promise<void> {
        if (loginBrowser == null) {
            loginCam = native.createCameraWithParams(alt.hash('DEFAULT_SCRIPTED_CAMERA'), 3280.0, 5220.0, 26.0, 0, 0, 240, 50, true, 2);
            native.setCamActive(loginCam, true);
            native.renderScriptCams(true, false, 0, true, false, 0);
            native.freezeEntityPosition(alt.Player.local.scriptID, true);
            alt.showCursor(true);
            alt.toggleGameControls(false);
            loginBrowser = new alt.WebView("http://resource/client/cef/login/index.html");
            loginBrowser.focus();
            loginBrowser.on("Client:Login:cefIsReady", () => {
                alt.setTimeout(() => {
                    if (alt.LocalStorage.get("username")) {
                        loginBrowser.emit("CEF:Login:setStorage", alt.LocalStorage.get("username"));
                    }
                    loginBrowser.emit("CEF:Login:showArea", "login");
                }, 2000);
            });
    
            loginBrowser.on("Client:Login:sendLoginDataToServer", (name: string, password: string) => {
                if(lastInteract + 500 > Date.now()) return;
                lastInteract = Date.now();
    
                if (alt.LocalStorage.get("discordId")) {
                    alt.emitServer("Server:Login:ValidateLoginCredentials", name, password, alt.LocalStorage.get("discordId"));
                } else {
                    if (alt.Discord.currentUser == null) {
                        loginBrowser.emit("CEF:Login:showError", "Bitte öffne Discord und starte alt:V neu.");
                        return;
                    }
                    alt.emitServer("Server:Login:ValidateLoginCredentials", name, password, alt.Discord.currentUser.id);
                }
            });
    
            loginBrowser.on("Client:Login:resetPW", (password: string) => {
                if(lastInteract + 500 > Date.now()) return;
                lastInteract = Date.now();
    
                alt.emitServer("Server:Login:resetPW", password);
            });
    
            loginBrowser.on("Client:Register:sendRegisterDataToServer", (name: string, email: string, password: string, passwordrepeat: string) => {
                if(lastInteract + 500 > Date.now()) return;
                lastInteract = Date.now();
    
                alt.emitServer("Server:Register:RegisterNewPlayer", name, email, password, passwordrepeat);
            });
    
            loginBrowser.on("Client:Charcreator:OpenCreator", () => {
                if(lastInteract + 500 > Date.now()) return;
                lastInteract = Date.now();
    
                alt.emitServer("Server:Charcreator:CreateCEF");
                LoginHandler.DestroyCEF();
            });
    
            loginBrowser.on("Client:Login:DestroyCEF", () => {
                LoginHandler.DestroyCEF();
            });
    
            loginBrowser.on("Client:Charselector:KillCharacter", (charid: number) => {
                if(lastInteract + 500 > Date.now()) return;
                lastInteract = Date.now();
    
                alt.emitServer("Server:Charselector:KillCharacter", charid);
            });
    
            loginBrowser.on("Client:Charselector:PreviewCharacter", (charid: number) => {
                if(lastInteract + 500 > Date.now()) return;
                lastInteract = Date.now();
    
                alt.emitServer("Server:Charselector:PreviewCharacter", charid);
            });
    
            loginBrowser.on("Client:Charselector:spawnChar", (charid: number) => {
                if(lastInteract + 500 > Date.now()) return;
                lastInteract = Date.now();
    
                alt.emitServer("Server:Charselector:spawnChar", charid);
            });
    
            loginBrowser.on("Client:Charcreator:SwitchOut", () => {
                if (loginCam != null) {
                    native.renderScriptCams(false, false, 0, true, false, 0);
                    native.setCamActive(loginCam, false);
                    native.destroyCam(loginCam, true);
                    loginCam = null;
                }
                native.switchOutPlayer(alt.Player.local.scriptID, 0, 1);
                native.freezeEntityPosition(alt.Player.local.scriptID, true);
            });
        }
    }

    static DestroyCEF(): void {
        if (loginBrowser != null) {
            loginBrowser.destroy();
        }
        loginBrowser = null;
        native.renderScriptCams(false, false, 0, true, false, 0);
        if (loginCam != null) {
            native.setCamActive(loginCam, false);
            native.destroyCam(loginCam, true);
            loginCam = null;
        }
        if (loginPedHandle != null) {
            native.deletePed(loginPedHandle);
            loginPedHandle = null;
        }
        alt.showCursor(false);
        alt.toggleGameControls(true);
        native.freezeEntityPosition(alt.Player.local.scriptID, false);
        native.setEntityAlpha(alt.Player.local.scriptID, 255, false);
    }

    static setCharSkin(facefeaturearray: string, headblendsarray: string, headoverlayarray: string): void {
        const facefeaturesjson = JSON.parse(facefeaturearray);
        const headblendsjson = JSON.parse(headblendsarray);
        const headoverlaysjson = JSON.parse(headoverlayarray);

        native.setPedHeadBlendData(alt.Player.local.scriptID, parseInt(headblendsjson[0]), parseInt(headblendsjson[1]), 0, parseInt(headblendsjson[2]), parseInt(headblendsjson[5]), 0, parseFloat(headblendsjson[3]), parseInt(headblendsjson[4]), 0, false);
        native.setPedHeadOverlayColor(alt.Player.local.scriptID, 1, 1, parseInt(headoverlaysjson[2][1]), 1);
        native.setPedHeadOverlayColor(alt.Player.local.scriptID, 2, 1, parseInt(headoverlaysjson[2][2]), 1);
        native.setPedHeadOverlayColor(alt.Player.local.scriptID, 5, 2, parseInt(headoverlaysjson[2][5]), 1);
        native.setPedHeadOverlayColor(alt.Player.local.scriptID, 8, 2, parseInt(headoverlaysjson[2][8]), 1);
        native.setPedHeadOverlayColor(alt.Player.local.scriptID, 10, 1, parseInt(headoverlaysjson[2][10]), 1);
        native.setPedEyeColor(alt.Player.local.scriptID, parseInt(headoverlaysjson[0][14]));
        native.setPedHeadOverlay(alt.Player.local.scriptID, 0, parseInt(headoverlaysjson[0][0]), parseInt(headoverlaysjson[1][0]));
        native.setPedHeadOverlay(alt.Player.local.scriptID, 1, parseInt(headoverlaysjson[0][1]), parseFloat(headoverlaysjson[1][1]));
        native.setPedHeadOverlay(alt.Player.local.scriptID, 2, parseInt(headoverlaysjson[0][2]), parseFloat(headoverlaysjson[1][2]));
        native.setPedHeadOverlay(alt.Player.local.scriptID, 3, parseInt(headoverlaysjson[0][3]), parseInt(headoverlaysjson[1][3]));
        native.setPedHeadOverlay(alt.Player.local.scriptID, 4, parseInt(headoverlaysjson[0][4]), parseInt(headoverlaysjson[1][4]));
        native.setPedHeadOverlay(alt.Player.local.scriptID, 5, parseInt(headoverlaysjson[0][5]), parseInt(headoverlaysjson[1][5]));
        native.setPedHeadOverlay(alt.Player.local.scriptID, 6, parseInt(headoverlaysjson[0][6]), parseInt(headoverlaysjson[1][6]));
        native.setPedHeadOverlay(alt.Player.local.scriptID, 7, parseInt(headoverlaysjson[0][7]), parseInt(headoverlaysjson[1][7]));
        native.setPedHeadOverlay(alt.Player.local.scriptID, 8, parseInt(headoverlaysjson[0][8]), parseInt(headoverlaysjson[1][8]));
        native.setPedHeadOverlay(alt.Player.local.scriptID, 9, parseInt(headoverlaysjson[0][9]), parseInt(headoverlaysjson[1][9]));
        native.setPedHeadOverlay(alt.Player.local.scriptID, 10, parseInt(headoverlaysjson[0][10]), parseInt(headoverlaysjson[1][10]));
        native.setPedComponentVariation(alt.Player.local.scriptID, 2, parseInt(headoverlaysjson[0][13]), 0, 0);
        native.setPedHairColor(alt.Player.local.scriptID, parseInt(headoverlaysjson[2][13]), parseInt(headoverlaysjson[1][13]));

        for (let i = 0; i < 20; i++) {
            native.setPedFaceFeature(alt.Player.local.scriptID, i, parseFloat(facefeaturesjson[i]));
        }
    }

    static ViewCharacter(gender: number, facefeaturearray: string, headblendsarray: string, headoverlayarray: string): void {
        LoginHandler.spawnCharSelectorPed(gender, facefeaturearray, headblendsarray, headoverlayarray);
    }

    static SaveLoginCredentialsToStorage(name: string, discordId: number): void {
        alt.LocalStorage.set('username', name);
        alt.LocalStorage.set('discordId', discordId);
        alt.LocalStorage.save();
    }

    static showError(msg: string): void {
        if (loginBrowser != null) {
            loginBrowser.emit("CEF:Login:showError", msg);
        }
    }

    static showArea(area: string): void {
        if (loginBrowser != null) {
            loginBrowser.emit("CEF:Login:showArea", area);
            if (area == "charselect") {
                if (loginCam != null) {
                    native.renderScriptCams(false, false, 0, true, false, 0);
                    native.setCamActive(loginCam, false);
                    native.destroyCam(loginCam, true);
                    loginCam = null;
                }
                native.setEntityAlpha(alt.Player.local.scriptID, 0, false);
                loginCam = native.createCameraWithParams(alt.hash('DEFAULT_SCRIPTED_CAMERA'), 402.7, -1003.0, -98.6, 0, 0, 358, 18, true, 2);
                native.setCamActive(loginCam, true);
                native.renderScriptCams(true, false, 0, true, false, 0);
            }
        }
    }

    static sendCharactersToCEF(chars: any): void {
        if (loginBrowser != null) {
            loginBrowser.emit("CEF:Charselector:sendCharactersToCEF", chars);
        }
    }

    static async SwitchIn(): Promise<void> {
        let player = alt.Player.local;
        await isCollisionLoaded(alt.Player.local);
        alt.setTimeout(async () => {
            let interiorID = native.getInteriorAtCoords(player.pos.x, player.pos.y, player.pos.z);
            native.refreshInterior(interiorID);
            await isCollisionLoaded(alt.Player.local);
            native.freezeEntityPosition(alt.Player.local.scriptID, false);
            native.switchInPlayer(player.scriptID);
        }, 1000);
    }

    static async spawnCharSelectorPed(gender: number, facefeaturearray: string, headblendsarray: string, headoverlayarray: string): Promise<void> {
        let facefeatures = JSON.parse(facefeaturearray);
        let headblends = JSON.parse(headblendsarray);
        let headoverlays = JSON.parse(headoverlayarray);

        if (loginPedHandle != null) {
            native.deletePed(loginPedHandle);
            loginPedHandle = null;
        }

        if (gender == 1) {
            loginModelHash = alt.hash('mp_f_freemode_01');
            await loadModelAsync(loginModelHash);
        } else if (gender == 0) {
            loginModelHash = alt.hash('mp_m_freemode_01');
            await loadModelAsync(loginModelHash);
        }
        loginPedHandle = native.createPed(4, loginModelHash, 402.778, -996.9758, -100.01465, 0, false, true);
        native.setEntityAlpha(loginPedHandle, 255, false);
        native.setEntityHeading(loginPedHandle, 180.0);
        native.setEntityInvincible(loginPedHandle, true);
        native.disablePedPainAudio(loginPedHandle, true);
        native.freezeEntityPosition(loginPedHandle, true);
        native.taskSetBlockingOfNonTemporaryEvents(loginPedHandle, true);
                
        native.setPedHeadBlendData(loginPedHandle, parseFloat(headblends[0]), parseFloat(headblends[1]), 0, parseFloat(headblends[2]), parseFloat(headblends[5]), 0, parseFloat(headblends[3]), parseFloat(headblends[4]), 0, false);
        native.setPedHeadOverlayColor(loginPedHandle, 1, 1, parseInt(headoverlays[2][1]), 1);
        native.setPedHeadOverlayColor(loginPedHandle, 2, 1, parseInt(headoverlays[2][2]), 1);
        native.setPedHeadOverlayColor(loginPedHandle, 5, 2, parseInt(headoverlays[2][5]), 1);
        native.setPedHeadOverlayColor(loginPedHandle, 8, 2, parseInt(headoverlays[2][8]), 1);
        native.setPedHeadOverlayColor(loginPedHandle, 10, 1, parseInt(headoverlays[2][10]), 1);
        native.setPedEyeColor(loginPedHandle, parseInt(headoverlays[0][14]));
        native.setPedHeadOverlay(loginPedHandle, 0, parseInt(headoverlays[0][0]), parseInt(headoverlays[1][0]));
        native.setPedHeadOverlay(loginPedHandle, 1, parseInt(headoverlays[0][1]), parseFloat(headoverlays[1][1]));
        native.setPedHeadOverlay(loginPedHandle, 2, parseInt(headoverlays[0][2]), parseFloat(headoverlays[1][2]));
        native.setPedHeadOverlay(loginPedHandle, 3, parseInt(headoverlays[0][3]), parseInt(headoverlays[1][3]));
        native.setPedHeadOverlay(loginPedHandle, 4, parseInt(headoverlays[0][4]), parseInt(headoverlays[1][4]));
        native.setPedHeadOverlay(loginPedHandle, 5, parseInt(headoverlays[0][5]), parseInt(headoverlays[1][5]));
        native.setPedHeadOverlay(loginPedHandle, 6, parseInt(headoverlays[0][6]), parseInt(headoverlays[1][6]));
        native.setPedHeadOverlay(loginPedHandle, 7, parseInt(headoverlays[0][7]), parseInt(headoverlays[1][7]));
        native.setPedHeadOverlay(loginPedHandle, 8, parseInt(headoverlays[0][8]), parseInt(headoverlays[1][8]));
        native.setPedHeadOverlay(loginPedHandle, 9, parseInt(headoverlays[0][9]), parseInt(headoverlays[1][9]));
        native.setPedHeadOverlay(loginPedHandle, 10, parseInt(headoverlays[0][10]), parseInt(headoverlays[1][10]));
        native.setPedComponentVariation(loginPedHandle, 2, parseInt(headoverlays[0][13]), 0, 0);
        native.setPedHairColor(loginPedHandle, parseInt(headoverlays[2][13]), parseInt(headoverlays[1][13]));

        for (let i = 0; i < 20; i++) {
            native.setPedFaceFeature(loginPedHandle, i, parseFloat(facefeatures[i]));
        }
    }

    static connectionComplete(): void {
        alt.emit("Client:HUD:setCefStatus", false);
        IPLManager.initializeIPLs();
        IPLManager.initializeEntitySets();
        IPLManager.initializeDoorControl();
        setMinimapData();
        setAudioData();
        /**alt.setStat(alt.StatName.Stamina, 75);
        alt.setStat(alt.StatName.Strength, 60);
        alt.setStat(alt.StatName.LungCapacity, 50);
        alt.setStat(alt.StatName.Wheelie, 50);
        alt.setStat(alt.StatName.Flying, 75);
        alt.setStat(alt.StatName.Shooting, 50);
        alt.setStat(alt.StatName.Stealth, 0);**/

        alt.setMsPerGameMinute(60000);
        let date = new Date();
        native.setClockTime(date.getHours(), date.getMinutes(), date.getSeconds());
    }
}

alt.onServer("Client:Login:CreateCEF", LoginHandler.CreateCEF);
alt.onServer("Client:SpawnArea:setCharSkin", LoginHandler.setCharSkin);
alt.onServer("Client:Charselector:ViewCharacter", LoginHandler.ViewCharacter);
alt.onServer("Client:Charselector:sendCharactersToCEF", LoginHandler.sendCharactersToCEF);
alt.onServer("Client:Login:SaveLoginCredentialsToStorage", LoginHandler.SaveLoginCredentialsToStorage);
alt.onServer("Client:Login:showError", LoginHandler.showError);
alt.onServer("Client:Login:showArea", LoginHandler.showArea);
alt.onServer("Client:SpawnArea:SwitchIn", LoginHandler.SwitchIn);
alt.on("connectionComplete", LoginHandler.connectionComplete);