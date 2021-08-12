import * as alt from 'alt-client';
import * as native from 'natives';
class CharCreator {
    static CreateCEF(player) {
        if (this.charcreatorBrowser == null) {
            native.freezeEntityPosition(alt.Player.local.scriptID, true);
            native.triggerScreenblurFadeOut(0);
            alt.showCursor(true);
            alt.toggleGameControls(false);
            native.setEntityAlpha(alt.Player.local.scriptID, 0, false);
            native.triggerScreenblurFadeIn(1);
            this.charcreatorCam = native.createCameraWithParams(alt.hash('DEFAULT_SCRIPTED_CAMERA'), 402.7, -1003, -98.6, 0, 0, 358, 18, true, 2);
            native.setCamActive(this.charcreatorCam, true);
            native.renderScriptCams(true, false, 0, true, false, 0);
            this.charcreatorBrowser = new alt.WebView("http://resource/client/cef/charcreator/index.html");
            this.charcreatorBrowser.focus();
            this.charcreatorBrowser.on("Client:Charcreator:ChangeGender", (gender)=>{
                native.triggerScreenblurFadeOut(0);
                this.charcreatorBrowser.emit("CEF:Charcreator:showArea", "creatorarea");
                this.spawnCreatorPed(gender);
            });
            this.charcreatorBrowser.on("Client:Charcreator:cefIsReady", ()=>{
                alt.setTimeout(function() {
                    this.charcreatorBrowser.emit("CEF:Charcreator:showArea", "sexarea");
                }, 1000);
            });
            this.charcreatorBrowser.on("Client:Charcreator:SetRotation", (rot)=>{
                native.setEntityHeading(this.pedHandle, parseFloat(rot));
            });
            this.charcreatorBrowser.on("Client:Charcreator:UpdateFaceFeature", (facefeaturesarray)=>{
                const facefeaturesjson = JSON.parse(facefeaturesarray);
                for(let i = 0; i < 20; i++){
                    native.setPedFaceFeature(this.pedHandle, i, parseFloat(facefeaturesjson[i]));
                }
            });
            this.charcreatorBrowser.on("Client:Charcreator:UpdateHeadBlends", (headblendsarray)=>{
                const headblendsjson = JSON.parse(headblendsarray);
                native.setPedHeadBlendData(this.pedHandle, parseInt(headblendsjson[0]), parseInt(headblendsjson[1]), 0, parseInt(headblendsjson[2]), parseInt(headblendsjson[5]), 0, parseFloat(headblendsjson[3]), parseInt(headblendsjson[4]), 0, false);
            });
            this.charcreatorBrowser.on("Client:Charcreator:UpdateHeadOverlays", (headoverlaysarray)=>{
                const headoverlaysjson = JSON.parse(headoverlaysarray);
                native.setPedHeadOverlayColor(this.pedHandle, 1, 1, parseInt(headoverlaysjson[2][1]), 1);
                native.setPedHeadOverlayColor(this.pedHandle, 2, 1, parseInt(headoverlaysjson[2][2]), 1);
                native.setPedHeadOverlayColor(this.pedHandle, 5, 2, parseInt(headoverlaysjson[2][5]), 1);
                native.setPedHeadOverlayColor(this.pedHandle, 8, 2, parseInt(headoverlaysjson[2][8]), 1);
                native.setPedHeadOverlayColor(this.pedHandle, 10, 1, parseInt(headoverlaysjson[2][10]), 1);
                native.setPedEyeColor(this.pedHandle, parseInt(headoverlaysjson[0][14]));
                native.setPedHeadOverlay(this.pedHandle, 0, parseInt(headoverlaysjson[0][0]), parseInt(headoverlaysjson[1][0]));
                native.setPedHeadOverlay(this.pedHandle, 1, parseInt(headoverlaysjson[0][1]), parseFloat(headoverlaysjson[1][1]));
                native.setPedHeadOverlay(this.pedHandle, 2, parseInt(headoverlaysjson[0][2]), parseFloat(headoverlaysjson[1][2]));
                native.setPedHeadOverlay(this.pedHandle, 3, parseInt(headoverlaysjson[0][3]), parseInt(headoverlaysjson[1][3]));
                native.setPedHeadOverlay(this.pedHandle, 4, parseInt(headoverlaysjson[0][4]), parseInt(headoverlaysjson[1][4]));
                native.setPedHeadOverlay(this.pedHandle, 5, parseInt(headoverlaysjson[0][5]), parseInt(headoverlaysjson[1][5]));
                native.setPedHeadOverlay(this.pedHandle, 6, parseInt(headoverlaysjson[0][6]), parseInt(headoverlaysjson[1][6]));
                native.setPedHeadOverlay(this.pedHandle, 7, parseInt(headoverlaysjson[0][7]), parseInt(headoverlaysjson[1][7]));
                native.setPedHeadOverlay(this.pedHandle, 8, parseInt(headoverlaysjson[0][8]), parseInt(headoverlaysjson[1][8]));
                native.setPedHeadOverlay(this.pedHandle, 9, parseInt(headoverlaysjson[0][9]), parseInt(headoverlaysjson[1][9]));
                native.setPedHeadOverlay(this.pedHandle, 10, parseInt(headoverlaysjson[0][10]), parseInt(headoverlaysjson[1][10]));
                native.setPedComponentVariation(this.pedHandle, 2, parseInt(headoverlaysjson[0][13]), 0, 0);
                native.setPedHairColor(this.pedHandle, parseInt(headoverlaysjson[2][13]), parseInt(headoverlaysjson[1][13]));
            });
            this.charcreatorBrowser.on("Client:Charcreator:SaveCharacter", (vorname, nachname, birthdate, gender, facefeaturesarray, headblendsdataarray, headoverlaysarray, clothesarray)=>{
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
        if (this.charcreatorBrowser != null) {
            this.charcreatorBrowser.destroy();
        }
        this.charcreatorBrowser = null;
        native.renderScriptCams(false, false, 0, true, false, 0);
        native.setCamActive(this.charcreatorCam, false);
        if (this.charcreatorCam != null) {
            native.destroyCam(this.charcreatorCam, true);
        }
        if (this.pedHandle != null) {
            native.deletePed(this.pedHandle);
            this.pedHandle = null;
        }
        this.charcreatorCam = null;
        alt.showCursor(false);
    }
    static showError(msg) {
        if (this.charcreatorBrowser != null) {
            this.charcreatorBrowser.emit("CEF:Charcreator:showError", msg);
        }
    }
    static showArea(area) {
        if (this.charcreatorBrowser != null) {
            this.charcreatorBrowser.emit("CEF:Charcreator:showArea", area);
        }
    }
    static spawnCreatorPed(gender) {
        if (gender == 1) {
            this.modelHash = alt.hash('mp_f_freemode_01');
            native.requestModel(this.modelHash);
        } else if (gender == 0) {
            this.modelHash = alt.hash('mp_m_freemode_01');
            native.requestModel(this.modelHash);
        }
        let interval = alt.setInterval(function() {
            if (native.hasModelLoaded(this.modelHash)) {
                alt.clearInterval(interval);
                this.pedHandle = native.createPed(4, this.modelHash, 402.778, -996.9758, -100.01465, 0, false, true);
                native.setEntityHeading(this.pedHandle, 180);
                native.setEntityInvincible(this.pedHandle, true);
                native.disablePedPainAudio(this.pedHandle, true);
                native.freezeEntityPosition(this.pedHandle, true);
                native.taskSetBlockingOfNonTemporaryEvents(this.pedHandle, true);
                native.setPedComponentVariation(this.pedHandle, 11, 15, 0, 0);
                native.setPedComponentVariation(this.pedHandle, 8, 15, 0, 0);
                native.setPedComponentVariation(this.pedHandle, 3, 15, 0, 0);
            }
        }, 0);
    }
}
export { CharCreator as default };
alt.onServer("Client:Charcreator:CreateCEF", CharCreator.CreateCEF);
alt.onServer("Client:Charcreator:DestroyCEF", CharCreator.DestroyCEF);
alt.onServer("Client:Charcreator:showError", CharCreator.showError);
alt.onServer("Client:Charcreator:showArea", CharCreator.showArea);
