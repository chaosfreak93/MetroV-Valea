import * as alt from 'alt-client';
import * as native from 'natives';
class Raycast {
    static line(radius, distance) {
        let position = native.getPedBoneCoords(alt.Player.local.scriptID, 31086, 0.5, 0, 0);
        let direction = Raycast.GetDirectionFromRotation(native.getGameplayCamRot(2));
        let farAway = new alt.Vector3(direction.x * distance + position.x, direction.y * distance + position.y, direction.z * distance + position.z);
        let ray = native.startShapeTestCapsule(position.x, position.y, position.z, farAway.x, farAway.y, farAway.z, radius, -1, alt.Player.local.scriptID, 7);
        return Raycast.result(ray);
    }
    static result(ray) {
        let result = native.getShapeTestResult(ray, undefined, undefined, undefined, undefined);
        let hitEntity = result[4];
        if (!native.isEntityAPed(hitEntity) && !native.isEntityAnObject(hitEntity) && !native.isEntityAVehicle(hitEntity)) return undefined;
        return {
            isHit: result[1],
            pos: new alt.Vector3(result[2].x, result[2].y, result[2].z),
            hitEntity,
            entityType: native.getEntityType(hitEntity),
            entityHash: native.getEntityModel(hitEntity)
        };
    }
    static GetDirectionFromRotation(rotation) {
        var z = rotation.z * (Math.PI / 180);
        var x = rotation.x * (Math.PI / 180);
        var num = Math.abs(Math.cos(x));
        return new alt.Vector3(-Math.sin(z) * num, Math.cos(z) * num, Math.sin(x));
    }
}
export { Raycast as default };
