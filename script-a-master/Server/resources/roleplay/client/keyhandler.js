import * as alt from 'alt-client';
import * as native from 'natives';
import Crouch from './crouch';
import Inventory from './inventory';
import Raycast from './raycast';
class KeyHandler {
    static canInteract() {
        return this.lastInteract + 1000 < Date.now();
    }
    static keyup(key) {
        if (!this.canInteract) return;
        this.lastInteract = Date.now();
        if (key == 'E'.charCodeAt(0)) {
            alt.emitServer("Server:KeyHandler:PressE");
        } else if (key == 'U'.charCodeAt(0)) {
            alt.emitServer("Server:KeyHandler:PressU");
        } else if (key == 'I'.charCodeAt(0)) {
            if (Inventory.inventoryBrowser == null) {
                alt.log(`CEFState: ${this.player.getSyncedMeta("IsCefOpen")}`);
                if (this.player.getSyncedMeta("HasFootCuffs") == true || this.player.getSyncedMeta("HasHandcuffs") == true || this.player.getSyncedMeta("HasRopeCuffs") == true || this.player.getSyncedMeta("IsCefOpen") == true) return;
                Inventory.openInventoryCEF(true);
            } else {
                Inventory.closeInventoryCEF();
            }
        } else if (key == 'Y'.charCodeAt(0)) {
            let result = Raycast.line(1.5, 2.5);
            if (result == undefined || !this.player.vehicle) return;
            if (result.isHit && result.entityType != 0) {
                if (result.entityType == 1) {
                    let player = alt.Player.all.find((x)=>x.scriptID == result.hitEntity
                    );
                    if (!player.valid || player == undefined) return;
                    alt.emitServer("Server:CarryPlayer", player, player.getSyncedMeta("IsUnconscious"), player.getSyncedMeta("HasFootCuffs"));
                }
            }
        } else if (key === "Q".charCodeAt(0) && this.player.vehicle && this.player.scriptID == native.getPedInVehicleSeat(this.player.vehicle.scriptID, -1, true) && native.getVehicleClass(this.player.vehicle.scriptID) == 18) {
            if (native.isVehicleSirenOn(this.player.vehicle.scriptID)) {
                native.setVehicleHasMutedSirens(this.player.vehicle.scriptID, false);
                alt.emitServer("Server:Sirens:ForwardSirenMute", this.player.vehicle.id, false);
                native.setVehicleSiren(this.player.vehicle.scriptID, false);
            } else {
                native.setVehicleHasMutedSirens(this.player.vehicle.scriptID, true);
                alt.emitServer("Server:Sirens:ForwardSirenMute", this.player.vehicle.id, true);
                native.setVehicleSiren(this.player.vehicle.scriptID, true);
            }
        } else if (key === 18 && this.player.vehicle && this.player.scriptID == native.getPedInVehicleSeat(this.player.vehicle.scriptID, -1, true) && native.getVehicleClass(this.player.vehicle.scriptID) == 18) {
            if (native.isVehicleSirenOn(this.player.vehicle.scriptID) && !native.isVehicleSirenAudioOn(this.player.vehicle.scriptID)) {
                alt.emitServer("Server:Sirens:ForwardSirenMute", this.player.vehicle.id, false);
            } else if (native.isVehicleSirenOn(this.player.vehicle.scriptID) && native.isVehicleSirenAudioOn(this.player.vehicle.scriptID)) {
                alt.emitServer("Server:Sirens:ForwardSirenMute", this.player.vehicle.id, true);
            }
        } else if (key == "J".charCodeAt(0) && this.player.vehicle && (this.player.scriptID == native.getPedInVehicleSeat(this.player.vehicle.scriptID, -1, true) || this.player.scriptID == native.getPedInVehicleSeat(this.player.vehicle.scriptID, 0, true)) && native.getVehicleClass(this.player.vehicle.scriptID) == 18) {
            alt.emit("SaltyChat:UseMegaphone", false);
        }
    }
    static keydown(key) {
        if (!this.canInteract) return;
        this.lastInteract = Date.now();
        if (key == 17) {
            if (!this.toggleCrouch) {
                Crouch.start();
                this.toggleCrouch = true;
            } else {
                Crouch.stop();
                this.toggleCrouch = false;
            }
        } else if (key == "J".charCodeAt(0) && this.player.vehicle && (this.player.scriptID == native.getPedInVehicleSeat(this.player.vehicle.scriptID, -1, true) || this.player.scriptID == native.getPedInVehicleSeat(this.player.vehicle.scriptID, 0, true)) && native.getVehicleClass(this.player.vehicle.scriptID) == 18) {
            alt.emit("SaltyChat:UseMegaphone", true);
        }
    }
}
KeyHandler.player = alt.Player.local;
KeyHandler.lastInteract = 0;
KeyHandler.toggleCrouch = false;
export { KeyHandler as default };
alt.on('keyup', KeyHandler.keyup);
alt.on('keydown', KeyHandler.keydown);
