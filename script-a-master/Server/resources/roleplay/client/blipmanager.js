/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as game from 'natives';

alt.onServer("Client:ServerBlips:LoadAllBlips", (blipArray) => {
    blipArray = JSON.parse(blipArray);

    for (var i in blipArray) {
        createBlip(blipArray[i].posX, blipArray[i].posY, blipArray[i].posZ, blipArray[i].sprite, blipArray[i].scale, blipArray[i].color, blipArray[i].shortRange, blipArray[i].name);
    }
});

alt.onServer("Client:ServerBlips:AddNewBlip", (name, color, scale, shortRange, sprite, X, Y, Z) => {
    createBlip(X, Y, Z, sprite, scale, color, shortRange, name);
});

function createBlip(X, Y, Z, sprite, scale, color, shortRange, name) {
    const blip = new alt.PointBlip(X, Y, Z);
    blip.sprite = sprite;
    blip.scale = scale;
    blip.color = color;
    blip.shortRange = shortRange;
    blip.name = name;
}