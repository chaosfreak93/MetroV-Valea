/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as native from 'natives';

let fov_max = 110;
let fov_min = 7.5; //max zoom level (smaller fov is more zoom)
let zoomspeed = 3.0; //camera zoom speed
let speed_lr = 8.0; //speed by which the camera pans left-right
let speed_ud = 8.0; //speed by which the camera pans up-down
let toggle_helicam = 51; //control id of the button by which to toggle the helicam mode. Default: INPUT_CONTEXT (E)
let toggle_vision = 25; //control id to toggle vision mode. Default: INPUT_AIM (Right mouse btn)
let toggle_rappel = 22; //control id to rappel out of the heli. Default: INPUT_JUMP (spacebar)
let toggle_spotlight = 183; //control id to toggle the front spotlight Default: INPUT_PhoneCameraGrid (G)
let toggle_lock_on = 21; //control id to lock onto a vehicle with the camera. Default is INPUT_SPRINT (shift)
let minHeightAboveGround = 1.5; //default: 1.5. Minimum height above ground to activate Heli Cam (in metres). Should be between 1 and 20.

let helicam = false; //is in helicam
let fov = (fov_max + fov_min) * 0.5;
let vision_state = 0; //0 is normal, 1 is night vision, 2 is thermal vision
let spotlight_state = false;

alt.everyTick(() => {
    if (IsPlayerInPolmav() || IsPlayerInMedicmav()) {
        let lPed = native.getPlayerPed(-1);
        let heli = native.getVehiclePedIsIn(lPed);

        if (IsHeliHighEnough(heli)) {
            if (native.isControlJustPressed(0, toggle_helicam) && !helicam) {
                native.playSoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false);
                helicam = true;
            }
        }

        if (native.isControlJustPressed(0, toggle_rappel)) {
            if (native.getPedInVehicleSeat(heli, 1) == lPed || native.getPedInVehicleSeat(heli, 2) == lPed){
                native.playSoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false);
                native.taskRappelFromHeli(lPed, 1);
            } else {
                native.playSoundFrontend(-1, "5_Second_Timer", "DLC_HEISTS_GENERAL_FRONTEND_SOUNDS", false);
            }
        }

        if (native.isControlJustPressed(0, toggle_spotlight) && native.getPedInVehicleSeat(heli, -1) == lPed) {
            spotlight_state = !spotlight_state;
            alt.emitServer("heli:spotlight", spotlight_state);
            native.playSoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false);
        } 
    }

    if (helicam) {
        let scaleform = native.requestScaleformMovie("HELI_CAM");
        if (native.hasScaleformMovieLoaded(scaleform)) {
            let lPed = native.getPlayerPed(-1);
            let heli = native.getVehiclePedIsIn(lPed);
            let cam = native.createCam("DEFAULT_SCRIPTED_FLY_CAMERA", true);
            native.attachCamToEntity(cam, heli, 0.0, 0.0, -1.5, true);
            native.setCamRot(cam, 0.0, 0.0, native.getEntityHeading(heli), 2);
            native.setCamFov(cam, fov);
            native.renderScriptCams(true, false, 0, 1, 0);

            let locked_on_vehicle = null;
            if (helicam && !native.isEntityDead(lPed) && (native.getVehiclePedIsIn(lPed) == heli) && IsHeliHighEnough(heli)) {
                if (native.isControlJustPressed(0, toggle_helicam)) {
                    native.playSoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false);
                    stopCam(cam, scaleform);
                }
                if (native.isControlJustPressed(0, toggle_vision)) {
                    native.playSoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false);
                    ChangeVision();
                }

                native.disableControlAction(0, 75, true);
                native.disableControlAction(27, 75, true);

                let vehicle = null;
                let zoomvalue = (1.0 / (fov_max - fov_min)) * (fov - fov_min);

                if (locked_on_vehicle) {
                    if (native.doesEntityExist(locked_on_vehicle)) {
                        vehicle = locked_on_vehicle;

                        native.pointCamAtEntity(cam, locked_on_vehicle, 0.0, 0.0, 0.0, true);
                        if (native.isControlJustPressed(0, toggle_lock_on)) {
                            native.playSoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false);
                            locked_on_vehicle = null;
                            let rot = native.getCamRot(cam, 2);
                            let fov = native.getCamFov(cam);
                            let old_cam = cam;
                            native.destroyCam(old_cam, false);
                            cam = native.createCam("DEFAULT_SCRIPTED_FLY_CAMERA", true);
                            native.attachCamToEntity(cam, heli, 0.0, 0.0, -1.5, true);
                            native.setCamRot(cam, rot.x, rot.y, rot.z, 2);
                            native.setCamFov(cam, fov);
                            native.renderScriptCams(true, false, 0, 1, 0);
                        }
                    } else {
                        locked_on_vehicle = null;
                    }
                } else {
                    CheckInputRotation(cam, zoomvalue);
                    let vehicle_detected = GetVehicleInView(cam);
                    if (native.doesEntityExist(vehicle_detected)) {
                        vehicle = vehicle_detected;

                        if (native.isControlJustPressed0, toggle_lock_on) {
                            native.playSoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false);
                            locked_on_vehicle = vehicle_detected;
                        }
                    }
                }
                HandleZoom(cam);
                HideHUDThisFrame();

                HandleSpotlight(cam);

                native.beginScaleformMovieMethod(scaleform, "SET_DISPLAY_CONFIG");
                native.scaleformMovieMethodAddParamInt(0);
                native.scaleformMovieMethodAddParamInt(0);
                native.scaleformMovieMethodAddParamFloat(0.0);
                native.scaleformMovieMethodAddParamFloat(0.0);
                native.scaleformMovieMethodAddParamFloat(0.0);
                native.scaleformMovieMethodAddParamFloat(0.0);
                native.scaleformMovieMethodAddParamBool(true);
                native.scaleformMovieMethodAddParamBool(true);
                native.scaleformMovieMethodAddParamBool(false);
                native.endScaleformMovieMethod();

                native.beginScaleformMovieMethod(scaleform, "SET_ALT_FOV_HEADING");
                native.scaleformMovieMethodAddParamFloat(native.getEntityCoords(heli).z);
                native.scaleformMovieMethodAddParamFloat(zoomvalue);
                native.scaleformMovieMethodAddParamFloat(native.getCamRot(cam, 2).z);
                native.endScaleformMovieMethod();

                native.drawScaleformMovieFullscreen(scaleform, 255, 255, 255, 255);

                let playerCoords = native.getEntityCoords(lPed);
                let streetname = native.getStreetNameFromHashKey(native.getStreetNameAtCoord(playerCoords.x, playerCoords.y, playerCoords.z));
                let roadHashNearHeli;

                if (vehicle != null) {
                    let vehicleCoords = native.getEntityCoords(vehicle);
                    let vehstreetname = native.getStreetNameFromHashKey(native.getStreetNameAtCoord(vehicleCoords.x, vehicleCoords.y, vehicleCoords.z));
                    let vehspd = (native.getEntitySpeed(vehicle) * 3.6) + " km/h";

                    //TODO: Display Speed and Streetname
                }
            }
        }
    }
});

function stopCam(cam, scaleform) {
    helicam = false;
    fov = (fov_max + fov_min) * 0.5;
    native.renderScriptCams(false, false, 0, 1, 0);
    native.setScaleformMovieAsNoLongerNeeded(scaleform);
    native.destroyCam(cam);
    native.setNightvision(false);
    native.setSeethrough(false);
    vision_state = 0;
    spotlight_state = 0;
}

function IsPlayerInPolmav() {
    let vehicle = native.getVehiclePedIsIn(native.getPlayerPed(-1));
    return native.isVehicleModel(vehicle, alt.hash("polmav"));
}

function IsPlayerInMedicmav() {
    let vehicle = native.getVehiclePedIsIn(native.getPlayerPed(-1));
    return native.isVehicleModel(vehicle, alt.hash("medicmav"));
}

function IsHeliHighEnough(heli) {
    return native.getEntityHeightAboveGround(heli) > minHeightAboveGround;
}

function ChangeVision() {
    if (vision_state == 0) {
        native.setNightvision(true);
        vision_state = 1;
    } else if (vision_state == 1) {
        native.setNightvision(false);
        native.setSeethrough(true);
        vision_state = 2;
    } else {
        native.setSeethrough(false);
        vision_state = 0;
    }
}

function HideHUDThisFrame() {
    native.hideHelpTextThisFrame();
    native.hideHudAndRadarThisFrame();
    native.hideHudComponentThisFrame(1);
    native.hideHudComponentThisFrame(2);
    native.hideHudComponentThisFrame(3);
    native.hideHudComponentThisFrame(4);
    native.hideHudComponentThisFrame(7);
    native.hideHudComponentThisFrame(8);
    native.hideHudComponentThisFrame(9);
    native.hideHudComponentThisFrame(11);
    native.hideHudComponentThisFrame(12);
    native.hideHudComponentThisFrame(13);
    native.hideHudComponentThisFrame(15);
    native.hideHudComponentThisFrame(18);
    native.hideHudComponentThisFrame(19);
    native.hideHudComponentThisFrame(21);
}

function CheckInputRotation(cam, zoomvalue) {
    let rightAxisX = native.getDisabledControlNormal(0, 220);
    let rightAxisY = native.getDisabledControlNormal(0, 221);
    let rotation = native.getCamRot(cam, 2);
    let new_z = rotation.z + rightAxisX * -1.0 * (speed_ud) * (zoomvalue + 0.1);
    let new_x = Math.max(Math.min(20.0, rotation.x + rightAxisY * -1.0 * (speed_lr) * (zoomvalue + 0.1)), -89.5);
    native.setCamRot(cam, new_x, 0.0, new_z, 2);
}

function HandleZoom(cam) {
    if (native.isControlJustPressed(0, 241)) {
        fov = Math.max(fov - zoomspeed, fov_min);
    }
    if (native.isControlJustPressed(0, 242)) {
        fov = Math.min(fov + zoomspeed, fov_max);
    }
    let current_fov = native.getCamFov(cam);
    if (Math.abs(fov - current_fov) < 0.1) {
        fov = current_fov;
    }
    native.setCamFov(cam, current_fov + (fov - current_fov) * 0.05);
}

function GetVehicleInView(cam) {
    let coords = native.getCamCoord(cam);
    let forward_vector = RotAnglesToVec(native.getCamRot(cam, 2));
    let rayhandle = native.startShapeTestLosProbe(coords.x, coords.y, coords.z, coords + (forward_vector * 350.0), 10, native.getVehiclePedIsIn(native.getPlayerPed(-1)), 0);
    let [ a, b, c, d, entityHit ] = native.getShapeTestResult(rayhandle);
    if (entityHit > 0 && native.isEntityAVehicle(entityHit)) {
        return entityHit;
    } else {
        return null;
    }
}

let currentPlayerId = alt.Player.local.id;

function HandleSpotlight(cam) {
    if (native.isControlJustPressed(0, toggle_spotlight)) {
        native.playSoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false);
        spotlight_state = !spotlight_state;
        if (spotlight_state) {
            alt.emitServer("heli:spotlight_on", 0);
        } else {
            alt.emitServer("heli:spotlight_off", 0);
        }
    }
    if (spotlight_state) {
        let rotation = native.getCamRot(cam, 2);
        let forward_vector = RotAnglesToVec(rotation);
        let camcoords = native.getCamCoord(cam);
        native.drawSpotLight(camcoords, forward_vector, 255, 255, 255, 300.0, 0.5, 0.5, 7.50, 75.0);
        alt.emitServer("heli:spotlight_update", {camcoords: camcoords, forward_vector: forward_vector});
    }
}

let spotlights = {};

alt.everyTick(() => {
    if (spotlights) {
        for (let i = 0; i < spotlights.length; i++) {
            if (spotlights[i].enabled && spotlights[i].playerid != alt.Player.local.id && spotlights[i].camcoords != null && spotlights[i].forward_vector != null) {
                native.drawSpotLight(spotlights[i].camcoords, spotlights[i].forward_vector, 255, 255, 255, 300.0, 0.5, 0.5, 7.50, 75.0);
            }
        }
    }
});

alt.onServer("heli:spotlight_on", (playerid) => {
    spotlights[playerid] = {
        playerid: playerid,
        camcoords: null,
        forward_vector: null,
        enabled: true
    }
});

alt.onServer("heli:spotlight_off", (playerid) => {
    spotlights[playerid] = null;
});

alt.onServer("heli:spotlight_update", (playerid, data) => {
    spotlights[playerid].camcoords = data.camcoords;
    spotlights[playerid].forward_vector = data.forward_vector;
})

function RotAnglesToVec(rot) {
    let pi = Math.PI;
    let z = rot.z * (pi/180);
    let x = rot.x * (pi/180);
    let num = Math.abs(Math.cos(x));
    return new alt.Vector3(-Math.sin(z) * num, Math.cos(z) * num, Math.sin(x));
}