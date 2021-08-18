import * as alt from 'alt-client';
import * as native from 'natives';
import { loadModelAsync } from '../utilities';
let wheelCoords = new alt.Vector3(1111.0593, 229.8342, -50.38);
let wheelModel = null;
let interval = null;
let isRolling = false;
class Wheel {
    static async loadWheel() {
        await loadModelAsync('vw_prop_vw_luckywheel_02a');
        wheelModel = native.createObject(alt.hash('vw_prop_vw_luckywheel_02a'), wheelCoords.x, wheelCoords.y, wheelCoords.z, false, false, true);
        native.setEntityHeading(wheelModel, 0);
    }
    static async prepareRoll() {
        if (wheelModel == null || wheelModel == undefined) return;
        if (!isRolling) {
            isRolling = true;
            /**let ped: number = alt.Player.local.scriptID;
            let lib = 'anim_casino_a@amb@casino@games@lucky7wheel@female';
            if (native.isPedMale(ped)) {
                lib = 'anim_casino_a@amb@casino@games@lucky7wheel@male';
            }
            await loadAnimDictAsync(lib);
            let anim = 'enter_right_to_baseidle';
            let movePos = new alt.Vector3(1109.221923828125, 229.37142944335938, -49.6446533203125);
            let moveRot = new alt.Vector3(0, 0, -1.4842170476913452);
            await gotoCoords(movePos, moveRot);
            native.taskPlayAnim(ped, lib, anim, 8.0, -8.0, -1, 0, 0, false, false, false);**/ alt.emitServer("Client:Casino:DoRoll");
        }
    }
    static startRoll(priceIndex) {
        isRolling = true;
        native.setEntityHeading(wheelModel, 0);
        native.setEntityRotation(wheelModel, 0, 0, 0, 1, true);
        let speedIntCnt = 1;
        let rollspeed = 1;
        let winAngle = (priceIndex - 1) * 18;
        let rollAngle = winAngle + 360 * 8;
        let midLength = rollAngle / 2;
        let intCnt = 0;
        interval = alt.everyTick(()=>{
            if (speedIntCnt > 0) {
                let retval = native.getEntityRotation(wheelModel, 1);
                if (rollAngle > midLength) {
                    speedIntCnt = speedIntCnt + 1;
                } else {
                    speedIntCnt = speedIntCnt - 1;
                    if (speedIntCnt < 0) {
                        speedIntCnt = 0;
                    }
                }
                intCnt = intCnt + 1;
                rollspeed = speedIntCnt / 10;
                let wheelY = retval.y - rollspeed;
                rollAngle = rollAngle - rollspeed;
                native.setEntityRotation(wheelModel, 0, wheelY, 0, 1, true);
            }
        });
    }
    static finishRoll() {
        isRolling = false;
    }
    static unloadWheel() {
        alt.clearEveryTick(interval);
        native.deleteObject(wheelModel);
        wheelModel = null;
        native.setModelAsNoLongerNeeded(alt.hash('vw_prop_vw_luckywheel_02a'));
    }
}
export { Wheel as default };
