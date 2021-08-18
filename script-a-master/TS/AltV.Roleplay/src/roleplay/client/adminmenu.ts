import * as alt from 'alt-client';
import * as native from 'natives';
import BlipManager from './blipmanager';
import NoClip from './noclip';

export let adminMenuBrowser: alt.WebView;
export let browserReady: boolean = false;
let adminmenu_isopened: boolean = false;
let adminmenu_isfocused: boolean = false;
let adminmenu_latestonlineactionarray: any = [];

let spectate_lastpos: alt.Vector3 = null;
let spectate_camera: number = null;
let spectate_tick: number = null;

let nametags_tick: number = null;

let playerblips_allblips: alt.PointBlip[] = [];
let playerblips_blip: alt.PointBlip[] = [];
let playerblips_interval: number = null;

alt.onServer("Client:WritePosAndRot", (pos: alt.Vector3, rot: alt.Vector3) => {
    alt.log(`-----------------------------------------------`);
    alt.log(`Position - 1: ${pos.x} , ${pos.y} , ${pos.z - 1}`);
    alt.log(`Position Normal: ${pos.x} , ${pos.y} , ${pos.z}`);
    alt.log(`Rotation: ${rot.x} , ${rot.y} , ${rot.z}`);
});

alt.onServer("Client:HUD:CreateCEF", () => {
    if (alt.Player.local.getMeta("IsCefOpen") == true) return;
    if (adminMenuBrowser == null) {
        adminMenuBrowser = new alt.WebView("http://resource/client/cef/adminmenu/index.html");
    }

    adminMenuBrowser.on("Client:AdminMenu:DoAction", (menuaction: string, info: string, addinfo: string, inputvalue: string) => {
        alt.emitServer("Server:AdminMenu:DoAction", menuaction, info, addinfo, inputvalue);
    });

    adminMenuBrowser.on("Client:AdminMenu:RequestAllOnlinePlayers", () => {
        alt.emitServer("Server:AdminMenu:RequestAllOnlinePlayers");
    });

    adminMenuBrowser.on("Client:AdminMenu:GetPlayerMeta", (username: string, tarray) => {
        adminmenu_latestonlineactionarray = tarray;
        alt.emitServer("Server:AdminMenu:GetPlayer", "GetPlayerMeta", username, "none");
    });

    adminMenuBrowser.on("Client:AdminMenu:SetMeta", (username: string, selectedfield: string) => {
        alt.emitServer("Server:AdminMenu:GetPlayer", "SetMeta", username, selectedfield);
    });

    adminMenuBrowser.on("Client:AdminMenu:SetGameControls", (state: boolean) => {
        if (state) {
            alt.toggleGameControls(false);
            adminMenuBrowser.focus();
            alt.emit("Client:HUD:setCefStatus", true);
            adminmenu_isfocused = true;
        } else {
            alt.toggleGameControls(true);
            adminMenuBrowser.unfocus();
            alt.emit("Client:HUD:setCefStatus", false);
            adminmenu_isfocused = false;
        }
    })
});

alt.on('keydown', (key: number) => {
    if (key === 38) {
        if (!adminmenu_isopened) return;
        adminMenuBrowser.emit("CEF:AdminMenu:ChangeSelectedField", "up");
    } else if (key === 40) {
        if (!adminmenu_isopened) return;
        adminMenuBrowser.emit("CEF:AdminMenu:ChangeSelectedField", "down");
    } else if (key === 13) {
        if (!adminmenu_isopened) return;
        adminMenuBrowser.emit("CEF:AdminMenu:ChangeSelectedMenu");
    } else if (key === 8) { // BACKSPACE
        if (!adminmenu_isopened || adminmenu_isfocused) return;
        adminMenuBrowser.emit("CEF:AdminMenu:ReturnSelectedMenu");
    } else if (key === 120) {
        if (adminmenu_isopened) {
            alt.emitServer("Server:AdminMenu:CloseMenu");
        } else {
            alt.emitServer("Server:AdminMenu:OpenMenu");
        }
    }
});

alt.onServer("Client:Adminmenu:OpenMenu", () => {
    if (adminMenuBrowser != null) {
        adminmenu_isopened = true;
        adminMenuBrowser.emit("CEF:AdminMenu:OpenMenu");
        alt.emit("Client:HUD:setCefStatus", true);
    }
});

alt.onServer("Client:Adminmenu:CloseMenu", () => {
    if (!adminmenu_isopened) return;
    adminmenu_isopened = false;
    adminMenuBrowser.emit("CEF:AdminMenu:CloseMenu");
    alt.emit("Client:HUD:setCefStatus", false);
});

alt.onServer("Client:Adminmenu:ReceiveMeta", (GetPlayerPlayer: alt.Player) => {
    if (!adminmenu_isopened) return;
    var newarray: any = [];
    var count: number = 0;

    adminmenu_latestonlineactionarray.forEach(a => {
        var tempmeta: any = GetPlayerPlayer.getMeta(a);
        if (tempmeta == undefined) {
            tempmeta = false;
            GetPlayerPlayer.setMeta(a, false);
        }
        if (tempmeta != undefined && tempmeta) newarray.push(`yaes${tempmeta}${count}`);
        else if (tempmeta != undefined && !tempmeta) newarray.push(`yeno${tempmeta}${count}`);
        count++;
    });

    adminMenuBrowser.emit("CEF:Adminmenu:ReceiveMeta", newarray);
});

alt.onServer("Client:Adminmenu:SetMetaDef", (GetPlayerPlayer: alt.Player, field: string) => {
    if (!GetPlayerPlayer.getMeta(field)) GetPlayerPlayer.setMeta(field, true);
    else if (GetPlayerPlayer.getMeta(field)) GetPlayerPlayer.setMeta(field, false);
});

alt.onServer("Client:Adminmenu:CloseMenu", () => {
    if (!adminmenu_isopened) return;
    adminmenu_isopened = false;
    adminMenuBrowser.emit("CEF:AdminMenu:CloseMenu");
    alt.emit("Client:HUD:setCefStatus", false);
});

alt.onServer("Client:AdminMenu:SendAllOnlinePlayers", (AllOnlinePlayerArray: Array<alt.Player>) => {
    if (!adminmenu_isopened) return;
    adminMenuBrowser.emit("CEF:AdminMenu:AllOnlinePlayerArray", AllOnlinePlayerArray);
});

alt.onServer("Client:AdminMenu:GetWaypointInfo", () => {
    if (!adminmenu_isopened) return;
    const waypoint = native.getFirstBlipInfoId(8);
    if (native.doesBlipExist(waypoint)) {
        let coords: alt.Vector3 = native.getBlipInfoIdCoord(waypoint);
        native.startPlayerTeleport(alt.Player.local, coords.x, coords.y, coords.z + 1, alt.Player.local.rot.toDegrees().z, false, true, false);
        alt.setTimeout(() => {
            native.updatePlayerTeleport(alt.Player.local);
            alt.setTimeout(() => {
                native.stopPlayerTeleport();
            }, 100);
        }, 100);
    }
});

alt.onServer("Client:AdminMenu:Noclip", (info: string) => {
    if (info == "on") NoClip.start();
    else if (info == "off") NoClip.stop();
});

alt.onServer("Client:AdminMenu:Godmode", (info: string) => {
    if (info == "on") native.setPlayerInvincible(alt.Player.local.scriptID, true);
    else if (info == "off") native.setPlayerInvincible(alt.Player.local.scriptID, false);
});

alt.onServer("Client:AdminMenu:Spectate", (target: alt.Player, info: string) => {
    if (info == "on") {
        spectate_lastpos = native.getEntityCoords(alt.Player.local.scriptID, true);
        native.startPlayerTeleport(alt.Player.local.scriptID, target.pos.x, target.pos.y, target.pos.z - 5, alt.Player.local.rot.toDegrees().z, false, false, false);
        alt.setTimeout(() => {
            native.updatePlayerTeleport(alt.Player.local.scriptID);
            alt.setTimeout(() => {
                native.stopPlayerTeleport();
                native.freezeEntityPosition(alt.Player.local.scriptID, true);
                alt.setTimeout(() => {
                    spectate_camera = native.createCamera(alt.hash("DEFAULT_SCRIPTED_CAMERA"), true);
                    //spectate_camera = game.createCamWithParams('DEFAULT_SCRIPTED_CAMERA', target.pos.x, target.pos.y, target.pos.z, 0, 0, 240, 50, true, 2);
                    native.setCamActive(spectate_camera, true);
                    native.attachCamToEntity(spectate_camera, target.scriptID, 0, -2.0, 1.0, true);
                    native.renderScriptCams(true, false, 0, true, false, 0);
                    spectate_tick = alt.everyTick(() => {
                        native.pointCamAtCoord(spectate_camera, target.pos.x, target.pos.y, target.pos.z);
                        native.setEntityCoords(alt.Player.local.scriptID, target.pos.x, target.pos.y, target.pos.z - 5, true, false, false, true);
                    });
                }, 50);
            }, 50);
        }, 50);
    } else if (info == "off") {
        if (spectate_camera == null) return;
        alt.clearEveryTick(spectate_tick);
        native.setCamActive(spectate_camera, false);
        native.renderScriptCams(false, false, 0, false, false, 0);
        native.destroyCam(spectate_camera, true);
        native.setEntityCoords(alt.Player.local.scriptID, spectate_lastpos.x, spectate_lastpos.y, spectate_lastpos.z, true, false, false, true);
        native.freezeEntityPosition(alt.Player.local.scriptID, false);
        spectate_lastpos = null;
        spectate_camera = null;
    }
});

alt.onServer("Client:AdminMenu:SetFreezed", (target: alt.Player, info: string) => {
    if (info == "on") {
        if (target == alt.Player.local) alt.toggleGameControls(false);
        native.freezeEntityPosition(target.scriptID, true);
    } else if (info == "off") {
        if (target == alt.Player.local) alt.toggleGameControls(true);
        native.freezeEntityPosition(target.scriptID, false);
    }
});

alt.onServer("Client:Adminmenu:ToggleNametags", (info) => {
    if (info == "on") {
        nametags_tick = alt.everyTick(() => {
            for (let i = 0, n = alt.Player.all.length; i < n; i++) {
                let player = alt.Player.all[i];
                if (!player.valid || player.scriptID == undefined) continue;

                /**if (player.scriptID === alt.Player.local.scriptID) {
                    continue;
                }**/

                const name = player.getSyncedMeta('NAME');
                if (!name) continue;

                if (!native.hasEntityClearLosToEntity(alt.Player.local.scriptID, player.scriptID, 17)) continue;

                let dist = distance2d(player.pos, alt.Player.local.pos);
                if (dist > 25) continue;

                const isChatting = player.getSyncedMeta('CHATTING');
                const pos = {...native.getPedBoneCoords(player.scriptID, 12844, 0, 0, 0)};
                pos.z += 0.5;

                let scale = 1 - (0.8 * dist) / 25;
                let fontSize = 0.6 * scale;

                const lineHeight = native.getTextScaleHeight(fontSize, 4);
                const entity = player.vehicle ? player.vehicle.scriptID : player.scriptID;
                const vector = native.getEntityVelocity(entity);
                const frameTime = native.getFrameTime();

                native.setDrawOrigin(
                    pos.x + vector.x * frameTime,
                    pos.y + vector.y * frameTime,
                    pos.z + vector.z * frameTime,
                    0
                );
                native.beginTextCommandDisplayText('STRING');
                native.setTextFont(4);
                native.setTextScale(fontSize, fontSize);
                native.setTextProportional(true);
                native.setTextCentre(true);
                native.setTextColour(255, 255, 255, 255);
                native.setTextOutline();
                native.addTextComponentSubstringPlayerName(isChatting ? `${name}~r~*` : `${name}`);
                native.endTextCommandDisplayText(0, 0, 0);

                if (!native.isEntityDead(player.scriptID, false)) {
                    drawBarBackground(100, lineHeight, scale, 0.25, 0, 147, 29, 255);
                    drawBar(native.getEntityHealth(player.scriptID) - 100, lineHeight, scale, 0.25, 0, 224, 11, 255);

                    if (native.getPedArmour(player.scriptID) > 0) {
                        drawBarBackground(100, lineHeight, scale, 0.75, 0, 45, 142, 255);
                        drawBar(native.getPedArmour(player.scriptID), lineHeight, scale, 0.75, 0, 74, 234, 255);
                    }
                }
                native.clearDrawOrigin();
            }
        });
    } else if (info == "off") {
        alt.clearEveryTick(nametags_tick);
    }
});

alt.onServer("Client:Adminmenu:TogglePlayerBlips", (info) => {
    if (info == "on") {
        for (let i = 0, n = alt.Player.all.length; i < n; i++) {
            let player = alt.Player.all[i];
            if (!player.valid || player.scriptID == undefined) continue;

            const username = player.getSyncedMeta('NAME');
            if (!username || username == undefined) continue;

            playerblips_blip[player.scriptID] = BlipManager.createBlip(player.pos.x, player.pos.y, player.pos.z, 0, 0.9, 4, false, true, username);
            playerblips_allblips.push(playerblips_blip[player.scriptID]);
        }

        playerblips_interval = alt.setInterval(() => {
            for (let i = 0, n = alt.Player.all.length; i < n; i++) {
                let player = alt.Player.all[i];
                if (!player.valid || player.scriptID == undefined) continue;

                const username = player.getSyncedMeta('NAME');
                if (!username || username == undefined) continue;

                if (playerblips_blip[player.scriptID] == undefined) {
                    playerblips_blip[player.scriptID] = BlipManager.createBlip(player.pos.x, player.pos.y, player.pos.z, 0, 0.9, 4, false, true, username);
                    playerblips_allblips.push(playerblips_blip[player.scriptID]);
                }
                playerblips_blip[player.scriptID].pos = player.pos;
                playerblips_blip[player.scriptID].heading = player.rot.z;
            }
        }, 500);
    } else if (info == "off") {
        if (playerblips_interval == null) return;
        alt.clearInterval(playerblips_interval);
        for (let i = 0, n = alt.Player.all.length; i < n; i++) {
            let player = alt.Player.all[i];
            if (player.scriptID == undefined || !playerblips_blip[player.scriptID].valid) continue;
            playerblips_blip[player.scriptID].destroy();
            const elementindex = playerblips_allblips.indexOf(playerblips_blip[player.scriptID]);
            if (elementindex > -1) playerblips_allblips.splice(elementindex, 1);
        }
        playerblips_blip = [];
        playerblips_allblips.forEach((a: alt.PointBlip) => {
            if (a != undefined && a.valid) a.destroy;
        });
    }
});

/* -------------------------- FUNCTIONS ---------------------------*/

function distance2d(vector1: alt.Vector3, vector2: alt.Vector3): number {
    return Math.sqrt(Math.pow(vector1.x - vector2.x, 2) + Math.pow(vector1.y - vector2.y, 2));
}

function drawBar(value: number, lineHeight: number, scale: number, position: number, r: number, g: number, b: number, a: number): void {
    const healthWidth = value * 0.0005 * scale;
    native.drawRect(
        (healthWidth - 100 * 0.0005 * scale) / 2,
        lineHeight + position * lineHeight,
        healthWidth,
        lineHeight / 4,
        r,
        g,
        b,
        a,
        false
    );
}

function drawBarBackground(value: number, lineHeight: number, scale: number, position: number, r: number, g: number, b: number, a: number): void {
    const width = value * 0.0005 * scale;
    native.drawRect(0, lineHeight + position * lineHeight, width + 0.002, lineHeight / 3 + 0.002, 0, 0, 0, 255, false);
    native.drawRect(0, lineHeight + position * lineHeight, width, lineHeight / 3, r, g, b, a, false);
}