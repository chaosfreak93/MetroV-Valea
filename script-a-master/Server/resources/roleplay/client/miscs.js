import * as native from 'natives';
import * as alt from 'alt-client';
alt.onServer("Client:DoorManager:ManageDoor", (doorHash, doorHash2, pos, pos2, isLocked)=>{
    if (doorHash != undefined && doorHash2 != undefined && pos != undefined && pos2 != undefined && isLocked != undefined) {
        // game.doorControl(alt.hash(hash), pos.x, pos.y, pos.z, isLocked, 0.0, 50.0, 0.0); //isLocked (0) = Open | isLocked (1) = True
        native.setStateOfClosestDoorOfType(alt.hash(doorHash), pos.x, pos.y, pos.z, isLocked, 0, false);
        if (doorHash2 != "None") {
            native.setStateOfClosestDoorOfType(alt.hash(doorHash2), pos2.x, pos2.y, pos2.z, isLocked, 0, false);
        }
    }
});
alt.setInterval(()=>{
    if ((alt.Player.local.getSyncedMeta("HasHandcuffs") == true || alt.Player.local.getSyncedMeta("HasRopeCuffs") == true) && !native.isEntityPlayingAnim(alt.Player.local.scriptID, "mp_arresting", "sprint", 3)) {
        native.taskPlayAnim(alt.Player.local.scriptID, "mp_arresting", "sprint", 8, -8, -1, 49, 0, false, false, false);
    } else if (alt.Player.local.getSyncedMeta("HasFootCuffs") == true && !native.isEntityPlayingAnim(alt.Player.local.scriptID, "mp_arresting", "idle", 3)) {
        native.taskPlayAnim(alt.Player.local.scriptID, "mp_arresting", "idle", 8, -8, -1, 49, 0, false, false, false);
    }
    if (alt.Player.local.getSyncedMeta("IsUnconscious") == true && alt.Player.local.getSyncedMeta("IsReviving") == false && !native.isEntityPlayingAnim(alt.Player.local.scriptID, "missheistfbi3b_ig8_2", "cower_loop_victim", 3)) {
        native.taskPlayAnim(alt.Player.local.scriptID, "missheistfbi3b_ig8_2", "cower_loop_victim", 1, 1, -1, 1, 1, false, false, false);
    } else if (alt.Player.local.getSyncedMeta("IsUnconscious") == true && alt.Player.local.getSyncedMeta("IsReviving") == true && !native.isEntityPlayingAnim(alt.Player.local.scriptID, "missheistfbi3b_ig8_2", "cpr_loop_victim", 3)) {
        native.taskPlayAnim(alt.Player.local.scriptID, "missheistfbi3b_ig8_2", "cpr_loop_victim", 1, 1, -1, 1, 1, false, false, false);
    } else if (alt.Player.local.getSyncedMeta("IsUnconscious") == false && alt.Player.local.getSyncedMeta("IsReviving") == true && !native.isEntityPlayingAnim(alt.Player.local.scriptID, "missheistfbi3b_ig8_2", "cpr_loop_paramedic", 3)) {
        native.taskPlayAnim(alt.Player.local.scriptID, "missheistfbi3b_ig8_2", "cpr_loop_paramedic", 1, 1, -1, 1, 1, false, false, false);
    }
}, 100);
alt.onServer('Client:Inventory:PlayEffect', (effectName, duration)=>{
    native.animpostfxPlay(effectName, duration, false);
});
alt.onServer('Client:Inventory:StopEffect', (effectName)=>{
    native.animpostfxStop(effectName);
});
alt.setInterval(()=>{
    native.invalidateIdleCam();
    native.invalidateVehicleIdleCam();
}, 20000);
export function setMinimapData() {
    const ZOOM_LEVEL_0 = alt.MapZoomData.get('ZOOM_LEVEL_0');
    ZOOM_LEVEL_0.fZoomScale = 2.73;
    ZOOM_LEVEL_0.fZoomSpeed = 0.9;
    ZOOM_LEVEL_0.fScrollSpeed = 0.08;
    ZOOM_LEVEL_0.vTilesX = 0;
    ZOOM_LEVEL_0.vTilesY = 0;
    const ZOOM_LEVEL_1 = alt.MapZoomData.get('ZOOM_LEVEL_1');
    ZOOM_LEVEL_1.fZoomScale = 2.8;
    ZOOM_LEVEL_1.fZoomSpeed = 0.9;
    ZOOM_LEVEL_1.fScrollSpeed = 0.08;
    ZOOM_LEVEL_1.vTilesX = 0;
    ZOOM_LEVEL_1.vTilesY = 0;
    const ZOOM_LEVEL_2 = alt.MapZoomData.get('ZOOM_LEVEL_2');
    ZOOM_LEVEL_2.fZoomScale = 8;
    ZOOM_LEVEL_2.fZoomSpeed = 0.9;
    ZOOM_LEVEL_2.fScrollSpeed = 0.08;
    ZOOM_LEVEL_2.vTilesX = 0;
    ZOOM_LEVEL_2.vTilesY = 0;
    const ZOOM_LEVEL_3 = alt.MapZoomData.get('ZOOM_LEVEL_3');
    ZOOM_LEVEL_3.fZoomScale = 11;
    ZOOM_LEVEL_3.fZoomSpeed = 0.9;
    ZOOM_LEVEL_3.fScrollSpeed = 0.08;
    ZOOM_LEVEL_3.vTilesX = 0;
    ZOOM_LEVEL_3.vTilesY = 0;
    const ZOOM_LEVEL_4 = alt.MapZoomData.get('ZOOM_LEVEL_4');
    ZOOM_LEVEL_4.fZoomScale = 16;
    ZOOM_LEVEL_4.fZoomSpeed = 0.9;
    ZOOM_LEVEL_4.fScrollSpeed = 0.08;
    ZOOM_LEVEL_4.vTilesX = 0;
    ZOOM_LEVEL_4.vTilesY = 0;
    const ZOOM_LEVEL_GOLF_COURSE = alt.MapZoomData.get('ZOOM_LEVEL_GOLF_COURSE');
    ZOOM_LEVEL_GOLF_COURSE.fZoomScale = 55;
    ZOOM_LEVEL_GOLF_COURSE.fZoomSpeed = 0;
    ZOOM_LEVEL_GOLF_COURSE.fScrollSpeed = 0.1;
    ZOOM_LEVEL_GOLF_COURSE.vTilesX = 2;
    ZOOM_LEVEL_GOLF_COURSE.vTilesY = 1;
    const ZOOM_LEVEL_INTERIOR = alt.MapZoomData.get('ZOOM_LEVEL_INTERIOR');
    ZOOM_LEVEL_INTERIOR.fZoomScale = 450;
    ZOOM_LEVEL_INTERIOR.fZoomSpeed = 0;
    ZOOM_LEVEL_INTERIOR.fScrollSpeed = 0.1;
    ZOOM_LEVEL_INTERIOR.vTilesX = 1;
    ZOOM_LEVEL_INTERIOR.vTilesY = 1;
    const ZOOM_LEVEL_GALLERY = alt.MapZoomData.get('ZOOM_LEVEL_GALLERY');
    ZOOM_LEVEL_GALLERY.fZoomScale = 4.5;
    ZOOM_LEVEL_GALLERY.fZoomSpeed = 0;
    ZOOM_LEVEL_GALLERY.fScrollSpeed = 0;
    ZOOM_LEVEL_GALLERY.vTilesX = 0;
    ZOOM_LEVEL_GALLERY.vTilesY = 0;
    const ZOOM_LEVEL_GALLERY_MAXIMIZE = alt.MapZoomData.get('ZOOM_LEVEL_GALLERY_MAXIMIZE');
    ZOOM_LEVEL_GALLERY_MAXIMIZE.fZoomScale = 11;
    ZOOM_LEVEL_GALLERY_MAXIMIZE.fZoomSpeed = 0;
    ZOOM_LEVEL_GALLERY_MAXIMIZE.fScrollSpeed = 0;
    ZOOM_LEVEL_GALLERY_MAXIMIZE.vTilesX = 2;
    ZOOM_LEVEL_GALLERY_MAXIMIZE.vTilesY = 3;
}
alt.setInterval(()=>{
    alt.setMsPerGameMinute(60000);
    let date = new Date();
    native.setClockTime(date.getHours(), date.getMinutes(), date.getSeconds());
}, 3600000);
alt.everyTick(()=>{
    native.drawRect(0, 0, 0, 0, 0, 0, 0, 0, false);
    native.setPedConfigFlag(alt.Player.local.scriptID, 241, true);
    native.setPedConfigFlag(alt.Player.local.scriptID, 429, true);
    native.disableControlAction(0, 36, true);
    if (!alt.Player.local.vehicle || native.getVehicleClass(alt.Player.local.vehicle.scriptID) != 18) return;
    native.disableControlAction(1, 86, true);
});
export function setAudioData() {
    native.startAudioScene("FBI_HEIST_H5_MUTE_AMBIENCE_SCENE");
    native.cancelCurrentPoliceReport();
    native.clearAmbientZoneState("AZ_COUNTRYSIDE_PRISON_01_ANNOUNCER_GENERAL", true);
    native.clearAmbientZoneState("AZ_COUNTRYSIDE_PRISON_01_ANNOUNCER_WARNING", true);
    native.clearAmbientZoneState("AZ_COUNTRYSIDE_PRISON_01_ANNOUNCER_ALARM", true);
    native.setAmbientZoneState("", false, false);
    native.clearAmbientZoneState("AZ_DISTANT_SASQUATCH", false);
    native.setAudioFlag("LoadMPData", true);
    native.setAudioFlag("DisableFlightMusic", true);
}
alt.setInterval(()=>{
    native.setRadarAsExteriorThisFrame();
    native.setRadarAsInteriorThisFrame(alt.hash("h4_fake_islandx"), 4700, -5145, 0, 0);
}, 1);
export default {
    setMinimapData,
    setAudioData
};
