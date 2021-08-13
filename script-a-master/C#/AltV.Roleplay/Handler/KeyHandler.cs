﻿using System;
using System.Linq;
using AltV.Net;
using AltV.Net.Async;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;
using Altv_Roleplay.Factories;
using Altv_Roleplay.Model;
using Altv_Roleplay.models;
using Altv_Roleplay.Utils;

namespace Altv_Roleplay.Handler
{
    internal class KeyHandler : IScript
    {
        [AsyncClientEvent("Server:KeyHandler:PressE")]
        public void PressE(IPlayer player) {
            lock (player) {
                if (player == null || !player.Exists) return;

                var charId = User.GetPlayerOnline(player);
                if (charId == 0) return;

                var farmCol =
                    (ClassicColshape) ServerFarmingSpots.ServerFarmingSpotsColshapes_.FirstOrDefault(x =>
                        ((ClassicColshape) x).IsInRange((ClassicPlayer) player));

                if (farmCol != null && !player.IsInVehicle) {
                    if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                        HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                        return;
                    }

                    if (player.GetPlayerFarmingActionMeta() != "None") return;

                    var farmColData = ServerFarmingSpots.ServerFarmingSpots_.FirstOrDefault(x => x.id == (int) farmCol.GetColShapeId());

                    if (farmColData != null) {
                        if (farmColData.neededItemToFarm != "None")
                            if (!CharactersInventory.ExistCharacterItem(charId, farmColData.neededItemToFarm, "inventory") &&
                                !CharactersInventory.ExistCharacterItem(charId, farmColData.neededItemToFarm, "backpack")) {
                                HUDHandler.SendNotification(player, 3, 3500, $"Zum Farmen benötigst du: {farmColData.neededItemToFarm}.");
                                return;
                            }

                        player.SetPlayerFarmingActionMeta("farm");
                        FarmingHandler.FarmFieldAction(player, farmColData.itemName, farmColData.itemMinAmount, farmColData.itemMaxAmount,
                            farmColData.animation, farmColData.duration);
                        return;
                    }
                }

                var farmProducerCol =
                    (ClassicColshape) ServerFarmingSpots.ServerFarmingProducerColshapes_.FirstOrDefault(x =>
                        ((ClassicColshape) x).IsInRange((ClassicPlayer) player));

                if (farmProducerCol != null && !player.IsInVehicle) {
                    if (player.GetPlayerFarmingActionMeta() != "None") {
                        HUDHandler.SendNotification(player, 3, 5000, "Warte einen Moment.");
                        return;
                    }

                    var farmColData = ServerFarmingSpots.ServerFarmingProducer_.FirstOrDefault(x => x.id == (int) farmProducerCol.GetColShapeId());

                    if (farmColData != null) {
                        //FarmingHandler.ProduceItem(player, farmColData.neededItem, farmColData.producedItem, farmColData.neededItemAmount, farmColData.producedItemAmount, farmColData.duration);
                        FarmingHandler.openFarmingCEF(player, farmColData.neededItem, farmColData.neededItemAmount, farmColData.neededItemTWO,
                            farmColData.neededItemTWOAmount,
                            farmColData.neededItemTHREE, farmColData.neededItemTHREEAmount,
                            farmColData.producedItem, farmColData.producedItemAmount, farmColData.duration);
                        return;
                    }
                }

                if (Minijobs.Elektrolieferant.Main.startJobShape.IsInRange((ClassicPlayer) player)) {
                    Minijobs.Elektrolieferant.Main.StartMinijob(player);
                    return;
                }

                if (Minijobs.Pilot.Main.startJobShape.IsInRange((ClassicPlayer) player)) {
                    Minijobs.Pilot.Main.TryStartMinijob(player);
                    return;
                }

                if (Minijobs.Müllmann.Main.startJobShape.IsInRange((ClassicPlayer) player)) {
                    Minijobs.Müllmann.Main.StartMinijob(player);
                    return;
                }

                if (Minijobs.Busfahrer.Main.startJobShape.IsInRange((ClassicPlayer) player)) {
                    Minijobs.Busfahrer.Main.TryStartMinijob(player);
                    return;
                }

                var houseEntrance =
                    ServerHouses.ServerHouses_.FirstOrDefault(x => ((ClassicColshape) x.entranceShape).IsInRange((ClassicPlayer) player));

                if (houseEntrance != null && player.Dimension == 0) {
                    HouseHandler.openEntranceCEF(player, houseEntrance.id);
                    return;
                }

                var hotelPos = ServerHotels.ServerHotels_.FirstOrDefault(x => player.Position.IsInRange(new Position(x.posX, x.posY, x.posZ), 2f));

                if (hotelPos != null && !player.IsInVehicle) {
                    HotelHandler.openCEF(player, hotelPos);
                    return;
                }

                if (player.Dimension >= 5000) {
                    var houseInteriorCount = ServerHouses.GetMaxInteriorsCount();

                    for (var i = 1; i <= houseInteriorCount; i++) {
                        if (i > houseInteriorCount || i <= 0) continue;

                        if (player.Dimension >= 5000 && player.Dimension < 10000 &&
                            player.Position.IsInRange(ServerHouses.GetInteriorExitPosition(i), 2f)) {
                            //Apartment Leave
                            HotelHandler.LeaveHotel(player);
                            return;
                        }

                        if (player.Dimension >= 5000 && player.Dimension < 10000 &&
                            player.Position.IsInRange(ServerHouses.GetInteriorStoragePosition(i), 2f)) {
                            //Apartment Storage
                            HotelHandler.openStorage(player);
                            return;
                        }

                        if (player.Dimension >= 10000 && player.Position.IsInRange(ServerHouses.GetInteriorExitPosition(i), 2f)) {
                            //House Leave
                            HouseHandler.LeaveHouse(player, i);
                            return;
                        }

                        if (player.Dimension >= 10000 && player.Position.IsInRange(ServerHouses.GetInteriorStoragePosition(i), 2f)) {
                            //House Storage
                            HouseHandler.openStorage(player);
                            return;
                        }

                        if (player.Dimension >= 10000 && player.Position.IsInRange(ServerHouses.GetInteriorManagePosition(i), 2f)) {
                            //Hausverwaltung
                            HouseHandler.openManageCEF(player);
                            return;
                        }
                    }
                }

                var teleportsPos =
                    ServerItems.ServerTeleports_.FirstOrDefault(x => player.Position.IsInRange(new Position(x.posX, x.posY, x.posZ), 1.5f));

                if (teleportsPos != null && !player.IsInVehicle) {
                    player.Position = new Position(teleportsPos.targetX, teleportsPos.targetY, teleportsPos.targetZ + 0.5f);
                    return;
                }
                
                Position casinoEntrancePos = new Position(935.94727f, 47.20879f, 80.293017578125f);
                Position casinoExitPos = new Position(1089.7847f, 206.09671f, -49.80439453125f);
                
                bool casinoEntrance = player.Position.IsInRange(casinoEntrancePos, 3f);

                if (casinoEntrance && !player.IsInVehicle) {
                    player.Emit("Casino:Enter");
                    player.Position = new Position(casinoExitPos.X, casinoExitPos.Y, casinoExitPos.Z + 0.5f);
                    return;
                }
                
                bool casinoExit = player.Position.IsInRange(casinoExitPos, 3f);

                if (casinoExit && !player.IsInVehicle) {
                    player.Emit("Casino:Leave");
                    player.Position = new Position(casinoEntrancePos.X, casinoEntrancePos.Y, casinoEntrancePos.Z + 0.5f);
                    return;
                }
                
                bool airportExit = player.Position.IsInRange(Constants.Positions.ExitTPPos_Airport, 3f);

                if (airportExit && !player.IsInVehicle && Characters.GetCharacterAccState(charId) == 1) {
                    player.Position = new Position(Constants.Positions.ExitTargetPos_Airport.X, Constants.Positions.ExitTargetPos_Airport.Y, Constants.Positions.ExitTargetPos_Airport.Z + 0.5f);
                    player.Rotation = Constants.Positions.ExitTargetRot_Airport;
                    return;
                }

                var shopPos = ServerShops.ServerShops_.FirstOrDefault(x => player.Position.IsInRange(new Position(x.posX, x.posY, x.posZ), 3f));

                if (shopPos != null && !player.IsInVehicle) {
                    if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                        HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                        return;
                    }

                    ShopHandler.openShop(player, shopPos);
                    return;
                }

                var garagePos =
                    ServerGarages.ServerGarages_.FirstOrDefault(x => player.Position.IsInRange(new Position(x.posX, x.posY, x.posZ), 2f));

                if (garagePos != null && !player.IsInVehicle) {
                    GarageHandler.OpenGarageCEF(player, garagePos.id);
                    return;
                }

                var clothesShopPos =
                    ServerClothesShops.ServerClothesShops_.FirstOrDefault(x => player.Position.IsInRange(new Position(x.posX, x.posY, x.posZ), 2f));

                if (clothesShopPos != null && !player.IsInVehicle) {
                    ShopHandler.openClothesShop((ClassicPlayer) player, clothesShopPos.id);
                    return;
                }

                var vehicleShopPos =
                    ServerVehicleShops.ServerVehicleShops_.FirstOrDefault(x => player.Position.IsInRange(new Position(x.pedX, x.pedY, x.pedZ), 2f));

                if (vehicleShopPos != null && !player.IsInVehicle) {
                    if (vehicleShopPos.neededLicense != "None" && !Characters.HasCharacterPermission(charId, vehicleShopPos.neededLicense)) {
                        HUDHandler.SendNotification(player, 3, 5000, "Du hast hier keinen Zugriff drauf.");
                        return;
                    }

                    if (vehicleShopPos.id == 6 && ServerFactions.GetCharacterFactionId(charId) != 1) {
                        HUDHandler.SendNotification(player, 3, 5000, "Du hast hier keinen Zugriff drauf.");
                        return;
                    }

                    if (vehicleShopPos.id == 7 && ServerFactions.GetCharacterFactionId(charId) != 1) {
                        HUDHandler.SendNotification(player, 3, 5000, "Du hast hier keinen Zugriff drauf.");
                        return;
                    }

                    if (vehicleShopPos.id == 8 && ServerFactions.GetCharacterFactionId(charId) != 2) {
                        HUDHandler.SendNotification(player, 3, 5000, "Du hast hier keinen Zugriff drauf.");
                        return;
                    }

                    if (vehicleShopPos.id == 9 && ServerFactions.GetCharacterFactionId(charId) != 2) {
                        HUDHandler.SendNotification(player, 3, 5000, "Du hast hier keinen Zugriff drauf.");
                        return;
                    }

                    if (vehicleShopPos.id == 10 && ServerFactions.GetCharacterFactionId(charId) != 4) {
                        HUDHandler.SendNotification(player, 3, 5000, "Du hast hier keinen Zugriff drauf.");
                        return;
                    }

                    if (vehicleShopPos.id == 11 && ServerFactions.GetCharacterFactionId(charId) != 5) {
                        HUDHandler.SendNotification(player, 3, 5000, "Du hast hier keinen Zugriff drauf.");
                        return;
                    }

                    ShopHandler.OpenVehicleShop(player, vehicleShopPos.name, vehicleShopPos.id);
                    return;
                }

                var bankPos = ServerBanks.ServerBanks_.FirstOrDefault(x => player.Position.IsInRange(new Position(x.posX, x.posY, x.posZ), 1f));

                if (bankPos != null && !player.IsInVehicle) {
                    if (bankPos.zoneName == "Staatsbank Fraktion") {
                        if (!ServerFactions.IsCharacterInAnyFaction(charId)) return;

                        if (ServerFactions.GetCharacterFactionRank(charId) !=
                            ServerFactions.GetFactionMaxRankCount(ServerFactions.GetCharacterFactionId(charId)) &&
                            ServerFactions.GetCharacterFactionRank(charId) !=
                            ServerFactions.GetFactionMaxRankCount(ServerFactions.GetCharacterFactionId(charId)) - 1)
                            return;

                        player.EmitLocked("Client:FactionBank:createCEF", "faction", ServerFactions.GetCharacterFactionId(charId),
                            ServerFactions.GetFactionBankMoney(ServerFactions.GetCharacterFactionId(charId)));
                        return;
                    }

                    if (bankPos.zoneName == "Staatsbank Company") {
                        if (!ServerCompanys.IsCharacterInAnyServerCompany(charId)) return;

                        if (ServerCompanys.GetCharacterServerCompanyRank(charId) != 1 &&
                            ServerCompanys.GetCharacterServerCompanyRank(charId) != 2) {
                            HUDHandler.SendNotification(player, 3, 5000, "Du hast kein Unternehmen auf welches du zugreifen kannst.");
                            return;
                        }

                        player.EmitLocked("Client:FactionBank:createCEF", "company", ServerCompanys.GetCharacterServerCompanyId(charId),
                            ServerCompanys.GetServerCompanyMoney(ServerCompanys.GetCharacterServerCompanyId(charId)));
                        return;
                    }

                    var bankArray = CharactersBank.GetCharacterBankAccounts(charId);
                    player.EmitLocked("Client:Bank:createBankAccountManageForm", bankArray, bankPos.zoneName);
                    return;
                }

                var barberPos =
                    ServerBarbers.ServerBarbers_.FirstOrDefault(x => player.Position.IsInRange(new Position(x.posX, x.posY, x.posZ), 2f));

                if (barberPos != null && !player.IsInVehicle) {
                    player.EmitLocked("Client:Barber:barberCreateCEF", Characters.GetCharacterHeadOverlays(charId));
                    return;
                }
                
                Server_Dropped_Items droppedItem = ServerDroppedItems.ServerDroppedItems_.ToList().FirstOrDefault(x => player.Position.IsInRange(x.pos, 2f));
                if (droppedItem != null && !player.IsInVehicle)
                {
                    float weight = ServerItems.GetItemWeight(droppedItem.itemName) * droppedItem.itemAmount;
                    if (CharactersInventory.GetCharacterItemWeight(User.GetPlayerOnline(player), "inventory") + weight > 15f)
                    {
                        if (CharactersInventory.GetCharacterItemWeight(User.GetPlayerOnline(player), "backpack") + weight > CharactersInventory.GetCharacterItemWeight(charId, "backpack"))
                        {
                            HUDHandler.SendNotification(player, 4, 1500, "Du hast keinen Platz dafür.");
                            return;
                        } else
                        {
                            CharactersInventory.AddCharacterItem(User.GetPlayerOnline(player), droppedItem.itemName, droppedItem.itemAmount, "backpack");
                            ServerDroppedItems.RemoveItem(droppedItem);
                            HUDHandler.SendNotification(player, 2, 1500, $"Du hast den Gegenstand {droppedItem.itemName} ({droppedItem.itemAmount}x) aufgehoben.");
                            return;
                        }
                    }
                    CharactersInventory.AddCharacterItem(User.GetPlayerOnline(player), droppedItem.itemName, droppedItem.itemAmount, "inventory");
                    ServerDroppedItems.RemoveItem(droppedItem);
                    HUDHandler.SendNotification(player, 2, 1500, $"Du hast den Gegenstand {droppedItem.itemName} ({droppedItem.itemAmount}x) aufgehoben.");
                    return;
                }

                if (player.Position.IsInRange(Constants.Positions.VehicleLicensing_Position, 3f)) {
                    if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                        HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                        return;
                    }

                    VehicleHandler.OpenLicensingCEF(player);
                    return;
                }

                if (ServerFactions.IsCharacterInAnyFaction(charId)) {
                    var factionId = ServerFactions.GetCharacterFactionId(charId);
                    var factionDutyPos = ServerFactions.ServerFactionPositions_.FirstOrDefault(x =>
                        x.factionId == factionId && x.posType == "duty" && player.Position.IsInRange(new Position(x.posX, x.posY, x.posZ), 2f));

                    if (factionDutyPos != null && !player.IsInVehicle) {
                        var isDuty = ServerFactions.IsCharacterInFactionDuty(charId);
                        ServerFactions.SetCharacterInFactionDuty(charId, !isDuty);

                        if (isDuty)
                            HUDHandler.SendNotification(player, 2, 5000, "Du hast dich erfolgreich vom Dienst abgemeldet.");
                        else
                            HUDHandler.SendNotification(player, 2, 5000, "Du hast dich erfolgreich zum Dienst angemeldet.");

                        if (factionId == 1) SmartphoneHandler.RequestLSPDIntranet((ClassicPlayer) player);
                        return;
                    }

                    var factionStoragePos = ServerFactions.ServerFactionPositions_.FirstOrDefault(x =>
                        x.factionId == factionId && x.posType == "storage" && player.Position.IsInRange(new Position(x.posX, x.posY, x.posZ), 2f));

                    if (factionStoragePos != null && !player.IsInVehicle) {
                        if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                            HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                            return;
                        }

                        var isDuty = ServerFactions.IsCharacterInFactionDuty(charId);

                        if (isDuty) {
                            var factionStorageContent = ServerFactions.GetServerFactionStorageItems(factionId, charId); //Fraktionsspind Items
                            var CharacterInvArray = CharactersInventory.GetCharacterInventory(charId); //Spieler Inventar
                            player.EmitLocked("Client:FactionStorage:openCEF", charId, factionId, "faction", CharacterInvArray,
                                factionStorageContent);
                            return;
                        }
                    }

                    var factionServicePhonePos = ServerFactions.ServerFactionPositions_.ToList().FirstOrDefault(x =>
                        x.factionId == factionId && x.posType == "servicephone" &&
                        player.Position.IsInRange(new Position(x.posX, x.posY, x.posZ), 2f));

                    if (factionServicePhonePos != null && !player.IsInVehicle && ServerFactions.IsCharacterInFactionDuty(charId)) {
                        var activeLeitstelle = ServerFactions.GetCurrentServicePhoneOwner(factionId);

                        if (activeLeitstelle <= 0) {
                            ServerFactions.UpdateCurrentServicePhoneOwner(factionId, charId);
                            ServerFactions.sendMsg(factionId,
                                $"{Characters.GetCharacterName(charId)} hat das Leitstellentelefon deiner Fraktion übernommen.");
                            return;
                        }

                        if (activeLeitstelle != charId) {
                            HUDHandler.SendNotification(player, 2, 5000,
                                $"Die Leitstelle ist aktuell vom Mitarbeiter {Characters.GetCharacterName(activeLeitstelle)} besetzt.");
                            return;
                        }

                        if (activeLeitstelle == charId) {
                            ServerFactions.UpdateCurrentServicePhoneOwner(factionId, 0);
                            ServerFactions.sendMsg(factionId,
                                $"{Characters.GetCharacterName(charId)} hat das Leitstellentelefon deiner Fraktion abgelegt.");
                            return;
                        }
                    }
                }

                if (player.Position.IsInRange(Constants.Positions.Jobcenter_Position, 2.5f) && !Characters.IsCharacterCrimeFlagged(charId) &&
                    !player.IsInVehicle) //Arbeitsamt
                {
                    TownhallHandler.createJobcenterBrowser(player);
                    return;
                }

                if (player.Position.IsInRange(Constants.Positions.TownhallHouseSelector, 2.5f)) {
                    TownhallHandler.openHouseSelector(player);
                    return;
                }
                
                //TODO: Move to Admin or Interaction Menu
                /**if (player.Position.IsInRange(Constants.Positions.IdentityCardApply, 2.5f) && Characters.GetCharacterAccState(charId) == 0 &&
                    !player.IsInVehicle)
                {
                    TownhallHandler.tryCreateIdentityCardApplyForm(player);
                    return;
                }**/

                var tattooShop = ServerTattooShops.ServerTattooShops_.ToList().FirstOrDefault(x =>
                    x.owner != 0 && player.Position.IsInRange(new Position(x.pedX, x.pedY, x.pedZ), 2.5f));

                if (tattooShop != null && !player.IsInVehicle)
                    ShopHandler.openTattooShop((ClassicPlayer) player, tattooShop);
            }
        }

        [AsyncClientEvent("Server:KeyHandler:PressU")]
        public void PressU(IPlayer player) {
            try {
                lock (player) {
                    if (player == null || !player.Exists) return;

                    var charId = User.GetPlayerOnline(player);
                    if (charId <= 0) return;

                    if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                        HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                        return;
                    }

                    var serverDoorLockCol =
                        (ClassicColshape) ServerDoors.ServerDoorsLockColshapes_.FirstOrDefault(x =>
                            ((ClassicColshape) x).IsInRange((ClassicPlayer) player));

                    if (serverDoorLockCol != null) {
                        var doorColData = ServerDoors.ServerDoors_.FirstOrDefault(x => x.id == (int) serverDoorLockCol.GetColShapeId());

                        if (doorColData != null) {
                            var doorKey = doorColData.doorKey;
                            var doorKey2 = doorColData.doorKey2;
                            if (doorKey == null || doorKey2 == null) return;
                            if (!CharactersInventory.ExistCharacterItem(charId, doorKey, "inventory") &&
                                !CharactersInventory.ExistCharacterItem(charId, doorKey, "backpack") &&
                                !CharactersInventory.ExistCharacterItem(charId, doorKey2, "inventory") &&
                                !CharactersInventory.ExistCharacterItem(charId, doorKey2, "backpack")) return;

                            if (!doorColData.state)
                                HUDHandler.SendNotification(player, 4, 1500, "Tür abgeschlossen.");
                            else
                                HUDHandler.SendNotification(player, 2, 1500, "Tür aufgeschlossen.");

                            doorColData.state = !doorColData.state;
                            AltAsync.EmitAllClients("Client:DoorManager:ManageDoor", doorColData.doorHash, doorColData.doorHash2,
                                new Position(doorColData.posX, doorColData.posY, doorColData.posZ),
                                new Position(doorColData.posX2, doorColData.posY2, doorColData.posZ2), doorColData.state);
                            return;
                        }
                    }

                    if (player.Dimension >= 5000) {
                        var houseInteriorCount = ServerHouses.GetMaxInteriorsCount();

                        for (var i = 1; i <= houseInteriorCount; i++)
                            if (player.Dimension >= 5000 && player.Dimension < 10000 &&
                                player.Position.IsInRange(ServerHouses.GetInteriorExitPosition(i), 2f)) {
                                //Hotel abschließen / aufschließen
                                if (player.Dimension - 5000 <= 0) continue;

                                var apartmentId = player.Dimension - 5000;
                                var hotelId = ServerHotels.GetHotelIdByApartmentId(apartmentId);
                                if (hotelId <= 0 || apartmentId <= 0) continue;

                                if (!ServerHotels.ExistHotelApartment(hotelId, apartmentId)) {
                                    HUDHandler.SendNotification(player, 3, 5000, "Ein unerwarteter Fehler ist aufgetreten [HOTEL-001].");
                                    return;
                                }

                                if (ServerHotels.GetApartmentOwner(hotelId, apartmentId) != charId) {
                                    HUDHandler.SendNotification(player, 3, 5000, "Du hast keinen Schlüssel.");
                                    return;
                                }

                                HotelHandler.LockHotel(player, hotelId, apartmentId);
                                return;
                            } else if (player.Dimension >= 10000 && player.Position.IsInRange(ServerHouses.GetInteriorExitPosition(i), 2f)) {
                                //Haus abschließen / aufschließen
                                if (player.Dimension - 10000 <= 0) continue;

                                var houseId = player.Dimension - 10000;
                                if (houseId <= 0) continue;

                                if (!ServerHouses.ExistHouse(houseId)) {
                                    HUDHandler.SendNotification(player, 3, 5000, "Ein unerwarteter Fehler ist aufgetreten [HOUSE-001].");
                                    return;
                                }

                                if (ServerHouses.GetHouseOwner(houseId) != charId && !ServerHouses.IsCharacterRentedInHouse(charId, houseId)) {
                                    HUDHandler.SendNotification(player, 3, 5000,
                                        "Dieses Haus gehört nicht dir und / oder du bist nicht eingemietet.");
                                    return;
                                }

                                HouseHandler.LockHouse(player, houseId);
                                return;
                            }
                    }

                    var houseEntrance =
                        ServerHouses.ServerHouses_.FirstOrDefault(x => ((ClassicColshape) x.entranceShape).IsInRange((ClassicPlayer) player));

                    if (houseEntrance != null)
                        HouseHandler.LockHouse(player, houseEntrance.id);
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }
    }
}