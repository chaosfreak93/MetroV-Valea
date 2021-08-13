import * as alt from 'alt-client';
import * as native from 'natives';
const player = alt.Player.local;
let clothesStoreBrowser = null;
let opened = false;
class Clothestore {
    static CreateCEF() {
        if (clothesStoreBrowser == null) {
            clothesStoreBrowser = new alt.WebView("http://resource/client/cef/clothesstore/index.html");
            clothesStoreBrowser.on('Client:Clothesstore:PreviewCloth', (isProp, previewComponentId, previewDrawableId, previewTextureId)=>{
                if (!isProp) native.setPedComponentVariation(player.scriptID, parseInt(previewComponentId), parseInt(previewDrawableId), parseInt(previewTextureId), 0);
                else native.setPedPropIndex(player.scriptID, parseInt(previewComponentId), parseInt(previewDrawableId), parseInt(previewTextureId), false);
            });
            clothesStoreBrowser.on('Client:Clothesstore:BuyCloth', (clothId, isProp)=>{
                alt.emitServer("Server:Clothesstore:BuyCloth", clothId, isProp);
            });
            clothesStoreBrowser.on('Client:Clothesstore:SetPerfectTorso', (BestTorsoDrawable, BestTorsoTexture)=>{
                alt.emitServer("Server:Clothesstore:SetPerfectTorso", BestTorsoDrawable, BestTorsoTexture);
            });
            clothesStoreBrowser.on("Client:Clothesstore:SetRotation", (rot)=>{
                native.setEntityHeading(player.scriptID, parseFloat(rot));
            });
        }
    }
    static OpenMenu(gender) {
        if (!opened) {
            opened = true;
            alt.showCursor(true);
            alt.toggleGameControls(false);
            clothesStoreBrowser.focus();
        } else {
            opened = false;
            alt.showCursor(false);
            alt.toggleGameControls(true);
            clothesStoreBrowser.unfocus();
        }
        clothesStoreBrowser.emit("CEF:Clothesstore:OpenMenu", gender);
    }
}
export { Clothestore as default };
alt.onServer("Client:HUD:CreateCEF", Clothestore.CreateCEF);
alt.onServer("Client:Clothesstore:OpenMenu", Clothestore.OpenMenu);
