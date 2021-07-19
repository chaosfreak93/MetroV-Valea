/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as game from 'natives';

let loginBrowser = null;
let loginCam = null;
let loginPedHandle = null;
let loginModelHash = null;

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
                if (alt.LocalStorage.get("username")) {
                    loginBrowser.emit("CEF:Login:setStorage", alt.LocalStorage.get("username"), alt.LocalStorage.get("password"));
                }
                loginBrowser.emit("CEF:Login:showArea", "login");
            }, 2000);
        });

        loginBrowser.on("Client:Login:sendLoginDataToServer", (name, password) => {
            if (alt.LocalStorage.get("discordId")) {
                alt.emitServer("Server:Login:ValidateLoginCredentials", name, password, alt.LocalStorage.get("discordId"));
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
            game.freezeEntityPosition(alt.Player.local.scriptID, true);
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
            game.freezeEntityPosition(alt.Player.local.scriptID, true);
        });
    }
});

alt.onServer("Client:SpawnArea:setCharSkin", (facefeaturearray, headblendsarray, headoverlayarray) => {
    let facefeatures = JSON.parse(facefeaturearray);
    let headblends = JSON.parse(headblendsarray);
    let headoverlays = JSON.parse(headoverlayarray);

    game.setPedHeadBlendData(alt.Player.local.scriptID, parseInt(headblends[0]), parseInt(headblends[1]), 0, parseInt(headblends[2]), parseInt(headblends[5]), 0, parseFloat(headblends[3]), parseInt(headblends[4]), 0, 0);
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

alt.onServer("Client:Charselector:ViewCharacter", (gender, facefeaturearray, headblendsarray, headoverlayarray) => {
    spawnCharSelectorPed(gender, facefeaturearray, headblendsarray, headoverlayarray);
});

alt.onServer("Client:Login:SaveLoginCredentialsToStorage", (name, password, discordId) => {
    alt.LocalStorage.set('username', name);
    alt.LocalStorage.set('password', password);
    alt.LocalStorage.set('discordId', discordId);
    alt.LocalStorage.save();
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
}

alt.onServer("Client:SpawnArea:SwitchIn", () => {
    game.switchInPlayer(alt.Player.local.scriptID);
    alt.setTimeout(() => {
        game.freezeEntityPosition(alt.Player.local.scriptID, false);
    }, 500);
});

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
    alt.setStat('stamina', 75);
    alt.setStat('strength', 60);
    alt.setStat('lung_capacity', 50);
    alt.setStat('wheelie_ability', 50);
    alt.setStat('flying_ability', 75);
    alt.setStat('shooting_ability', 50);
    alt.setStat('stealth_ability', 0);

    let date = new Date();
    game.setClockTime(parseInt(date.getHours()), parseInt(date.getMinutes()), parseInt(date.getSeconds()));
    alt.setMsPerGameMinute(60000);
    setMinimapData();
});

alt.setInterval(() => {
    let date = new Date();
    game.setClockTime(parseInt(date.getHours()), parseInt(date.getMinutes()), parseInt(date.getSeconds()));
    alt.setMsPerGameMinute(60000);
}, 3600000);

function loadallIPLsAndInteriors() {
    alt.requestIpl("hei_hw1_blimp_interior_v_apart_midspaz_milo");
    alt.requestIpl('chop_props');
    alt.requestIpl('FIBlobby');
    alt.removeIpl('FIBlobbyfake');
    alt.requestIpl('FBI_colPLUG');
    alt.requestIpl('FBI_repair');
    alt.requestIpl('v_tunnel_hole');
    alt.removeIpl('TrevorsMP');
    alt.removeIpl('TrevorsTrailer');
    alt.requestIpl('TrevorsTrailerTidy');
    alt.removeIpl('farm_burnt');
    alt.removeIpl('farm_burnt_lod');
    alt.removeIpl('farm_burnt_props');
    alt.removeIpl('farmint_cap');
    alt.removeIpl('farmint_cap_lod');
    alt.requestIpl('farm');
    alt.requestIpl('farmint');
    alt.requestIpl('farm_lod');
    alt.requestIpl('farm_props');
    alt.requestIpl('facelobby');
    alt.removeIpl('CS1_02_cf_offmission');
    alt.requestIpl('CS1_02_cf_onmission1');
    alt.requestIpl('CS1_02_cf_onmission2');
    alt.requestIpl('CS1_02_cf_onmission3');
    alt.requestIpl('CS1_02_cf_onmission4');
    alt.requestIpl('v_rockclub');
    alt.removeIpl('v_janitor');
    alt.removeIpl('hei_bi_hw1_13_door');
    alt.requestIpl('bkr_bi_hw1_13_int');
    alt.removeIpl('ufo');
    alt.removeIpl('ufo_lod');
    alt.removeIpl('ufo_eye');
    alt.removeIpl('shutter_open');
    alt.requestIpl('csr_afterMission');
    alt.requestIpl('v_carshowroom');
    alt.requestIpl('shr_int');
    alt.requestIpl('shutter_closed');
    alt.requestIpl('smboat');
    alt.requestIpl('smboat_distantlights');
    alt.requestIpl('smboat_lod');
    alt.requestIpl('smboat_lodlights');
    alt.requestIpl('cargoship');
    alt.requestIpl('railing_start');
    alt.removeIpl('sp1_10_fake_interior');
    alt.removeIpl('sp1_10_fake_interior_lod');
    alt.requestIpl('sp1_10_real_interior');
    alt.requestIpl('sp1_10_real_interior_lod');
    alt.removeIpl('id2_14_during_door');
    alt.removeIpl('id2_14_during1');
    alt.removeIpl('id2_14_during2');
    alt.removeIpl('id2_14_on_fire');
    alt.removeIpl('id2_14_post_no_int');
    alt.removeIpl('id2_14_pre_no_int');
    alt.removeIpl('id2_14_during_door');
    alt.requestIpl('id2_14_during1');
    alt.removeIpl('Coroner_Int_off');
    alt.requestIpl('coronertrash');
    alt.requestIpl('Coroner_Int_on');
    alt.removeIpl('bh1_16_refurb');
    alt.removeIpl('jewel2fake');
    alt.removeIpl('bh1_16_doors_shut');
    alt.requestIpl('refit_unload');
    alt.requestIpl('post_hiest_unload');
    alt.requestIpl('Carwash_with_spinners');
    alt.requestIpl('KT_CarWash');
    alt.requestIpl('ferris_finale_Anim');
    alt.removeIpl('ch1_02_closed');
    alt.requestIpl('ch1_02_open');
    alt.requestIpl('AP1_04_TriAf01');
    alt.requestIpl('CS2_06_TriAf02');
    alt.requestIpl('CS4_04_TriAf03');
    alt.removeIpl('scafstartimap');
    alt.requestIpl('scafendimap');
    alt.removeIpl('DT1_05_HC_REMOVE');
    alt.requestIpl('DT1_05_HC_REQ');
    alt.requestIpl('DT1_05_REQUEST');
    alt.requestIpl('FINBANK');
    alt.removeIpl('DT1_03_Shutter');
    alt.removeIpl('DT1_03_Gr_Closed');
    alt.requestIpl('golfflags');
    alt.requestIpl('airfield');
    alt.requestIpl('v_garages');
    alt.requestIpl('v_foundry');
    alt.requestIpl('hei_yacht_heist');
    alt.requestIpl('hei_yacht_heist_Bar');
    alt.requestIpl('hei_yacht_heist_Bedrm');
    alt.requestIpl('hei_yacht_heist_Bridge');
    alt.requestIpl('hei_yacht_heist_DistantLights');
    alt.requestIpl('hei_yacht_heist_enginrm');
    alt.requestIpl('hei_yacht_heist_LODLights');
    alt.requestIpl('hei_yacht_heist_Lounge');
    alt.requestIpl('hei_carrier');
    alt.requestIpl('hei_Carrier_int1');
    alt.requestIpl('hei_Carrier_int2');
    alt.requestIpl('hei_Carrier_int3');
    alt.requestIpl('hei_Carrier_int4');
    alt.requestIpl('hei_Carrier_int5');
    alt.requestIpl('hei_Carrier_int6');
    alt.requestIpl('hei_carrier_LODLights');
    alt.requestIpl('bkr_bi_id1_23_door');
    alt.requestIpl('lr_cs6_08_grave_closed');
    alt.requestIpl('v_bahama');
    alt.removeIpl('CS3_07_MPGates');
    alt.requestIpl('cs5_4_trains');
    alt.requestIpl('v_lesters');
    alt.requestIpl('v_trevors');
    alt.requestIpl('v_michael');
    alt.requestIpl('v_michael_garage');
    alt.requestIpl('v_comedy');
    alt.requestIpl('v_cinema');
    alt.requestIpl('v_sweat');
    alt.removeIpl('v_sweatempty');
    alt.requestIpl('V_35_Fireman');
    alt.removeIpl('redCarpet');
    alt.requestIpl('triathlon2_VBprops');
    alt.requestIpl('jetstegameurnel');
    alt.requestIpl('Jetsteal_ipl_grp1');
    alt.removeIpl('v_hospital');
    alt.requestIpl('bh1_47_joshhse_unburnt');
    alt.requestIpl('canyonriver01');
    alt.requestIpl('canyonriver01_lod');
    alt.requestIpl('cs3_05_water_grp1');
    alt.requestIpl('cs3_05_water_grp1_lod');
    alt.requestIpl('trv1_trail_start');
    alt.requestIpl('CanyonRvrShallow');

    alt.requestIpl('vw_casino_main');
    alt.requestIpl('hei_dlc_windows_casino');
    alt.requestIpl('hei_dlc_casino_door');
    alt.requestIpl('vw_dlc_casino_door');
    alt.requestIpl('vw_casino_door');
    alt.requestIpl('hei_dlc_casino_aircon');

    // HIGH END APARTMENT IPL
    alt.requestIpl("apa_v_mp_h_02_a");

    // NIGHTCLUB
    alt.requestIpl("ba_dlc_int_01_ba");

    // PILLBOX HOSPITAL
    alt.removeIpl('rc12b_destroyed');
    alt.removeIpl('rc12b_default');
    alt.removeIpl('rc12b_hospitalinterior_lod');
    alt.removeIpl('rc12b_hospitalinterior');
    alt.removeIpl('rc12b_fixed');

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
    game.doorControl(2739859149, -1607.536, -3005.431, -75.05607, true, 0.0, 50.0, 0.0); // NIGHTCLUB OFFICE
    game.doorControl(1695461688, -1610.125, -3004.97, -78.84087, true, 0.0, 50.0, 0.0); // NIGHTCLUB GARAGE

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
    
    interiorID = game.getInteriorAtCoords(3.199463, 529.7808, 169.6262);
    if (game.isValidInterior(interiorID)) {
        game.pinInteriorInMemory(interiorID);
        game.activateInteriorEntitySet(interiorID, 'franklin_unpacking');
        game.activateInteriorEntitySet(interiorID, 'franklin_settled');
        game.activateInteriorEntitySet(interiorID, 'progress_tshirt');
        game.activateInteriorEntitySet(interiorID, 'bong_and_wine');
        game.activateInteriorEntitySet(interiorID, 'progress_flyer');
        game.activateInteriorEntitySet(interiorID, 'progress_tux');
        game.activateInteriorEntitySet(interiorID, 'locked');
        game.refreshInterior(interiorID);
    }

    interiorID = game.getInteriorAtCoords(-1604.664, -3012.583, -80);
    if (game.isValidInterior(interiorID)) {
        game.pinInteriorInMemory(interiorID);
        game.activateInteriorEntitySet(interiorID, "Int01_ba_security_upgrade");
        game.activateInteriorEntitySet(interiorID, "Int01_ba_equipment_setup");
        game.activateInteriorEntitySet(interiorID, "Int01_ba_Style03");
        game.activateInteriorEntitySet(interiorID, "Int01_ba_style03_podium");
        game.activateInteriorEntitySet(interiorID, "int01_ba_lights_screen");
        game.activateInteriorEntitySet(interiorID, "Int01_ba_Screen");
        game.activateInteriorEntitySet(interiorID, "Int01_ba_bar_content");
        game.activateInteriorEntitySet(interiorID, "Int01_ba_dj03");
        game.activateInteriorEntitySet(interiorID, "DJ_01_Lights_01");
        game.activateInteriorEntitySet(interiorID, "DJ_02_Lights_02");
        game.activateInteriorEntitySet(interiorID, "DJ_03_Lights_03");
        game.activateInteriorEntitySet(interiorID, "DJ_04_Lights_04");
        game.activateInteriorEntitySet(interiorID, "Int01_ba_lightgrid_01");
        game.activateInteriorEntitySet(interiorID, "Int01_ba_equipment_upgrade");
        game.activateInteriorEntitySet(interiorID, "Int01_ba_clubname_01");
        game.activateInteriorEntitySet(interiorID, "Int01_ba_dry_ice");
        game.refreshInterior(interiorID);
    }

    interiorID = game.getInteriorAtCoords(311.2546, -592.4204, 42.32737);
    if (game.isValidInterior(interiorID)) {
        game.pinInteriorInMemory(interiorID);
        game.refreshInterior(interiorID);
    }

    interiorID = game.getInteriorAtCoords(451.0129, -993.3741, 29.1718);
    if (game.isValidInterior(interiorID)) {
        game.pinInteriorInMemory(interiorID);
        const data = [{ name: "branded_style_set" },
        { name: "v_gabz_mrpd_rm1" },
        { name: "v_gabz_mrpd_rm2" },
        { name: "v_gabz_mrpd_rm3" },
        { name: "v_gabz_mrpd_rm4" },
        { name: "v_gabz_mrpd_rm5" },
        { name: "v_gabz_mrpd_rm6" },
        { name: "v_gabz_mrpd_rm7" },
        { name: "v_gabz_mrpd_rm8" },
        { name: "v_gabz_mrpd_rm9" },
        { name: "v_gabz_mrpd_rm10" },
        { name: "v_gabz_mrpd_rm11" },
        { name: "v_gabz_mrpd_rm12" },
        { name: "v_gabz_mrpd_rm13" },
        { name: "v_gabz_mrpd_rm14" },
        { name: "v_gabz_mrpd_rm15" },
        { name: "v_gabz_mrpd_rm16" },
        { name: "v_gabz_mrpd_rm17" },
        { name: "v_gabz_mrpd_rm18" },
        { name: "v_gabz_mrpd_rm19" },
        { name: "v_gabz_mrpd_rm20" },
        { name: "v_gabz_mrpd_rm21" },
        { name: "v_gabz_mrpd_rm22" },
        { name: "v_gabz_mrpd_rm23" },
        { name: "v_gabz_mrpd_rm24" },
        { name: "v_gabz_mrpd_rm25" },
        { name: "v_gabz_mrpd_rm26" },
        { name: "v_gabz_mrpd_rm27" },
        { name: "v_gabz_mrpd_rm28" },
        { name: "v_gabz_mrpd_rm29" },
        { name: "v_gabz_mrpd_rm30" },
        { name: "v_gabz_mrpd_rm31" }];
        activateInterior(interiorID, data);
        game.refreshInterior(interiorID)
    };
}

const activateInterior = (id, interiors) => {
    interiors.forEach((interior) => {
        if (!game.isInteriorEntitySetActive(id, interior.name)) {
            game.activateInteriorEntitySet(id, interior.name);
            if (interior.color) {
                game.setInteriorEntitySetColor(id, interior.name, interior.color);
            }
        }
    });
};

function setMinimapData() {
    const ZOOM_LEVEL_0 = alt.MapZoomData.get('ZOOM_LEVEL_0');
    ZOOM_LEVEL_0.fZoomScale = 2.75;
    ZOOM_LEVEL_0.fZoomSpeed = 0.9;
    ZOOM_LEVEL_0.fScrollSpeed = 0.08;
    ZOOM_LEVEL_0.vTilesX = 0.0;
    ZOOM_LEVEL_0.vTilesY = 0.0;

    const ZOOM_LEVEL_1 = alt.MapZoomData.get('ZOOM_LEVEL_1');
    ZOOM_LEVEL_1.fZoomScale = 2.8;
    ZOOM_LEVEL_1.fZoomSpeed = 0.9;
    ZOOM_LEVEL_1.fScrollSpeed = 0.08;
    ZOOM_LEVEL_1.vTilesX = 0.0;
    ZOOM_LEVEL_1.vTilesY = 0.0;

    const ZOOM_LEVEL_2 = alt.MapZoomData.get('ZOOM_LEVEL_2');
    ZOOM_LEVEL_2.fZoomScale = 8.0;
    ZOOM_LEVEL_2.fZoomSpeed = 0.9;
    ZOOM_LEVEL_2.fScrollSpeed = 0.08;
    ZOOM_LEVEL_2.vTilesX = 0.0;
    ZOOM_LEVEL_2.vTilesY = 0.0;

    const ZOOM_LEVEL_3 = alt.MapZoomData.get('ZOOM_LEVEL_3');
    ZOOM_LEVEL_3.fZoomScale = 20.0;
    ZOOM_LEVEL_3.fZoomSpeed = 0.9;
    ZOOM_LEVEL_3.fScrollSpeed = 0.08;
    ZOOM_LEVEL_3.vTilesX = 0.0;
    ZOOM_LEVEL_3.vTilesY = 0.0;

    const ZOOM_LEVEL_4 = alt.MapZoomData.get('ZOOM_LEVEL_4');
    ZOOM_LEVEL_4.fZoomScale = 30.0;
    ZOOM_LEVEL_4.fZoomSpeed = 0.9;
    ZOOM_LEVEL_4.fScrollSpeed = 0.08;
    ZOOM_LEVEL_4.vTilesX = 0.0;
    ZOOM_LEVEL_4.vTilesY = 0.0;

    const ZOOM_LEVEL_GOLF_COURSE = alt.MapZoomData.get('ZOOM_LEVEL_GOLF_COURSE');
    ZOOM_LEVEL_GOLF_COURSE.fZoomScale = 55.0;
    ZOOM_LEVEL_GOLF_COURSE.fZoomSpeed = 0.0;
    ZOOM_LEVEL_GOLF_COURSE.fScrollSpeed = 0.1;
    ZOOM_LEVEL_GOLF_COURSE.vTilesX = 2.0;
    ZOOM_LEVEL_GOLF_COURSE.vTilesY = 1.0;

    const ZOOM_LEVEL_INTERIOR = alt.MapZoomData.get('ZOOM_LEVEL_INTERIOR');
    ZOOM_LEVEL_INTERIOR.fZoomScale = 450.0;
    ZOOM_LEVEL_INTERIOR.fZoomSpeed = 0.0;
    ZOOM_LEVEL_INTERIOR.fScrollSpeed = 0.1;
    ZOOM_LEVEL_INTERIOR.vTilesX = 1.0;
    ZOOM_LEVEL_INTERIOR.vTilesY = 1.0;

    const ZOOM_LEVEL_GALLERY = alt.MapZoomData.get('ZOOM_LEVEL_GALLERY');
    ZOOM_LEVEL_GALLERY.fZoomScale = 4.5;
    ZOOM_LEVEL_GALLERY.fZoomSpeed = 0.0;
    ZOOM_LEVEL_GALLERY.fScrollSpeed = 0.0;
    ZOOM_LEVEL_GALLERY.vTilesX = 0.0;
    ZOOM_LEVEL_GALLERY.vTilesY = 0.0;

    const ZOOM_LEVEL_GALLERY_MAXIMIZE = alt.MapZoomData.get('ZOOM_LEVEL_GALLERY_MAXIMIZE');
    ZOOM_LEVEL_GALLERY_MAXIMIZE.fZoomScale = 11.0;
    ZOOM_LEVEL_GALLERY_MAXIMIZE.fZoomSpeed = 0.0;
    ZOOM_LEVEL_GALLERY_MAXIMIZE.fScrollSpeed = 0.0;
    ZOOM_LEVEL_GALLERY_MAXIMIZE.vTilesX = 2.0;
    ZOOM_LEVEL_GALLERY_MAXIMIZE.vTilesY = 3.0;
}