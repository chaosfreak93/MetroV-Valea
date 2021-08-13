import * as alt from 'alt-client';
import * as game from 'natives';
alt.requestIpl("tr_tuner_shop_burton");
alt.requestIpl("tr_tuner_shop_strawberry");
alt.requestIpl("tr_tuner_shop_rancho");
alt.requestIpl("tr_tuner_shop_mission");
alt.requestIpl("tr_tuner_shop_mesa");
alt.requestIpl("tr_tuner_shop_burton");
alt.requestIpl("tr_tuner_race_line");
alt.requestIpl("tr_tuner_meetup");
let TunerInteriorID = game.getInteriorAtCoords(-1350, 160, -100);
if (game.isValidInterior(TunerInteriorID)) {
    game.deactivateInteriorEntitySet(TunerInteriorID, "entity_set_style_1"); // Default Design
    game.deactivateInteriorEntitySet(TunerInteriorID, "entity_set_style_2"); // White Design
    game.activateInteriorEntitySet(TunerInteriorID, "entity_set_style_3"); // Dark Design
    game.deactivateInteriorEntitySet(TunerInteriorID, "entity_set_style_4"); // Concrete Design
    game.deactivateInteriorEntitySet(TunerInteriorID, "entity_set_style_5"); // Home Design
    game.deactivateInteriorEntitySet(TunerInteriorID, "entity_set_style_6"); // Street Design
    game.deactivateInteriorEntitySet(TunerInteriorID, "entity_set_style_7"); // Japan Design
    game.deactivateInteriorEntitySet(TunerInteriorID, "entity_set_style_8"); // Color Design
    game.deactivateInteriorEntitySet(TunerInteriorID, "entity_set_style_9"); // Race Design
    game.activateInteriorEntitySet(TunerInteriorID, "entity_set_bedroom"); // With Bed room
    game.deactivateInteriorEntitySet(TunerInteriorID, "entity_set_bedroom_empty"); // Bed room is clean
    game.activateInteriorEntitySet(TunerInteriorID, "entity_set_table"); // nothing
    game.activateInteriorEntitySet(TunerInteriorID, "entity_set_thermal"); // nothing
    game.activateInteriorEntitySet(TunerInteriorID, "entity_set_tints"); // railing
    game.activateInteriorEntitySet(TunerInteriorID, "entity_set_train"); // nothing
    game.activateInteriorEntitySet(TunerInteriorID, "entity_set_laptop"); // nothing
    game.activateInteriorEntitySet(TunerInteriorID, "entity_set_lightbox"); // lights ceiling
    game.activateInteriorEntitySet(TunerInteriorID, "entity_set_plate"); // nothing
    game.activateInteriorEntitySet(TunerInteriorID, "entity_set_cabinets"); // nothing
    game.activateInteriorEntitySet(TunerInteriorID, "entity_set_chalkboard"); // panel at the top of two rooms in front
    game.deactivateInteriorEntitySet(TunerInteriorID, "entity_set_box_clutter"); // Box
    game.deactivateInteriorEntitySet(TunerInteriorID, "entity_set_car_lift_cutscene"); // Carlift Cutscene
    game.deactivateInteriorEntitySet(TunerInteriorID, "entity_set_car_lift_default"); // Carlift Default
    game.deactivateInteriorEntitySet(TunerInteriorID, "entity_set_car_lift_purchase"); // Carlift Purchase
    game.activateInteriorEntitySet(TunerInteriorID, "entity_set_scope"); // nothing
    game.activateInteriorEntitySet(TunerInteriorID, "entity_set_cut_seats"); // Seats in corner
    game.activateInteriorEntitySet(TunerInteriorID, "entity_set_def_table"); // nothing
    game.activateInteriorEntitySet(TunerInteriorID, "entity_set_container"); // nothing
    game.activateInteriorEntitySet(TunerInteriorID, "entity_set_virus"); // nothing
    game.activateInteriorEntitySet(TunerInteriorID, "entity_set_bombs"); // nothing
    game.refreshInterior(TunerInteriorID);
}
let CarMeetInteriorID = game.getInteriorAtCoords(-2000, 1113.211, -25.36243);
if (game.isValidInterior(CarMeetInteriorID)) {
    game.activateInteriorEntitySet(CarMeetInteriorID, "entity_set_meet_crew"); // nothing
    game.activateInteriorEntitySet(CarMeetInteriorID, "entity_set_meet_lights"); // activate every light
    game.activateInteriorEntitySet(CarMeetInteriorID, "entity_set_meet_lights_cheap"); // activate every cheap light
    game.activateInteriorEntitySet(CarMeetInteriorID, "entity_set_player"); // nothing
    game.activateInteriorEntitySet(CarMeetInteriorID, "entity_set_test_crew"); // nothing
    game.activateInteriorEntitySet(CarMeetInteriorID, "entity_set_test_lights"); // activate every light on the test race
    game.activateInteriorEntitySet(CarMeetInteriorID, "entity_set_test_lights_cheap"); // activate every cheap light on the test race
    game.activateInteriorEntitySet(CarMeetInteriorID, "entity_set_time_trial"); // activate the white traces on the ground
    game.refreshInterior(CarMeetInteriorID);
}
