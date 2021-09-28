import * as alt from "alt-client";
import * as native from "natives";
import { loadModelAsync } from "../utilities";

let podiumCoords: alt.Vector3 = new alt.Vector3(1100.0, 220.0, -50.0);
let podiumModel: number = null;
let vehicleCoords: alt.Vector3 = new alt.Vector3(1100.0, 220.0, -49.35);
let vehicleModel: number = null;
let podiumVehicle: string = null;
let interval: number = null;

export default class Podium {
    static async loadPodium(): Promise<void> {
        podiumVehicle = alt.getSyncedMeta("podiumVehicle");
        await loadModelAsync("vw_prop_vw_casino_podium_01a");
        podiumModel = native.createObject(
            alt.hash("vw_prop_vw_casino_podium_01a"),
            podiumCoords.x,
            podiumCoords.y,
            podiumCoords.z,
            false,
            false,
            true,
        );
        native.setEntityHeading(podiumModel, 0);
        if (alt.getSyncedMeta("podiumVehicle") != "none") {
            await loadModelAsync(podiumVehicle);
            vehicleModel = native.createVehicle(
                alt.hash(podiumVehicle),
                vehicleCoords.x,
                vehicleCoords.y,
                vehicleCoords.z,
                0.0,
                false,
                false,
                true,
            );
            native.setEntityHeading(vehicleModel, 0);
            native.setEntityInvincible(vehicleModel, true);
            native.setVehicleDoorsLocked(vehicleModel, 2);
            native.setVehicleModColor1(vehicleModel, 0, 0, 0);
            native.setVehicleModColor2(vehicleModel, 0, 0);
            native.setVehicleCustomPrimaryColour(vehicleModel, 9, 75, 135);
            native.setVehicleCustomSecondaryColour(vehicleModel, 9, 75, 135);
            native.setVehicleNumberPlateText(vehicleModel, "CASINO");
        }
        interval = alt.setInterval(Podium.startPodium, 5);
    }

    static async startPodium(): Promise<void> {
        if (podiumVehicle != alt.getSyncedMeta("podiumVehicle") && alt.getSyncedMeta("podiumVehicle") != "none") {
            podiumVehicle = alt.getSyncedMeta("podiumVehicle");
            native.deleteVehicle(vehicleModel);
            vehicleModel = null;
            await loadModelAsync(podiumVehicle);
            vehicleModel = native.createVehicle(
                alt.hash(podiumVehicle),
                vehicleCoords.x,
                vehicleCoords.y,
                vehicleCoords.z,
                0.0,
                false,
                false,
                true,
            );
            native.setEntityHeading(vehicleModel, 0);
            native.setEntityInvincible(vehicleModel, true);
            native.setVehicleDoorsLocked(vehicleModel, 2);
            native.setVehicleModColor1(vehicleModel, 0, 0, 0);
            native.setVehicleModColor2(vehicleModel, 0, 0);
            native.setVehicleCustomPrimaryColour(vehicleModel, 9, 75, 135);
            native.setVehicleCustomSecondaryColour(vehicleModel, 9, 75, 135);
            native.setVehicleNumberPlateText(vehicleModel, "CASINO");
        } else if (alt.getSyncedMeta("podiumVehicle") == "none") {
            podiumVehicle = alt.getSyncedMeta("podiumVehicle");
            native.deleteVehicle(vehicleModel);
            vehicleModel = null;
        }
        if (podiumModel == null || podiumModel == undefined || vehicleModel == null || vehicleModel == undefined)
            return;
        let podiumHeading = native.getEntityHeading(podiumModel);
        let podiumZ = podiumHeading - 0.05;
        native.setEntityHeading(podiumModel, podiumZ);
        let vehicleHeading = native.getEntityHeading(vehicleModel);
        let vehicleZ = vehicleHeading - 0.05;
        native.setEntityHeading(vehicleModel, vehicleZ);
    }

    static unloadPodium(): void {
        alt.clearInterval(interval);
        interval = null;
        native.deleteObject(podiumModel);
        podiumModel = null;
        native.setModelAsNoLongerNeeded(alt.hash("vw_prop_vw_casino_podium_01a"));
        native.deleteVehicle(vehicleModel);
        vehicleModel = null;
    }
}
