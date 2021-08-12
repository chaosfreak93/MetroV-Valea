import * as alt from 'alt-client';
class Inventory {
    static openInventoryCEF(requestItems) {
        if (this.inventoryBrowser == null && alt.Player.local.getSyncedMeta("IsCefOpen") == false && alt.Player.local.getSyncedMeta("PLAYER_SPAWNED") == true) {
            alt.showCursor(true);
            alt.toggleGameControls(false);
            this.inventoryBrowser = new alt.WebView("http://resource/client/cef/inventory/index.html");
            this.inventoryBrowser.focus();
            alt.emitServer("Server:CEF:setCefStatus", true);
            this.inventoryBrowser.on("Client:Inventory:cefIsReady", ()=>{
                if (!requestItems) return;
                alt.emitServer("Server:Inventory:RequestInventoryItems");
            });
            this.inventoryBrowser.on("Client:Inventory:UseInvItem", this.UseItem);
            this.inventoryBrowser.on("Client:Inventory:DropInvItem", this.DropItem);
            this.inventoryBrowser.on("Client:Inventory:switchItemToDifferentInv", this.switchItemToDifferentInv);
            this.inventoryBrowser.on("Client:Inventory:giveItem", this.GiveItem);
        }
    }
    static closeInventoryCEF() {
        if (this.inventoryBrowser != null) {
            this.inventoryBrowser.off("Client:Inventory:UseInvItem", this.UseItem);
            this.inventoryBrowser.off("Client:Inventory:DropInvItem", this.DropItem);
            this.inventoryBrowser.off("Client:Inventory:switchItemToDifferentInv", this.switchItemToDifferentInv);
            this.inventoryBrowser.off("Client:Inventory:giveItem", this.GiveItem);
            this.inventoryBrowser.unfocus();
            this.inventoryBrowser.destroy();
            this.inventoryBrowser = null;
            alt.showCursor(false);
            alt.toggleGameControls(true);
            alt.emitServer("Server:CEF:setCefStatus", false);
        }
    }
    static canInteract() {
        return this.lastInteract + 1000 < Date.now();
    }
    static UseItem(itemname, itemAmount, fromContainer) {
        if (!this.canInteract) return;
        this.lastInteract = Date.now();
        alt.emitServer("Server:Inventory:UseItem", itemname, parseInt(itemAmount), fromContainer);
    }
    static DropItem(itemname, itemAmount, fromContainer) {
        if (!this.canInteract) return;
        this.lastInteract = Date.now();
        alt.emitServer("Server:Inventory:DropItem", itemname, parseInt(itemAmount), fromContainer);
    }
    static switchItemToDifferentInv(itemname, itemAmount, fromContainer, toContainer) {
        if (!this.canInteract) return;
        this.lastInteract = Date.now();
        alt.emitServer("Server:Inventory:switchItemToDifferentInv", itemname, parseInt(itemAmount), fromContainer, toContainer);
    }
    static GiveItem(itemname, itemAmount, fromContainer, targetPlayerID) {
        if (!this.canInteract) return;
        this.lastInteract = Date.now();
        alt.emitServer("Server:Inventory:GiveItem", itemname, parseInt(itemAmount), fromContainer, parseInt(targetPlayerID));
    }
    static CreateInventory(invArray, backpackSize, targetPlayerID) {
        this.openInventoryCEF(false);
        alt.setTimeout(()=>{
            if (this.inventoryBrowser != null) {
                this.inventoryBrowser.emit('CEF:Inventory:AddInventoryItems', invArray, backpackSize, parseInt(targetPlayerID));
            }
        }, 800);
    }
    static AddInventoryItems(invArray, backpackSize, targetPlayerID) {
        if (this.inventoryBrowser != null) {
            this.inventoryBrowser.emit('CEF:Inventory:AddInventoryItems', invArray, backpackSize, targetPlayerID);
        }
    }
}
Inventory.lastInteract = 0;
export { Inventory as default };
alt.onServer("Client:Inventory:CreateInventory", Inventory.CreateInventory);
alt.onServer("Client:Inventory:AddInventoryItems", Inventory.AddInventoryItems);
alt.onServer("Client:Inventory:closeCEF", Inventory.closeInventoryCEF);
