import * as alt from "alt-client";
import * as native from "natives";
import Crouch from "./crouch";
import { Inventory, inventoryBrowser } from "./inventory";
import Raycast from "./raycast";

const player: alt.Player = alt.Player.local;
let lastInteract: number = 0;
let toggleCrouch: boolean = false;

export default class KeyHandler {
    static canInteract() {
        return lastInteract + 1000 < Date.now();
    }

    static keyup(key: number) {
        if (!KeyHandler.canInteract) return;
        lastInteract = Date.now();
        if (key == "E".charCodeAt(0)) {
            alt.emitServer("Server:KeyHandler:PressE");
        } else if (key == "U".charCodeAt(0)) {
            alt.emitServer("Server:KeyHandler:PressU");
        } else if (key == "I".charCodeAt(0)) {
            if (inventoryBrowser == null) {
                //Inv öffnen
                if (
                    player.getSyncedMeta("HasFootCuffs") == true ||
                    player.getSyncedMeta("HasHandcuffs") == true ||
                    player.getSyncedMeta("HasRopeCuffs") == true ||
                    player.getMeta("IsCefOpen") == true
                )
                    return;
                Inventory.openInventoryCEF(true);
            } else {
                //Inv close
                Inventory.closeInventoryCEF();
            }
        } else if (key == "Y".charCodeAt(0)) {
            let result = Raycast.line(1.5, 2.5);
            if (result == undefined || player.vehicle) return;
            if (result.isHit && result.entityType != 0) {
                if (result.entityType == 1) {
                    let player = alt.Player.all.find((x) => x.scriptID == result.hitEntity);
                    if (!player.valid || player == undefined) return;
                    alt.emitServer("Server:CarryPlayer", player);
                }
            }
        } else if (
            key === "Q".charCodeAt(0) &&
            player.vehicle &&
            player.scriptID == native.getPedInVehicleSeat(player.vehicle.scriptID, -1, true) &&
            native.getVehicleClass(player.vehicle.scriptID) == 18
        ) {
            if (native.isVehicleSirenOn(player.vehicle.scriptID)) {
                native.setVehicleHasMutedSirens(player.vehicle.scriptID, false);
                alt.emitServer("Server:Sirens:ForwardSirenMute", player.vehicle.id, false);
                native.setVehicleSiren(player.vehicle.scriptID, false);
            } else {
                native.setVehicleHasMutedSirens(player.vehicle.scriptID, true);
                alt.emitServer("Server:Sirens:ForwardSirenMute", player.vehicle.id, true);
                native.setVehicleSiren(player.vehicle.scriptID, true);
            }
        } else if (
            key === 18 &&
            player.vehicle &&
            player.scriptID == native.getPedInVehicleSeat(player.vehicle.scriptID, -1, true) &&
            native.getVehicleClass(player.vehicle.scriptID) == 18
        ) {
            if (
                native.isVehicleSirenOn(player.vehicle.scriptID) &&
                !native.isVehicleSirenAudioOn(player.vehicle.scriptID)
            ) {
                alt.emitServer("Server:Sirens:ForwardSirenMute", player.vehicle.id, false);
            } else if (
                native.isVehicleSirenOn(player.vehicle.scriptID) &&
                native.isVehicleSirenAudioOn(player.vehicle.scriptID)
            ) {
                alt.emitServer("Server:Sirens:ForwardSirenMute", player.vehicle.id, true);
            }
        } else if (
            key == "J".charCodeAt(0) &&
            player.vehicle &&
            (player.scriptID == native.getPedInVehicleSeat(player.vehicle.scriptID, -1, true) ||
                player.scriptID == native.getPedInVehicleSeat(player.vehicle.scriptID, 0, true)) &&
            native.getVehicleClass(player.vehicle.scriptID) == 18
        ) {
            alt.emit("SaltyChat:UseMegaphone", false);
        }
    }

    static keydown(key: number): void {
        if (!KeyHandler.canInteract) return;
        lastInteract = Date.now();
        if (key == 17) {
            if (!toggleCrouch) {
                Crouch.start();
                toggleCrouch = true;
            } else {
                Crouch.stop();
                toggleCrouch = false;
            }
        } else if (
            key == "J".charCodeAt(0) &&
            player.vehicle &&
            (player.scriptID == native.getPedInVehicleSeat(player.vehicle.scriptID, -1, true) ||
                player.scriptID == native.getPedInVehicleSeat(player.vehicle.scriptID, 0, true)) &&
            native.getVehicleClass(player.vehicle.scriptID) == 18
        ) {
            alt.emit("SaltyChat:UseMegaphone", true);
        }
    }
}

alt.on("keyup", KeyHandler.keyup);
alt.on("keydown", KeyHandler.keydown);
