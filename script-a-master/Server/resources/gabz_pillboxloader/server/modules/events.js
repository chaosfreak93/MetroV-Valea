import * as alt from 'alt-server';
import * as eventFuncs from './eventFunctions.js';

alt.on('playerConnect', eventFuncs.playerFirstJoin);

alt.onClient('IPLloaded', (player, nameofplayer, ipofplayer) => {
    player.name = nameofplayer;
    player.ip = ipofplayer;
    console.log(`==> ${player.name} / ${player.ip} / loaded IPL correctly.`)
});
