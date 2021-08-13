import * as alt from 'alt-client';
import * as native from 'natives';

let playerTattoos = undefined;

export function loadClipsetAsync(clipset: string): Promise<any> {
    return new Promise((resolve, reject) => {
        if (native.hasClipSetLoaded(clipset))
            return resolve(true);

        native.requestClipSet(clipset);

        let interval = alt.setInterval(() => {
            if (native.hasClipSetLoaded(clipset)) {
                alt.clearInterval(interval);
                return resolve(true);
            }
        }, 0);
    });
}

export function loadModelAsync(model: any): Promise<any> {
    return new Promise((resolve, reject) => {
        if (typeof model === 'string') {
            model = alt.hash(model);
        }

        if (native.hasModelLoaded(model))
            return resolve(true);

        native.requestModel(model);

        let interval = alt.setInterval(() => {
            if (native.hasModelLoaded(model)) {
                alt.clearInterval(interval);
                return resolve(true);
            }
        }, 0);
    });
}

export function loadAnimDictAsync(animDict: string): Promise<any> {
    return new Promise((resolve, reject) => {
        if (native.hasAnimDictLoaded(animDict))
            return resolve(true);

        native.requestAnimDict(animDict);

        let interval = alt.setInterval(() => {
            if (native.hasAnimDictLoaded(animDict)) {
                alt.clearInterval(interval);
                return resolve(true);
            }
        }, 0);
    });
}

export function loadStreamedTextureDictAsync(streamedTextureDict: string): Promise<any> {
    return new Promise((resolve, reject) => {
        if (native.hasStreamedTextureDictLoaded(streamedTextureDict))
            return resolve(true);

        native.requestStreamedTextureDict(streamedTextureDict, true);

        let interval = alt.setInterval(() => {
            if (native.hasStreamedTextureDictLoaded(streamedTextureDict)) {
                alt.clearInterval(interval);
                return resolve(true);
            }
        }, 0);
    });
}

export function setIntoVehicle(vehicle: alt.Vehicle): Promise<any> {
    return new Promise((resolve, reject) => {
        if (alt.Player.local.vehicle)
            return resolve(true);

        native.setPedIntoVehicle(alt.Player.local.scriptID, vehicle.scriptID, -1);

        let interval = alt.setInterval(() => {
            if (alt.Player.local.vehicle) {
                alt.clearInterval(interval);
                return resolve(true);
            }
        }, 0);
    });
}

export function clearTattoos(entity: alt.Entity): void {
    native.clearPedDecorations(entity.scriptID);
}

export function setTattoo(entity: alt.Entity, collection: string, hash: string): void {
    native.addPedDecorationFromHashes(entity.scriptID, alt.hash(collection), alt.hash(hash));
}

export function setCorrectTattoos(): void {
    clearTattoos(alt.Player.local);
    for (var i in playerTattoos) setTattoo(alt.Player.local, playerTattoos[i].collection, playerTattoos[i].hash);
}

alt.onServer("Client:Utilities:setTattoos", (tattooJSON) => {
    playerTattoos = JSON.parse(tattooJSON);
    setCorrectTattoos();
});

export function setClothes(entity: alt.Entity, compId: number, draw: number, tex: number): void {
    native.setPedComponentVariation(entity.scriptID, compId, draw, tex, 0);
}

export default {
    loadClipsetAsync,
    loadAnimDictAsync,
    loadStreamedTextureDictAsync,
    loadModelAsync,
    setIntoVehicle,
    clearTattoos,
    setTattoo,
    setCorrectTattoos,
    setClothes
}