/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as game from 'natives';

let loginBrowser = null;
let loginCam = null;
let loginPedHandle = null;
let loginModelHash = null;
const storage = alt.LocalStorage;

alt.onServer('Client:Login:CreateCEF', () => {
    if (loginBrowser == null) {
        loginCam = game.createCameraWithParams(alt.hash('DEFAULT_SCRIPTED_CAMERA'), 3280.0, 5220.0, 26.0, 0, 0, 240, 50, true, 2);
        game.setCamActive(loginCam, true);
        game.renderScriptCams(true, false, 0, true, false, 0);
        game.freezeEntityPosition(alt.Player.local.scriptID, true);
        alt.showCursor(true);
        alt.toggleGameControls(false);
        loginBrowser = new alt.WebView("http://resource/client/cef/login/index.html");
        loginBrowser.focus();
        loginBrowser.on("Client:Login:cefIsReady", () => {
            alt.setTimeout(() => {
                if (storage.get("username")) {
                    loginBrowser.emit("CEF:Login:setStorage", storage.get("username"), storage.get("password"));
                }
                loginBrowser.emit("CEF:Login:showArea", "login");
            }, 2000);
        });

        loginBrowser.on("Client:Login:sendLoginDataToServer", (name, password) => {
            if (storage.get("discordId")) {
                alt.emitServer("Server:Login:ValidateLoginCredentials", name, password, storage.get("discordId"));
            } else {
                if (alt.Discord.currentUser == null) {
                    loginBrowser.emit("CEF:Login:showError", "Bitte öffne Discord und starte alt:V neu.");
                    return;
                }
                alt.emitServer("Server:Login:ValidateLoginCredentials", name, password, alt.Discord.currentUser.id);
            }
        });

        loginBrowser.on("Client:Login:resetPW", (password) => {
            alt.emitServer("Server:Login:resetPW", password);
        });

        loginBrowser.on("Client:Register:sendRegisterDataToServer", (name, email, password, passwordrepeat) => {
            alt.emitServer("Server:Register:RegisterNewPlayer", name, email, password, passwordrepeat);
        });

        loginBrowser.on("Client:Charcreator:OpenCreator", () => {
            alt.emitServer("Server:Charcreator:CreateCEF");
            destroyLoginBrowser();
        });

        loginBrowser.on("Client:Login:DestroyCEF", () => {
            destroyLoginBrowser();
        });

        loginBrowser.on("Client:Charselector:KillCharacter", (charid) => {
            alt.emitServer("Server:Charselector:KillCharacter", charid);
        });

        loginBrowser.on("Client:Charselector:PreviewCharacter", (charid) => {
            alt.emitServer("Server:Charselector:PreviewCharacter", charid);
        });

        loginBrowser.on("Client:Charselector:spawnChar", (charid, spawnstr) => {
            alt.emitServer("Server:Charselector:spawnChar", spawnstr, charid);
        });

        loginBrowser.on("Client:Charcreator:SwitchOut", () => {
            if (loginCam != null) {
                game.renderScriptCams(false, false, 0, true, false, 0);
                game.setCamActive(loginCam, false);
                game.destroyCam(loginCam, true);
                loginCam = null;
            }
            game.switchOutPlayer(alt.Player.local.scriptID, 0, 1);
        });
    }
});

alt.onServer("Client:SpawnArea:setCharSkin", (facefeaturearray, headblendsarray, headoverlayarray) => {
    let facefeatures = JSON.parse(facefeaturearray);
    let headblends = JSON.parse(headblendsarray);
    let headoverlays = JSON.parse(headoverlayarray);

    game.setPedHeadBlendData(alt.Player.local.scriptID, parseFloat(headblends[0]), parseFloat(headblends[1]), 0, parseFloat(headblends[2]), parseFloat(headblends[5]), 0, parseFloat(headblends[3]), parseFloat(headblends[4]), 0, 0);
    game.setPedHeadOverlayColor(alt.Player.local.scriptID, 1, 1, parseInt(headoverlays[2][1]), 1);
    game.setPedHeadOverlayColor(alt.Player.local.scriptID, 2, 1, parseInt(headoverlays[2][2]), 1);
    game.setPedHeadOverlayColor(alt.Player.local.scriptID, 5, 2, parseInt(headoverlays[2][5]), 1);
    game.setPedHeadOverlayColor(alt.Player.local.scriptID, 8, 2, parseInt(headoverlays[2][8]), 1);
    game.setPedHeadOverlayColor(alt.Player.local.scriptID, 10, 1, parseInt(headoverlays[2][10]), 1);
    game.setPedEyeColor(alt.Player.local.scriptID, parseInt(headoverlays[0][14]));
    game.setPedHeadOverlay(alt.Player.local.scriptID, 0, parseInt(headoverlays[0][0]), parseInt(headoverlays[1][0]));
    game.setPedHeadOverlay(alt.Player.local.scriptID, 1, parseInt(headoverlays[0][1]), parseFloat(headoverlays[1][1]));
    game.setPedHeadOverlay(alt.Player.local.scriptID, 2, parseInt(headoverlays[0][2]), parseFloat(headoverlays[1][2]));
    game.setPedHeadOverlay(alt.Player.local.scriptID, 3, parseInt(headoverlays[0][3]), parseInt(headoverlays[1][3]));
    game.setPedHeadOverlay(alt.Player.local.scriptID, 4, parseInt(headoverlays[0][4]), parseInt(headoverlays[1][4]));
    game.setPedHeadOverlay(alt.Player.local.scriptID, 5, parseInt(headoverlays[0][5]), parseInt(headoverlays[1][5]));
    game.setPedHeadOverlay(alt.Player.local.scriptID, 6, parseInt(headoverlays[0][6]), parseInt(headoverlays[1][6]));
    game.setPedHeadOverlay(alt.Player.local.scriptID, 7, parseInt(headoverlays[0][7]), parseInt(headoverlays[1][7]));
    game.setPedHeadOverlay(alt.Player.local.scriptID, 8, parseInt(headoverlays[0][8]), parseInt(headoverlays[1][8]));
    game.setPedHeadOverlay(alt.Player.local.scriptID, 9, parseInt(headoverlays[0][9]), parseInt(headoverlays[1][9]));
    game.setPedHeadOverlay(alt.Player.local.scriptID, 10, parseInt(headoverlays[0][10]), parseInt(headoverlays[1][10]));
    game.setPedComponentVariation(alt.Player.local.scriptID, 2, parseInt(headoverlays[0][13]), 0, 0);
    game.setPedHairColor(alt.Player.local.scriptID, parseInt(headoverlays[2][13]), parseInt(headoverlays[1][13]));

    for (let i = 0; i < 20; i++) {
        game.setPedFaceFeature(alt.Player.local.scriptID, i, parseFloat(facefeatures[i]));
    }
});

alt.onServer("Client:SpawnArea:clearCharAccessory", (componentId) => {
    game.clearPedProp(alt.Player.local.scriptID, componentId);
});

alt.onServer("Client:Charselector:ViewCharacter", (gender, facefeaturearray, headblendsarray, headoverlayarray) => {
    spawnCharSelectorPed(gender, facefeaturearray, headblendsarray, headoverlayarray);
});

alt.onServer("Client:Login:SaveLoginCredentialsToStorage", (name, password, discordId) => {
    storage.set('username', name);
    storage.set('password', password);
    storage.set('discordId', discordId);
    storage.save();
});

alt.onServer("Client:Login:showError", (msg) => {
    if (loginBrowser != null) {
        loginBrowser.emit("CEF:Login:showError", msg);
    }
});

alt.onServer("Client:Login:showArea", (area) => {
    if (loginBrowser != null) {
        loginBrowser.emit("CEF:Login:showArea", area);
        if (area == "charselect") {
            if (loginCam != null) {
                game.renderScriptCams(false, false, 0, true, false, 0);
                game.setCamActive(loginCam, false);
                game.destroyCam(loginCam, true);
                loginCam = null;
            }
            game.setEntityAlpha(alt.Player.local.scriptID, 0, 0);
            loginCam = game.createCameraWithParams(alt.hash('DEFAULT_SCRIPTED_CAMERA'), 402.7, -1003.0, -98.6, 0, 0, 358, 18, true, 2);
            game.setCamActive(loginCam, true);
            game.renderScriptCams(true, false, 0, true, false, 0);
        }
    }
});

alt.onServer("Client:Charselector:sendCharactersToCEF", (chars) => {
    if (loginBrowser != null) {
        loginBrowser.emit("CEF:Charselector:sendCharactersToCEF", chars)
    }
});

let destroyLoginBrowser = function () {
    if (loginBrowser != null) {
        loginBrowser.destroy();
    }
    loginBrowser = null;
    game.renderScriptCams(false, false, 0, true, false, 0);
    if (loginCam != null) {
        game.setCamActive(loginCam, false);
        game.destroyCam(loginCam, true);
        loginCam = null;
    }
    if (loginPedHandle != null) {
        game.deletePed(loginPedHandle);
        loginPedHandle = null;
    }
    alt.showCursor(false);
    alt.toggleGameControls(true);
    game.freezeEntityPosition(alt.Player.local.scriptID, false);
    game.setEntityAlpha(alt.Player.local.scriptID, 255, 0);
    game.switchInPlayer(alt.Player.local.scriptID);
}

function spawnCharSelectorPed(gender, facefeaturearray, headblendsarray, headoverlayarray) {
    let facefeatures = JSON.parse(facefeaturearray);
    let headblends = JSON.parse(headblendsarray);
    let headoverlays = JSON.parse(headoverlayarray);

    if (loginPedHandle != null) {
        game.deletePed(loginPedHandle);
        loginPedHandle = null;
    }

    if (gender == true) {
        loginModelHash = alt.hash('mp_f_freemode_01');
        game.requestModel(loginModelHash);
    } else if (gender == false) {
        loginModelHash = alt.hash('mp_m_freemode_01');
        game.requestModel(loginModelHash);
    }
    alt.setTimeout(function () {
        if (game.hasModelLoaded(loginModelHash)) {
            loginPedHandle = game.createPed(4, loginModelHash, 402.778, -996.9758, -100.01465, 0, false, true);
            game.setEntityAlpha(loginPedHandle, 255, 0);
            game.setEntityHeading(loginPedHandle, 180.0);
            game.setEntityInvincible(loginPedHandle, true);
            game.disablePedPainAudio(loginPedHandle, true);
            game.freezeEntityPosition(loginPedHandle, true);
            game.taskSetBlockingOfNonTemporaryEvents(loginPedHandle, true);
            
            game.setPedHeadBlendData(loginPedHandle, parseFloat(headblends[0]), parseFloat(headblends[1]), 0, parseFloat(headblends[2]), parseFloat(headblends[5]), 0, parseFloat(headblends[3]), parseFloat(headblends[4]), 0, 0);
            game.setPedHeadOverlayColor(loginPedHandle, 1, 1, parseInt(headoverlays[2][1]), 1);
            game.setPedHeadOverlayColor(loginPedHandle, 2, 1, parseInt(headoverlays[2][2]), 1);
            game.setPedHeadOverlayColor(loginPedHandle, 5, 2, parseInt(headoverlays[2][5]), 1);
            game.setPedHeadOverlayColor(loginPedHandle, 8, 2, parseInt(headoverlays[2][8]), 1);
            game.setPedHeadOverlayColor(loginPedHandle, 10, 1, parseInt(headoverlays[2][10]), 1);
            game.setPedEyeColor(loginPedHandle, parseInt(headoverlays[0][14]));
            game.setPedHeadOverlay(loginPedHandle, 0, parseInt(headoverlays[0][0]), parseInt(headoverlays[1][0]));
            game.setPedHeadOverlay(loginPedHandle, 1, parseInt(headoverlays[0][1]), parseFloat(headoverlays[1][1]));
            game.setPedHeadOverlay(loginPedHandle, 2, parseInt(headoverlays[0][2]), parseFloat(headoverlays[1][2]));
            game.setPedHeadOverlay(loginPedHandle, 3, parseInt(headoverlays[0][3]), parseInt(headoverlays[1][3]));
            game.setPedHeadOverlay(loginPedHandle, 4, parseInt(headoverlays[0][4]), parseInt(headoverlays[1][4]));
            game.setPedHeadOverlay(loginPedHandle, 5, parseInt(headoverlays[0][5]), parseInt(headoverlays[1][5]));
            game.setPedHeadOverlay(loginPedHandle, 6, parseInt(headoverlays[0][6]), parseInt(headoverlays[1][6]));
            game.setPedHeadOverlay(loginPedHandle, 7, parseInt(headoverlays[0][7]), parseInt(headoverlays[1][7]));
            game.setPedHeadOverlay(loginPedHandle, 8, parseInt(headoverlays[0][8]), parseInt(headoverlays[1][8]));
            game.setPedHeadOverlay(loginPedHandle, 9, parseInt(headoverlays[0][9]), parseInt(headoverlays[1][9]));
            game.setPedHeadOverlay(loginPedHandle, 10, parseInt(headoverlays[0][10]), parseInt(headoverlays[1][10]));
            game.setPedComponentVariation(loginPedHandle, 2, parseInt(headoverlays[0][13]), 0, 0);
            game.setPedHairColor(loginPedHandle, parseInt(headoverlays[2][13]), parseInt(headoverlays[1][13]));

            for (let i = 0; i < 20; i++) {
                game.setPedFaceFeature(loginPedHandle, i, parseFloat(facefeatures[i]));
            }
        }
    }, 200);
}

alt.on('connectionComplete', () => {
    loadallIPLsAndInteriors();
    game.startAudioScene("FBI_HEIST_H5_MUTE_AMBIENCE_SCENE");
    game.cancelCurrentPoliceReport();
    game.clearAmbientZoneState("AZ_COUNTRYSIDE_PRISON_01_ANNOUNCER_GENERAL", 1);
    game.clearAmbientZoneState("AZ_COUNTRYSIDE_PRISON_01_ANNOUNCER_WARNING", 1);
    game.clearAmbientZoneState("AZ_COUNTRYSIDE_PRISON_01_ANNOUNCER_ALARM", 1);
    game.setAmbientZoneState(0, 0, 0);
    game.clearAmbientZoneState("AZ_DISTANT_SASQUATCH", 0);
    game.setAudioFlag("LoadMPData", true);
    game.setAudioFlag("DisableFlightMusic", true);
    alt.setStat('stamina', 50);
    alt.setStat('strength', 50);
    alt.setStat('lung_capacity', 100);
    alt.setStat('wheelie_ability', 100);
    alt.setStat('flying_ability', 100);
    alt.setStat('shooting_ability', 100);
    alt.setStat('stealth_ability', 100);

    let date = new Date();
    game.setClockTime(parseInt(date.getHours()), parseInt(date.getMinutes()), parseInt(date.getSeconds()));
    alt.setMsPerGameMinute(60000);
});

function loadallIPLsAndInteriors() {
    game.requestIpl("hei_hw1_blimp_interior_v_apart_midspaz_milo");
    game.requestIpl('chop_props');
    game.requestIpl('FIBlobby');
    game.removeIpl('FIBlobbyfake');
    game.requestIpl('FBI_colPLUG');
    game.requestIpl('FBI_repair');
    game.requestIpl('v_tunnel_hole');
    game.removeIpl('TrevorsMP');
    game.removeIpl('TrevorsTrailer');
    game.requestIpl('TrevorsTrailerTidy');
    game.removeIpl('farm_burnt');
    game.removeIpl('farm_burnt_lod');
    game.removeIpl('farm_burnt_props');
    game.removeIpl('farmint_cap');
    game.removeIpl('farmint_cap_lod');
    game.requestIpl('farm');
    game.requestIpl('farmint');
    game.requestIpl('farm_lod');
    game.requestIpl('farm_props');
    game.requestIpl('facelobby');
    game.removeIpl('CS1_02_cf_offmission');
    game.requestIpl('CS1_02_cf_onmission1');
    game.requestIpl('CS1_02_cf_onmission2');
    game.requestIpl('CS1_02_cf_onmission3');
    game.requestIpl('CS1_02_cf_onmission4');
    game.requestIpl('v_rockclub');
    game.removeIpl('v_janitor');
    game.removeIpl('hei_bi_hw1_13_door');
    game.requestIpl('bkr_bi_hw1_13_int');
    game.removeIpl('ufo');
    game.removeIpl('ufo_lod');
    game.removeIpl('ufo_eye');
    game.removeIpl('shutter_open');
    game.requestIpl('csr_afterMission');
    game.requestIpl('v_carshowroom');
    game.requestIpl('shr_int');
    game.requestIpl('shutter_closed');
    game.requestIpl('smboat');
    game.requestIpl('smboat_distantlights');
    game.requestIpl('smboat_lod');
    game.requestIpl('smboat_lodlights');
    game.requestIpl('cargoship');
    game.requestIpl('railing_start');
    game.removeIpl('sp1_10_fake_interior');
    game.removeIpl('sp1_10_fake_interior_lod');
    game.requestIpl('sp1_10_real_interior');
    game.requestIpl('sp1_10_real_interior_lod');
    game.removeIpl('id2_14_during_door');
    game.removeIpl('id2_14_during1');
    game.removeIpl('id2_14_during2');
    game.removeIpl('id2_14_on_fire');
    game.removeIpl('id2_14_post_no_int');
    game.removeIpl('id2_14_pre_no_int');
    game.removeIpl('id2_14_during_door');
    game.requestIpl('id2_14_during1');
    game.removeIpl('Coroner_Int_off');
    game.requestIpl('coronertrash');
    game.requestIpl('Coroner_Int_on');
    game.removeIpl('bh1_16_refurb');
    game.removeIpl('jewel2fake');
    game.removeIpl('bh1_16_doors_shut');
    game.requestIpl('refit_unload');
    game.requestIpl('post_hiest_unload');
    game.requestIpl('Carwash_with_spinners');
    game.requestIpl('KT_CarWash');
    game.requestIpl('ferris_finale_Anim');
    game.removeIpl('ch1_02_closed');
    game.requestIpl('ch1_02_open');
    game.requestIpl('AP1_04_TriAf01');
    game.requestIpl('CS2_06_TriAf02');
    game.requestIpl('CS4_04_TriAf03');
    game.removeIpl('scafstartimap');
    game.requestIpl('scafendimap');
    game.removeIpl('DT1_05_HC_REMOVE');
    game.requestIpl('DT1_05_HC_REQ');
    game.requestIpl('DT1_05_REQUEST');
    game.requestIpl('FINBANK');
    game.removeIpl('DT1_03_Shutter');
    game.removeIpl('DT1_03_Gr_Closed');
    game.requestIpl('golfflags');
    game.requestIpl('airfield');
    game.requestIpl('v_garages');
    game.requestIpl('v_foundry');
    game.requestIpl('hei_yacht_heist');
    game.requestIpl('hei_yacht_heist_Bar');
    game.requestIpl('hei_yacht_heist_Bedrm');
    game.requestIpl('hei_yacht_heist_Bridge');
    game.requestIpl('hei_yacht_heist_DistantLights');
    game.requestIpl('hei_yacht_heist_enginrm');
    game.requestIpl('hei_yacht_heist_LODLights');
    game.requestIpl('hei_yacht_heist_Lounge');
    game.requestIpl('hei_carrier');
    game.requestIpl('hei_Carrier_int1');
    game.requestIpl('hei_Carrier_int2');
    game.requestIpl('hei_Carrier_int3');
    game.requestIpl('hei_Carrier_int4');
    game.requestIpl('hei_Carrier_int5');
    game.requestIpl('hei_Carrier_int6');
    game.requestIpl('hei_carrier_LODLights');
    game.requestIpl('bkr_bi_id1_23_door');
    game.requestIpl('lr_cs6_08_grave_closed');
    game.requestIpl('v_bahama');
    game.removeIpl('CS3_07_MPGates');
    game.requestIpl('cs5_4_trains');
    game.requestIpl('v_lesters');
    game.requestIpl('v_trevors');
    game.requestIpl('v_michael');
    game.requestIpl('v_michael_garage');
    game.requestIpl('v_comedy');
    game.requestIpl('v_cinema');
    game.requestIpl('v_sweat');
    game.removeIpl('v_sweatempty');
    game.requestIpl('V_35_Fireman');
    game.removeIpl('redCarpet');
    game.requestIpl('triathlon2_VBprops');
    game.requestIpl('jetstegameurnel');
    game.requestIpl('Jetsteal_ipl_grp1');
    game.removeIpl('v_hospital');
    game.requestIpl('bh1_47_joshhse_unburnt');
    game.requestIpl('canyonriver01');
    game.requestIpl('canyonriver01_lod');
    game.requestIpl('cs3_05_water_grp1');
    game.requestIpl('cs3_05_water_grp1_lod');
    game.requestIpl('trv1_trail_start');
    game.requestIpl('CanyonRvrShallow');

    game.requestIpl('vw_casino_main');
    game.requestIpl('hei_dlc_windows_casino');
    game.requestIpl('hei_dlc_casino_door');
    game.requestIpl('vw_dlc_casino_door');
    game.requestIpl('vw_casino_door');
    game.requestIpl('hei_dlc_casino_aircon');

    // HIGH END APARTMENT IPL
    game.requestIpl("apa_v_mp_h_02_a");

    // CLOSE OPEN DOORS
    game.doorControl(3687927243, -1149.709, -1521.088, 10.78267, true, 0.0, 50.0, 0.0); // VESPUCCI HOUSE
    game.doorControl(520341586, -14.868921, -1441.1823, 31.193226, true, 0.0, 50.0, 0.0); // FRANKLIN'S OLD HOUSE
    game.doorControl(159994461, -816.716, 179.09796, 72.82738, true, 0.0, 50.0, 0.0); // MICHAELS HOUSE 
    game.doorControl(2608952911, -816.1068, 177.51086, 72.82738, true, 0.0, 50.0, 0.0); // MICHAELS HOUSE 
    game.doorControl(2731327123, -806.28174, 186.02461, 72.62405, true, 0.0, 50.0, 0.0); // MICHAELS HOUSE 
    game.doorControl(2840207166, -793.3943, 180.50746, 73.04045, true, 0.0, 50.0, 0.0); // MICHAELS HOUSE 
    game.doorControl(2840207166, -796.5657, 177.22139, 73.04045, true, 0.0, 50.0, 0.0); // MICHAELS HOUSE 
    game.doorControl(1245831483, -794.1853, 182.56801, 73.04045, true, 0.0, 50.0, 0.0); // MICHAELS HOUSE 
    game.doorControl(1245831483, -794.5051, 178.01237, 73.04045, true, 0.0, 50.0, 0.0); // MICHAELS HOUSE 
    game.doorControl(308207762, 7.518359, 539.5268, 176.17764, true, 0.0, 50.0, 0.0); // FRANKLIN'S NEW HOUSE
    game.doorControl(1145337974, 1273.8154, -1720.6969, 54.92143, true, 0.0, 50.0, 0.0); // LESTER'S HOUSE
    game.doorControl(132154435, 1972.769, 3815.366, 33.663258, true, 0.0, 50.0, 0.0); // TREVOR'S HOUSE

    activateIPLProps();
}

function activateIPLProps() {
    let interiorID = game.getInteriorAtCoords(-38.62, -1099.01, 27.31);
    if (game.isValidInterior(interiorID)) {
        game.pinInteriorInMemory(interiorID);
        game.activateInteriorEntitySet(interiorID, 'csr_beforeMission');
        game.activateInteriorEntitySet(interiorID, 'shutter_closed');
        game.refreshInterior(interiorID);
    }

    interiorID = game.getInteriorAtCoords(976.6364, 70.29476, 115.1641);
    if (game.isValidInterior(interiorID)) {
        game.pinInteriorInMemory(interiorID);
        game.activateInteriorEntitySet(interiorID, 'Set_Pent_Tint_Shell');
        game.activateInteriorEntitySet(interiorID, 'Set_Pent_Pattern_09');
        game.activateInteriorEntitySet(interiorID, 'Set_Pent_Spa_Bar_Open');
        game.activateInteriorEntitySet(interiorID, 'Set_Pent_Media_Bar_Open');
        game.activateInteriorEntitySet(interiorID, 'Set_Pent_Arcade_Modern');
        game.activateInteriorEntitySet(interiorID, 'Set_Pent_Bar_Clutter');
        game.activateInteriorEntitySet(interiorID, 'Set_Pent_Clutter_03');
        game.activateInteriorEntitySet(interiorID, 'Set_pent_bar_light_02');
        game.refreshInterior(interiorID);
    }

    interiorID = game.getInteriorAtCoordsWithType(-807.343, 174.9807, 71.16331);
    if (game.isValidInterior(interiorID)) {
        game.pinInteriorInMemory(interiorID);
        game.activateInteriorEntitySet(interiorID, 'V_Michael_M_items');
        game.activateInteriorEntitySet(interiorID, 'V_Michael_D_items');
        game.activateInteriorEntitySet(interiorID, 'V_Michael_S_items');
        game.activateInteriorEntitySet(interiorID, 'V_Michael_L_Items');
        game.activateInteriorEntitySet(interiorID, 'V_Michael_bed_tidy');
        game.removeModelHide(-802.73, 167.5, 77.58, 1, alt.hash("v_ilev_mm_windowwc"), false);
        game.refreshInterior(interiorID);
    }

    interiorID = game.getInteriorAtCoords(-1153.183, -1518.348, 9.630823);
    if (game.isValidInterior(interiorID)) {
        game.pinInteriorInMemory(interiorID);
        game.activateInteriorEntitySet(interiorID, 'swap_clean_apt');
        game.activateInteriorEntitySet(interiorID, 'layer_torture');
        game.activateInteriorEntitySet(interiorID, 'swap_sofa_A');
        game.activateInteriorEntitySet(interiorID, 'layer_whiskey');
        game.refreshInterior(interiorID);
    }

    //TODO: Rework Franklins House
    interiorID = game.getInteriorAtCoords(3.199463, 529.7808, 169.6262);
    if (game.isValidInterior(interiorID)) {
        game.pinInteriorInMemory(interiorID);
        game.activateInteriorEntitySet(interiorID, 'showhome_only');
        game.activateInteriorEntitySet(interiorID, 'franklin_unpacking');
        game.activateInteriorEntitySet(interiorID, 'franklin_settled');
        game.activateInteriorEntitySet(interiorID, 'progress_tshirt');
        game.activateInteriorEntitySet(interiorID, 'bong_and_wine');
        game.activateInteriorEntitySet(interiorID, 'progress_flyer');
        game.activateInteriorEntitySet(interiorID, 'progress_tux');
        game.activateInteriorEntitySet(interiorID, 'locked');
        game.refreshInterior(interiorID);
    }

    //TODO: Fix all House Interiors
}