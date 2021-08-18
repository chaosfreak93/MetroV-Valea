import * as alt from 'alt-client';
import * as native from 'natives';
import { loadModelAsync } from '../utilities';
let podiumCoords = new alt.Vector3(1100, 220, -49.975);
let podiumModel = null;
let vehicleCoords = new alt.Vector3(1100, 220, -49.35);
let vehicleModel = null;
let podiumVehicle = 'dominator8';
let interval = null;
class Podium {
    static async loadPodium() {
        await loadModelAsync('vw_prop_vw_casino_podium_01a');
        await loadModelAsync(podiumVehicle);
        podiumModel = native.createObject(alt.hash('vw_prop_vw_casino_podium_01a'), podiumCoords.x, podiumCoords.y, podiumCoords.z, false, false, true);
        native.setEntityHeading(podiumModel, 0);
        vehicleModel = native.createVehicle(alt.hash(podiumVehicle), vehicleCoords.x, vehicleCoords.y, vehicleCoords.z, 0, false, false, true);
        native.setEntityHeading(vehicleModel, 0);
        native.setEntityInvincible(vehicleModel, true);
        native.setVehicleDoorsLocked(vehicleModel, 2);
        native.setVehicleModColor1(vehicleModel, 0, 0, 0);
        native.setVehicleModColor2(vehicleModel, 0, 0);
        native.setVehicleCustomPrimaryColour(vehicleModel, 9, 75, 135);
        native.setVehicleCustomSecondaryColour(vehicleModel, 9, 75, 135);
        native.setVehicleNumberPlateText(vehicleModel, "CASINO");
        interval = alt.setInterval(Podium.startPodium, 5);
    }
    static startPodium() {
        let podiumHeading = native.getEntityHeading(podiumModel);
        let podiumZ = podiumHeading - 0.05;
        native.setEntityHeading(podiumModel, podiumZ);
        if (vehicleModel == null || vehicleModel == undefined) {
            vehicleModel = native.createVehicle(alt.hash(podiumVehicle), vehicleCoords.x, vehicleCoords.y, vehicleCoords.z, 0, false, false, true);
            native.setEntityHeading(vehicleModel, 0);
            native.setEntityInvincible(vehicleModel, true);
            native.setVehicleDoorsLocked(vehicleModel, 2);
            native.setVehicleModColor1(vehicleModel, 0, 0, 0);
            native.setVehicleModColor2(vehicleModel, 0, 0);
            native.setVehicleCustomPrimaryColour(vehicleModel, 9, 75, 135);
            native.setVehicleCustomSecondaryColour(vehicleModel, 9, 75, 135);
            native.setVehicleNumberPlateText(vehicleModel, "CASINO");
        }
        let vehicleHeading = native.getEntityHeading(vehicleModel);
        let vehicleZ = vehicleHeading - 0.05;
        native.setEntityHeading(vehicleModel, vehicleZ);
    }
    static unloadPodium() {
        alt.clearInterval(interval);
        native.deleteObject(podiumModel);
        podiumModel = null;
        native.setModelAsNoLongerNeeded(alt.hash('vw_prop_vw_casino_podium_01a'));
        native.deleteVehicle(vehicleModel);
        vehicleModel = null;
    }
}
export { Podium as default };