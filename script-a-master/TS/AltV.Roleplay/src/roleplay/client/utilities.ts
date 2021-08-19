import * as alt from 'alt-client';
import * as native from 'natives';

let playerTattoos = undefined;

export function loadClipsetAsync(clipset: string): Promise<boolean> {
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

export function loadModelAsync(model: any): Promise<boolean> {
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

export function loadAnimDictAsync(animDict: string): Promise<boolean> {
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

export function loadStreamedTextureDictAsync(streamedTextureDict: string): Promise<boolean> {
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

export function loadScaleformMovieAsync(scaleform: any): Promise<number> {
    return new Promise((resolve, reject) => {
        scaleform = native.requestScaleformMovie(scaleform);

        let interval = alt.setInterval(() => {
            if (native.hasScaleformMovieLoaded(scaleform)) {
                alt.clearInterval(interval);
                return resolve(scaleform);
            }
        }, 0);
    });
}

export function getScaleformReturnValueIntAsync(returnValue: any): Promise<number> {
    return new Promise((resolve, reject) => {
        if (native.isScaleformMovieMethodReturnValueReady(returnValue))
            return resolve(native.getScaleformMovieMethodReturnValueInt(returnValue));

        let interval = alt.setInterval(() => {
            if (native.isScaleformMovieMethodReturnValueReady(returnValue)) {
                alt.clearInterval(interval);
                return resolve(native.getScaleformMovieMethodReturnValueInt(returnValue));
            }
        }, 0);
    });
}

export function getScaleformReturnValueBoolAsync(returnValue: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
        if (native.isScaleformMovieMethodReturnValueReady(returnValue))
            return resolve(native.getScaleformMovieMethodReturnValueBool(returnValue));

        let interval = alt.setInterval(() => {
            if (native.isScaleformMovieMethodReturnValueReady(returnValue)) {
                alt.clearInterval(interval);
                return resolve(native.getScaleformMovieMethodReturnValueBool(returnValue));
            }
        }, 0);
    });
}

export function gotoCoords(movePos: alt.Vector3, moveRot: alt.Vector3): Promise<boolean> {
    return new Promise((resolve, reject) => {
        let coords = native.getEntityCoords(alt.Player.local.scriptID, false);

        if (coords.x >= (movePos.x - 0.01) && coords.x <= (movePos.x + 0.01) && coords.y >= (movePos.y - 0.01) && coords.y <= (movePos.y + 0.01))
            return resolve(true);

        native.taskGoStraightToCoord(alt.Player.local.scriptID, movePos.x, movePos.y, movePos.z, 1, 5, moveRot.toDegrees().z, 0);

        let interval = alt.setInterval(() => {
            if (coords.x >= (movePos.x - 0.01) && coords.x <= (movePos.x + 0.01) && coords.y >= (movePos.y - 0.01) && coords.y <= (movePos.y + 0.01)) {
                alt.clearInterval(interval);
                return resolve(true);
            }
        }, 0);
    });
}


export function setIntoVehicle(vehicle: alt.Vehicle): Promise<boolean> {
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

export function registerTarget(name: string, objectModel: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        if (native.isNamedRendertargetRegistered(name))
            return resolve(true);

        native.registerNamedRendertarget(name, false);
        native.linkNamedRendertarget(alt.hash(objectModel));

        let interval = alt.setInterval(() => {
            if (native.isNamedRendertargetRegistered(name)) {
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