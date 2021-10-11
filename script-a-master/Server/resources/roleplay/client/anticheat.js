import * as alt from "alt-client";
import * as native from "natives";
import { hudBrowser } from "./hud";
const player = alt.Player.local;
alt.setInterval(()=>{
    if (!hudBrowser) return;
    if (native.getEntityAlpha(player.scriptID) <= 0 || !native.isEntityVisible(player.scriptID)) {
        alt.emitServer("Server:Utilities:BanMe", "Invisible Hack");
    }
}, 5000);
