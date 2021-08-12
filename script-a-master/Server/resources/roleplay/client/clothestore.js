import * as alt from 'alt-client';
import * as native from 'natives';
class Clothestore {
    static CreateCEF() {
        if (this.clothesStoreBrowser == null) {
            this.clothesStoreBrowser = new alt.WebView("http://resource/client/cef/clothesstore/index.html");
            this.clothesStoreBrowser.on('Client:Clothesstore:PreviewCloth', (isProp, previewComponentId, previewDrawableId, previewTextureId)=>{
                if (!isProp) native.setPedComponentVariation(this.player.scriptID, parseInt(previewComponentId), parseInt(previewDrawableId), parseInt(previewTextureId), 0);
                else native.setPedPropIndex(this.player.scriptID, parseInt(previewComponentId), parseInt(previewDrawableId), parseInt(previewTextureId), false);
            });
            this.clothesStoreBrowser.on('Client:Clothesstore:BuyCloth', (clothId, isProp)=>{
                alt.emitServer("Server:Clothesstore:BuyCloth", clothId, isProp);
            });
            this.clothesStoreBrowser.on('Client:Clothesstore:SetPerfectTorso', (BestTorsoDrawable, BestTorsoTexture)=>{
                alt.emitServer("Server:Clothesstore:SetPerfectTorso", BestTorsoDrawable, BestTorsoTexture);
            });
            this.clothesStoreBrowser.on("Client:Clothesstore:SetRotation", (rot)=>{
                native.setEntityHeading(this.player.scriptID, parseFloat(rot));
            });
        }
    }
    static OpenMenu(gender) {
        if (!this.opened) {
            this.opened = true;
            alt.showCursor(true);
            alt.toggleGameControls(false);
            this.clothesStoreBrowser.focus();
        } else {
            this.opened = false;
            alt.showCursor(false);
            alt.toggleGameControls(true);
            this.clothesStoreBrowser.unfocus();
        }
        this.clothesStoreBrowser.emit("CEF:Clothesstore:OpenMenu", gender);
    }
}
Clothestore.player = alt.Player.local;
Clothestore.opened = false;
export { Clothestore as default };
alt.onServer("Client:HUD:CreateCEF", Clothestore.CreateCEF);
alt.onServer("Client:Clothesstore:OpenMenu", Clothestore.OpenMenu);
