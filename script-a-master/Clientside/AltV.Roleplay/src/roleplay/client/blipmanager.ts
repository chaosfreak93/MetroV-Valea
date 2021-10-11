import * as alt from "alt-client";

export default class BlipManager {
    static createBlip(
        x: number,
        y: number,
        z: number,
        sprite: number,
        scale: number,
        color: number,
        shortRange: boolean,
        showCone: boolean,
        name: string,
    ): alt.PointBlip {
        const blip = new alt.PointBlip(x, y, z);
        blip.sprite = sprite;
        blip.scale = scale;
        blip.color = color;
        blip.shortRange = shortRange;
        blip.showCone = showCone;
        blip.name = name;
        return blip;
    }

    static createBlipWithRoute(
        x: number,
        y: number,
        z: number,
        sprite: number,
        scale: number,
        color: number,
        shortRange: boolean,
        showCone: boolean,
        name: string,
    ): alt.PointBlip {
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

function LoadAllBlips(blipArray: string) {
    const blipJson: JSON = JSON.parse(blipArray);
    for (let i in blipJson) {
        BlipManager.createBlip(
            blipJson[i].posX,
            blipJson[i].posY,
            blipJson[i].posZ,
            blipJson[i].sprite,
            blipJson[i].scale,
            blipJson[i].color,
            blipJson[i].shortRange,
            false,
            blipJson[i].name,
        );
    }
}

function AddNewBlip(
    name: string,
    color: number,
    scale: number,
    shortRange: boolean,
    sprite: number,
    x: number,
    y: number,
    z: number,
) {
    BlipManager.createBlip(x, y, z, sprite, scale, color, shortRange, false, name);
}

alt.onServer("Client:ServerBlips:LoadAllBlips", LoadAllBlips);
alt.onServer("Client:ServerBlips:AddNewBlip", AddNewBlip);
