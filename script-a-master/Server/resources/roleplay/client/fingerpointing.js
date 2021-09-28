import * as alt from "alt-client";
import * as native from "natives";
import { loadAnimDictAsync } from "./utilities";
const player = alt.Player.local;
let active = false;
let interval = null;
let cleanStart = false;
class Fingerpointing {
    static async start() {
        if (!active) {
            active = true;
            await loadAnimDictAsync("anim@mp_point");
            native.setPedCurrentWeaponVisible(player.scriptID, false, true, true, true);
            native.setPedConfigFlag(player.scriptID, 36, true);
            native.taskMoveNetworkByName(player.scriptID, "task_mp_pointing", 0.5, false, "anim@mp_point", 24);
            native.removeAnimDict("anim@mp_point");
            cleanStart = true;
            interval = alt.setInterval(this.process.bind(this), 0);
        }
    }
    static stop() {
        if (active) {
            if (interval) {
                alt.clearInterval(interval);
            }
            interval = null;
            active = false;
            if (cleanStart) {
                cleanStart = false;
                native.requestTaskMoveNetworkStateTransition(player.scriptID, "Stop");
                if (!native.isPedInjured(player.scriptID)) {
                    native.clearPedSecondaryTask(player.scriptID);
                }
                if (!native.isPedInAnyVehicle(player.scriptID, true)) {
                    native.setPedCurrentWeaponVisible(player.scriptID, true, true, true, true);
                }
                native.setPedConfigFlag(player.scriptID, 36, false);
                native.clearPedSecondaryTask(player.scriptID);
            }
        }
    }
    static getRelativePitch() {
        let camRot = native.getGameplayCamRot(2);
        return camRot.x - native.getEntityPitch(player.scriptID);
    }
    static process() {
        if (active) {
            native.isTaskMoveNetworkActive(player.scriptID);
            let camPitch = Fingerpointing.getRelativePitch();
            if (camPitch < -70) {
                camPitch = -70;
            } else if (camPitch > 42) {
                camPitch = 42;
            }
            camPitch = (camPitch + 70) / 112;
            let camHeading = native.getGameplayCamRelativeHeading();
            let cosCamHeading = Math.cos(camHeading);
            let sinCamHeading = Math.sin(camHeading);
            if (camHeading < -180) {
                camHeading = -180;
            } else if (camHeading > 180) {
                camHeading = 180;
            }
            camHeading = (camHeading + 180) / 360;
            let coords = native.getOffsetFromEntityInWorldCoords(player.scriptID, cosCamHeading * -0.2 - sinCamHeading * (0.4 * camHeading + 0.3), sinCamHeading * -0.2 + cosCamHeading * (0.4 * camHeading + 0.3), 0.6);
            let ray = native.startShapeTestCapsule(coords.x, coords.y, coords.z - 0.2, coords.x, coords.y, coords.z + 0.2, 1, 95, player.scriptID, 7);
            let [_, blocked, coords1, coords2, entity] = native.getShapeTestResult(ray, false, null, null, null);
            native.setTaskMoveNetworkSignalFloat(player.scriptID, "Pitch", camPitch);
            native.setTaskMoveNetworkSignalFloat(player.scriptID, "Heading", camHeading * -1 + 1);
            native.setTaskMoveNetworkSignalBool(player.scriptID, "isBlocked", blocked);
            native.setTaskMoveNetworkSignalBool(player.scriptID, "isFirstPerson", native._0xEE778F8C7E1142E2(native._0x19CAFA3C87F7C2FF()) === 4);
        }
    }
}
export { Fingerpointing as default };
alt.on("keydown", (key)=>{
    if (key == "B".charCodeAt(0)) {
        Fingerpointing.start();
    }
});
alt.on("keyup", (key)=>{
    if (key == "B".charCodeAt(0)) {
        Fingerpointing.stop();
    }
});
