/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as game from 'natives';
import {hudBrowser} from './hud.js';

alt.setInterval(() => {
    if (!hudBrowser) return;
    if (game.getEntityAlpha(alt.Player.local.scriptID) <= 0 || !game.isEntityVisible(alt.Player.local.scriptID)) {
        alt.emitServer("Server:Utilities:BanMe", "Invisible Hack");
    }
}, 5000);