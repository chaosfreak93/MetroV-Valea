import * as alt from "alt-client";
import * as native from "natives";
import { loadModelAsync } from "./utilities";
let charcreatorBrowser = null;
let charcreatorCam = null;
let pedHandle = null;
let modelHash = null;
let lastInteract = 0;
class CharCreator {
    static CreateCEF(player) {
        if (charcreatorBrowser == null) {
            native.freezeEntityPosition(alt.Player.local.scriptID, true);
            native.triggerScreenblurFadeOut(0);
            alt.showCursor(true);
            alt.toggleGameControls(false);
            native.setEntityAlpha(alt.Player.local.scriptID, 0, false);
            native.triggerScreenblurFadeIn(1);
            charcreatorCam = native.createCameraWithParams(alt.hash("DEFAULT_SCRIPTED_CAMERA"), 402.7, -1003, -98.6, 0, 0, 358, 18, true, 2);
            native.setCamActive(charcreatorCam, true);
            native.renderScriptCams(true, false, 0, true, false, 0);
            charcreatorBrowser = new alt.WebView("http://resource/client/cef/charcreator/index.html");
            charcreatorBrowser.focus();
            charcreatorBrowser.on("Client:Charcreator:ChangeGender", (gender)=>{
                native.triggerScreenblurFadeOut(0);
                charcreatorBrowser.emit("CEF:Charcreator:showArea", "creatorarea");
                CharCreator.spawnCreatorPed(gender);
            });
            charcreatorBrowser.on("Client:Charcreator:cefIsReady", ()=>{
                alt.setTimeout(function() {
                    charcreatorBrowser.emit("CEF:Charcreator:showArea", "sexarea");
                }, 1000);
            });
            charcreatorBrowser.on("Client:Charcreator:SetRotation", (rot)=>{
                native.setEntityHeading(pedHandle, parseFloat(rot));
            });
            charcreatorBrowser.on("Client:Charcreator:UpdateFaceFeature", (facefeaturesarray)=>{
                const facefeaturesjson = JSON.parse(facefeaturesarray);
                for(let i = 0; i < 20; i++){
                    native.setPedFaceFeature(pedHandle, i, parseFloat(facefeaturesjson[i]));
                }
            });
            charcreatorBrowser.on("Client:Charcreator:UpdateHeadBlends", (headblendsarray)=>{
                const headblendsjson = JSON.parse(headblendsarray);
                native.setPedHeadBlendData(pedHandle, parseInt(headblendsjson[0]), parseInt(headblendsjson[1]), 0, parseInt(headblendsjson[2]), parseInt(headblendsjson[5]), 0, parseFloat(headblendsjson[3]), parseInt(headblendsjson[4]), 0, false);
            });
            charcreatorBrowser.on("Client:Charcreator:UpdateHeadOverlays", (headoverlaysarray)=>{
                const headoverlaysjson = JSON.parse(headoverlaysarray);
                native.setPedHeadOverlayColor(pedHandle, 1, 1, parseInt(headoverlaysjson[2][1]), 1);
                native.setPedHeadOverlayColor(pedHandle, 2, 1, parseInt(headoverlaysjson[2][2]), 1);
                native.setPedHeadOverlayColor(pedHandle, 5, 2, parseInt(headoverlaysjson[2][5]), 1);
                native.setPedHeadOverlayColor(pedHandle, 8, 2, parseInt(headoverlaysjson[2][8]), 1);
                native.setPedHeadOverlayColor(pedHandle, 10, 1, parseInt(headoverlaysjson[2][10]), 1);
                native.setPedEyeColor(pedHandle, parseInt(headoverlaysjson[0][14]));
                native.setPedHeadOverlay(pedHandle, 0, parseInt(headoverlaysjson[0][0]), parseInt(headoverlaysjson[1][0]));
                native.setPedHeadOverlay(pedHandle, 1, parseInt(headoverlaysjson[0][1]), parseFloat(headoverlaysjson[1][1]));
                native.setPedHeadOverlay(pedHandle, 2, parseInt(headoverlaysjson[0][2]), parseFloat(headoverlaysjson[1][2]));
                native.setPedHeadOverlay(pedHandle, 3, parseInt(headoverlaysjson[0][3]), parseInt(headoverlaysjson[1][3]));
                native.setPedHeadOverlay(pedHandle, 4, parseInt(headoverlaysjson[0][4]), parseInt(headoverlaysjson[1][4]));
                native.setPedHeadOverlay(pedHandle, 5, parseInt(headoverlaysjson[0][5]), parseInt(headoverlaysjson[1][5]));
                native.setPedHeadOverlay(pedHandle, 6, parseInt(headoverlaysjson[0][6]), parseInt(headoverlaysjson[1][6]));
                native.setPedHeadOverlay(pedHandle, 7, parseInt(headoverlaysjson[0][7]), parseInt(headoverlaysjson[1][7]));
                native.setPedHeadOverlay(pedHandle, 8, parseInt(headoverlaysjson[0][8]), parseInt(headoverlaysjson[1][8]));
                native.setPedHeadOverlay(pedHandle, 9, parseInt(headoverlaysjson[0][9]), parseInt(headoverlaysjson[1][9]));
                native.setPedHeadOverlay(pedHandle, 10, parseInt(headoverlaysjson[0][10]), parseInt(headoverlaysjson[1][10]));
                native.setPedComponentVariation(pedHandle, 2, parseInt(headoverlaysjson[0][13]), 0, 0);
                native.setPedHairColor(pedHandle, parseInt(headoverlaysjson[2][13]), parseInt(headoverlaysjson[1][13]));
            });
            charcreatorBrowser.on("Client:Charcreator:SaveCharacter", (vorname, nachname, birthdate, gender, facefeaturesarray, headblendsdataarray, headoverlaysarray, clothesarray)=>{
                if (lastInteract + 500 > Date.now()) return;
                lastInteract = Date.now();
                native.clearPedProp(alt.Player.local.scriptID, 0);
                native.clearPedProp(alt.Player.local.scriptID, 1);
                native.clearPedProp(alt.Player.local.scriptID, 2);
                native.clearPedProp(alt.Player.local.scriptID, 6);
                native.clearPedProp(alt.Player.local.scriptID, 7);
                alt.emitServer("Server:Charcreator:CreateCharacter", vorname + " " + nachname, birthdate, gender, facefeaturesarray, headblendsdataarray, headoverlaysarray);
            });
        }
    }
    static DestroyCEF() {
        if (charcreatorBrowser != null) {
            charcreatorBrowser.destroy();
        }
        charcreatorBrowser = null;
        native.renderScriptCams(false, false, 0, true, false, 0);
        native.setCamActive(charcreatorCam, false);
        if (charcreatorCam != null) {
            native.destroyCam(charcreatorCam, true);
        }
        if (pedHandle != null) {
            native.deletePed(pedHandle);
            pedHandle = null;
        }
        charcreatorCam = null;
        alt.showCursor(false);
    }
    static showError(msg) {
        if (charcreatorBrowser != null) {
            charcreatorBrowser.emit("CEF:Charcreator:showError", msg);
        }
    }
    static showArea(area) {
        if (charcreatorBrowser != null) {
            charcreatorBrowser.emit("CEF:Charcreator:showArea", area);
        }
    }
    static async spawnCreatorPed(gender) {
        if (gender == 1) {
            modelHash = alt.hash("mp_f_freemode_01");
            await loadModelAsync(modelHash);
        } else if (gender == 0) {
            modelHash = alt.hash("mp_m_freemode_01");
            await loadModelAsync(modelHash);
        }
        pedHandle = native.createPed(4, modelHash, 402.778, -996.9758, -100.01465, 0, false, true);
        native.setEntityHeading(pedHandle, 180);
        native.setEntityInvincible(pedHandle, true);
        native.disablePedPainAudio(pedHandle, true);
        native.freezeEntityPosition(pedHandle, true);
        native.taskSetBlockingOfNonTemporaryEvents(pedHandle, true);
        native.setPedComponentVariation(pedHandle, 11, 15, 0, 0);
        native.setPedComponentVariation(pedHandle, 8, 15, 0, 0);
        native.setPedComponentVariation(pedHandle, 3, 15, 0, 0);
    }
}
export { CharCreator as default };
alt.onServer("Client:Charcreator:CreateCEF", CharCreator.CreateCEF);
alt.onServer("Client:Charcreator:DestroyCEF", CharCreator.DestroyCEF);
alt.onServer("Client:Charcreator:showError", CharCreator.showError);
alt.onServer("Client:Charcreator:showArea", CharCreator.showArea);
