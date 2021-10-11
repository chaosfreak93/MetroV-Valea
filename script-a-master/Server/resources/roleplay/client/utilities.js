import * as alt from "alt-client";
import * as native from "natives";
let playerTattoos = undefined;
export function loadClipsetAsync(clipset) {
    return new Promise((resolve, reject)=>{
        if (native.hasClipSetLoaded(clipset)) return resolve(true);
        native.requestClipSet(clipset);
        let interval = alt.setInterval(()=>{
            if (native.hasClipSetLoaded(clipset)) {
                alt.clearInterval(interval);
                return resolve(true);
            }
        }, 0);
    });
}
export function loadModelAsync(model) {
    return new Promise((resolve, reject)=>{
        if (typeof model === "string") {
            model = alt.hash(model);
        }
        if (native.hasModelLoaded(model)) return resolve(true);
        native.requestModel(model);
        let interval = alt.setInterval(()=>{
            if (native.hasModelLoaded(model)) {
                alt.clearInterval(interval);
                return resolve(true);
            }
        }, 0);
    });
}
export function loadAnimDictAsync(animDict) {
    return new Promise((resolve, reject)=>{
        if (native.hasAnimDictLoaded(animDict)) return resolve(true);
        native.requestAnimDict(animDict);
        let interval = alt.setInterval(()=>{
            if (native.hasAnimDictLoaded(animDict)) {
                alt.clearInterval(interval);
                return resolve(true);
            }
        }, 0);
    });
}
export function loadStreamedTextureDictAsync(streamedTextureDict) {
    return new Promise((resolve, reject)=>{
        if (native.hasStreamedTextureDictLoaded(streamedTextureDict)) return resolve(true);
        native.requestStreamedTextureDict(streamedTextureDict, true);
        let interval = alt.setInterval(()=>{
            if (native.hasStreamedTextureDictLoaded(streamedTextureDict)) {
                alt.clearInterval(interval);
                return resolve(true);
            }
        }, 0);
    });
}
export function loadScaleformMovieAsync(scaleform) {
    return new Promise((resolve, reject)=>{
        scaleform = native.requestScaleformMovie(scaleform);
        let interval = alt.setInterval(()=>{
            if (native.hasScaleformMovieLoaded(scaleform)) {
                alt.clearInterval(interval);
                return resolve(scaleform);
            }
        }, 0);
    });
}
export function getScaleformReturnValueIntAsync(returnValue) {
    return new Promise((resolve, reject)=>{
        if (native.isScaleformMovieMethodReturnValueReady(returnValue)) return resolve(native.getScaleformMovieMethodReturnValueInt(returnValue));
        let interval = alt.setInterval(()=>{
            if (native.isScaleformMovieMethodReturnValueReady(returnValue)) {
                alt.clearInterval(interval);
                return resolve(native.getScaleformMovieMethodReturnValueInt(returnValue));
            }
        }, 0);
    });
}
export function getScaleformReturnValueBoolAsync(returnValue) {
    return new Promise((resolve, reject)=>{
        if (native.isScaleformMovieMethodReturnValueReady(returnValue)) return resolve(native.getScaleformMovieMethodReturnValueBool(returnValue));
        let interval = alt.setInterval(()=>{
            if (native.isScaleformMovieMethodReturnValueReady(returnValue)) {
                alt.clearInterval(interval);
                return resolve(native.getScaleformMovieMethodReturnValueBool(returnValue));
            }
        }, 0);
    });
}
export function gotoCoords(movePos, moveRot) {
    return new Promise((resolve, reject)=>{
        let coords = native.getEntityCoords(alt.Player.local.scriptID, false);
        if (coords.x >= movePos.x - 0.01 && coords.x <= movePos.x + 0.01 && coords.y >= movePos.y - 0.01 && coords.y <= movePos.y + 0.01) return resolve(true);
        native.taskGoStraightToCoord(alt.Player.local.scriptID, movePos.x, movePos.y, movePos.z, 1, 5, moveRot.toDegrees().z, 0);
        let interval = alt.setInterval(()=>{
            if (coords.x >= movePos.x - 0.01 && coords.x <= movePos.x + 0.01 && coords.y >= movePos.y - 0.01 && coords.y <= movePos.y + 0.01) {
                alt.clearInterval(interval);
                return resolve(true);
            }
        }, 0);
    });
}
export function isCollisionLoaded(player) {
    return new Promise((resolve, reject)=>{
        if (native.hasCollisionLoadedAroundEntity(player.scriptID)) return resolve(true);
        native.requestCollisionAtCoord(player.pos.x, player.pos.y, player.pos.z);
        let interval = alt.setInterval(()=>{
            if (native.hasCollisionLoadedAroundEntity(player.scriptID)) {
                alt.clearInterval(interval);
                return resolve(true);
            }
        }, 0);
    });
}
export function registerTarget(name, objectModel) {
    return new Promise((resolve, reject)=>{
        if (native.isNamedRendertargetRegistered(name)) return resolve(true);
        native.registerNamedRendertarget(name, false);
        native.linkNamedRendertarget(alt.hash(objectModel));
        let interval = alt.setInterval(()=>{
            if (native.isNamedRendertargetRegistered(name)) {
                alt.clearInterval(interval);
                return resolve(true);
            }
        }, 0);
    });
}
export function clearTattoos(entity) {
    native.clearPedDecorations(entity.scriptID);
}
export function setTattoo(entity, collection, hash) {
    native.addPedDecorationFromHashes(entity.scriptID, alt.hash(collection), alt.hash(hash));
}
export function setCorrectTattoos() {
    clearTattoos(alt.Player.local);
    for(var i in playerTattoos)setTattoo(alt.Player.local, playerTattoos[i].collection, playerTattoos[i].hash);
}
alt.onServer("Client:Utilities:setTattoos", (tattooJSON)=>{
    playerTattoos = JSON.parse(tattooJSON);
    setCorrectTattoos();
});
export function setClothes(entity, compId, draw, tex) {
    native.setPedComponentVariation(entity.scriptID, compId, draw, tex, 0);
}
export default {
    loadClipsetAsync,
    loadAnimDictAsync,
    loadStreamedTextureDictAsync,
    loadModelAsync,
    isCollisionLoaded,
    clearTattoos,
    setTattoo,
    setCorrectTattoos,
    setClothes
};
