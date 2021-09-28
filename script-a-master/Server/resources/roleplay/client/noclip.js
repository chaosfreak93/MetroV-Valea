import * as alt from "alt-client";
import * as native from "natives";
let entity = null;
let enabled = false;
let defaultSpeed = 1;
let everyTick = null;
const KEYS = {
    FORWARD: 32,
    BACKWARD: 33,
    LEFT: 34,
    RIGHT: 35,
    UP: 22,
    DOWN: 36,
    SHIFT: 21
};
class NoClip {
    static start() {
        if (enabled) return;
        entity = alt.Player.local.vehicle ? alt.Player.local.vehicle : alt.Player.local;
        enabled = true;
        native.freezeEntityPosition(entity, true);
        native.setEntityCollision(entity, false, false);
        everyTick = alt.everyTick(NoClip.keyHandler);
    }
    static stop() {
        if (!enabled) return;
        enabled = false;
        native.setEntityCollision(entity, true, true);
        native.freezeEntityPosition(entity, false);
        alt.clearEveryTick(everyTick);
        entity = null;
    }
    static keyHandler() {
        let currentPos = entity.pos;
        let speed = defaultSpeed;
        let rot = native.getGameplayCamRot(2);
        let dirForward = NoClip.camVectorForward(rot);
        let dirRight = NoClip.camVectorRight(rot);
        if (native.isControlPressed(0, KEYS.SHIFT)) speed = speed * 5;
        if (native.isControlPressed(0, KEYS.FORWARD)) currentPos = NoClip.addSpeedToVector(currentPos, dirForward, speed);
        if (native.isControlPressed(0, KEYS.BACKWARD)) currentPos = NoClip.addSpeedToVector(currentPos, dirForward, -speed);
        if (native.isControlPressed(0, KEYS.LEFT)) currentPos = NoClip.addSpeedToVector(currentPos, dirRight, -speed, true);
        if (native.isControlPressed(0, KEYS.RIGHT)) currentPos = NoClip.addSpeedToVector(currentPos, dirRight, speed, true);
        let zModifier = 0;
        if (native.isDisabledControlPressed(0, KEYS.UP)) zModifier += speed;
        if (native.isDisabledControlPressed(0, KEYS.DOWN)) zModifier -= speed;
        if (!NoClip.isVectorEqual(new alt.Vector3(currentPos.x, currentPos.y, currentPos.z + zModifier), entity.pos)) native.setEntityCoordsNoOffset(entity.scriptID, currentPos.x, currentPos.y, currentPos.z + zModifier, false, false, false);
    }
    static addSpeedToVector(vector1, vector2, speed, lr = false) {
        return new alt.Vector3(vector1.x + vector2.x * speed, vector1.y + vector2.y * speed, lr == true ? vector1.z : vector1.z + vector2.z * speed);
    }
    static camVectorForward(camRot) {
        let rotInRad = {
            x: camRot.x * (Math.PI / 180),
            y: camRot.y * (Math.PI / 180),
            z: camRot.z * (Math.PI / 180) + Math.PI / 2
        };
        return new alt.Vector3(Math.cos(rotInRad.z), Math.sin(rotInRad.z), Math.sin(rotInRad.x));
    }
    static camVectorRight(camRot) {
        let rotInRad = {
            x: camRot.x * (Math.PI / 180),
            y: camRot.y * (Math.PI / 180),
            z: camRot.z * (Math.PI / 180)
        };
        return new alt.Vector3(Math.cos(rotInRad.z), Math.sin(rotInRad.z), Math.sin(rotInRad.x));
    }
    static isVectorEqual(vector1, vector2) {
        return vector1.x === vector2.x && vector1.y === vector2.y && vector1.z === vector2.z;
    }
}
export { NoClip as default };
