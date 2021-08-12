import * as alt from 'alt-client';
import * as native from 'natives';
import { hudBrowser } from './hud';
alt.setInterval(()=>{
    if (!hudBrowser) return;
    const ped = alt.Player.local.scriptID;
    if (native.getEntityAlpha(ped) <= 0 || !native.isEntityVisible(ped)) {
        alt.emitServer("Server:Utilities:BanMe", "Invisible Hack");
    }
}, 5000);
