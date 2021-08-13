import * as alt from 'alt-client';
import * as native from 'natives';

const player: alt.Player = alt.Player.local;
let cayoPericoPos: alt.Vector3 = new alt.Vector3(4895.28, -5744.58, 26.351);
let isCayoPericoLoaded: boolean = false;

export default class IPLManager {
    static loadIPL(name: string): void {
        alt.requestIpl(name);
    }
    static unloadIPL(name: string): void {
        alt.removeIpl(name);
    }
    static initializeDoorControl(): void {
        native.doorControl(3687927243, -1149.709, -1521.088, 10.78267, true, 0.0, 50.0, 0.0); // VESPUCCI HOUSE
        native.doorControl(520341586, -14.868921, -1441.1823, 31.193226, true, 0.0, 50.0, 0.0); // FRANKLIN'S OLD HOUSE
        native.doorControl(159994461, -816.716, 179.09796, 72.82738, true, 0.0, 50.0, 0.0); // MICHAELS HOUSE 
        native.doorControl(2608952911, -816.1068, 177.51086, 72.82738, true, 0.0, 50.0, 0.0); // MICHAELS HOUSE 
        native.doorControl(2731327123, -806.28174, 186.02461, 72.62405, true, 0.0, 50.0, 0.0); // MICHAELS HOUSE 
        native.doorControl(2840207166, -793.3943, 180.50746, 73.04045, true, 0.0, 50.0, 0.0); // MICHAELS HOUSE 
        native.doorControl(2840207166, -796.5657, 177.22139, 73.04045, true, 0.0, 50.0, 0.0); // MICHAELS HOUSE 
        native.doorControl(1245831483, -794.1853, 182.56801, 73.04045, true, 0.0, 50.0, 0.0); // MICHAELS HOUSE 
        native.doorControl(1245831483, -794.5051, 178.01237, 73.04045, true, 0.0, 50.0, 0.0); // MICHAELS HOUSE 
        native.doorControl(308207762, 7.518359, 539.5268, 176.17764, true, 0.0, 50.0, 0.0); // FRANKLIN'S NEW HOUSE
        native.doorControl(1145337974, 1273.8154, -1720.6969, 54.92143, true, 0.0, 50.0, 0.0); // LESTER'S HOUSE
        native.doorControl(132154435, 1972.769, 3815.366, 33.663258, true, 0.0, 50.0, 0.0); // TREVOR'S HOUSE
        native.doorControl(2739859149, -1607.536, -3005.431, -75.05607, true, 0.0, 50.0, 0.0); // NIGHTCLUB OFFICE
        native.doorControl(1695461688, -1610.125, -3004.97, -78.84087, true, 0.0, 50.0, 0.0); // NIGHTCLUB GARAGE

        //CayoPerico
        native.doorControl(alt.hash("h4_prop_h4_gate_r_03a"), 4981.012, -5712.747, 20.78103, true, 0, 0, -10);
        native.doorControl(alt.hash("h4_prop_h4_gate_l_03a"), 4984.134, -5709.249, 20.78103, true, 0, 0, 10);
        native.doorControl(alt.hash("h4_prop_h4_gate_r_03a"), 4990.681, -5715.106, 20.78103, true, 0, 0, -10);
        native.doorControl(alt.hash("h4_prop_h4_gate_l_03a"), 4987.587, -5718.635, 20.78103, true, 0, 0, 10);
    }
    static initializeIPLs(): void {
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
    }
    static initializeEntitySets() {
        let interiorID = native.getInteriorAtCoords(-38.62, -1099.01, 27.31);
        if (native.isValidInterior(interiorID)) {
            native.pinInteriorInMemory(interiorID);
            native.activateInteriorEntitySet(interiorID, 'csr_beforeMission');
            native.activateInteriorEntitySet(interiorID, 'shutter_closed');
            native.refreshInterior(interiorID);
        }

        interiorID = native.getInteriorAtCoords(976.6364, 70.29476, 115.1641);
        if (native.isValidInterior(interiorID)) {
            native.pinInteriorInMemory(interiorID);
            native.activateInteriorEntitySet(interiorID, 'Set_Pent_Tint_Shell');
            native.activateInteriorEntitySet(interiorID, 'Set_Pent_Pattern_09');
            native.activateInteriorEntitySet(interiorID, 'Set_Pent_Spa_Bar_Open');
            native.activateInteriorEntitySet(interiorID, 'Set_Pent_Media_Bar_Open');
            native.activateInteriorEntitySet(interiorID, 'Set_Pent_Arcade_Modern');
            native.activateInteriorEntitySet(interiorID, 'Set_Pent_Bar_Clutter');
            native.activateInteriorEntitySet(interiorID, 'Set_Pent_Clutter_03');
            native.activateInteriorEntitySet(interiorID, 'Set_pent_bar_light_02');
            native.refreshInterior(interiorID);
        }

        interiorID = native.getInteriorAtCoords(-807.343, 174.9807, 71.16331);
        if (native.isValidInterior(interiorID)) {
            native.pinInteriorInMemory(interiorID);
            native.activateInteriorEntitySet(interiorID, 'V_Michael_M_items');
            native.activateInteriorEntitySet(interiorID, 'V_Michael_D_items');
            native.activateInteriorEntitySet(interiorID, 'V_Michael_S_items');
            native.activateInteriorEntitySet(interiorID, 'V_Michael_L_Items');
            native.activateInteriorEntitySet(interiorID, 'V_Michael_bed_tidy');
            native.removeModelHide(-802.73, 167.5, 77.58, 1, alt.hash("v_ilev_mm_windowwc"), false);
            native.refreshInterior(interiorID);
        }

        interiorID = native.getInteriorAtCoords(-1153.183, -1518.348, 9.630823);
        if (native.isValidInterior(interiorID)) {
            native.pinInteriorInMemory(interiorID);
            native.activateInteriorEntitySet(interiorID, 'swap_clean_apt');
            native.activateInteriorEntitySet(interiorID, 'layer_torture');
            native.activateInteriorEntitySet(interiorID, 'swap_sofa_A');
            native.activateInteriorEntitySet(interiorID, 'layer_whiskey');
            native.refreshInterior(interiorID);
        }
        
        interiorID = native.getInteriorAtCoords(3.199463, 529.7808, 169.6262);
        if (native.isValidInterior(interiorID)) {
            native.pinInteriorInMemory(interiorID);
            native.activateInteriorEntitySet(interiorID, 'franklin_unpacking');
            native.activateInteriorEntitySet(interiorID, 'franklin_settled');
            native.activateInteriorEntitySet(interiorID, 'progress_tshirt');
            native.activateInteriorEntitySet(interiorID, 'bong_and_wine');
            native.activateInteriorEntitySet(interiorID, 'progress_flyer');
            native.activateInteriorEntitySet(interiorID, 'progress_tux');
            native.activateInteriorEntitySet(interiorID, 'locked');
            native.refreshInterior(interiorID);
        }

        interiorID = native.getInteriorAtCoords(-1604.664, -3012.583, -80);
        if (native.isValidInterior(interiorID)) {
            native.pinInteriorInMemory(interiorID);
            native.activateInteriorEntitySet(interiorID, "Int01_ba_security_upgrade");
            native.activateInteriorEntitySet(interiorID, "Int01_ba_equipment_setup");
            native.activateInteriorEntitySet(interiorID, "Int01_ba_Style03");
            native.activateInteriorEntitySet(interiorID, "Int01_ba_style03_podium");
            native.activateInteriorEntitySet(interiorID, "int01_ba_lights_screen");
            native.activateInteriorEntitySet(interiorID, "Int01_ba_Screen");
            native.activateInteriorEntitySet(interiorID, "Int01_ba_bar_content");
            native.activateInteriorEntitySet(interiorID, "Int01_ba_dj03");
            native.activateInteriorEntitySet(interiorID, "DJ_01_Lights_01");
            native.activateInteriorEntitySet(interiorID, "DJ_02_Lights_02");
            native.activateInteriorEntitySet(interiorID, "DJ_03_Lights_03");
            native.activateInteriorEntitySet(interiorID, "DJ_04_Lights_04");
            native.activateInteriorEntitySet(interiorID, "Int01_ba_lightgrid_01");
            native.activateInteriorEntitySet(interiorID, "Int01_ba_equipment_upgrade");
            native.activateInteriorEntitySet(interiorID, "Int01_ba_clubname_01");
            native.activateInteriorEntitySet(interiorID, "Int01_ba_dry_ice");
            native.refreshInterior(interiorID);
        }

        interiorID = native.getInteriorAtCoords(311.2546, -592.4204, 42.32737);
        if (native.isValidInterior(interiorID)) {
            native.pinInteriorInMemory(interiorID);
            native.refreshInterior(interiorID);
        }

        interiorID = native.getInteriorAtCoords(451.0129, -993.3741, 29.1718);
        if (native.isValidInterior(interiorID)) {
            native.pinInteriorInMemory(interiorID);
            native.activateInteriorEntitySet(interiorID, "branded_style_set");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm1");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm2");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm3");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm4");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm5");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm6");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm7");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm8");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm9");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm10");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm11");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm12");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm13");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm14");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm15");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm16");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm17");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm18");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm19");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm20");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm21");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm22");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm23");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm24");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm25");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm26");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm27");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm28");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm29");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm30");
            native.activateInteriorEntitySet(interiorID, "v_gabz_mrpd_rm31");
            native.refreshInterior(interiorID);
        }
    }
    static loadCayoPerico() {
        let dist = native.getDistanceBetweenCoords(cayoPericoPos.x, cayoPericoPos.y, cayoPericoPos.z, player.pos.x, player.pos.y, player.pos.z, false);
        if (dist <= 2500 && !isCayoPericoLoaded) {
            native.setIslandHopperEnabled('HeistIsland', true);
            native.setScenarioGroupEnabled('Heist_Island_Peds', true);
            native.setAudioFlag("PlayerOnDLCHeist4Island", true);
            native.setAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Zones", true, true);
            native.setAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Disabled_Zones", false, true);
            isCayoPericoLoaded = true;
        } else if (dist > 2500 && isCayoPericoLoaded) {
            native.setIslandHopperEnabled('HeistIsland', false);
            native.setScenarioGroupEnabled("Heist_Island_Peds", false);
            native.setAudioFlag("PlayerOnDLCHeist4Island", false);
            native.setAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Zones", false, false);
            native.setAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Disabled_Zones", false, false);
            isCayoPericoLoaded = false;
        }
    }
}

alt.setInterval(IPLManager.loadCayoPerico, 1000);