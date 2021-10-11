import * as alt from "alt-client";
import * as native from "natives";

const player: alt.Player = alt.Player.local;
let clothesStoreBrowser: alt.WebView = null;
let opened: boolean = false;
let lastInteract: number = 0;

export default class Clothestore {
    static CreateCEF(): void {
        if (clothesStoreBrowser == null) {
            clothesStoreBrowser = new alt.WebView("http://resource/client/cef/clothesstore/index.html");

            clothesStoreBrowser.on(
                "Client:Clothesstore:PreviewCloth",
                (isProp: boolean, previewComponentId: string, previewDrawableId: string, previewTextureId: string) => {
                    if (!isProp)
                        native.setPedComponentVariation(
                            player.scriptID,
                            parseInt(previewComponentId),
                            parseInt(previewDrawableId),
                            parseInt(previewTextureId),
                            0,
                        );
                    else
                        native.setPedPropIndex(
                            player.scriptID,
                            parseInt(previewComponentId),
                            parseInt(previewDrawableId),
                            parseInt(previewTextureId),
                            false,
                        );
                },
            );

            clothesStoreBrowser.on("Client:Clothesstore:BuyCloth", (clothId: number, isProp: boolean) => {
                if (lastInteract + 500 > Date.now()) return;
                lastInteract = Date.now();

                alt.emitServer("Server:Clothesstore:BuyCloth", clothId, isProp);
            });

            clothesStoreBrowser.on(
                "Client:Clothesstore:SetPerfectTorso",
                (BestTorsoDrawable: number, BestTorsoTexture: number) => {
                    if (lastInteract + 500 > Date.now()) return;
                    lastInteract = Date.now();

                    alt.emitServer("Server:Clothesstore:SetPerfectTorso", BestTorsoDrawable, BestTorsoTexture);
                },
            );

            clothesStoreBrowser.on("Client:Clothesstore:SetRotation", (rot: string) => {
                native.setEntityHeading(player.scriptID, parseFloat(rot));
            });
        }
    }

    static OpenMenu(gender: number) {
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

alt.onServer("Client:HUD:CreateCEF", Clothestore.CreateCEF);
alt.onServer("Client:Clothesstore:OpenMenu", Clothestore.OpenMenu);
