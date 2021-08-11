import * as alt from 'alt-client';
import * as native from 'natives';
class NoClip {
    static start() {
        if (NoClip.enabled) return;
        NoClip.enabled = true;
        native.freezeEntityPosition(alt.Player.local.scriptID, true);
        this.everyTick = alt.everyTick(NoClip.keyHandler);
    }
    static stop() {
        if (!NoClip.enabled) return;
        NoClip.enabled = false;
        native.freezeEntityPosition(alt.Player.local.scriptID, false);
        alt.clearEveryTick(this.everyTick);
    }
    static keyHandler() {
        let currentPos = alt.Player.local.pos;
        let speed = NoClip.speed;
        let rot = native.getGameplayCamRot(2);
        let dirForward = camVectorForward(rot);
        let dirRight = camVectorRight(rot);
        if (native.isControlPressed(0, NoClip.KEYS.SHIFT)) speed = speed * 5;
        if (native.isControlPressed(0, NoClip.KEYS.FORWARD)) currentPos = addSpeedToVector(currentPos, dirForward, speed);
        if (native.isControlPressed(0, NoClip.KEYS.BACKWARD)) currentPos = addSpeedToVector(currentPos, dirForward, -speed);
        if (native.isControlPressed(0, NoClip.KEYS.LEFT)) currentPos = addSpeedToVector(currentPos, dirRight, -speed, true);
        if (native.isControlPressed(0, NoClip.KEYS.RIGHT)) currentPos = addSpeedToVector(currentPos, dirRight, speed, true);
        let zModifier = 0;
        if (native.isControlPressed(0, NoClip.KEYS.UP)) zModifier += speed;
        if (native.isControlPressed(0, NoClip.KEYS.DOWN)) zModifier -= speed;
        if (!isVectorEqual(new alt.Vector3(currentPos.x, currentPos.y, currentPos.z + zModifier), alt.Player.local.pos)) native.setEntityCoordsNoOffset(alt.Player.local.scriptID, currentPos.x, currentPos.y, currentPos.z + zModifier, false, false, false);
    }
}
NoClip.enabled = false;
NoClip.speed = 1;
NoClip.everyTick = null;
NoClip.KEYS = {
    FORWARD: 32,
    BACKWARD: 33,
    LEFT: 34,
    RIGHT: 35,
    UP: 22,
    DOWN: 36,
    SHIFT: 21
};
export { NoClip as default };
function addSpeedToVector(vector1, vector2, speed, lr = false) {
    return new alt.Vector3(vector1.x + vector2.x * speed, vector1.y + vector2.y * speed, lr === true ? vector1.z : vector1.z + vector2.z * speed);
}
function camVectorForward(camRot) {
    let rotInRad = {
        x: camRot.x * (Math.PI / 180),
        y: camRot.y * (Math.PI / 180),
        z: camRot.z * (Math.PI / 180) + Math.PI / 2
    };
    return new alt.Vector3(Math.cos(rotInRad.z), Math.sin(rotInRad.z), Math.sin(rotInRad.x));
}
function camVectorRight(camRot) {
    let rotInRad = {
        x: camRot.x * (Math.PI / 180),
        y: camRot.y * (Math.PI / 180),
        z: camRot.z * (Math.PI / 180)
    };
    return new alt.Vector3(Math.cos(rotInRad.z), Math.sin(rotInRad.z), Math.sin(rotInRad.x));
}
function isVectorEqual(vector1, vector2) {
    return vector1.x === vector2.x && vector1.y === vector2.y && vector1.z === vector2.z;
}
