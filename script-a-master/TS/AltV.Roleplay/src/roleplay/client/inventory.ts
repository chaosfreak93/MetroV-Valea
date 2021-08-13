import * as alt from 'alt-client';
import * as native from 'natives';

export let inventoryBrowser: alt.WebView = null;
let lastInteract: number = null;

export class Inventory {
    static openInventoryCEF(requestItems: boolean): void {
        if (inventoryBrowser == null && alt.Player.local.getSyncedMeta("IsCefOpen") == false && alt.Player.local.getSyncedMeta("PLAYER_SPAWNED") == true) {
            alt.showCursor(true);
            alt.toggleGameControls(false);
            inventoryBrowser = new alt.WebView("http://resource/client/cef/inventory/index.html");
            inventoryBrowser.focus();
            alt.emitServer("Server:CEF:setCefStatus", true);
            inventoryBrowser.on("Client:Inventory:cefIsReady", () => {
                if (!requestItems) return;
                alt.emitServer("Server:Inventory:RequestInventoryItems");
            });
            inventoryBrowser.on("Client:Inventory:UseInvItem", Inventory.UseItem);
            inventoryBrowser.on("Client:Inventory:DropInvItem", Inventory.DropItem);
            inventoryBrowser.on("Client:Inventory:switchItemToDifferentInv", Inventory.switchItemToDifferentInv);
            inventoryBrowser.on("Client:Inventory:giveItem", Inventory.GiveItem);
        }
    }

    static closeInventoryCEF(): void {
        if (inventoryBrowser != null) {
            inventoryBrowser.off("Client:Inventory:UseInvItem", Inventory.UseItem);
            inventoryBrowser.off("Client:Inventory:DropInvItem", Inventory.DropItem);
            inventoryBrowser.off("Client:Inventory:switchItemToDifferentInv", Inventory.switchItemToDifferentInv);
            inventoryBrowser.off("Client:Inventory:giveItem", Inventory.GiveItem);
            inventoryBrowser.unfocus();
            inventoryBrowser.destroy();
            inventoryBrowser = null;
            alt.showCursor(false);
            alt.toggleGameControls(true);
            alt.emitServer("Server:CEF:setCefStatus", false);
        }
    }

    static canInteract(): boolean {
        return lastInteract + 1000 < Date.now();
    }

    static UseItem(itemname: string, itemAmount: string, fromContainer: string): void {
        if (!Inventory.canInteract) return;
        lastInteract = Date.now()
        alt.emitServer("Server:Inventory:UseItem", itemname, parseInt(itemAmount), fromContainer);
    }

    static DropItem(itemname: string, itemAmount: string, fromContainer: string): void {
        if (!Inventory.canInteract) return;
        lastInteract = Date.now()
        alt.emitServer("Server:Inventory:DropItem", itemname, parseInt(itemAmount), fromContainer);
    }

    static switchItemToDifferentInv(itemname: string, itemAmount: string, fromContainer: string, toContainer: string): void {
        if (!Inventory.canInteract) return;
        lastInteract = Date.now()
        alt.emitServer("Server:Inventory:switchItemToDifferentInv", itemname, parseInt(itemAmount), fromContainer, toContainer);
    }

    static GiveItem(itemname: string, itemAmount: string, fromContainer: string, targetPlayerID: string): void {
        if (!Inventory.canInteract) return;
        lastInteract = Date.now()
        alt.emitServer("Server:Inventory:GiveItem", itemname, parseInt(itemAmount), fromContainer, parseInt(targetPlayerID));
    }

    static CreateInventory(invArray: any, backpackSize: number, targetPlayerID: string) {
        Inventory.openInventoryCEF(false);
        alt.setTimeout(() => {
            if (inventoryBrowser != null) {
                inventoryBrowser.emit('CEF:Inventory:AddInventoryItems', invArray, backpackSize, parseInt(targetPlayerID));
            }
        }, 800);
    }

    static AddInventoryItems(invArray: any, backpackSize: number, targetPlayerID: string): void {
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
}