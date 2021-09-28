import * as alt from "alt-client";
class BlipManager {
    static createBlip(x, y, z, sprite, scale, color, shortRange, showCone, name) {
        const blip = new alt.PointBlip(x, y, z);
        blip.sprite = sprite;
        blip.scale = scale;
        blip.color = color;
        blip.shortRange = shortRange;
        blip.showCone = showCone;
        blip.name = name;
        return blip;
    }
    static createBlipWithRoute(x, y, z, sprite, scale, color, shortRange, showCone, name) {
        const blip = new alt.PointBlip(x, y, z);
        blip.sprite = sprite;
        blip.scale = scale;
        blip.color = color;
        blip.shortRange = shortRange;
        blip.showCone = showCone;
        blip.name = name;
        blip.secondaryColor = color;
        blip.route = true;
        return blip;
    }
}
export { BlipManager as default };
function LoadAllBlips(blipArray) {
    const blipJson = JSON.parse(blipArray);
    for(let i in blipJson){
        BlipManager.createBlip(blipJson[i].posX, blipJson[i].posY, blipJson[i].posZ, blipJson[i].sprite, blipJson[i].scale, blipJson[i].color, blipJson[i].shortRange, false, blipJson[i].name);
    }
}
function AddNewBlip(name, color, scale, shortRange, sprite, x, y, z) {
    BlipManager.createBlip(x, y, z, sprite, scale, color, shortRange, false, name);
}
alt.onServer("Client:ServerBlips:LoadAllBlips", LoadAllBlips);
alt.onServer("Client:ServerBlips:AddNewBlip", AddNewBlip);
