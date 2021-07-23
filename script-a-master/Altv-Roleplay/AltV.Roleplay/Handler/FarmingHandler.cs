using System;
using System.Threading.Tasks;
using AltV.Net;
using AltV.Net.Async;
using AltV.Net.Elements.Entities;
using Altv_Roleplay.Model;
using Altv_Roleplay.Utils;

namespace Altv_Roleplay.Handler
{
    internal class FarmingHandler : IScript
    {
        internal static async void FarmFieldAction(IPlayer player, string itemName, int itemMinAmount, int itemMaxAmount, string animation,
            int duration) {
            if (player == null || !player.Exists || itemName == "" || itemMinAmount == 0 || itemMaxAmount == 0 || animation == "") return;

            var charId = User.GetPlayerOnline(player);
            if (charId <= 0) return;

            if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                return;
            }

            InventoryHandler.InventoryAnimation(player, animation, duration);
            await Task.Delay(duration + 1250);

            lock (player) {
                player.SetPlayerFarmingActionMeta("None");
            }

            var rndItemAmount = new Random().Next(itemMinAmount, itemMaxAmount);
            //Doppelte Menge aufsammeln
            if (Characters.IsCharacterFastFarm(charId)) rndItemAmount += 1;
            var itemWeight = ServerItems.GetItemWeight(itemName) * rndItemAmount;
            var invWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory");
            var backpackWeight = CharactersInventory.GetCharacterItemWeight(charId, "backpack");

            if (invWeight + itemWeight > 15f &&
                backpackWeight + itemWeight > Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) {
                HUDHandler.SendNotification(player, 3, 5000, "Deine Taschen sind voll.");
                return;
            }

            if (invWeight + itemWeight <= 15f) {
                HUDHandler.SendNotification(player, 2, 5000, $"Du hast {itemName} ({rndItemAmount}x) gesammelt (Lagerort: Inventar).");
                CharactersInventory.AddCharacterItem(charId, itemName, rndItemAmount, "inventory");
                return;
            }

            if (Characters.GetCharacterBackpack(charId) != -2 &&
                backpackWeight + itemWeight <= Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) {
                HUDHandler.SendNotification(player, 2, 5000, $"Du hast {itemName} ({rndItemAmount}x) gesammelt (Lagerort: Rucksack / Tasche).");
                CharactersInventory.AddCharacterItem(charId, itemName, rndItemAmount, "backpack");
            }
        }

        public static void openFarmingCEF(IPlayer player, string neededItem, int neededItemAmount, string neededItemTWO, int neededItemTWOAmount,
            string neededItemTHREE, int neededItemTHREEAmount, string producedItem, int producedItemAmount, int duration) {
            try {
                player.EmitLocked("Client:Farming:createCEF", neededItem, neededItemAmount,
                    neededItemTWO, neededItemTWOAmount, neededItemTHREE, neededItemTHREEAmount, producedItem, producedItemAmount, duration);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        internal static async void ProduceItem(IPlayer player, string neededItem, int neededItemAmount, string neededItemTWO,
            int neededItemTWOAmount, string neededItemTHREE, int neededItemTHREEAmount, string producedItem, int producedItemAmount, int duration) {
            try {
                if (player is not {Exists: true} || neededItem == "" || producedItem == "" || neededItemAmount == 0 || producedItemAmount == 0 ||
                    duration < 0) return;

                var charId = User.GetPlayerOnline(player);
                var hasItemSlot = 1;
                if (charId == 0) return;

                if (neededItemTWO.ToLower() != "none") hasItemSlot = 2;
                if (neededItemTHREE.ToLower() != "none") hasItemSlot = 3;

                switch (hasItemSlot) {
                    case 1:
                        if (!CharactersInventory.ExistCharacterItem(charId, neededItem, "inventory") &&
                            !CharactersInventory.ExistCharacterItem(charId, neededItem, "backpack")) {
                            HUDHandler.SendNotification(player, 3, 5000,
                                "Du hast nicht die richtigen Gegenstände, um " + neededItem + " zu verarbeiten.");
                            return;
                        }

                        break;
                    case 2:
                        if (!CharactersInventory.ExistCharacterItem(charId, neededItem, "inventory") &&
                            !CharactersInventory.ExistCharacterItem(charId, neededItem, "backpack")) {
                            HUDHandler.SendNotification(player, 3, 5000,
                                "Du hast nicht die richtigen Gegenstände, um " + neededItem + " zu verarbeiten.");
                            return;
                        }

                        if (!CharactersInventory.ExistCharacterItem(charId, neededItemTWO, "inventory") &&
                            !CharactersInventory.ExistCharacterItem(charId, neededItemTWO, "backpack")) {
                            HUDHandler.SendNotification(player, 3, 5000,
                                "Du hast nicht die richtigen Gegenstände, um " + neededItemTWO + " zu verarbeiten.");
                            return;
                        }

                        break;
                    case 3:
                        if (!CharactersInventory.ExistCharacterItem(charId, neededItem, "inventory") &&
                            !CharactersInventory.ExistCharacterItem(charId, neededItem, "backpack")) {
                            HUDHandler.SendNotification(player, 3, 5000,
                                "Du hast nicht die richtigen Gegenstände, um " + neededItem + " zu verarbeiten.");
                            return;
                        }

                        if (!CharactersInventory.ExistCharacterItem(charId, neededItemTWO, "inventory") &&
                            !CharactersInventory.ExistCharacterItem(charId, neededItemTWO, "backpack")) {
                            HUDHandler.SendNotification(player, 3, 5000,
                                "Du hast nicht die richtigen Gegenstände, um " + neededItemTWO + " zu verarbeiten.");
                            return;
                        }

                        if (!CharactersInventory.ExistCharacterItem(charId, neededItemTHREE, "inventory") &&
                            !CharactersInventory.ExistCharacterItem(charId, neededItemTHREE, "backpack")) {
                            HUDHandler.SendNotification(player, 3, 5000,
                                "Du hast nicht die richtigen Gegenstände, um " + neededItemTHREE + " zu verarbeiten.");
                            return;
                        }

                        break;
                }

                var itemWeight = ServerItems.GetItemWeight(producedItem) * producedItemAmount;
                var invWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory");
                var backpackWeight = CharactersInventory.GetCharacterItemWeight(charId, "backpack");

                if (invWeight + itemWeight > 15f ||
                    backpackWeight + itemWeight > Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) {
                    HUDHandler.SendNotification(player, 3, 5000, "Du hast nicht genug Platz in deinen Taschen.");
                    return;
                }

                var invAmount = CharactersInventory.GetCharacterItemAmount(charId, neededItem, "inventory"); //Anzahl an neededItem im Inventar
                var backpackAmount = CharactersInventory.GetCharacterItemAmount(charId, neededItem, "backpack"); //Anzahl an neededItem im Rucksack
                var finalAmount = invAmount + backpackAmount; //Zusammengerechnete Anzahl von neededItems.
                var giveInvItems = 0;
                var giveBackItems = 0;
                var removeInvItems = 0;
                var removeBackItems = 0;
                var removeInvItemsTWO = 0;
                var removeInvItemsTHREE = 0;
                var removeBackItemsTWO = 0;
                var removeBackItemsTHREE = 0;

                if (invAmount <= 0 && backpackAmount <= 0) {
                    HUDHandler.SendNotification(player, 3, 5000, "Es ist ein Fehler aufgetreten.");
                    return;
                } //Abbrechen wenn Anzahl von beiden 0 ist = existiert nicht.

                if (finalAmount < neededItemAmount || finalAmount < neededItemTWOAmount || finalAmount < neededItemTHREEAmount) {
                    HUDHandler.SendNotification(player, 3, 5000, $"Du hast nicht die nötigen Gegenstände dabei, um {neededItem} zu verarbeiten!");
                    return;
                } //Spieler hat nicht genug Gegenstände dabei.

                if (invAmount < neededItemAmount && backpackAmount < neededItemAmount ||
                    hasItemSlot == 2 && invAmount < neededItemTWOAmount && backpackAmount < neededItemTWOAmount ||
                    hasItemSlot == 3 && invAmount < neededItemTHREEAmount && backpackAmount < neededItemTHREEAmount) {
                    HUDHandler.SendNotification(player, 3, 5000, $"Du benötigst mindestens {neededItemAmount} Gegenstände in der gleichen Tasche.");
                    return;
                }

                player.SetPlayerFarmingActionMeta("produce");
                var InventoryNeededItemCount = 0;
                var BackpackNeededItemCount = 0;

                if (invAmount >= neededItemAmount) {
                    var availableNeededItems = invAmount / neededItemAmount;
                    giveInvItems = availableNeededItems * producedItemAmount;
                    removeInvItems = availableNeededItems * neededItemAmount;
                    InventoryNeededItemCount = availableNeededItems;
                }

                if (backpackAmount >= neededItemAmount) {
                    var availableNeededItems = backpackAmount / neededItemAmount;
                    giveBackItems = availableNeededItems * producedItemAmount;
                    removeBackItems = availableNeededItems * neededItemAmount;
                    BackpackNeededItemCount = availableNeededItems;
                }

                if (hasItemSlot >= 2) {
                    if (invAmount >= neededItemTWOAmount) {
                        var availableNeededItems = invAmount / neededItemTWOAmount;
                        removeInvItemsTWO = InventoryNeededItemCount * neededItemTWOAmount;
                    }

                    if (backpackAmount >= neededItemTWOAmount) {
                        var availableNeededItems = backpackAmount / neededItemTWOAmount;
                        removeBackItemsTWO = BackpackNeededItemCount * neededItemTWOAmount;
                    }
                }

                if (hasItemSlot >= 3) {
                    if (invAmount >= neededItemTHREEAmount) {
                        var availableNeededItems = invAmount / neededItemTHREEAmount;
                        removeInvItemsTHREE = InventoryNeededItemCount * neededItemTHREEAmount;
                    }

                    if (backpackAmount >= neededItemTHREEAmount) {
                        var availableNeededItems = backpackAmount / neededItemTHREEAmount;
                        removeBackItemsTHREE = BackpackNeededItemCount * neededItemTHREEAmount;
                    }
                }


                var ProducerPos = player.Position;
                var finalDuration = (removeInvItems + removeBackItems) * duration;
                HUDHandler.SendNotification(player, 1, finalDuration, $"Verarbeitung von {neededItem} wurde gestartet...");
                await Task.Delay(finalDuration);
                // Amount welchen man am Abschluss vom verarbeiten hat sprich sollte da was weggelegt werden wird der kleiner als der InvAmount und somit hat jemand probiert zu Dupen
                var antiDupeInvAmount =
                    CharactersInventory.GetCharacterItemAmount(charId, neededItem, "inventory"); //Anzahl an neededItem im Inventar beim verarbeiten
                var antiDupeBackpackAmount =
                    CharactersInventory.GetCharacterItemAmount(charId, neededItem, "backpack"); //Anzahl an neededItem im Rucksack beim verarbeiten
                var antiDupeInvAmountTWO =
                    CharactersInventory.GetCharacterItemAmount(charId, neededItemTWO,
                        "inventory"); //Anzahl an neededItemTWO im Inventar beim verarbeiten
                var antiDupeBackpackAmountTWO =
                    CharactersInventory.GetCharacterItemAmount(charId, neededItemTWO,
                        "backpack"); //Anzahl an neededItemTWO im Rucksack beim verarbeiten
                var antiDupeInvAmountTHREE =
                    CharactersInventory.GetCharacterItemAmount(charId, neededItemTHREE,
                        "inventory"); //Anzahl an neededItemTHREE im Inventar beim verarbeiten
                var antiDupeBackpackAmountTHREE =
                    CharactersInventory.GetCharacterItemAmount(charId, neededItemTHREE,
                        "backpack"); //Anzahl an neededItemTHREE im Rucksack beim verarbeiten

                if (!player.Position.IsInRange(ProducerPos, 3f)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Du hast dich zu weit entfernt.");
                    player.SetPlayerFarmingActionMeta("None");
                    return;
                }

                if (antiDupeInvAmount < invAmount || antiDupeBackpackAmount < backpackAmount ||
                    hasItemSlot == 2 && (antiDupeInvAmountTWO < invAmount || antiDupeBackpackAmountTWO < backpackAmount) ||
                    hasItemSlot == 3 && (antiDupeInvAmountTHREE < invAmount || antiDupeBackpackAmountTHREE < backpackAmount)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Du darfst nichts wegwerfen während du verarbeitest!");
                    return;
                }

                lock (player) {
                    player.SetPlayerFarmingActionMeta("None");
                    HUDHandler.SendNotification(player, 1, 2500, $"Verarbeitung von {neededItem} ist nun abgeschlossen.");
                }

                switch (hasItemSlot) {
                    case 1:
                        CharactersInventory.RemoveCharacterItemAmount(charId, neededItem, removeInvItems, "inventory");
                        CharactersInventory.RemoveCharacterItemAmount(charId, neededItem, removeBackItems, "backpack");
                        break;
                    case 2:
                        CharactersInventory.RemoveCharacterItemAmount(charId, neededItem, removeInvItems, "inventory");
                        CharactersInventory.RemoveCharacterItemAmount(charId, neededItem, removeBackItems, "backpack");
                        CharactersInventory.RemoveCharacterItemAmount(charId, neededItemTWO, removeInvItemsTWO, "inventory");
                        CharactersInventory.RemoveCharacterItemAmount(charId, neededItemTWO, removeBackItemsTWO, "backpack");
                        break;
                    case 3:
                        CharactersInventory.RemoveCharacterItemAmount(charId, neededItem, removeInvItems, "inventory");
                        CharactersInventory.RemoveCharacterItemAmount(charId, neededItem, removeBackItems, "backpack");
                        CharactersInventory.RemoveCharacterItemAmount(charId, neededItemTWO, removeInvItemsTWO, "inventory");
                        CharactersInventory.RemoveCharacterItemAmount(charId, neededItemTWO, removeBackItemsTWO, "backpack");
                        CharactersInventory.RemoveCharacterItemAmount(charId, neededItemTHREE, removeInvItemsTHREE, "inventory");
                        CharactersInventory.RemoveCharacterItemAmount(charId, neededItemTHREE, removeBackItemsTHREE, "backpack");
                        break;
                }

                CharactersInventory.AddCharacterItem(charId, producedItem, giveInvItems, "inventory");
                CharactersInventory.AddCharacterItem(charId, producedItem, giveBackItems, "backpack");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }
    }
}