import * as alt from 'alt-client';
import * as native from 'natives';

let entity: any = null;
let enabled: boolean = false;
let defaultSpeed: number = 1.0;
let everyTick: number = null;
const KEYS = {
    FORWARD: 32,
    BACKWARD: 33,
    LEFT: 34,
    RIGHT: 35,
    UP: 22,
    DOWN: 36,
    SHIFT: 21,
};

export default class NoClip {


    static start(): void {
        if (enabled) return;
        entity = alt.Player.local.vehicle ? alt.Player.local.vehicle : alt.Player.local;
        enabled = true;
        native.freezeEntityPosition(entity, true);
        native.setEntityCollision(entity, false, false);
        everyTick = alt.everyTick(NoClip.keyHandler);
    }

    static stop(): void {
        if (!enabled) return;
        enabled = false;
        native.setEntityCollision(entity, true, true);
        native.freezeEntityPosition(entity, false);
        alt.clearEveryTick(everyTick);
        entity = null;
    }

    static keyHandler(): void {
        let currentPos: alt.Vector3 = entity.pos;
        let speed: number = defaultSpeed;
        let rot: alt.Vector3 = native.getGameplayCamRot(2);
        let dirForward: alt.Vector3 = NoClip.camVectorForward(rot);
        let dirRight: alt.Vector3 = NoClip.camVectorRight(rot);

        if (native.isControlPressed(0, KEYS.SHIFT)) speed = speed * 5;

        if (native.isControlPressed(0, KEYS.FORWARD)) currentPos = NoClip.addSpeedToVector(currentPos, dirForward, speed);
        if (native.isControlPressed(0, KEYS.BACKWARD)) currentPos = NoClip.addSpeedToVector(currentPos, dirForward, -speed);
        if (native.isControlPressed(0, KEYS.LEFT)) currentPos = NoClip.addSpeedToVector(currentPos, dirRight, -speed, true);
        if (native.isControlPressed(0, KEYS.RIGHT)) currentPos = NoClip.addSpeedToVector(currentPos, dirRight, speed, true);
        let zModifier: number = 0;
        if (native.isDisabledControlPressed(0, KEYS.UP)) zModifier += speed;
        if (native.isDisabledControlPressed(0, KEYS.DOWN)) zModifier -= speed;

        if (!NoClip.isVectorEqual(new alt.Vector3(currentPos.x, currentPos.y, currentPos.z + zModifier), entity.pos)) native.setEntityCoordsNoOffset(entity.scriptID, currentPos.x, currentPos.y, currentPos.z + zModifier, false, false, false);
    }

    static addSpeedToVector(vector1: alt.Vector3, vector2: alt.Vector3, speed: number, lr: boolean = false): alt.Vector3 {
        return new alt.Vector3(
            vector1.x + vector2.x * speed,
            vector1.y + vector2.y * speed,
            lr == true ? vector1.z : vector1.z + vector2.z * speed
        );
    }
    
    static camVectorForward(camRot: alt.Vector3): alt.Vector3 {
        let rotInRad = {
            x: camRot.x * (Math.PI / 180),
            y: camRot.y * (Math.PI / 180),
            z: camRot.z * (Math.PI / 180) + Math.PI / 2,
        };
    
        return new alt.Vector3(Math.cos(rotInRad.z), Math.sin(rotInRad.z), Math.sin(rotInRad.x));
    }
    
    static camVectorRight(camRot: alt.Vector3): alt.Vector3 {
        let rotInRad = {
            x: camRot.x * (Math.PI / 180),
            y: camRot.y * (Math.PI / 180),
            z: camRot.z * (Math.PI / 180),
        };
    
        return new alt.Vector3(Math.cos(rotInRad.z), Math.sin(rotInRad.z), Math.sin(rotInRad.x));
    }
    
    static isVectorEqual(vector1: alt.Vector3, vector2: alt.Vector3): boolean {
        return (
            vector1.x === vector2.x &&
            vector1.y === vector2.y &&
            vector1.z === vector2.z
        );
    }
}