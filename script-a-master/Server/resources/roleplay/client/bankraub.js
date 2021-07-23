/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from "alt-client";
import * as native from "natives";

let PoliceDoors = {};
let PlayerData = null;
let UTK = {
    doorchecks: [
        {
            x: 257.10,
            y: 220.30,
            z: 106.28,
            he: 339.733,
            h: alt.hash("hei_v_ilev_bk_gate_pris"),
            h1: "hei_v_ilev_bk_gate_pris",
            h2: "hei_v_ilev_bk_gate_molten",
            status: 0
        },
        {x: 236.91, y: 227.50, z: 106.29, he: 340.000, h: alt.hash("v_ilev_bk_door"), status: 0},
        {x: 262.35, y: 223.00, z: 107.05, he: 249.731, h: alt.hash("hei_v_ilev_bk_gate2_pris"), status: 0},
        {
            x: 252.72,
            y: 220.95,
            z: 101.68,
            he: 160.278,
            h: alt.hash("hei_v_ilev_bk_safegate_pris"),
            h1: "hei_v_ilev_bk_safegate_pris",
            h2: "hei_v_ilev_bk_safegate_molten",
            status: 0
        },
        {
            x: 261.01,
            y: 215.01,
            z: 101.68,
            he: 250.082,
            h: alt.hash("hei_v_ilev_bk_safegate_pris"),
            h1: "hei_v_ilev_bk_safegate_pris",
            h2: "hei_v_ilev_bk_safegate_molten",
            status: 0
        },
        {x: 253.92, y: 224.56, z: 101.88, he: 160.000, h: alt.hash("v_ilev_bk_vaultdoor"), status: 0}
    ],
    enablesupersilent: false,
    enablextras: true,
    disableinput: false,
    hackfinish: false,
    initiator: false,
    stage0break: false,
    stage1break: false,
    stage2break: false,
    stage4break: false,
    stagelootbreak: false,
    startloot: false,
    grabber: false,
    searchinfo: {},
    info: {},
    loudstart: {x: 257.10, y: 220.30, z: 106.28, type: "hei_v_ilev_bk_gate_pris", h: 339.733},
    silentstart: {x: 236.91, y: 227.50, z: 106.29, type: "v_ilev_bk_door", h: 340.00},
    inside1: {x: 252.72, y: 220.95, z: 101.68, type: "hei_v_ilev_bk_safegate_pris", h: 160.278},
    inside2: {x: 261.01, y: 215.01, z: 101.68, h: 250.082},
    card1: {x: 262.35, y: 223.00, z: 107.05},
    card2: {x: 252.80, y: 228.55, z: 102.50},
    hack1: {x: 262.35, y: 223.00, z: 107.05, type: "hei_v_ilev_bk_gate2_pris", h: 249.731},
    hack2: {x: 252.80, y: 228.55, z: 102.50},
    vault: {x: 253.92, y: 224.56, z: 101.88, type: "v_ilev_bk_vaultdoor"},
    thermal1: {x: 252.82, y: 221.07, z: 101.60},
    thermal2: {x: 261.22, y: 215.43, z: 101.68},
    lockpick1: {x: 252.82, y: 221.07, z: 101.60},
    lockpick2: {x: 261.22, y: 215.43, z: 101.68},
    cash1: {x: 257.40, y: 215.15, z: 101.68},
    cash2: {x: 262.32, y: 213.31, z: 101.68},
    cash3: {x: 263.54, y: 216.23, z: 101.68},
    cash4: {x: 266.36, y: 215.31, z: 101.68},
    cash5: {x: 265.11, y: 212.05, z: 101.68},
    cur: 7,
    starttimer: false,
    vaulttime: 0,
    currentplant: 0,
    currentpick: 0,
    currenthack: 0,
    hackmethod: 0,
    currentid: 0,
    begingas: false,
    searchlocations: [
        {coords: {x: 233.40, y: 221.53, z: 110.40}, status: false},
        {coords: {x: 240.93, y: 211.12, z: 110.40}, status: false},
        {coords: {x: 246.54, y: 208.86, z: 110.40}, status: false},
        {coords: {x: 264.33, y: 212.16, z: 110.40}, status: false},
        {coords: {x: 252.87, y: 222.36, z: 106.35}, status: false},
        {coords: {x: 249.71, y: 227.84, z: 106.35}, status: false},
        {coords: {x: 244.80, y: 229.70, z: 106.35}, status: false}
    ],
    obj: [
        {x: 257.40, y: 215.15, z: 100.68, h: 269934519},
        {x: 262.32, y: 213.31, z: 100.68, h: 269934519},
        {x: 263.54, y: 216.23, z: 100.68, h: 269934519},
        {x: 266.36, y: 215.31, z: 100.68, h: 2007413986},
        {x: 265.11, y: 212.05, z: 100.68, h: 881130828}
    ],
    emptyobjs: [
        {x: 257.40, y: 215.15, z: 100.68, h: 769923921},
        {x: 262.32, y: 213.31, z: 100.68, h: 769923921},
        {x: 263.54, y: 216.23, z: 100.68, h: 769923921},
        {x: 266.36, y: 215.31, z: 100.68, h: 769923921},
        {x: 265.11, y: 212.05, z: 100.68, h: 769923921}
    ],
    checks: {
        hack1: false,
        hack2: false,
        thermal1: false,
        thermal2: false,
        id1: false,
        id2: false,
        idfound: false,
        lockpick1: false,
        lockpick2: false,
        grab1: false,
        grab2: false,
        grab3: false,
        grab4: false,
        grab5: false
    },
    alarmblip: null,
    text: {
        loudstart: "[~r~E~w~] Starte ~g~LAUTEN~w~ Banküberfall",
        silentstart: "[~r~E~w~] Starte ~g~LEISEN~w~ Banküberfall",
        usecard: "[~r~E~w~] Benutze ID Card",
        usethermal: "[~r~E~w~] Benutze thermische Ladung",
        usehack: "[~r~E~w~] Hack Sicherheitspanel",
        uselockpick: "[~r~E~w~] Benutze Dietrich",
        usesearch: "[~r~E~w~] Suchen",
        lootcash: "[~r~E~w~] Den Geldwagen plündern",
        lootgold: "[~r~E~w~] Den Goldwagen plündern",
        lootdia: "[~r~E~w~] Den Diamantenwagen plündern",
        card: "ID Card wird genutzt",
        thermal: "Thermische Ladung wird angebracht",
        burning: "Schmelzen des Schlosses",
        lockpick: "Das Schloss knacken",
        using: "Panel Processing",
        used: "Prozess abgeschlossen.",
        stage: "fertiggestellt.",
        search: "Suchen",
        hacking: "Hacking",
        melted: "Door lock melted.",
        hacked: "Hack abgeschlossen.",
        unlocked: "Tür aufgeschlossen.",
        nothing: "Nichts gefunden.",
        found: "Du hast die ID Card gefunden.",
        time: "Verbleibend: "
    }
};
UTK.searchinfo = {
    random: Math.floor(Math.random() * UTK.cur),
    found: false
};
let Trolley;
let PlaySound = false;
let program = 0;
let scaleform = null;
let lives = 5;
let ClickReturn;
let SorF = false;
let Hacking = false;
let Ipfinished = false;
let UsingComputer = false;
let Grab2clear = false;
let Grab3clear = false;
let GrabBag = null;
let RouletteWords = [
    "UTK4EVER",
    "ABSOLUTE",
    "ISTANBUL",
    "DOCTRINE",
    "IMPERIUS",
    "DELIRIUM",
    "MAETHRIL"
];
let CurrentSlot = 0;

function GetInfo() {
    //alt.emitServer("utk_oh:GetData");
}

alt.onServer("utk_oh:GetData", (output) => {
    UTK.info = JSON.parse(output);
    HandleInfo();
})

function HandleInfo() {
    //Get player Job
    let job = "Test";

    if (job != "police") {
        if (UTK.info.stage == 0) {
            let everyTick = alt.everyTick(() => {
                let coords = alt.Player.local.pos;

                let dst = native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, UTK.loudstart.x, UTK.loudstart.y, UTK.loudstart.z, true);

                if (dst <= 6) {
                    //DrawText3D(UTK.loudstart.x, UTK.loudstart.y, UTK.loudstart.z, UTK.text.loudstart, 0.40);
                    if (dst <= 1 && native.isControlJustReleased(0, 38)) {
                        //alt.emitServer("utk_oh:startevent", 1);
                    }
                }

                let dst2 = native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, UTK.silentstart.x, UTK.silentstart.y, UTK.silentstart.z, true);

                if (dst2 <= 6) {
                    //DrawText3D(UTK.silentstart.x, UTK.silentstart.y, UTK.silentstart.z, UTK.text.silentstart, 0.40);
                    if (dst2 <= 1 && native.isControlJustReleased(0, 38)) {
                        //alt.emitServer("utk_oh:startevent", 2);
                    }
                }

                if (UTK.stage0break) {
                    UTK.stage0break = false;
                    alt.clearEveryTick(everyTick);
                }
            });
        } else if (UTK.info.stage == 1) {
            if (UTK.initiator) {
                if (UTK.info.style == 1) {
                    let everyTick = alt.everyTick(() => {
                        let coords = alt.Player.local.pos;

                        if (!UTK.checks.hack1) {
                            let dst = native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, UTK.hack1.x, UTK.hack1.y, UTK.hack1.z, true);

                            if (dst <= 4) {
                                DrawText3D(UTK.hack1.x, UTK.hack1.y, UTK.hack1.z, UTK.text.usehack, 0.40);
                                if (dst <= 1 && native.isControlJustReleased(0, 38)) {
                                    alt.emitServer("utk_oh:checkItem", "laptop_h");
                                    UTK.checks.hack1 = true;
                                    UTK.currenthack = 0;
                                    Hack();
                                }
                            }
                        }
                        if (UTK.checks.hack1 && !UTK.checks.hack2) {
                            let dst = native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, UTK.hack2.x, UTK.hack2.y, UTK.hack2.z, true);

                            if (dst <= 4) {
                                DrawText3D(UTK.hack2.x, UTK.hack2.y, UTK.hack2.z, UTK.text.usehack, 0.40);
                                if (dst <= 1 && native.isControlJustReleased(0, 38)) {
                                    alt.emitServer("utk_oh:checkItem", "laptop_h");
                                    UTK.checks.hack2 = true;
                                    UTK.info.stage = 2;
                                    UTK.currenthack = 1;
                                    Hack();
                                }
                            }
                        }

                        if (UTK.stage1break) {
                            UTK.stage1break = false;
                            alt.clearEveryTick(everyTick);
                        }
                    });
                } else if (UTK.info.style == 2) {
                    let everyTick = alt.everyTick(() => {
                        let coords = alt.Player.local.pos;

                        if (!UTK.checks.id1) {
                            let dst = native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, UTK.card1.x, UTK.card1.y, UTK.card1.z, true);

                            if (dst <= 4) {
                                DrawText3D(UTK.card1.x, UTK.card1.y, UTK.card1.z, UTK.text.usecard, 0.40);
                                if (dst <= 1 && native.isControlJustReleased(0, 38)) {
                                    alt.emitServer("utk_oh:checkItem", "id_card");
                                    UTK.checks.id1 = true;
                                    UTK.currentid = 1;
                                    IdCard();
                                }
                            }
                        }
                        if (!UTK.searchinfo.found) {
                            for (let i = 0; i < UTK.searchlocations.length; i++) {
                                if (!UTK.searchlocations[i].status) {
                                    if (native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, UTK.searchlocations[i].coords.x, UTK.searchlocations[i].coords.y, UTK.searchlocations[i].coords.z, true) <= 2.2) {
                                        DrawText3D(UTK.searchlocations[i].coords.x, UTK.searchlocations[i].coords.y, UTK.searchlocations[i].coords.z, UTK.text.usesearch, 0.40);
                                        if (native.isControlJustReleased(0, 38)) {
                                            Search(UTK.searchlocations[i]);
                                        }
                                    }
                                }
                            }
                        }
                        if (UTK.checks.id1 && !UTK.checks.id2) {
                            let dst = native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, UTK.card2.x, UTK.card2.y, UTK.card2.z, true);

                            if (dst <= 4) {
                                DrawText3D(UTK.card2.x, UTK.card2.y, UTK.card2.z, UTK.text.usecard, 0.40);
                                if (dst <= 1 && native.isControlJustReleased(0, 38)) {
                                    alt.emitServer("utk_oh:checkItem", "id_card");
                                    UTK.checks.id2 = true;
                                    UTK.currentid = 2;
                                    IdCard();
                                }
                            }
                        }

                        if (UTK.stage1break) {
                            UTK.stage1break = false;
                            alt.clearEveryTick(everyTick);
                        }
                    });
                }
            }
        } else if (UTK.info.stage == 2) {
            if (UTK.initiator) {
                if (UTK.info.style == 1) {
                    let everyTick = alt.everyTick(() => {
                        let coords = alt.Player.local.pos;

                        if (!UTK.checks.thermal1) {
                            let dst = native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, UTK.thermal1.x, UTK.thermal1.y, UTK.thermal1.z, true);

                            if (dst <= 4) {
                                DrawText3D(UTK.thermal1.x, UTK.thermal1.y, UTK.thermal1.z, UTK.text.usethermal, 0.40);
                                if (dst <= 1 && native.isControlJustReleased(0, 38)) {
                                    alt.emitServer("utk_oh:checkItem", "thermal_charge");
                                    UTK.checks.thermal1 = true;
                                    UTK.currentplant = 1;
                                    Plant();
                                }
                            }
                        }
                        if (UTK.checks.thermal1 && !UTK.checks.thermal2) {
                            let dst = native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, UTK.thermal2.x, UTK.thermal2.y, UTK.thermal2.z, true);

                            if (dst <= 4) {
                                DrawText3D(UTK.thermal2.x, UTK.thermal2.y, UTK.thermal2.z, UTK.text.usethermal, 0.40);
                                if (dst <= 1 && native.isControlJustReleased(0, 38)) {
                                    alt.emitServer("utk_oh:checkItem", "thermal_charge");
                                    UTK.checks.thermal2 = true;
                                    UTK.currentplant = 2;
                                    Plant();
                                }
                            }
                        }

                        if (UTK.stage2break) {
                            UTK.stage2break = false;
                            alt.clearEveryTick(everyTick);
                        }
                    });
                } else if (UTK.info.style == 2) {
                    let everyTick = alt.everyTick(() => {
                        let coords = alt.Player.local.pos;

                        if (!UTK.checks.lockpick1) {
                            let dst = native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, UTK.lockpick1.x, UTK.lockpick1.y, UTK.lockpick1.z, true);

                            if (dst <= 4) {
                                DrawText3D(UTK.lockpick1.x, UTK.lockpick1.y, UTK.lockpick1.z, UTK.text.uselockpick, 0.40);
                                if (dst <= 1 && native.isControlJustReleased(0, 38)) {
                                    alt.emitServer("utk_oh:checkItem", "lockpick");
                                    UTK.checks.lockpick1 = true;
                                    UTK.currentpick = 1;
                                    Lockpick();
                                }
                            }
                        }
                        if (!UTK.checks.lockpick2) {
                            let dst = native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, UTK.lockpick2.x, UTK.lockpick2.y, UTK.lockpick2.z, true);

                            if (dst <= 4) {
                                DrawText3D(UTK.lockpick2.x, UTK.lockpick2.y, UTK.lockpick2.z, UTK.text.uselockpick, 0.40);
                                if (dst <= 1 && native.isControlJustReleased(0, 38)) {
                                    alt.emitServer("utk_oh:checkItem", "lockpick");
                                    UTK.checks.lockpick2 = true;
                                    UTK.currentpick = 2;
                                    Lockpick();
                                }
                            }
                        }

                        if (UTK.stage2break) {
                            UTK.stage2break = false;
                            alt.clearEveryTick(everyTick);
                        }
                    });
                }
            }
        }
    }
}

function Plant(tryNumber = 0) {
    let animDict = "anim@heists@ornate_bank@thermal_charge";
    native.requestAnimDict(animDict);
    if (!native.hasAnimDictLoaded(animDict)) {
        if (tryNumber > 100) {
            alt.logError("Could Not Load Anim Dict anim@heists@ornate_bank@thermal_charge . Aborting");
            return;
        }

        alt.setTimeout(() => {
            Plant(++tryNumber);
        }, 25);
        return;
    }

    let model = "hei_prop_heist_thermite";
    native.requestModel(alt.hash(model))
    if (!native.hasModelLoaded(alt.hash(model))) {
        if (tryNumber > 200) {
            alt.logError("Could Not Load Model hei_prop_heist_thermite . Aborting");
            return;
        }

        alt.setTimeout(() => {
            Plant(++tryNumber);
        }, 25);
        return;
    }

    native.requestNamedPtfxAsset("scr_ornate_heist")
    if (!native.hasNamedPtfxAssetLoaded("scr_ornate_heist")) {
        if (tryNumber > 300) {
            alt.logError("Could Not Load Named Ptfx Asset scr_ornate_heist . Aborting");
            return;
        }

        alt.setTimeout(() => {
            Plant(++tryNumber);
        }, 25);
        return;
    }
    UTK.disableinput = true;
    let loc = {x: null, y: null, z: null, h: null};
    let ptfx;
    let method;
    let oldmodel;
    let newmodel;

    if (UTK.currentplant == 0) {
        UTK.stage0break = true;
        loc.x = 257.40;
        loc.y = 220.20;
        loc.z = 106.35;
        loc.h = 336.48;
        ptfx = new alt.Vector3(257.39, 221.20, 106.29);
        oldmodel = "hei_v_ilev_bk_gate_pris";
        newmodel = "hei_v_ilev_bk_gate_molten";
        method = 1;
    } else if (UTK.currentplant == 1) {
        loc.x = 252.95;
        loc.y = 220.70;
        loc.z = 101.76;
        loc.h = 160;
        ptfx = new alt.Vector3(252.985, 221.70, 101.72);
        oldmodel = "hei_v_ilev_bk_safegate_pris";
        newmodel = "hei_v_ilev_bk_safegate_molten";
        method = 2;
    } else if (UTK.currentplant == 2) {
        loc.x = 261.65;
        loc.y = 215.60;
        loc.z = 101.76;
        loc.h = 252;
        ptfx = new alt.Vector3(261.68, 216.63, 101.75);
        oldmodel = "hei_v_ilev_bk_safegate_pris";
        newmodel = "hei_v_ilev_bk_safegate_molten";
        method = 3;
    }
    let ped = alt.Player.local.scriptID;

    native.setEntityHeading(ped, loc.h);
    if (UTK.currentplant == 0) {
        native.setEntityCoords(ped, 256.7500, 219.6000, 106.2836, 1, 0, 0, 1);
    } else if (UTK.currentplant == 1) {
        native.setEntityCoords(ped, 253.6615, 221.4198, 101.6666, 1, 0, 0, 1);
    } else if (UTK.currentplant == 2) {
        native.setEntityCoords(ped, 260.9011, 216.1582, 101.6666, 1, 0, 0, 1);
    }
    alt.setTimeout(() => {
        native.setPedComponentVariation(ped, 5, 0, 0, 0);
        native.taskPlayAnim(ped, animDict, "thermal_charge", 8.0, 8.0, -1, 0, 0, false, false, false);
        alt.setTimeout(() => {
            let x, y, z = null;
            let position = alt.Player.local.pos;
            x = position.x;
            y = position.y;
            z = position.z;
            let bomba = native.createObject(alt.hash("hei_prop_heist_thermite"), x, y, z + 0.2, true, true, true);

            native.setEntityCollision(bomba, false, true);
            native.attachEntityToEntity(bomba, ped, native.getPedBoneIndex(ped, 28422), 0, 0, 0, 0, 0, 200.0, true, true, false, true, 1, true);
            native.freezeEntityPosition(bomba, true);
            alt.setTimeout(() => {
                native.setPedComponentVariation(ped, 5, 45, 0, 0);
                native.detachEntity(bomba, 1, 1);
                alt.emitServer("utk_oh:ptfx", method);
                native.useParticleFxAsset("scr_ornate_heist");
                let effect = native.startParticleFxLoopedAtCoord("scr_heist_ornate_thermal_burn", ptfx.x, ptfx.y, ptfx.z, 0.0, 0.0, 0.0, 1.0, false, false, false, false);

                UTK.disableinput = false;
                if (UTK.currentplant === 0) {
                    alt.emitServer("utk_oh:fixdoor", UTK.doorchecks[0].h, new alt.Vector3(UTK.doorchecks[0].x, UTK.doorchecks[0].y, UTK.doorchecks[0].z), UTK.doorchecks[0].he);
                } else if (UTK.currentplant === 1) {
                    alt.emitServer("utk_oh:fixdoor", UTK.doorchecks[3].h, new alt.Vector3(UTK.doorchecks[3].x, UTK.doorchecks[3].y, UTK.doorchecks[3].z), UTK.doorchecks[3].he);
                } else if (UTK.currentplant === 2) {
                    alt.emitServer("utk_oh:fixdoor", UTK.doorchecks[4].h, new alt.Vector3(UTK.doorchecks[4].x, UTK.doorchecks[4].y, UTK.doorchecks[4].z), UTK.doorchecks[4].he);
                }
                native.taskPlayAnim(ped, "anim@heists@ornate_bank@thermal_charge", "cover_eyes_intro", 8.0, 8.0, -1, 36, 1, 0, 0, 0);
                native.taskPlayAnim(ped, "anim@heists@ornate_bank@thermal_charge", "cover_eyes_loop", 8.0, 8.0, -1, 49, 1, 0, 0, 0);
                alt.setTimeout(() => {
                    native.clearPedTasks(ped);
                    alt.setTimeout(() => {
                        if (UTK.currentplant === 0) {
                            alt.emitServer("utk_oh:alarm_s", 1);
                        }
                        alt.emitServer("utk_oh:deleteObject", bomba);
                        alt.emitServer("utk_oh:moltgate", loc.x, loc.y, loc.z, oldmodel, newmodel);
                        alt.setTimeout(() => {
                            native.stopParticleFxLooped(effect, 0);
                            if (UTK.currentplant == 0) {
                                alt.emitServer("utk_oh:policeDoor", 0, false);
                                HandleInfo();
                            } else if (UTK.currentplant == 1) {
                                alt.emitServer("utk_oh:policeDoor", 3, false);
                            } else if (UTK.currentplant == 2) {
                                alt.emitServer("utk_oh:policeDoor", 4, false);
                            }
                        }, 9000);
                    }, 2000);
                }, 2000);
            }, 4000);
        }, 1500);
    }, 100);
}

function Lockpick(tryNumber = 0) {
    let animDict = "mp_arresting";
    native.requestAnimDict(animDict);
    if (!native.hasAnimDictLoaded(animDict)) {
        if (tryNumber > 100) {
            alt.logError("Could Not Load Anim Dict mp_arresting . Aborting");
            return;
        }

        alt.setTimeout(() => {
            Lockpick(++tryNumber);
        }, 25);
        return;
    }
    UTK.disableinput = true;
    let loc = {x: null, y: null, z: null, h: null};
    if (UTK.currentpick == 0) {
        loc.x = 236.22;
        loc.y = 227.50;
        loc.z = 105.00;
        loc.h = 336.56;
    } else if (UTK.currentpick == 1) {
        loc.x = 253.28;
        loc.y = 221.25;
        loc.z = 100.50;
        loc.h = 155.11;
    } else if (UTK.currentpick == 2) {
        loc.x = 260.91;
        loc.y = 215.93;
        loc.z = 100.50;
        loc.h = 248.54;
    }
    let ped = alt.Player.local.scriptID;
    native.setEntityCoords(ped, loc.x, loc.y, loc.z, 1, 0, 0, 1);
    native.setEntityHeading(ped, loc.h);
    native.taskPlayAnim(ped, animDict, "a_uncuff", 8.0, 8.0, 6000, 1, 1, 0, 0, 0);
    alt.setTimeout(() => {
        native.setEntityCoords(ped, loc.x, loc.y, loc.z, 1, 0, 0, 1);
        native.setEntityHeading(ped, loc.h);
        native.taskPlayAnim(ped, animDict, "a_uncuff", 8.0, 8.0, 6000, 1, 1, 0, 0, 0);
        alt.setTimeout(() => {
            UTK.disableinput = false;
            if (UTK.currentpick == 0) {
                UTK.stage0break = true;
                alt.emitServer("utk_oh:policeDoor", 1, false);
                HandleInfo();
            } else if (UTK.currentpick == 1) {
                alt.emitServer("utk_oh:policeDoor", 3, false);
            } else if (UTK.currentpick == 2) {
                alt.emitServer("utk_oh:policeDoor", 4, false);
            }
        }, 6500);
    }, 6500);
}

function Hack(tryNumber = 0) {
    let animDict = "anim@heists@ornate_bank@hack";
    native.requestAnimDict(animDict);
    if (!native.hasAnimDictLoaded(animDict)) {
        if (tryNumber > 100) {
            alt.logError("Could Not Load Anim Dict anim@heists@ornate_bank@hack . Aborting");
            return;
        }

        alt.setTimeout(() => {
            Hack(++tryNumber);
        }, 25);
        return;
    }
    UTK.hackfinish = false;
    let loc = {x: null, y: null, z: null, h: null};

    if (UTK.currenthack == 0) {
        UTK.hackmethod = 1;
        loc.x = 262.65;
        loc.y = 222.75;
        loc.z = 105.90;
        loc.h = 244.19;
    } else if (UTK.currenthack == 1) {
        UTK.hackmethod = 2;
        loc.x = 253.34;
        loc.y = 228.25;
        loc.z = 101.39;
        loc.h = 63.60;
    }
    let ped = alt.Player.local.scriptID;

    native.setEntityHeading(ped, loc.h);
    native.freezeEntityPosition(ped, true);

    native.setPedComponentVariation(ped, 5, 0, 0, 0);
    native.taskPlayAnim(ped, animDict, "hack_enter", 8.0, 8.0, -1, 0, 0, false, false, false);
    alt.setTimeout(() => {
        Brute();
        native.taskPlayAnim(ped, animDict, "hack_loop", 8.0, 8.0, -1, 1, 0, false, false, false);
        let tick = alt.everyTick(() => {
            if (UTK.hackfinish) {
                native.taskPlayAnim(ped, animDict, "hack_exit", 8.0, 8.0, -1, 0, 0, false, false, false);
                alt.clearEveryTick(tick);
                alt.setTimeout(() => {
                    native.clearPedTasks(ped);
                    native.freezeEntityPosition(ped, false);
                    native.setPedComponentVariation(ped, 5, 45, 0, 0);
                }, 4500);
            }
        });
    }, 6500);
}

function IdCard(tryNumber = 0) {
    native.requestModel(alt.hash("p_ld_id_card_01"));
    if (!native.hasModelLoaded(alt.hash("p_ld_id_card_01"))) {
        if (tryNumber > 100) {
            alt.logError("Could Not Load Model p_ld_id_card_01 . Aborting");
            return;
        }

        alt.setTimeout(() => {
            IdCard(++tryNumber);
        }, 25);
        return;
    }

    UTK.disableinput = true;
    let ped = alt.Player.local.scriptID;
    if (UTK.currentid == 1) {
        native.setEntityCoords(ped, 261.89, 223.5, 105.30, 1, 0, 0, 1);
        native.setEntityHeading(ped, 255.92);
    } else if (UTK.currentid == 2) {
        native.setEntityCoords(ped, 253.39, 228.12, 100.75, 1, 0, 0, 1);
        native.setEntityHeading(ped, 71.72);
    }
    alt.setTimeout(() => {
        let pedco = alt.Player.local.pos;
        let IdProp = native.createObject(alt.hash("p_ld_id_card_01"), pedco.x, pedco.y, pedco.z, true, true, false);
        let boneIndex = native.getPedBoneIndex(ped, 28422);
        let panel = native.getClosestObjectOfType(pedco.x, pedco.y, pedco.z, 4.0, alt.hash("hei_prop_hei_securitypanel"), false, false, false);

        native.attachEntityToEntity(IdProp, ped, boneIndex, 0.12, 0.028, 0.001, 10.0, 175.0, 0.0, true, true, false, true, 1, true);
        native.taskStartScenarioInPlace(ped, "PROP_HUMAN_ATM", 0, true);
        alt.setTimeout(() => {
            native.attachEntityToEntity(IdProp, panel, boneIndex, -0.09, -0.02, -0.08, 270.0, 0.0, 270.0, true, true, false, true, 1, true);
            native.freezeEntityPosition(IdProp, true);
            alt.setTimeout(() => {
                native.clearPedTasksImmediately(ped);
                alt.setTimeout(() => {
                    native.playSoundFrontend(-1, "ATM_WINDOW", "HUD_FRONTEND_DEFAULT_SOUNDSET");
                    if (UTK.currentid == 1) {
                        UTK.disableinput = false;
                        alt.emitServer("utk_oh:policeDoor", 2, false);
                    } else if (UTK.currentid == 2) {
                        UTK.stage1break = true;
                        UTK.disableinput = false;
                        alt.setTimeout(() => {
                            SpawnObj();
                            alt.emitServer("utk_oh:openvault", 1);
                            alt.emit("utk_oh:vaulttimer", 2);
                            alt.emitServer("utk_oh:alarm_s", 1);
                            UTK.info.stage = 2;
                            UTK.info.style = 2;
                            HandleInfo();
                        }, 4000);
                    }
                }, 1500);
            }, 500);
        }, 1500);
    }, 100);
}

function SpawnObj(tryNumber = 0) {
    native.requestModel(alt.hash("hei_prop_hei_cash_trolly_01"));
    if (!native.hasModelLoaded(alt.hash("hei_prop_hei_cash_trolly_01"))) {
        if (tryNumber > 100) {
            alt.logError("Could Not Load Model hei_prop_hei_cash_trolly_01 . Aborting");
            return;
        }

        alt.setTimeout(() => {
            SpawnObj(++tryNumber);
        }, 25);
        return;
    }
    let Trolley1 = native.createObject(alt.hash("hei_prop_hei_cash_trolly_01"), 257.44, 215.07, 100.68, 1, 0, 0);
    alt.emitServer("utk_oh:createObject", alt.hash("hei_prop_hei_cash_trolly_01"), 257.44, 215.07, 100.68);
    let Trolley2 = native.createObject(alt.hash("hei_prop_hei_cash_trolly_01"), 262.34, 213.28, 100.68, 1, 0, 0);
    alt.emitServer("utk_oh:createObject", alt.hash("hei_prop_hei_cash_trolly_01"), 262.34, 213.28, 100.68);
    let Trolley3 = native.createObject(alt.hash("hei_prop_hei_cash_trolly_01"), 263.45, 216.05, 100.68, 1, 0, 0);
    alt.emitServer("utk_oh:createObject", alt.hash("hei_prop_hei_cash_trolly_01"), 263.45, 216.05, 100.68);
    let Trolley4 = native.createObject(alt.hash("hei_prop_hei_cash_trolly_01"), 266.02, 215.34, 100.68, 1, 0, 0);
    alt.emitServer("utk_oh:createObject", alt.hash("hei_prop_hei_cash_trolly_01"), 266.02, 215.34, 100.68);
    let Trolley5 = native.createObject(alt.hash("hei_prop_hei_cash_trolly_01"), 265.11, 212.05, 100.68, 1, 0, 0);
    alt.emitServer("utk_oh:createObject", alt.hash("hei_prop_hei_cash_trolly_01"), 265.11, 212.05, 100.68);
    let heading = native.getEntityHeading(Trolley3);
    let heading2 = native.getEntityHeading(Trolley4);

    native.setEntityHeading(Trolley3, heading + 150);
    native.setEntityHeading(Trolley4, heading2 + 150);
    alt.emitServer("utk_oh:startloot");
}

function Loot(currentgrab, tryNumber = 0) {
    Grab2clear = false;
    Grab3clear = false;
    UTK.grabber = true;
    Trolley = null;
    let ped = alt.Player.local.scriptID;
    let model = "hei_prop_heist_cash_pile";

    if (currentgrab == 1) {
        Trolley = native.getClosestObjectOfType(257.44, 215.07, 100.68, 1.0, 269934519, false, false, false);
    } else if (currentgrab == 2) {
        Trolley = native.getClosestObjectOfType(262.34, 213.28, 100.68, 1.0, 269934519, false, false, false);
    } else if (currentgrab == 3) {
        Trolley = native.getClosestObjectOfType(263.45, 216.05, 100.68, 1.0, 269934519, false, false, false);
    } else if (currentgrab == 4) {
        Trolley = native.getClosestObjectOfType(266.02, 215.34, 100.68, 1.0, 269934519, false, false, false);
    } else if (currentgrab == 5) {
        Trolley = native.getClosestObjectOfType(265.11, 212.05, 100.68, 1.0, 269934519, false, false, false);
    }
    let CashAppear = function (tryNumber = 0) {
        let pedCoords = alt.Player.local.pos;
        let grabmodel = alt.hash(model);

        native.requestModel(grabmodel);
        if (!native.hasModelLoaded(grabmodel)) {
            if (tryNumber > 100) {
                alt.logError("Could Not Load Model hei_prop_heist_cash_pile . Aborting");
                return;
            }

            alt.setTimeout(() => {
                CashAppear(++tryNumber);
            }, 25);
            return;
        }

        let grabobj = native.createObject(grabmodel, pedCoords.x, pedCoords.y, pedCoords.z, true, false, false);

        native.freezeEntityPosition(grabobj, true);
        native.setEntityInvincible(grabobj, true);
        native.setEntityNoCollisionEntity(grabobj, ped);
        native.setEntityVisible(grabobj, false, false);
        native.attachEntityToEntity(grabobj, ped, native.getPedBoneIndex(ped, 60309), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, false, false, false, false, 0, true);
        let startedGrabbing = native.getGameTimer();

        alt.setInterval(() => {
            if (native.getGameTimer() - startedGrabbing < 37000) {
                native.disableControlAction(0, 73, true);
                if (native.hasAnimEventFired(ped, alt.hash("CASH_APPEAR"))) {
                    if (!native.isEntityVisible(grabobj)) {
                        native.setEntityVisible(grabobj, true, false);
                    }
                }
                if (native.hasAnimEventFired(ped, alt.hash("RELEASE_CASH_DESTROY"))) {
                    if (native.isEntityVisible(grabobj)) {
                        native.setEntityVisible(grabobj, false, false);
                        alt.emitServer("utk_oh:rewardCash");
                    }
                }
            }
            native.deleteObject(grabobj);
        }, 1);
    }
    let emptyobj = 769923921;
    if (native.isEntityPlayingAnim(Trolley, "anim@heists@ornate_bank@grab_cash", "cart_cash_dissapear", 3)) {
        return;
    }
    let baghash = alt.hash("hei_p_m_bag_var22_arm_s");

    native.requestAnimDict("anim@heists@ornate_bank@grab_cash");
    if (!native.hasAnimDictLoaded("anim@heists@ornate_bank@grab_cash")) {
        if (tryNumber > 100) {
            alt.logError("Could Not Load Anim Dict anim@heists@ornate_bank@grab_cash . Aborting");
            return;
        }

        alt.setTimeout(() => {
            Loot(currentgrab, ++tryNumber);
        }, 25);
        return;
    }

    native.requestModel(baghash);
    if (!native.hasModelLoaded(baghash)) {
        if (tryNumber > 200) {
            alt.logError("Could Not Load Model hei_p_m_bag_var22_arm_s . Aborting");
            return;
        }

        alt.setTimeout(() => {
            Loot(currentgrab, ++tryNumber);
        }, 25);
        return;
    }

    native.requestModel(emptyobj);
    if (!native.hasModelLoaded(emptyobj)) {
        if (tryNumber > 300) {
            alt.logError("Could Not Load Model emptyobj . Aborting");
            return;
        }

        alt.setTimeout(() => {
            Loot(currentgrab, ++tryNumber);
        }, 25);
        return;
    }

    native.networkRequestControlOfEntity(Trolley);
    if (!native.networkHasControlOfEntity(Trolley)) {
        if (tryNumber > 400) {
            alt.logError("Could Not Load Model Trolley . Aborting");
            return;
        }

        alt.setTimeout(() => {
            Loot(currentgrab, ++tryNumber);
        }, 25);
        return;
    }
    native.taskPlayAnim(ped, "anim@heists@ornate_bank@grab_cash", "intro", 8.0, 8.0, -1, 0, 0, false, false, false);
    alt.setTimeout(() => {
        CashAppear();
        if (!Grab2clear) {
            native.taskPlayAnim(ped, "anim@heists@ornate_bank@grab_cash", "grab", 8.0, 8.0, -1, 0, 0, false, false, false);
            native.taskPlayAnim(Trolley, "anim@heists@ornate_bank@grab_cash", "cart_cash_dissapear", 8.0, 8.0, -1, 0, 0, false, false, false);
        }
        if (!Grab3clear) {
            native.taskPlayAnim(ped, "anim@heists@ornate_bank@grab_cash", "exit", 8.0, 8.0, -1, 0, 0, false, false, false);
            let NewTrolley = native.createObject(emptyobj, native.getEntityCoords(Trolley).x, native.getEntityCoords(Trolley).y, native.getEntityCoords(Trolley).z, true, false, false);
            native.setEntityRotation(NewTrolley, native.getEntityRotation(Trolley).x, native.getEntityRotation(Trolley).y, native.getEntityRotation(Trolley).z);
            native.deleteObject(Trolley);
            if (native.doesEntityExist(Trolley)) {
                native.deleteObject(Trolley);
            }
            native.placeObjectOnGroundProperly(NewTrolley);
        }
        alt.setTimeout(() => {
            native.setPedComponentVariation(ped, 5, 45, 0, 0);
            native.removeAnimDict("anim@heists@ornate_bank@grab_cash");
            native.setModelAsNoLongerNeeded(emptyobj);
            native.setModelAsNoLongerNeeded(alt.hash("hei_p_m_bag_var22_arm_s"));
        }, 1800);
    }, 1500);
}

function Search(location, tryNumber = 0) {
    native.requestAnimDict("mp_arresting");
    if (!native.hasAnimDictLoaded("mp_arresting")) {
        if (tryNumber > 100) {
            alt.logError("Could Not Load Anim Dict mp_arresting . Aborting");
            return;
        }

        alt.setTimeout(() => {
            Search(location, ++tryNumber);
        }, 25);
        return;
    }

    UTK.disableinput = true;
    EnterAnim(location.coords);
    alt.setTimeout(() => {
        native.taskStartScenarioInPlace(alt.Player.local.scriptID, "PROP_HUMAN_BUM_BIN", 0, true);
        alt.setTimeout(() => {
            if (UTK.searchinfo.random != 1) {
                location.status = true;
                UTK.searchinfo.random = Math.floor(Math.random() * (UTK.cur - 1));
                UTK.cur = UTK.cur - 1;
            } else {
                UTK.searchinfo.found = true;
                alt.emitServer("utk_oh:giveidcard");
            }
            native.clearPedTasks(alt.Player.local.scriptID);
            UTK.disableinput = false;
        }, 15000);
    }, 1500);
}

function Process(ms, text) {

}

function DrawText3D(x, y, z, msg, scale) {
    native.setDrawOrigin(x, y, z, 0);
    native.beginTextCommandDisplayText("STRING");
    native.setTextScale(scale, scale);
    native.setTextFont(4);
    native.setTextProportional(1);
    native.setTextCentre(true);
    native.setTextColour(255, 255, 255, 215);
    native.addTextComponentSubstringPlayerName(msg);
    native.endTextCommandDisplayText(0, 0, 0);
    native.clearDrawOrigin();
    let factor = (msg.length) / 700;
    native.drawRect(x, y + 0.0150, 0.095 + factor, 0.03, 41, 11, 41, 100);
}

function ShowVaultTimer() {
    native.beginTextCommandDisplayText("STRING");
    native.addTextComponentSubstringPlayerName("~r~" + UTK.vaulttime + "~w~");
    native.setTextFont(0);
    native.setTextProportional(0);
    native.setTextScale(0.42, 0.42);
    native.setTextDropShadow();
    native.setTextEdge(1, 0, 0, 0, 255);
    native.endTextCommandDisplayText(0.682, 0.96, 0);
}

function DisableControl() {
    native.disableControlAction(0, 22, true);
    native.disableControlAction(0, 23, true);
    native.disableControlAction(0, 24, true);
    native.disableControlAction(0, 25, true);
    native.disableControlAction(0, 30, true);
    native.disableControlAction(0, 31, true);
    native.disableControlAction(0, 32, true);
    native.disableControlAction(0, 34, true);
    native.disableControlAction(0, 37, true);
    native.disableControlAction(0, 44, true);
    native.disableControlAction(0, 45, true);
    native.disableControlAction(0, 47, true);
    native.disableControlAction(0, 73, true);
    native.disableControlAction(0, 140, true);
    native.disableControlAction(0, 141, true);
    native.disableControlAction(0, 142, true);
    native.disableControlAction(0, 143, true);
    native.disableControlAction(0, 167, true);
    native.disableControlAction(0, 170, true);
    native.disableControlAction(0, 172, true);
    native.disableControlAction(0, 173, true);
    native.disableControlAction(0, 174, true);
    native.disableControlAction(0, 175, true);
    native.disableControlAction(0, 176, true);
    native.disableControlAction(2, 199, true);
    native.disableControlAction(0, 257, true);
    native.disableControlAction(0, 263, true);
    native.disableControlAction(0, 264, true);
    native.disableControlAction(0, 288, true);
    native.disableControlAction(0, 289, true);
}

function EnterAnim(coords) {
    native.taskTurnPedToFaceCoord(alt.Player.local.scriptID, coords.x, coords.y, coords.z, 1000);
}

function Initialize(tryNumber = 0) {
    let scaleform_done = native.requestScaleformMovieInteractive("Hacking_PC");
    if (!native.hasScaleformMovieLoaded(scaleform_done)) {
        if (tryNumber > 100) {
            alt.logError("Could Not Load Scaleform Hacking_PC . Aborting");
            return;
        }

        alt.setTimeout(() => {
            Initialize(++tryNumber);
        }, 25);
        return;
    }

    let CAT = "hack";
    if (native.hasAdditionalTextLoaded(CurrentSlot) && !native.hasThisAdditionalTextLoaded(CAT, CurrentSlot)) {
        if (tryNumber > 200) {
            alt.logError("Could Not Load Additional Text. Aborting");
            return;
        }

        alt.setTimeout(() => {
            CurrentSlot = CurrentSlot + 1;
            Initialize(++tryNumber);
        }, 25);
        return;
    }

    if (!native.hasThisAdditionalTextLoaded(CAT, CurrentSlot)) {
        native.clearAdditionalText(CurrentSlot, true);
        native.requestAdditionalText(CAT, CurrentSlot);
        if (!native.hasThisAdditionalTextLoaded(CAT, CurrentSlot)) {
            if (tryNumber > 300) {
                alt.logError("Could Not Load This Additional Text. Aborting");
                return;
            }

            alt.setTimeout(() => {
                Initialize(++tryNumber);
            }, 25);
            return;
        }
    }

    native.beginScaleformMovieMethod(scaleform_done, "SET_LABELS");
    ScaleformLabel("H_ICON_1");
    ScaleformLabel("H_ICON_2");
    ScaleformLabel("H_ICON_3");
    ScaleformLabel("H_ICON_4");
    ScaleformLabel("H_ICON_5");
    ScaleformLabel("H_ICON_6");
    native.endScaleformMovieMethod();

    native.beginScaleformMovieMethod(scaleform_done, "SET_BACKGROUND");
    native.scaleformMovieMethodAddParamInt(1);
    native.endScaleformMovieMethod();

    native.beginScaleformMovieMethod(scaleform_done, "ADD_PROGRAM");
    native.scaleformMovieMethodAddParamFloat(1.0);
    native.scaleformMovieMethodAddParamFloat(4.0);
    native.scaleformMovieMethodAddParamPlayerNameString("My Computer");
    native.endScaleformMovieMethod();

    native.beginScaleformMovieMethod(scaleform_done, "ADD_PROGRAM");
    native.scaleformMovieMethodAddParamFloat(6.0);
    native.scaleformMovieMethodAddParamFloat(6.0);
    native.scaleformMovieMethodAddParamPlayerNameString("Power Off");
    native.endScaleformMovieMethod();

    native.beginScaleformMovieMethod(scaleform_done, "SET_LIVES");
    native.scaleformMovieMethodAddParamInt(lives);
    native.scaleformMovieMethodAddParamInt(5);
    native.endScaleformMovieMethod();

    native.beginScaleformMovieMethod(scaleform_done, "SET_COLUMN_SPEED");
    native.scaleformMovieMethodAddParamInt(0);
    native.scaleformMovieMethodAddParamFloat(Math.random() * (255 - 150) + 150);
    native.endScaleformMovieMethod();

    native.beginScaleformMovieMethod(scaleform_done, "SET_COLUMN_SPEED");
    native.scaleformMovieMethodAddParamInt(1);
    native.scaleformMovieMethodAddParamFloat(Math.random() * (255 - 160) + 160);
    native.endScaleformMovieMethod();

    native.beginScaleformMovieMethod(scaleform_done, "SET_COLUMN_SPEED");
    native.scaleformMovieMethodAddParamInt(2);
    native.scaleformMovieMethodAddParamFloat(Math.random() * (255 - 170) + 170);
    native.endScaleformMovieMethod();

    native.beginScaleformMovieMethod(scaleform_done, "SET_COLUMN_SPEED");
    native.scaleformMovieMethodAddParamInt(3);
    native.scaleformMovieMethodAddParamFloat(Math.random() * (255 - 190) + 190);
    native.endScaleformMovieMethod();

    native.beginScaleformMovieMethod(scaleform_done, "SET_COLUMN_SPEED");
    native.scaleformMovieMethodAddParamInt(4);
    native.scaleformMovieMethodAddParamFloat(Math.random() * (255 - 200) + 200);
    native.endScaleformMovieMethod();

    native.beginScaleformMovieMethod(scaleform_done, "SET_COLUMN_SPEED");
    native.scaleformMovieMethodAddParamInt(5);
    native.scaleformMovieMethodAddParamFloat(Math.random() * (255 - 210) + 210);
    native.endScaleformMovieMethod();

    native.beginScaleformMovieMethod(scaleform_done, "SET_COLUMN_SPEED");
    native.scaleformMovieMethodAddParamInt(6);
    native.scaleformMovieMethodAddParamFloat(Math.random() * (255 - 220) + 220);
    native.endScaleformMovieMethod();

    native.beginScaleformMovieMethod(scaleform_done, "SET_COLUMN_SPEED");
    native.scaleformMovieMethodAddParamInt(7);
    native.scaleformMovieMethodAddParamFloat(255);
    native.endScaleformMovieMethod();

    scaleform = scaleform_done;
    UsingComputer = true;
}

alt.everyTick(() => {
    if (UsingComputer) {
        native.drawScaleformMovieFullscreen(scaleform, 255, 255, 255, 255, 0);
        native.beginScaleformMovieMethod(scaleform, "SET_CURSOR");
        native.scaleformMovieMethodAddParamFloat(native.getControlNormal(0, 239));
        native.scaleformMovieMethodAddParamFloat(native.getControlNormal(0, 240));
        native.endScaleformMovieMethod();

        if (native.isDisabledControlJustPressed(0, 24) && !SorF) {
            native.beginScaleformMovieMethod(scaleform, "SET_INPUT_EVENT_SELECT");
            ClickReturn = native.endScaleformMovieMethodReturnValue();
            native.playSoundFrontend(-1, "HACKING_CLICK", "", true);
        } else if (native.isDisabledControlJustPressed(0, 176) && Hacking) {
            native.beginScaleformMovieMethod(scaleform, "SET_INPUT_EVENT_SELECT");
            ClickReturn = native.endScaleformMovieMethodReturnValue();
            native.playSoundFrontend(-1, "HACKING_CLICK", "", true);
        } else if (native.isDisabledControlJustPressed(0, 25) && !Hacking && !SorF) {
            native.beginScaleformMovieMethod(scaleform, "SET_INPUT_EVENT_BACK");
            native.endScaleformMovieMethod();
            native.playSoundFrontend(-1, "HACKING_CLICK", "", true);
        } else if (native.isDisabledControlJustPressed(0, 172) && Hacking) {
            native.beginScaleformMovieMethod(scaleform, "SET_INPUT_EVENT");
            native.scaleformMovieMethodAddParamInt(8);
            native.playSoundFrontend(-1, "HACKING_CLICK", "", true);
        } else if (native.isDisabledControlJustPressed(0, 173) && Hacking) {
            native.beginScaleformMovieMethod(scaleform, "SET_INPUT_EVENT");
            native.scaleformMovieMethodAddParamInt(9);
            native.playSoundFrontend(-1, "HACKING_CLICK", "", true);
        } else if (native.isDisabledControlJustPressed(0, 174) && Hacking) {
            native.beginScaleformMovieMethod(scaleform, "SET_INPUT_EVENT");
            native.scaleformMovieMethodAddParamInt(10);
            native.playSoundFrontend(-1, "HACKING_CLICK", "", true);
        } else if (native.isDisabledControlJustPressed(0, 175) && Hacking) {
            native.beginScaleformMovieMethod(scaleform, "SET_INPUT_EVENT");
            native.scaleformMovieMethodAddParamInt(11);
            native.playSoundFrontend(-1, "HACKING_CLICK", "", true);
        }
    }

    if (native.hasScaleformMovieLoaded(scaleform) && UsingComputer) {
        UTK.disableinput = true;
        native.disableControlAction(0, 24, true);
        native.disableControlAction(0, 25, true);

        if (ClickReturn !== 0) {
            if (native.isScaleformMovieMethodReturnValueReady(ClickReturn)) {
                switch (native.getScaleformMovieMethodReturnValueInt(ClickReturn)) {
                    case 82:
                        if (!Hacking) {
                            lives = 5;
                            native.beginScaleformMovieMethod(scaleform, "SET_LIVES");
                            native.scaleformMovieMethodAddParamInt(lives);
                            native.scaleformMovieMethodAddParamInt(5);
                            native.endScaleformMovieMethod();

                            native.beginScaleformMovieMethod(scaleform, "OPEN_APP");
                            native.scaleformMovieMethodAddParamFloat(0.0);
                            native.endScaleformMovieMethod();

                            Hacking = true;
                            alt.emit("Client:HUD:sendNotification", 1, 2500, "Finde die IP Adresse...", 0);
                            //Finde die IP Adresse...
                        }
                        break;
                    case 83:
                        if (!Hacking && Ipfinished) {
                            lives = 5;
                            native.beginScaleformMovieMethod(scaleform, "SET_LIVES");
                            native.scaleformMovieMethodAddParamInt(lives);
                            native.scaleformMovieMethodAddParamInt(5);
                            native.endScaleformMovieMethod();

                            native.beginScaleformMovieMethod(scaleform, "OPEN_APP");
                            native.scaleformMovieMethodAddParamFloat(1.0);
                            native.endScaleformMovieMethod();

                            native.beginScaleformMovieMethod(scaleform, "SET_ROULETTE_WORD");
                            native.scaleformMovieMethodAddParamPlayerNameString(RouletteWords[RouletteWords.length * Math.random() | 0]);
                            native.endScaleformMovieMethod();

                            Hacking = true;
                            alt.emit("Client:HUD:sendNotification", 1, 2500, "Finde das Passwort...", 0);
                            //Finde das Passwort...
                        }
                        break;
                    case 87:
                        if (Hacking) {
                            lives = lives - 1;
                            native.beginScaleformMovieMethod(scaleform, "SET_LIVES");
                            native.scaleformMovieMethodAddParamInt(lives);
                            native.scaleformMovieMethodAddParamInt(5);
                            native.endScaleformMovieMethod();
                            native.playSoundFrontend(-1, "HACKING_CLICK_BAD", "", false);
                        }
                        break;
                    case 84:
                        if (Hacking) {
                            native.playSoundFrontend(-1, "HACKING_SUCCESS", "", true);
                            native.beginScaleformMovieMethod(scaleform, "SET_IP_OUTCOME");
                            native.scaleformMovieMethodAddParamBool(true);
                            ScaleformLabel(0x18EBB648);
                            native.endScaleformMovieMethod();
                            native.beginScaleformMovieMethod(scaleform, "CLOSE_APP");
                            native.endScaleformMovieMethod();
                            Hacking = false;
                            Ipfinished = true;
                            alt.emit("Client:HUD:sendNotification", 1, 2500, "Führe die BruteForce.exe aus", 0);
                            //Führe BruteForce.exe aus
                        }
                        break;
                    case 85:
                        if (Hacking) {
                            native.playSoundFrontend(-1, "HACKING_FAILURE", "", false);
                            native.beginScaleformMovieMethod(scaleform, "CLOSE_APP");
                            native.endScaleformMovieMethod();
                            Hacking = false;
                            SorF = false;
                        }
                        break;
                    case 86:
                        if (Hacking) {
                            SorF = true;
                            native.playSoundFrontend(-1, "HACKING_SUCCESS", "", true);
                            native.beginScaleformMovieMethod(scaleform, "SET_ROULETTE_OUTCOME");
                            native.scaleformMovieMethodAddParamBool(true);
                            ScaleformLabel("WINBRUTE");
                            native.endScaleformMovieMethod();
                            native.beginScaleformMovieMethod(scaleform, "CLOSE_APP");
                            native.endScaleformMovieMethod();
                            Hacking = false;
                            SorF = false;
                            native.setScaleformMovieAsNoLongerNeeded(scaleform);
                            native.disableControlAction(0, 24, false);
                            native.disableControlAction(0, 25, false);
                            native.freezeEntityPosition(alt.Player.local.scriptID, false);
                            if (UTK.hackmethod == 1) {
                                alt.emitServer("utk_oh:policeDoor", 2, false);
                                alt.emit("Client:HUD:sendNotification", 2, 2500, "Erfolgreich", 0);
                                //Erfolgreich
                                UsingComputer = false;
                                UTK.disableinput = false;
                                UTK.hackfinish = true;
                                Ipfinished = false;
                            } else if (UTK.hackmethod == 2) {
                                SpawnObj();
                                UsingComputer = false;
                                Ipfinished = false;
                                Process(2500, "System hacking...");
                                alt.emitServer("utk_oh:openvault", 1);
                                alt.emit("utk_oh:vaulttimer", 1);
                                alt.emit("Client:HUD:sendNotification", 2, 2500, "Erfolgreich", 0);
                                //Erfolgreich
                                UTK.disableinput = false;
                                UTK.hackfinish = true;
                                UTK.info.stage = 2;
                                UTK.info.style = 1;
                                UTK.stage1break = true;
                                HandleInfo();
                            }
                        }
                        break;
                    case 6:
                        if (UTK.checks.hack1 && !UTK.checks.hack2) {
                            UTK.checks.hack1 = false;
                        } else if (UTK.checks.hack2) {
                            UTK.checks.hack2 = false;
                        }
                        UsingComputer = false;
                        UTK.hackfinish = true;
                        UTK.disableinput = false;
                        native.setScaleformMovieAsNoLongerNeeded(scaleform);
                        native.disableControlAction(0, 24, false);
                        native.disableControlAction(0, 25, false);
                        native.freezeEntityPosition(alt.Player.local.scriptID, false);
                        break;
                }
                ClickReturn = 0;

                if (Hacking) {
                    native.beginScaleformMovieMethod(scaleform, "SHOW_LIVES");
                    native.scaleformMovieMethodAddParamBool(true);
                    native.endScaleformMovieMethod();

                    if (lives <= 0) {
                        SorF = true;
                        native.playSoundFrontend(-1, "HACKING_FAILURE", "", true);
                        native.beginScaleformMovieMethod(scaleform, "SET_ROULETTE_OUTCOME");
                        native.scaleformMovieMethodAddParamBool(false);
                        ScaleformLabel("LOSEBRUTE");
                        native.endScaleformMovieMethod();
                        alt.setTimeout(() => {
                            native.beginScaleformMovieMethod(scaleform, "CLOSE_APP");
                            native.endScaleformMovieMethod();
                            UTK.disableinput = false;
                            Hacking = false;
                            SorF = false;
                        }, 1000);
                    }
                }
            }
        }
    }

    let enabled = false;

    if (UTK.disableinput) {
        enabled = true;
        DisableControl();
    }
});

function Brute() {
    Initialize("Hacking_PC");
}

function ScaleformLabel(label) {
    native.beginTextCommandScaleformString(label);
    native.endTextCommandScaleformString();
}

alt.onServer("utk_oh:startevent_c", (method, callback) => {
    if (callback) {
        if (method == 1) {
            UTK.initiator = true;
            UTK.info.stage = 1;
            UTK.info.style = 1;
            UTK.currentplant = 0;
            Plant();
        } else if (method == 2) {
            UTK.initiator = true;
            UTK.info.stage = 1;
            UTK.info.style = 2;
            UTK.currentpick = 0;
            Lockpick();
        }
    }
})

alt.onServer("utk_oh:policeDoor_c", (doornum, status) => {
    PoliceDoors[doornum].locked = status;
});

alt.onServer("utk_oh:openvault_c", (method) => {
    alt.emit("utk_oh:vault", method);
    alt.emit("utk_oh:vaultsound");
});

alt.on("utk_oh:vault", (method) => {
    let obj = native.getClosestObjectOfType(UTK.vault.x, UTK.vault.y, UTK.vault.z, 2.0, alt.hash(UTK.vault.type), false, false, false);

    if (method == 1) {
        let count = 0
        let interval = alt.setInterval(() => {
            let rotation = native.getEntityHeading(obj) - 0.05;
            native.setEntityHeading(obj, rotation);
            count++;
            if (count == 1500) {
                alt.clearInterval(interval);
                native.freezeEntityPosition(obj, true);
            }
        }, 10);
    } else {
        let count = 0
        let interval = alt.setInterval(() => {
            let rotation = native.getEntityHeading(obj) + 0.05;
            native.setEntityHeading(obj, rotation);
            count++;
            if (count == 1500) {
                alt.clearInterval(interval);
                native.freezeEntityPosition(obj, true);
            }
        }, 10);
    }
});

alt.on("utk_oh:vaultsound", () => {
    let coords = alt.Player.local.pos;
    if (native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, UTK.vault.x, UTK.vault.y, UTK.vault.z, true) <= 10) {
        let count = 0;
        let interval = alt.setInterval(() => {
            native.playSoundFrontend(-1, "OPENING", "MP_PROPERTIES_ELEVATOR_DOORS", 1);
            count++;
            if (count == 25) {
                alt.clearInterval(interval);
            }
        }, 900);
    }
});

alt.onServer("utk_oh:alarm", (status) => {
    if (status == 1) {
        PlaySound = true;
    } else if (status == 2) {
        PlaySound = false;
    }
});

alt.onServer("utk_oh:updatecheck_c", (data, status) => {
    UTK.checks[data] = status;
});

alt.onServer("utk_oh:startloot_c", () => {
    UTK.startloot = true;
});

alt.on("utk_oh:vaulttimer", (method) => {
    if (method == 1) {
        alt.emit("Client:HUD:sendNotification", 3, 2500, "Du hast 100 Sekunden Zeit, bis das giftige Gas eintritt.", 0);
        //Du hast 100 Sekunden Zeit, bis das giftige Gas eintritt.
        UTK.starttimer = true;
        UTK.vaulttime = 100;
        let showTimer = alt.everyTick(() => {
            if (UTK.starttimer) {
                ShowVaultTimer();
            } else {
                alt.clearEveryTick(showTimer);
            }
        });
        let timer = alt.setInterval(() => {
            UTK.vaulttime = UTK.vaulttime - 1;
            if (UTK.vaulttime == 0) {
                alt.clearInterval(timer);
                alt.emitServer("utk_oh:ostimer");
                alt.emitServer("utk_oh:gas");
                alt.emitServer("utk_oh:spraygas");
                alt.setTimeout(() => {
                    UTK.starttimer = false;
                    alt.setTimeout(() => {
                        UTK.begingas = false;
                        alt.emitServer("utk_oh:alarm_s", 2);
                        alt.emitServer("utk_oh:gettotalcash");
                    }, 30000);
                }, 5000);
            }
        }, 1000);
    } else {
        alt.emit("Client:HUD:sendNotification", 3, 2500, "Du hast 90 Sekunden Zeit, bis das giftige Gas eintritt.", 0);
        //Du hast 100 Sekunden Zeit, bis das giftige Gas eintritt.
        UTK.starttimer = true;
        UTK.vaulttime = 90;
        let showTimer = alt.everyTick(() => {
            if (UTK.starttimer) {
                ShowVaultTimer();
            } else {
                alt.clearEveryTick(showTimer);
            }
        });
        let timer = alt.setInterval(() => {
            UTK.vaulttime = UTK.vaulttime - 1;
            if (UTK.vaulttime == 0) {
                alt.clearInterval(timer);
                alt.emitServer("utk_oh:ostimer");
                alt.emitServer("utk_oh:gas");
                alt.emitServer("utk_oh:spraygas");
                alt.setTimeout(() => {
                    UTK.starttimer = false;
                    alt.setTimeout(() => {
                        UTK.begingas = false;
                        alt.emitServer("utk_oh:alarm_s", 2);
                        alt.emitServer("utk_oh:gettotalcash");
                    }, 30000);
                }, 5000);
            }
        }, 1000);
    }
});

alt.onServer("utk_oh:spraygas_c", () => {
    if (!native.hasNamedPtfxAssetLoaded("core")) {
        native.requestNamedPtfxAsset("core");
    }
    let everyTick = alt.everyTick(() => {
        if (UTK.begingas) {
            alt.clearEveryTick(everyTick);
            native.useParticleFxAsset("core");
            let Gas = native.startParticleFxLoopedAtCoord("veh_respray_smoke", 262.78, 213.22, 101.68, 0.0, 0.0, 0.0, 1.60, false, false, false, false);
            native.useParticleFxAsset("core");
            let Gas2 = native.startParticleFxLoopedAtCoord("veh_respray_smoke", 257.71, 216.64, 101.68, 0.0, 0.0, 0.0, 3.00, false, false, false, false);
            native.useParticleFxAsset("core");
            let Gas3 = native.startParticleFxLoopedAtCoord("veh_respray_smoke", 252.71, 218.22, 101.68, 0.0, 0.0, 0.0, 3.00, false, false, false, false);
            alt.setTimeout(() => {
                native.stopParticleFxLooped(Gas, 0);
                native.stopParticleFxLooped(Gas2, 0);
                native.stopParticleFxLooped(Gas3, 0);
            }, 6000);
        }
    });
});

alt.onServer("utk_oh:gas_c", () => {
    UTK.begingas = true;
    let interval = alt.setInterval(() => {
        if (UTK.begingas) {
            let playerloc = alt.Player.local.pos;
            let dst1 = native.getDistanceBetweenCoords(playerloc.x, playerloc.y, playerloc.z, 252.71, 218.22, 101.68, false);
            let dst2 = native.getDistanceBetweenCoords(playerloc.x, playerloc.y, playerloc.z, 262.78, 213.22, 101.68, false);

            if (dst1 <= 6.5 || dst2 <= 6.5) {
                native.applyDamageToPed(alt.Player.local.scriptID, 3, false);
            }
        }
    }, 500);
    let everyTick = alt.everyTick(() => {
        if (UTK.begingas) {
            alt.clearEveryTick(everyTick);
            Grab2clear = true;
            Grab3clear = true;
            native.setPedComponentVariation(alt.Player.local.scriptID, 5, 45, 0, 0);
            alt.setTimeout(() => {
                alt.clearInterval(interval);
            }, 6000);
            alt.setTimeout(() => {
                UTK.stagelootbreak = true;
                alt.setTimeout(() => {
                    UTK.stage2break = true;
                    UTK.stage4break = true;
                    alt.emit("Client:HUD:sendNotification", 3, 3000, "TRESORTÜR WIRD GESCHLOSSEN!", 0);
                    //TRESORTÜR WIRD GESCHLOSSEN!
                    alt.emitServer("utk_oh:openvault", 2);
                    alt.emitServer("utk_oh:moltgate", UTK.doorchecks[0].x, UTK.doorchecks[0].y, UTK.doorchecks[0].z, UTK.doorchecks[0].h1, UTK.doorchecks[0].h2, 2);
                    alt.emitServer("utk_oh:moltgate", UTK.doorchecks[3].x, UTK.doorchecks[3].y, UTK.doorchecks[3].z, UTK.doorchecks[3].h1, UTK.doorchecks[3].h2, 2);
                    alt.emitServer("utk_oh:moltgate", UTK.doorchecks[4].x, UTK.doorchecks[4].y, UTK.doorchecks[4].z, UTK.doorchecks[4].h1, UTK.doorchecks[4].h2, 2);
                    UTK.begingas = false;
                    if (UTK.grabber) {
                        alt.emitServer("utk_oh:totalcash");
                    }
                }, 48000);
            }, 12000);
        }
    })
});

alt.onServer("utk_oh:moltgate_c", (x, y, z, oldmodel, newmodel, method) => {
    if (method == 2) {
        native.createModelSwap(x, y, z, 5, alt.hash(newmodel), alt.hash(oldmodel), 1);
    } else {
        native.createModelSwap(x, y, z, 5, alt.hash(oldmodel), alt.hash(newmodel), 1);
    }
});

alt.onServer("utk_oh:fixdoor_c", (hash, coords, heading) => {
    let door = native.getClosestObjectOfType(coords.x, coords.y, coords.z, 2.0, hash, false, false, false);

    alt.setTimeout(() => {
        native.setEntityHeading(door, heading);
        native.freezeEntityPosition(door, true);
    }, 250);
});

alt.onServer("utk_oh:ptfx_c", (method) => {
    let ptfx = null;
    native.requestNamedPtfxAsset("scr_ornate_heist");
    if (!native.hasNamedPtfxAssetLoaded("scr_ornate_heist")) {
        native.requestNamedPtfxAsset("scr_ornate_heist");
    }
    if (method == 1) {
        ptfx = new alt.Vector3(257.39, 221.20, 106.29);
    } else if (method == 2) {
        ptfx = new alt.Vector3(252.985, 221.70, 101.72);
    } else if (method == 3) {
        ptfx = new alt.Vector3(261.68, 216.63, 101.75);
    }
    native.useParticleFxAsset("scr_ornate_heist");
    let effect = native.startParticleFxLoopedAtCoord("scr_heist_ornate_thermal_burn", ptfx.x, ptfx.y, ptfx.z, 0.0, 0.0, 0.0, 1.0, false, false, false, false);
    alt.setTimeout(() => {
        native.stopParticleFxLooped(effect, 0);
    }, 13000);
});

alt.onServer("utk_oh:reset", () => {
    UTK.stage1break = true;
    UTK.stage2break = true;
    UTK.stage4break = true;
    UTK.stagelootbreak = false;
    UTK.disableinput = false;
    UTK.info = {stage: 0, style: null, locked: false};
    UTK.cur = 7;
    UTK.starttimer = false;
    UTK.vaulttime = 0;
    UTK.alarmblip = null;
    UTK.grabber = false;
    UTK.doorchecks = [
        {x: 257.10, y: 220.30, z: 106.28, he: 339.733, h: alt.hash("hei_v_ilev_bk_gate_pris"), status: 0},
        {x: 236.91, y: 227.50, z: 106.29, he: 340.000, h: alt.hash("v_ilev_bk_door"), status: 0},
        {x: 262.35, y: 223.00, z: 107.05, he: 249.731, h: alt.hash("hei_v_ilev_bk_gate2_pris"), status: 0},
        {x: 252.72, y: 220.95, z: 101.68, he: 160.278, h: alt.hash("hei_v_ilev_bk_safegate_pris"), status: 0},
        {x: 261.01, y: 215.01, z: 101.68, he: 250.082, h: alt.hash("hei_v_ilev_bk_safegate_pris"), status: 0},
        {x: 253.92, y: 224.56, z: 101.88, he: 160.000, h: alt.hash("v_ilev_bk_vaultdoor"), status: 0}
    ];
    UTK.searchlocations = [
        {coords: {x: 233.40, y: 221.53, z: 110.40}, status: false},
        {coords: {x: 240.93, y: 211.12, z: 110.40}, status: false},
        {coords: {x: 246.54, y: 208.86, z: 110.40}, status: false},
        {coords: {x: 264.33, y: 212.16, z: 110.40}, status: false},
        {coords: {x: 252.87, y: 222.36, z: 106.35}, status: false},
        {coords: {x: 249.71, y: 227.84, z: 106.35}, status: false},
        {coords: {x: 244.80, y: 229.70, z: 106.35}, status: false}
    ];
    UTK.checks = {
        hack1: false,
        hack2: false,
        thermal1: false,
        thermal2: false,
        id1: false,
        id2: false,
        idfound: false,
        grab1: false,
        grab2: false,
        grab3: false,
        grab4: false,
        grab5: false
    };
    UTK.searchinfo = {
        random: Math.floor(Math.random() * UTK.cur),
        found: false
    };
    program = 0;
    scaleform = null;
    lives = 5;
    ClickReturn = null;
    SorF = false;
    Hacking = false;
    UsingComputer = false;
    alt.setTimeout(() => {
        UTK.hackfinish = false;
        UTK.stage0break = false;
        UTK.stage1break = false;
        UTK.stage2break = false;
        UTK.stage4break = false;
        UTK.initiator = false;
        HandleInfo();
    }, 1000);
});

alt.everyTick(() => {
    if (UTK.startloot) {
        let coords = alt.Player.local.pos;

        if (!UTK.checks.grab1) {
            let dst1 = native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, UTK.cash1.x, UTK.cash1.y, UTK.cash1.z, true);

            if (dst1 <= 4) {
                DrawText3D(UTK.cash1.x, UTK.cash1.y, UTK.cash1.z, UTK.text.lootcash, 0.40);
                if (dst1 < 1 && native.isControlJustReleased(0, 38)) {
                    UTK.checks.grab1 = true;
                    alt.emitServer("utk_oh:updatecheck", "grab1", true);
                    Loot(1);
                }
            }
        }

        if (!UTK.checks.grab2) {
            let dst2 = native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, UTK.cash2.x, UTK.cash2.y, UTK.cash2.z, true);

            if (dst2 <= 4) {
                DrawText3D(UTK.cash2.x, UTK.cash2.y, UTK.cash2.z, UTK.text.lootcash, 0.40);
                if (dst2 < 1 && native.isControlJustReleased(0, 38)) {
                    UTK.checks.grab2 = true;
                    alt.emitServer("utk_oh:updatecheck", "grab2", true);
                    Loot(2);
                }
            }
        }

        if (!UTK.checks.grab3) {
            let dst3 = native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, UTK.cash3.x, UTK.cash3.y, UTK.cash3.z, true);

            if (dst3 <= 4) {
                DrawText3D(UTK.cash3.x, UTK.cash3.y, UTK.cash3.z, UTK.text.lootcash, 0.40);
                if (dst3 < 1 && native.isControlJustReleased(0, 38)) {
                    UTK.checks.grab3 = true;
                    alt.emitServer("utk_oh:updatecheck", "grab3", true);
                    Loot(3);
                }
            }
        }

        if (!UTK.checks.grab4) {
            let dst4 = native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, UTK.cash4.x, UTK.cash4.y, UTK.cash4.z, true);

            if (dst4 <= 4) {
                DrawText3D(UTK.cash4.x, UTK.cash4.y, UTK.cash4.z, UTK.text.lootcash, 0.40);
                if (dst4 < 1 && native.isControlJustReleased(0, 38)) {
                    UTK.checks.grab4 = true;
                    alt.emitServer("utk_oh:updatecheck", "grab4", true);
                    Loot(4);
                }
            }
        }

        if (!UTK.checks.grab5) {
            let dst5 = native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, UTK.cash5.x, UTK.cash5.y, UTK.cash5.z, true);

            if (dst5 <= 4) {
                DrawText3D(UTK.cash5.x, UTK.cash5.y, UTK.cash5.z, UTK.text.lootcash, 0.40);
                if (dst5 < 1 && native.isControlJustReleased(0, 38)) {
                    UTK.checks.grab5 = true;
                    alt.emitServer("utk_oh:updatecheck", "grab5", true);
                    Loot(5);
                }
            }
        }
        if (UTK.stagelootbreak) {
            return;
        }
    }
})

alt.onServer("utk_oh:GetDoors_c", (result) => {
    PoliceDoors = JSON.parse(result);
});

alt.everyTick(() => {
    alt.emitServer("utk_oh:GetDoors");
    if (PoliceDoors != null && PoliceDoors.length > 0) {
        for (let i = 0; i < PoliceDoors.length; i++) {
            if (PoliceDoors[i].obj == null || !native.doesEntityExist(PoliceDoors[i].obj)) {
                PoliceDoors[i].obj = native.getClosestObjectOfType(PoliceDoors[i].loc.x, PoliceDoors[i].loc.y, PoliceDoors[i].loc.z, 1.0, alt.hash(PoliceDoors[i].model), false, false, false);
                PoliceDoors[i].obj2 = native.getClosestObjectOfType(PoliceDoors[i].loc.x, PoliceDoors[i].loc.y, PoliceDoors[i].loc.z, 1.0, alt.hash(PoliceDoors[i].model2), false, false, false);
            }
        }
    }

    let coords = alt.Player.local.pos;
    let doortext = null;
    let state = null;

    for (let i = 0; i < PoliceDoors.length; i++) {
        let dst = native.getDistanceBetweenCoords(coords.x, coords.y, coords.z, PoliceDoors[i].loc.x, PoliceDoors[i].loc.y, PoliceDoors[i].loc.z, true);

        if (dst <= 50) {
            if (PoliceDoors[i].locked) {
                native.freezeEntityPosition(PoliceDoors[i].obj, true);
                native.freezeEntityPosition(PoliceDoors[i].obj2, true);
                doortext = "[~r~E~w~] Unlock the door";
                state = false;
            } else if (!PoliceDoors[i].locked) {
                native.freezeEntityPosition(PoliceDoors[i].obj, false);
                native.freezeEntityPosition(PoliceDoors[i].obj2, false);
                doortext = "[~r~E~w~] Lock the door";
                state = true;
            }
            //Police Can open Door
        }
    }
});

alt.onServer("utk_oh:createObject_c", (player, hash, x, y, z) => {
    if (player != alt.Player.local) {
        native.createObject(hash, x, y, z, true, true, true);
    }
});

alt.onServer("utk_oh:deleteObject_c", (object) => {
    native.deleteObject(object);
});

GetInfo();
