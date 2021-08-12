import * as alt from 'alt-client';
import * as native from 'natives';
import { loadAnimDictAsync } from './utilities';
class Fingerpointing {
    static async start() {
        if (!this.active) {
            this.active = true;
            await loadAnimDictAsync("anim@mp_point");
            native.setPedCurrentWeaponVisible(this.localPlayer.scriptID, false, true, true, true);
            native.setPedConfigFlag(this.localPlayer.scriptID, 36, true);
            native.taskMoveNetworkByName(this.localPlayer.scriptID, "task_mp_pointing", 0.5, false, "anim@mp_point", 24);
            native.removeAnimDict("anim@mp_point");
            this.cleanStart = true;
            this.interval = alt.setInterval(this.process.bind(this), 0);
        }
    }
    static stop() {
        if (this.active) {
            if (this.interval) {
                alt.clearInterval(this.interval);
            }
            this.interval = null;
            this.active = false;
            if (this.cleanStart) {
                this.cleanStart = false;
                native.requestTaskMoveNetworkStateTransition(this.localPlayer.scriptID, "Stop");
                if (!native.isPedInjured(this.localPlayer.scriptID)) {
                    native.clearPedSecondaryTask(this.localPlayer.scriptID);
                }
                if (!native.isPedInAnyVehicle(this.localPlayer.scriptID, true)) {
                    native.setPedCurrentWeaponVisible(this.localPlayer.scriptID, true, true, true, true);
                }
                native.setPedConfigFlag(this.localPlayer.scriptID, 36, false);
                native.clearPedSecondaryTask(this.localPlayer.scriptID);
            }
        }
    }
    static getRelativePitch() {
        let camRot = native.getGameplayCamRot(2);
        return camRot.x - native.getEntityPitch(this.localPlayer.scriptID);
    }
    static process() {
        if (this.active) {
            native.isTaskMoveNetworkActive(this.localPlayer.scriptID);
            let camPitch = this.getRelativePitch();
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
            let coords = native.getOffsetFromEntityInWorldCoords(this.localPlayer.scriptID, cosCamHeading * -0.2 - sinCamHeading * (0.4 * camHeading + 0.3), sinCamHeading * -0.2 + cosCamHeading * (0.4 * camHeading + 0.3), 0.6);
            let ray = native.startShapeTestCapsule(coords.x, coords.y, coords.z - 0.2, coords.x, coords.y, coords.z + 0.2, 1, 95, this.localPlayer.scriptID, 7);
            let [_, blocked, coords1, coords2, entity] = native.getShapeTestResult(ray, false, null, null, null);
            native.setTaskMoveNetworkSignalFloat(this.localPlayer.scriptID, "Pitch", camPitch);
            native.setTaskMoveNetworkSignalFloat(this.localPlayer.scriptID, "Heading", camHeading * -1 + 1);
            native.setTaskMoveNetworkSignalBool(this.localPlayer.scriptID, "isBlocked", blocked);
            native.setTaskMoveNetworkSignalBool(this.localPlayer.scriptID, "isFirstPerson", native._0xEE778F8C7E1142E2(native._0x19CAFA3C87F7C2FF()) === 4);
        }
    }
}
Fingerpointing.active = false;
Fingerpointing.interval = null;
Fingerpointing.cleanStart = false;
Fingerpointing.localPlayer = alt.Player.local;
export { Fingerpointing as default };
alt.on('keydown', (key)=>{
    if (key == 'B'.charCodeAt(0)) {
        Fingerpointing.start();
    }
});
alt.on('keyup', (key)=>{
    if (key == 'B'.charCodeAt(0)) {
        Fingerpointing.stop();
    }
});
