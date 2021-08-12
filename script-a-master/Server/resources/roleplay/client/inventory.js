import * as alt from 'alt-client';
export let inventoryBrowser = null;
let lastInteract = null;
export class Inventory {
    static openInventoryCEF(requestItems) {
        if (inventoryBrowser == null && alt.Player.local.getSyncedMeta("IsCefOpen") == false && alt.Player.local.getSyncedMeta("PLAYER_SPAWNED") == true) {
            alt.showCursor(true);
            alt.toggleGameControls(false);
            inventoryBrowser = new alt.WebView("http://resource/client/cef/inventory/index.html");
            inventoryBrowser.focus();
            alt.emitServer("Server:CEF:setCefStatus", true);
            inventoryBrowser.on("Client:Inventory:cefIsReady", ()=>{
                if (!requestItems) return;
                alt.emitServer("Server:Inventory:RequestInventoryItems");
            });
            inventoryBrowser.on("Client:Inventory:UseInvItem", this.UseItem);
            inventoryBrowser.on("Client:Inventory:DropInvItem", this.DropItem);
            inventoryBrowser.on("Client:Inventory:switchItemToDifferentInv", this.switchItemToDifferentInv);
            inventoryBrowser.on("Client:Inventory:giveItem", this.GiveItem);
        }
    }
    static closeInventoryCEF() {
        if (inventoryBrowser != null) {
            inventoryBrowser.off("Client:Inventory:UseInvItem", this.UseItem);
            inventoryBrowser.off("Client:Inventory:DropInvItem", this.DropItem);
            inventoryBrowser.off("Client:Inventory:switchItemToDifferentInv", this.switchItemToDifferentInv);
            inventoryBrowser.off("Client:Inventory:giveItem", this.GiveItem);
            inventoryBrowser.unfocus();
            inventoryBrowser.destroy();
            inventoryBrowser = null;
            alt.showCursor(false);
            alt.toggleGameControls(true);
            alt.emitServer("Server:CEF:setCefStatus", false);
        }
    }
    static canInteract() {
        return lastInteract + 1000 < Date.now();
    }
    static UseItem(itemname, itemAmount, fromContainer) {
        if (!this.canInteract) return;
        lastInteract = Date.now();
        alt.emitServer("Server:Inventory:UseItem", itemname, parseInt(itemAmount), fromContainer);
    }
    static DropItem(itemname, itemAmount, fromContainer) {
        if (!this.canInteract) return;
        lastInteract = Date.now();
        alt.emitServer("Server:Inventory:DropItem", itemname, parseInt(itemAmount), fromContainer);
    }
    static switchItemToDifferentInv(itemname, itemAmount, fromContainer, toContainer) {
        if (!this.canInteract) return;
        lastInteract = Date.now();
        alt.emitServer("Server:Inventory:switchItemToDifferentInv", itemname, parseInt(itemAmount), fromContainer, toContainer);
    }
    static GiveItem(itemname, itemAmount, fromContainer, targetPlayerID) {
        if (!this.canInteract) return;
        lastInteract = Date.now();
        alt.emitServer("Server:Inventory:GiveItem", itemname, parseInt(itemAmount), fromContainer, parseInt(targetPlayerID));
    }
    static CreateInventory(invArray, backpackSize, targetPlayerID) {
        this.openInventoryCEF(false);
        alt.setTimeout(()=>{
            if (inventoryBrowser != null) {
                inventoryBrowser.emit('CEF:Inventory:AddInventoryItems', invArray, backpackSize, parseInt(targetPlayerID));
            }
        }, 800);
    }
    static AddInventoryItems(invArray, backpackSize, targetPlayerID) {
        if (inventoryBrowser != null) {
            inventoryBrowser.emit('CEF:Inventory:AddInventoryItems', invArray, backpackSize, targetPlayerID);
        }
    }
}
alt.onServer("Client:Inventory:CreateInventory", Inventory.CreateInventory);
alt.onServer("Client:Inventory:AddInventoryItems", Inventory.AddInventoryItems);
alt.onServer("Client:Inventory:closeCEF", Inventory.closeInventoryCEF);
export default {
    inventoryBrowser,
    Inventory
};
