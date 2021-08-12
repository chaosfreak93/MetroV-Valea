import * as alt from 'alt-client';
import * as native from 'natives';
import IPLManager from './iplmanager';
import { setAudioData, setMinimapData } from "./miscs";
import { loadModelAsync } from './utilities';
class LoginHandler {
    static CreateCEF() {
        if (this.loginBrowser == null) {
            this.loginCam = native.createCameraWithParams(alt.hash('DEFAULT_SCRIPTED_CAMERA'), 3280, 5220, 26, 0, 0, 240, 50, true, 2);
            native.setCamActive(this.loginCam, true);
            native.renderScriptCams(true, false, 0, true, false, 0);
            native.freezeEntityPosition(alt.Player.local.scriptID, true);
            alt.showCursor(true);
            alt.toggleGameControls(false);
            this.loginBrowser = new alt.WebView("http://resource/client/cef/login/index.html");
            this.loginBrowser.focus();
            this.loginBrowser.on("Client:Login:cefIsReady", ()=>{
                alt.setTimeout(()=>{
                    if (alt.LocalStorage.get("username")) {
                        this.loginBrowser.emit("CEF:Login:setStorage", alt.LocalStorage.get("username"), alt.LocalStorage.get("password"));
                    }
                    this.loginBrowser.emit("CEF:Login:showArea", "login");
                }, 2000);
            });
            this.loginBrowser.on("Client:Login:sendLoginDataToServer", (name, password)=>{
                if (alt.LocalStorage.get("discordId")) {
                    alt.emitServer("Server:Login:ValidateLoginCredentials", name, password, alt.LocalStorage.get("discordId"));
                } else {
                    if (alt.Discord.currentUser == null) {
                        this.loginBrowser.emit("CEF:Login:showError", "Bitte öffne Discord und starte alt:V neu.");
                        return;
                    }
                    alt.emitServer("Server:Login:ValidateLoginCredentials", name, password, alt.Discord.currentUser.id);
                }
            });
            this.loginBrowser.on("Client:Login:resetPW", (password)=>{
                alt.emitServer("Server:Login:resetPW", password);
            });
            this.loginBrowser.on("Client:Register:sendRegisterDataToServer", (name, email, password, passwordrepeat)=>{
                alt.emitServer("Server:Register:RegisterNewPlayer", name, email, password, passwordrepeat);
            });
            this.loginBrowser.on("Client:Charcreator:OpenCreator", ()=>{
                alt.emitServer("Server:Charcreator:CreateCEF");
                this.DestroyCEF();
            });
            this.loginBrowser.on("Client:Login:DestroyCEF", ()=>{
                this.DestroyCEF();
            });
            this.loginBrowser.on("Client:Charselector:KillCharacter", (charid)=>{
                alt.emitServer("Server:Charselector:KillCharacter", charid);
            });
            this.loginBrowser.on("Client:Charselector:PreviewCharacter", (charid)=>{
                alt.emitServer("Server:Charselector:PreviewCharacter", charid);
            });
            this.loginBrowser.on("Client:Charselector:spawnChar", (charid, spawnstr)=>{
                native.freezeEntityPosition(alt.Player.local.scriptID, true);
                alt.emitServer("Server:Charselector:spawnChar", spawnstr, charid);
            });
            this.loginBrowser.on("Client:Charcreator:SwitchOut", ()=>{
                if (this.loginCam != null) {
                    native.renderScriptCams(false, false, 0, true, false, 0);
                    native.setCamActive(this.loginCam, false);
                    native.destroyCam(this.loginCam, true);
                    this.loginCam = null;
                }
                native.switchOutPlayer(alt.Player.local.scriptID, 0, 1);
                native.freezeEntityPosition(alt.Player.local.scriptID, true);
            });
        }
    }
    static DestroyCEF() {
        if (this.loginBrowser != null) {
            this.loginBrowser.destroy();
        }
        this.loginBrowser = null;
        native.renderScriptCams(false, false, 0, true, false, 0);
        if (this.loginCam != null) {
            native.setCamActive(this.loginCam, false);
            native.destroyCam(this.loginCam, true);
            this.loginCam = null;
        }
        if (this.loginPedHandle != null) {
            native.deletePed(this.loginPedHandle);
            this.loginPedHandle = null;
        }
        alt.showCursor(false);
        alt.toggleGameControls(true);
        native.freezeEntityPosition(alt.Player.local.scriptID, false);
        native.setEntityAlpha(alt.Player.local.scriptID, 255, false);
    }
    static setCharSkin(facefeaturearray, headblendsarray, headoverlayarray) {
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
        for(let i = 0; i < 20; i++){
            native.setPedFaceFeature(alt.Player.local.scriptID, i, parseFloat(facefeaturesjson[i]));
        }
    }
    static ViewCharacter(gender, facefeaturearray, headblendsarray, headoverlayarray) {
        this.spawnCharSelectorPed(gender, facefeaturearray, headblendsarray, headoverlayarray);
    }
    static SaveLoginCredentialsToStorage(name, password, discordId) {
        alt.LocalStorage.set('username', name);
        alt.LocalStorage.set('password', password);
        alt.LocalStorage.set('discordId', discordId);
        alt.LocalStorage.save();
    }
    static showError(msg) {
        if (this.loginBrowser != null) {
            this.loginBrowser.emit("CEF:Login:showError", msg);
        }
    }
    static showArea(area) {
        if (this.loginBrowser != null) {
            this.loginBrowser.emit("CEF:Login:showArea", area);
            if (area == "charselect") {
                if (this.loginCam != null) {
                    native.renderScriptCams(false, false, 0, true, false, 0);
                    native.setCamActive(this.loginCam, false);
                    native.destroyCam(this.loginCam, true);
                    this.loginCam = null;
                }
                native.setEntityAlpha(alt.Player.local.scriptID, 0, false);
                this.loginCam = native.createCameraWithParams(alt.hash('DEFAULT_SCRIPTED_CAMERA'), 402.7, -1003, -98.6, 0, 0, 358, 18, true, 2);
                native.setCamActive(this.loginCam, true);
                native.renderScriptCams(true, false, 0, true, false, 0);
            }
        }
    }
    static sendCharactersToCEF(chars) {
        if (this.loginBrowser != null) {
            this.loginBrowser.emit("CEF:Charselector:sendCharactersToCEF", chars);
        }
    }
    static SwitchIn() {
        let player = alt.Player.local;
        native.switchInPlayer(player.scriptID);
        alt.setTimeout(()=>{
            let interiorID = native.getInteriorAtCoords(player.pos.x, player.pos.y, player.pos.z);
            native.refreshInterior(interiorID);
            alt.setTimeout(()=>{
                native.freezeEntityPosition(alt.Player.local.scriptID, false);
            }, 250);
        }, 250);
    }
    static async spawnCharSelectorPed(gender, facefeaturearray, headblendsarray, headoverlayarray) {
        let facefeatures = JSON.parse(facefeaturearray);
        let headblends = JSON.parse(headblendsarray);
        let headoverlays = JSON.parse(headoverlayarray);
        if (this.loginPedHandle != null) {
            native.deletePed(this.loginPedHandle);
            this.loginPedHandle = null;
        }
        if (gender == 1) {
            this.loginModelHash = alt.hash('mp_f_freemode_01');
            await loadModelAsync(this.loginModelHash);
        } else if (gender == 0) {
            this.loginModelHash = alt.hash('mp_m_freemode_01');
            await loadModelAsync(this.loginModelHash);
        }
        this.loginPedHandle = native.createPed(4, this.loginModelHash, 402.778, -996.9758, -100.01465, 0, false, true);
        native.setEntityAlpha(this.loginPedHandle, 255, false);
        native.setEntityHeading(this.loginPedHandle, 180);
        native.setEntityInvincible(this.loginPedHandle, true);
        native.disablePedPainAudio(this.loginPedHandle, true);
        native.freezeEntityPosition(this.loginPedHandle, true);
        native.taskSetBlockingOfNonTemporaryEvents(this.loginPedHandle, true);
        native.setPedHeadBlendData(this.loginPedHandle, parseFloat(headblends[0]), parseFloat(headblends[1]), 0, parseFloat(headblends[2]), parseFloat(headblends[5]), 0, parseFloat(headblends[3]), parseFloat(headblends[4]), 0, false);
        native.setPedHeadOverlayColor(this.loginPedHandle, 1, 1, parseInt(headoverlays[2][1]), 1);
        native.setPedHeadOverlayColor(this.loginPedHandle, 2, 1, parseInt(headoverlays[2][2]), 1);
        native.setPedHeadOverlayColor(this.loginPedHandle, 5, 2, parseInt(headoverlays[2][5]), 1);
        native.setPedHeadOverlayColor(this.loginPedHandle, 8, 2, parseInt(headoverlays[2][8]), 1);
        native.setPedHeadOverlayColor(this.loginPedHandle, 10, 1, parseInt(headoverlays[2][10]), 1);
        native.setPedEyeColor(this.loginPedHandle, parseInt(headoverlays[0][14]));
        native.setPedHeadOverlay(this.loginPedHandle, 0, parseInt(headoverlays[0][0]), parseInt(headoverlays[1][0]));
        native.setPedHeadOverlay(this.loginPedHandle, 1, parseInt(headoverlays[0][1]), parseFloat(headoverlays[1][1]));
        native.setPedHeadOverlay(this.loginPedHandle, 2, parseInt(headoverlays[0][2]), parseFloat(headoverlays[1][2]));
        native.setPedHeadOverlay(this.loginPedHandle, 3, parseInt(headoverlays[0][3]), parseInt(headoverlays[1][3]));
        native.setPedHeadOverlay(this.loginPedHandle, 4, parseInt(headoverlays[0][4]), parseInt(headoverlays[1][4]));
        native.setPedHeadOverlay(this.loginPedHandle, 5, parseInt(headoverlays[0][5]), parseInt(headoverlays[1][5]));
        native.setPedHeadOverlay(this.loginPedHandle, 6, parseInt(headoverlays[0][6]), parseInt(headoverlays[1][6]));
        native.setPedHeadOverlay(this.loginPedHandle, 7, parseInt(headoverlays[0][7]), parseInt(headoverlays[1][7]));
        native.setPedHeadOverlay(this.loginPedHandle, 8, parseInt(headoverlays[0][8]), parseInt(headoverlays[1][8]));
        native.setPedHeadOverlay(this.loginPedHandle, 9, parseInt(headoverlays[0][9]), parseInt(headoverlays[1][9]));
        native.setPedHeadOverlay(this.loginPedHandle, 10, parseInt(headoverlays[0][10]), parseInt(headoverlays[1][10]));
        native.setPedComponentVariation(this.loginPedHandle, 2, parseInt(headoverlays[0][13]), 0, 0);
        native.setPedHairColor(this.loginPedHandle, parseInt(headoverlays[2][13]), parseInt(headoverlays[1][13]));
        for(let i = 0; i < 20; i++){
            native.setPedFaceFeature(this.loginPedHandle, i, parseFloat(facefeatures[i]));
        }
    }
    static connectionComplete() {
        IPLManager.initializeIPLs();
        IPLManager.initializeEntitySets();
        IPLManager.initializeDoorControl();
        setMinimapData();
        setAudioData();
        alt.setStat(alt.StatName.Stamina, 75);
        alt.setStat(alt.StatName.Strength, 60);
        alt.setStat(alt.StatName.LungCapacity, 50);
        alt.setStat(alt.StatName.Wheelie, 50);
        alt.setStat(alt.StatName.Flying, 75);
        alt.setStat(alt.StatName.Shooting, 50);
        alt.setStat(alt.StatName.Stealth, 0);
        alt.setMsPerGameMinute(60000);
        let date = new Date();
        native.setClockTime(date.getHours(), date.getMinutes(), date.getSeconds());
    }
}
export { LoginHandler as default };
alt.onServer("Client:Login:CreateCEF", LoginHandler.CreateCEF);
alt.onServer("Client:SpawnArea:setCharSkin", LoginHandler.setCharSkin);
alt.onServer("Client:Charselector:ViewCharacter", LoginHandler.ViewCharacter);
alt.onServer("Client:Login:SaveLoginCredentialsToStorage", LoginHandler.SaveLoginCredentialsToStorage);
alt.onServer("Client:Login:showError", LoginHandler.showError);
alt.onServer("Client:Login:showArea", LoginHandler.showArea);
alt.onServer("Client:SpawnArea:SwitchIn", LoginHandler.SwitchIn);
alt.on("connectionComplete", LoginHandler.connectionComplete);
