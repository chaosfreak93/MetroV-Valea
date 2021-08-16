﻿using System;
using System.Diagnostics;
using System.Linq;
using AltV.Net;
using AltV.Net.Async;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;
using AltV.Net.Enums;
using Altv_Roleplay.Factories;
using Altv_Roleplay.Model;
using Altv_Roleplay.Services;
using Altv_Roleplay.Utils;

namespace Altv_Roleplay.Handler
{
    internal class RaycastHandler : IScript
    {
        [AsyncClientEvent("Server:InteractionMenu:GetMenuVehicleItems")]
        public void GetMenuVehicleItems(IPlayer player, string type, IVehicle veh) {
            try {
                var stopwatch = new Stopwatch();
                stopwatch.Start();
                if (type != "vehicleIn" && type != "vehicleOut") return;
                if (veh == null || !veh.Exists || player == null || !player.Exists) return;

                var vehID = veh.GetVehicleId();
                var charId = (int) player.GetCharacterMetaId();
                var vehTrunkIsOpen = veh.GetVehicleTrunkState(); //false = zu || true = offen
                var vehEngineHoodIsOpen = veh.GetVehicleEngineHoodState(); //false = zu || true = offen
                if (charId <= 0 || vehID <= 0) return;

                var interactHTML = "";
                interactHTML +=
                    "<li><p id='InteractionMenu-SelectedTitle'>Schließen</p></li><li class='interactitem' data-action='close' data-actionstring='Schließen'><img src='../utils/img/cancel.png'></li>";

                if (type == "vehicleOut") {
                    interactHTML +=
                        "<li class='interactitem' id='InteractionMenu-vehtoggleLock' data-action='vehtoggleLock' data-actionstring='Fahrzeug auf/abschließen'><img src='../utils/img/vehlock.png'></li>";
                    interactHTML +=
                        "<li class='interactitem' id='InteractionMenu-vehFuelVehicle' data-action='vehFuelVehicle' data-actionstring='Fahrzeug tanken'><img src='../utils/img/vehfuel.png'></li>";

                    if (!ServerVehicles.GetVehicleLockState(veh) && ServerVehicles.GetVehicleType(veh) != 2)
                        interactHTML +=
                            "<li class='interactitem' id='InteractionMenu-vehOpenCloseTrunk' data-action='vehOpenCloseTrunk' data-actionstring='Kofferraum öffnen/schließen'><img src='../utils/img/trunk.png'></li>";

                    if (!ServerVehicles.GetVehicleLockState(veh) && ServerVehicles.GetVehicleType(veh) != 2)
                        interactHTML +=
                            "<li class='interactitem' id='InteractionMenu-vehOpenCloseEngineHood' data-action='vehOpenCloseEngineHood' data-actionstring='Motorhaube öffnen/schließen'><img src='../utils/img/enginehood.png'></li>";

                    if (vehTrunkIsOpen && ServerVehicles.GetVehicleType(veh) != 2)
                        interactHTML +=
                            "<li class='interactitem' id='InteractionMenu-vehViewTrunkContent' data-action='vehViewTrunkContent' data-actionstring='Kofferraum ansehen'><img src='../utils/img/viewtrunk.png'></li>";

                    if (vehEngineHoodIsOpen && ServerVehicles.GetVehicleType(veh) != 2 &&
                        (CharactersInventory.ExistCharacterItem(charId, "Reparaturkit", "inventory") ||
                         CharactersInventory.ExistCharacterItem(charId, "Reparaturkit", "backpack")))
                        interactHTML +=
                            "<li class='interactitem' id='InteractionMenu-vehRepair' data-action='vehRepair' data-actionstring='Fahrzeug reparieren'><img src='../utils/img/repair.png'></li>";

                    if (ServerFactions.IsCharacterInAnyFaction(charId) && ServerFactions.IsCharacterInFactionDuty(charId) &&
                        ServerFactions.GetCharacterFactionId(charId) == 4) {
                        interactHTML +=
                            "<li class='interactitem' id='InteractionMenu-vehTuning' data-action='vehTuning' data-actionstring='Fahrzeug modifizieren'><img src='../utils/img/vehTuning.png'></li>";

                        if (veh.Position.IsInRange(Constants.Positions.AutoClubLosSantos_StoreVehPosition, 5f) && veh.GetVehicleId() > 0)
                            interactHTML +=
                                "<li class='interactitem' id='InteractionMenu-towVehicle' data-action='vehTow' data-actionstring='Fahrzeug verwahren'><img src='../utils/img/towvehicle.png'></li>";
                    }
                } else if (type == "vehicleIn") {
                    interactHTML +=
                        "<li class='interactitem' id='InteractionMenu-vehtoggleLock' data-action='vehtoggleLock' data-actionstring='Fahrzeug auf/abschließen'><img src='../utils/img/vehlock.png'></li>";
                    interactHTML +=
                        "<li class='interactitem' id='InteractionMenu-vehtoggleEngine' data-action='vehtoggleEngine' data-actionstring='Motor an/ausmachen'><img src='../utils/img/vehengine.png'></li>";

                    if (player.IsInVehicle && (player.Seat == 1 || player.Seat == 2) && ServerVehicles.GetVehicleType(veh) != 2)
                        interactHTML +=
                            "<li class='interactitem' id='InteractionMenu-vehViewGloveboxContent' data-action='vehViewGloveboxContent' data-actionstring='Handschuhfach ansehen'><img src='../utils/img/viewglovebox.png'></li>";
                    
                    if (player.IsInVehicle && (player.Seat == 1)) {
                        veh.GetStreamSyncedMetaData("passengerCharId", out int passengerCharId);

                        if (passengerCharId != null && passengerCharId != 0) {
                            interactHTML +=
                                "<li class='interactitem' id='InteractionMenu-giveCar' data-action='giveCar' data-actionstring='Fahrzeug an den Beifahrer übertragen'><img src='../utils/img/inventory/Fahrzeugschluessel.png'></li>";
                        }
                    }
                    
                    if (ServerFactions.IsCharacterInAnyFaction(charId) && ServerFactions.IsCharacterInFactionDuty(charId) && ServerFactions.GetCharacterFactionId(charId) == 4) interactHTML += "<li class='interactitem' id='InteractionMenu-vehTuning' data-action='vehTuning' data-actionstring='Fahrzeug modifizieren'><img src='../utils/img/vehTuning.png'></li>";
                }

                player.EmitLocked("Client:RaycastMenu:SetMenuItems", type, interactHTML);
                stopwatch.Stop();
                if (stopwatch.Elapsed.Milliseconds > 30) Alt.Log($"{charId} - GetMenuVehicleItems benötigte {stopwatch.Elapsed.Milliseconds}ms");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:InteractionMenu:GetMenuPlayerItems")]
        public void GetMenuPlayerItems(IPlayer player, string type, IPlayer targetPlayer) {
            try {
                if (player == null || !player.Exists || type != "player" || targetPlayer == null || !targetPlayer.Exists) return;

                var stopwatch = new Stopwatch();
                stopwatch.Start();
                var charId = User.GetPlayerOnline(player);
                if (charId <= 0) return;

                var interactHTML = "";
                interactHTML +=
                    "<li><p id='InteractionMenu-SelectedTitle'>Schließen</p></li><li class='interactitem' data-action='close' data-actionstring='Schließen'><img src='../utils/img/cancel.png'></li>";
                interactHTML +=
                    "<li class='interactitem' id='InteractionMenu-playersupportId' data-action='playersupportId' data-actionstring='Support ID anzeigen'><img src='../utils/img/playersupportid.png'></li>";
                interactHTML +=
                    "<li class='interactitem' id='InteractionMenu-playergiveItem' data-action='playergiveItem' data-actionstring='Gegenstand geben'><img src='../utils/img/order.png'></li>";
                interactHTML +=
                    "<li class='interactitem' id='InteractionMenu-showIdCard' data-action='showIdCard' data-actionstring='Ausweis zeigen'><img src='../utils/img/inventory/Ausweis.png'></li>";
                interactHTML +=
                    "<li class='interactitem' id='InteractionMenu-playerGiveTakeRopeCuffs' data-action='playerGiveTakeRopeCuffs' data-actionstring='Spieler fesseln/entfesseln'><img src='../utils/img/inventory/Seil.png'></li>";

                if (CharactersInventory.ExistCharacterItem(charId, "Handschellen", "inventory") ||
                    CharactersInventory.ExistCharacterItem(charId, "Handschellen", "backpack") ||
                    CharactersInventory.ExistCharacterItem(charId, "Handschellenschluessel", "inventory") ||
                    CharactersInventory.ExistCharacterItem(charId, "Handschellenschluessel", "backpack"))
                    interactHTML +=
                        "<li class='interactitem' id='InteractionMenu-playerGiveTakeHandcuffs' data-action='playerGiveTakeHandcuffs' data-actionstring='Handschellen an/ablegen'><img src='../utils/img/inventory/Handschellen.png'></li>";

                if (CharactersInventory.ExistCharacterItem(charId, "Fußfessel", "inventory") ||
                    CharactersInventory.ExistCharacterItem(charId, "Fußfessel", "backpack") ||
                    CharactersInventory.ExistCharacterItem(charId, "Handschellenschluessel", "inventory") ||
                    CharactersInventory.ExistCharacterItem(charId, "Handschellenschluessel", "backpack"))
                    interactHTML +=
                        "<li class='interactitem' id='InteractionMenu-playerGiveTakeFootcuffs' data-action='playerGiveTakeFootcuffs' data-actionstring='Fußfessel an/ablegen'><img src='../utils/img/inventory/Handschellen.png'></li>";

                if (targetPlayer.HasPlayerHandcuffs() || targetPlayer.HasPlayerRopeCuffs() || targetPlayer.HasPlayerFootcuffs())
                    interactHTML +=
                        "<li class='interactitem' id='InteractionMenu-playerSearchInventory' data-action='playerSearchInventory' data-actionstring='Spieler durchsuchen'><img src='../utils/img/searchbag.png'></li>";

                if (ServerCompanys.IsCharacterInAnyServerCompany(charId))
                    interactHTML +=
                        "<li class='interactitem' id='InteractionMenu-playerGiveBill' data-action='playergiveCompanyBill' data-actionstring='Rechnung ausstellen (Unternehmen)'><img src='../utils/img/bill.png'></li>";

                if (ServerFactions.IsCharacterInAnyFaction(charId) && ServerFactions.IsCharacterInFactionDuty(charId)) {
                    interactHTML +=
                        "<li class='interactitem' id='InteractionMenu-playerGiveBill' data-action='playergiveFactionBill' data-actionstring='Rechnung ausstellen (Fraktion)'><img src='../utils/img/bill.png'></li>";

                    if ((ServerFactions.GetCharacterFactionId(charId) == 1) &&
                        player.Position.IsInRange(Constants.Positions.Arrest_Position, 5f) &&
                        targetPlayer.Position.IsInRange(Constants.Positions.Arrest_Position, 5f))
                        interactHTML +=
                            "<li class='interactitem' id='InteractionMenu-playerJail' data-action='playerJail' data-actionstring='Spieler inhaftieren'><img src='../utils/img/jail.png'></li>";

                    if (ServerFactions.GetCharacterFactionId(charId) == 2 &&
                        Characters.IsCharacterUnconscious((int) targetPlayer.GetCharacterMetaId()))
                        interactHTML +=
                            "<li class='interactitem' id='InteractionMenu-playerRevive' data-action='playerRevive' data-actionstring='Spieler wiederbeleben'><img src='../utils/img/revive.png'></li>";

                    if (ServerFactions.GetCharacterFactionId(charId) == 2 && targetPlayer.Health < 200)
                        interactHTML +=
                            "<li class='interactitem' id='InteractionMenu-HealPlayer' data-action='healPlayer' data-actionstring='Spieler heilen'><img src='../utils/img/inventory/Verbandskasten.png'></li>";
                }

                if (ServerFactions.IsCharacterInAnyFaction(charId) && ServerFactions.IsCharacterInFactionDuty(charId) &&
                    ServerFactions.GetCharacterFactionId(charId) == 5)
                    interactHTML +=
                        "<li class='interactitem' id='InteractionMenu-playerGiveLicense' data-action='playerGiveLicense' data-actionstring='Lizenz ausstellen (Fahrschule)'><img src='../utils/img/drivingschool.png'></li>";

                player.EmitLocked("Client:RaycastMenu:SetMenuItems", type, interactHTML);
                stopwatch.Stop();
                if (stopwatch.Elapsed.Milliseconds > 30) Alt.Log($"{charId} - GetMenuPlayerItems benötigte {stopwatch.Elapsed.Milliseconds}ms");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Raycast:openJailCEF")]
        public void openJailCef(ClassicPlayer player, ClassicPlayer targetPlayer) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0 || targetPlayer == null || !targetPlayer.Exists ||
                    targetPlayer.CharacterId <= 0 || Characters.IsCharacterInJail(targetPlayer.CharacterId)) return;
                
                player.Emit("Client:JailTime:openCEF", targetPlayer.CharacterId);
                Alt.Log("Open Jail CEF");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:JailTime:jailPlayer")]
        public void jailPlayer(ClassicPlayer player, int charID, int jailTime) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0 || !ServerFactions.IsCharacterInAnyFaction(player.CharacterId) ||
                    !ServerFactions.IsCharacterInFactionDuty(player.CharacterId) || ServerFactions.GetCharacterFactionId(player.CharacterId) != 1) return;

                ClassicPlayer targetPlayer = (ClassicPlayer) Alt.GetAllPlayers().FirstOrDefault(player => ((ClassicPlayer)player).CharacterId == charID);

                if (targetPlayer == null || !targetPlayer.Exists ||
                    targetPlayer.CharacterId <= 0 || Characters.IsCharacterInJail(targetPlayer.CharacterId)) return;

                HUDHandler.SendNotification(player, 1, 7500, $"Du sitzt nun für {jailTime} Minuten im Gefängnis.");
                Characters.SetCharacterJailTime(targetPlayer.CharacterId, true, jailTime);
                CharactersWanteds.RemoveCharacterWanteds(targetPlayer.CharacterId);
                targetPlayer.Position = new Position(1662.6856689453125f, 2605.89892578125f, 45.5567626953125f);
                targetPlayer.Rotation = new Rotation(0, 0, 1.5336909294128418f);

                if (Characters.GetCharacterGender(targetPlayer.CharacterId) == false) {
                    targetPlayer.SetClothes(11, 5, 0, 0);
                    targetPlayer.SetClothes(3, 5, 0, 0);
                    targetPlayer.SetClothes(4, 7, 15, 0);
                    targetPlayer.SetClothes(6, 7, 0, 0);
                    targetPlayer.SetClothes(8, 1, 88, 0);
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Raycast:OpenVehicleFuelMenu")]
        public void OpenVehicleFuelMenu(IPlayer player, IVehicle veh) {
            try {
                if (player == null || !player.Exists || veh == null || !veh.Exists) return;

                var charId = User.GetPlayerOnline(player);
                var vehID = veh.GetVehicleId();
                if (charId <= 0 || vehID <= 0 || player.IsInVehicle) return;

                if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                    return;
                }

                if (!player.Position.IsInRange(veh.Position, 5f)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Du hast dich zu weit vom Fahrzeug entfernt.");
                    return;
                }

                if (ServerVehicles.GetVehicleEngineState(veh)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Der Motor vom Fahrzeug muss ausgeschaltet sein.");
                    return;
                }

                var fuelSpot = ServerFuelStations.ServerFuelStationSpots_.FirstOrDefault(x =>
                    veh.Position.IsInRange(new Position(x.posX, x.posY, x.posZ), 2.5f));

                if (fuelSpot == null) {
                    HUDHandler.SendNotification(player, 4, 5000, "Das Fahrzeug befindet sich an keiner Tankstelle. [FEHLERCODE: 001]");
                    return;
                }

                var fuelStationId = ServerFuelStations.GetFuelSpotParentStation(fuelSpot.id);

                if (fuelStationId == 0) {
                    HUDHandler.SendNotification(player, 4, 5000, "Ein unerwarteter Fehler ist aufgetreten. [FEHLERCODE: 002]");
                    return;
                }

                var availableLiter = ServerFuelStations.GetFuelStationAvailableLiters(fuelStationId);

                if (availableLiter < 1) {
                    HUDHandler.SendNotification(player, 4, 5000, "Diese Tankstelle hat keinen Treibstoff mehr auf Lager.");
                    return;
                }

                var fuelArray = ServerFuelStations.GetFuelStationAvailableFuel(fuelStationId);
                var stationName = ServerFuelStations.GetFuelStationName(fuelStationId);
                var ownerName = ServerFuelStations.GetFuelStationOwnerName(ServerFuelStations.GetFuelStationOwnerId(fuelStationId));
                var maxFuel = ServerVehicles.GetVehicleFuelLimitOnHash(veh.Model);
                var curFuel = Convert.ToInt32(ServerVehicles.GetVehicleFuel(veh));
                maxFuel -= curFuel;

                player.EmitLocked("Client:FuelStation:OpenCEF", fuelStationId, stationName, ownerName, maxFuel, availableLiter, fuelArray, vehID);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Raycast:LockVehicle")]
        public void LockVehicle(IPlayer player, IVehicle veh) {
            if (player == null || !player.Exists || veh == null || !veh.Exists) return;

            var stopwatch = new Stopwatch();
            stopwatch.Start();
            var charId = User.GetPlayerOnline(player);
            var vehID = veh.GetVehicleId();
            var vehPlate = veh.NumberplateText;
            if (charId <= 0 || vehID <= 0) return;

            if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                return;
            }

            if (!player.Position.IsInRange(veh.Position, 8f)) {
                HUDHandler.SendNotification(player, 4, 5000, "Du hast dich zu weit vom Fahrzeug entfernt.");
                return;
            }

            if (ServerVehicles.GetVehicleFactionId(veh) == 0 && ServerVehicles.GetVehicleType(veh) == 0 &&
                !CharactersInventory.ExistCharacterItem(charId, "Fahrzeugschluessel " + vehPlate, "inventory")) {
                HUDHandler.SendNotification(player, 3, 5000, "Du hast keinen Schlüssel für dieses Fahrzeug.");
                return;
            }

            if (ServerVehicles.GetVehicleFactionId(veh) != 0 &&
                vehPlate.Contains(ServerFactions.GetFactionShortName(ServerVehicles.GetVehicleFactionId(veh)))) {
                var factionPlate = ServerFactions.GetFactionShortName(ServerVehicles.GetVehicleFactionId(veh));

                if (!CharactersInventory.ExistCharacterItem(charId, "Fahrzeugschluessel " + factionPlate, "inventory")) {
                    HUDHandler.SendNotification(player, 3, 5000, $"Du hast keinen Schlüssel für dieses Fahrzeug ({factionPlate}).");
                    return;
                }
            } else if (ServerVehicles.GetVehicleFactionId(veh) != 0) {
                var factionPlate = ServerFactions.GetFactionShortName(ServerVehicles.GetVehicleFactionId(veh));

                if (!CharactersInventory.ExistCharacterItem(charId, "Fahrzeugschluessel " + factionPlate, "inventory")) {
                    HUDHandler.SendNotification(player, 3, 5000, $"Du hast keinen Schlüssel für dieses Fahrzeug ({factionPlate}).");
                    return;
                }
            } else if (ServerVehicles.GetVehicleType(veh) == 1) {
                if (ServerVehicles.GetVehicleFactionId(veh) == 0) return;

                var factionPlate = ServerFactions.GetFactionShortName(ServerVehicles.GetVehicleFactionId(veh));
                if (!vehPlate.Contains(factionPlate)) return;

                if (!CharactersInventory.ExistCharacterItem(charId, "Fahrzeugschluessel " + factionPlate, "inventory")) {
                    HUDHandler.SendNotification(player, 3, 5000, $"Du hast keinen Schlüssel für dieses Fahrzeug ({factionPlate}).");
                    return;
                }
            } else if (ServerVehicles.GetVehicleType(veh) == 2 && ServerVehicles.GetVehicleOwner(veh) != charId) {
                HUDHandler.SendNotification(player, 3, 5000, "Du hast keinen Schlüssel.");
                return;
            }


            var LockState = ServerVehicles.GetVehicleLockState(veh);
            ServerVehicles.SetVehicleLockState(veh, !LockState);

            if (LockState) {
                HUDHandler.SendNotification(player, 2, 2000, "Du hast das Fahrzeug aufgeschlossen.");
            } else {
                HUDHandler.SendNotification(player, 4, 2000, "Du hast das Fahrzeug abgeschlossen.");
                veh.SetVehicleTrunkState(false);
                veh.SetVehicleEngineHoodState(false);
                Global.mGlobal.VirtualAPI.TriggerClientEventSafe(player, "Client:Vehicles:ToggleDoorState", veh, 5, false);
                Global.mGlobal.VirtualAPI.TriggerClientEventSafe(player, "Client:Vehicles:ToggleDoorState", veh, 4, false);
            }

            stopwatch.Stop();
            if (stopwatch.Elapsed.Milliseconds > 30) Alt.Log($"{charId} - LocKVehicle benötigte {stopwatch.Elapsed.Milliseconds}ms");
        }

        [AsyncClientEvent("Server:Raycast:ToggleVehicleEngine")]
        public void ToggleVehicleEngine(IPlayer player, IVehicle veh) {
            if (player == null || !player.Exists || veh == null || !veh.Exists) return;

            var stopwatch = new Stopwatch();
            stopwatch.Start();
            var charId = User.GetPlayerOnline(player);
            var vehID = veh.GetVehicleId();
            var vehPlate = veh.NumberplateText;
            if (charId <= 0 || vehID <= 0 || player.Seat != 1) return;

            if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                return;
            }

            if (!player.Position.IsInRange(veh.Position, 8f)) {
                HUDHandler.SendNotification(player, 4, 5000, "Du hast dich zu weit vom Fahrzeug entfernt.");
                return;
            }

            if (ServerVehicles.GetVehicleFactionId(veh) == 0 && ServerVehicles.GetVehicleType(veh) == 0 &&
                !CharactersInventory.ExistCharacterItem(charId, "Fahrzeugschluessel " + vehPlate, "inventory")) {
                HUDHandler.SendNotification(player, 3, 5000, "Du hast keinen Schlüssel für dieses Fahrzeug.");
                return;
            }

            if (ServerVehicles.GetVehicleFactionId(veh) != 0 &&
                vehPlate.Contains(ServerFactions.GetFactionShortName(ServerVehicles.GetVehicleFactionId(veh)))) {
                var factionPlate = ServerFactions.GetFactionShortName(ServerVehicles.GetVehicleFactionId(veh));

                if (!CharactersInventory.ExistCharacterItem(charId, "Fahrzeugschluessel " + factionPlate, "inventory")) {
                    HUDHandler.SendNotification(player, 3, 5000, $"Du hast keinen Schlüssel für dieses Fahrzeug ({factionPlate}).");
                    return;
                }
            } else if (ServerVehicles.GetVehicleType(veh) == 1) {
                if (ServerVehicles.GetVehicleFactionId(veh) == 0) return;

                var factionPlate = ServerFactions.GetFactionShortName(ServerVehicles.GetVehicleFactionId(veh));
                if (!vehPlate.Contains(factionPlate)) return;

                if (!CharactersInventory.ExistCharacterItem(charId, "Fahrzeugschluessel " + factionPlate, "inventory")) {
                    HUDHandler.SendNotification(player, 3, 5000, $"Du hast keinen Schlüssel für dieses Fahrzeug ({factionPlate}).");
                    return;
                }
            } else if (ServerVehicles.GetVehicleType(veh) == 2 && ServerVehicles.GetVehicleOwner(veh) != charId) {
                HUDHandler.SendNotification(player, 3, 5000, "Du hast keinen Schlüssel.");
                return;
            }

            var engineState = ServerVehicles.GetVehicleEngineState(veh);

            if (engineState == false && !ServerVehicles.IsVehicleEngineHealthy(veh)) {
                HUDHandler.SendNotification(player, 3, 5000, "Dieses Fahrzeug hat einen Motorschaden.");
                return;
            }

            if (engineState == false && ServerVehicles.GetVehicleFuel(veh) <= 0 && ServerVehicles.GetVehicleFuelTypeOnHash(long.Parse(veh.Model.ToString())) != "None") {
                HUDHandler.SendNotification(player, 3, 5000, "Dieses Fahrzeug hat keinen Treibstoff mehr.");
                return;
            }

            ServerVehicles.SetVehicleEngineState(veh, !engineState);

            if (engineState)
                HUDHandler.SendNotification(player, 4, 2500, "Du hast den Motor ausgeschaltet.");
            else
                HUDHandler.SendNotification(player, 2, 2500, "Du hast den Motor eingeschaltet.");

            stopwatch.Stop();
            if (stopwatch.Elapsed.Milliseconds > 30) Alt.Log($"{charId} - ToggleVehicleEngine benötigte {stopwatch.Elapsed.Milliseconds}ms");
        }

        [AsyncClientEvent("Server:Raycast:OpenCloseVehicleTrunk")]
        public void OpenCloseVehicleTrunk(IPlayer player, IVehicle veh) {
            try {
                if (player == null || !player.Exists || veh == null || !veh.Exists) return;

                var charId = User.GetPlayerOnline(player);
                var vehID = veh.GetVehicleId();
                var vehPlate = veh.NumberplateText;
                if (charId <= 0 || vehID <= 0) return;

                if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                    return;
                }

                if (!player.Position.IsInRange(veh.Position, 5f)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Du hast dich zu weit vom Fahrzeug entfernt.");
                    return;
                }

                if (ServerVehicles.GetVehicleLockState(veh)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Das Fahrzeug ist abgeschlossen.");
                    return;
                }

                var isTrunkOpened = veh.GetVehicleTrunkState(); //false = Zu | True = offen

                if (!isTrunkOpened) {
                    veh.SetVehicleTrunkState(true);
                    AltAsync.EmitAllClients("Client:Vehicles:ToggleDoorState", veh, 5, true);
                    HUDHandler.SendNotification(player, 2, 2000, "Du hast den Kofferraum geöffnet.");
                } else {
                    veh.SetVehicleTrunkState(false);
                    AltAsync.EmitAllClients("Client:Vehicles:ToggleDoorState", veh, 5, false);
                    HUDHandler.SendNotification(player, 2, 2000, "Du hast den Kofferraum geschlossen");
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Raycast:OpenCloseEngineHood")]
        public void OpenCloseVehicleEngineHood(IPlayer player, IVehicle veh) {
            try {
                if (player == null || !player.Exists || veh == null || !veh.Exists) return;

                var charId = User.GetPlayerOnline(player);
                var vehID = veh.GetVehicleId();
                var vehPlate = veh.NumberplateText;
                if (charId <= 0 || vehID <= 0) return;

                if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                    return;
                }

                if (!player.Position.IsInRange(veh.Position, 5f)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Du hast dich zu weit vom Fahrzeug entfernt.");
                    return;
                }

                if (ServerVehicles.GetVehicleLockState(veh)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Das Fahrzeug ist abgeschlossen.");
                    return;
                }

                var isEngineHoodOpened = veh.GetVehicleEngineHoodState(); //false = Zu | True = offen

                if (!isEngineHoodOpened) {
                    veh.SetVehicleEngineHoodState(true);
                    AltAsync.EmitAllClients("Client:Vehicles:ToggleDoorState", veh, 4, true);
                    HUDHandler.SendNotification(player, 2, 2000, "Du hast die Motorhaube geöffnet.");
                } else {
                    veh.SetVehicleEngineHoodState(false);
                    AltAsync.EmitAllClients("Client:Vehicles:ToggleDoorState", veh, 4, false);
                    HUDHandler.SendNotification(player, 2, 2000, "Du hast die Motorhaube geschlossen");
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Raycast:ViewVehicleTrunk")]
        public void ViewVehicleTrunk(ClassicPlayer player, ClassicVehicle veh) {
            try {
                if (player == null || !player.Exists || veh == null || !veh.Exists || player.CharacterId <= 0 || veh.VehicleId <= 0) return;
                if (player.IsInVehicle) return;

                if (!player.Position.IsInRange(veh.Position, 5f)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Du hast dich zu weit vom Fahrzeug entfernt.");
                    return;
                }

                if (ServerVehicles.GetVehicleLockState(veh)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Das Fahrzeug ist abgeschlossen.");
                    return;
                }

                var isTrunkOpened = veh.GetVehicleTrunkState(); //false = Zu | True = offen

                if (!isTrunkOpened) {
                    HUDHandler.SendNotification(player, 4, 5000, "Fehler: Der Kofferraum ist zu.");
                    return;
                }

                HUDHandler.SendNotification(player, 1, 1000, $"Versuche Kofferraum zu öffnen.. ({player.CharacterId} - {veh.VehicleId})");
                var characterInvArray = CharactersInventory.GetCharacterInventory(player.CharacterId); //Inventar Items
                var vehicleTrunkArray = ServerVehicles.GetVehicleTrunkItems(veh.VehicleId, false); //Kofferraum Items
                var curVehWeight = ServerVehicles.GetVehicleVehicleTrunkWeight(veh.VehicleId, false);
                var maxVehWeight = ServerVehicles.GetVehicleTrunkCapacityOnHash(veh.Model);
                player.EmitLocked("Client:VehicleTrunk:openCEF", player.CharacterId, veh.VehicleId, "trunk", characterInvArray, vehicleTrunkArray,
                    curVehWeight, maxVehWeight); //trunk oder glovebox
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Raycast:ViewVehicleGlovebox")]
        public void ViewVehicleGlovebox(ClassicPlayer player, ClassicVehicle veh) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0 || veh == null || !veh.Exists || veh.VehicleId <= 0) return;
                if (!player.IsInVehicle) return;
                if (player.Seat != 1 && player.Seat != 2) return;

                var characterInvArray = CharactersInventory.GetCharacterInventory(player.CharacterId); //Inventar Items
                var vehicleGloveboxArray = ServerVehicles.GetVehicleTrunkItems(veh.VehicleId, true); //Handschuhfach Items
                var curVehWeight = ServerVehicles.GetVehicleVehicleTrunkWeight(veh.VehicleId, true);
                var maxVehWeight = 5f;
                player.EmitLocked("Client:VehicleTrunk:openCEF", player.CharacterId, veh.VehicleId, "glovebox", characterInvArray,
                    vehicleGloveboxArray, curVehWeight, maxVehWeight); //trunk oder glovebox
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }
        
        [AsyncClientEvent("Server:Raycast:GiveCar")]
        public void GiveCar(IPlayer player, IVehicle veh) {
            if (player == null || !player.Exists || veh == null || !veh.Exists) return;

            var stopwatch = new Stopwatch();
            stopwatch.Start();
            var charId = User.GetPlayerOnline(player);
            var vehID = veh.GetVehicleId();
            var vehPlate = veh.NumberplateText;
            if (charId <= 0 || vehID <= 0 || player.Seat != 1) return;

            if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                return;
            }

            if (!player.Position.IsInRange(veh.Position, 2f)) {
                HUDHandler.SendNotification(player, 4, 5000, "Du hast dich zu weit vom Fahrzeug entfernt.");
                return;
            }

            if (ServerVehicles.GetVehicleOwner(veh) != charId) {
                HUDHandler.SendNotification(player, 4, 5000, "Das Fahrzeug gehört nicht dir.");
                return;
            }
            
            veh.GetStreamSyncedMetaData("passengerCharId", out int passengerCharId);

            ServerVehicles.SetVehicleOwner(veh, passengerCharId);

            IPlayer test = Alt.GetAllPlayers().FirstOrDefault(x => ((ClassicPlayer)x).CharacterId == passengerCharId);
            
            HUDHandler.SendNotification(test, 2, 5000, $"Das Fahrzeug mit dem Kennzeichen {veh.NumberplateText} gehört jetzt dir!");
            HUDHandler.SendNotification(player, 2, 5000, $"Das Fahrzeug gehört jetzt {Characters.GetCharacterName(passengerCharId)}");

            stopwatch.Stop();
            if (stopwatch.Elapsed.Milliseconds > 30) Alt.Log($"{charId} - GiveCar benötigte {stopwatch.Elapsed.Milliseconds}ms");
        }
        

        [AsyncClientEvent("Server:Raycast:showPlayerSupportId")]
        public void showPlayerSupportId(IPlayer player, IPlayer targetPlayer) {
            if (player == null || !player.Exists || targetPlayer == null || !targetPlayer.Exists) return;

            var targetCharId = User.GetPlayerOnline(targetPlayer);
            if (targetCharId == 0) return;

            HUDHandler.SendNotification(player, 1, 5000, $"Die Charakter-ID des Spielers lautet: {targetCharId}");
        }

        [AsyncClientEvent("Server:Raycast:givePlayerItemRequest")]
        public void givePlayerItemRequest(IPlayer player, IPlayer targetPlayer) {
            if (player == null || !player.Exists || targetPlayer == null || !targetPlayer.Exists) return;

            var stopwatch = new Stopwatch();
            stopwatch.Start();
            var charId = User.GetPlayerOnline(player);
            var targetCharId = User.GetPlayerOnline(targetPlayer);
            if (charId <= 0 || targetCharId <= 0) return;

            if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                return;
            }

            player.EmitLocked("Client:Inventory:CreateInventory", CharactersInventory.GetCharacterInventory(User.GetPlayerOnline(player)),
                Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(User.GetPlayerOnline(player))), targetCharId);
            stopwatch.Stop();
            if (stopwatch.Elapsed.Milliseconds > 30) Alt.Log($"{charId} - givePlayerItemRequest benötigte {stopwatch.Elapsed.Milliseconds}ms");
        }

        [AsyncClientEvent("Server:Raycast:OpenGivePlayerBillCEF")]
        public void OpenGivePlayerBillCEF(IPlayer player, IPlayer targetPlayer, string type) //Types:  faction | company
        {
            try {
                if (player == null || !player.Exists || targetPlayer == null || !targetPlayer.Exists) return;

                if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                    return;
                }

                if (type != "faction" && type != "company") return;

                var charId = User.GetPlayerOnline(player);
                var targetCharId = User.GetPlayerOnline(targetPlayer);
                if (charId <= 0 || targetCharId <= 0) return;

                if (type == "faction") {
                    if (!ServerFactions.IsCharacterInAnyFaction(charId)) {
                        HUDHandler.SendNotification(player, 4, 5000, "Du bist in keiner Fraktion.");
                        return;
                    }

                    if (!ServerFactions.IsCharacterInFactionDuty(charId)) {
                        HUDHandler.SendNotification(player, 4, 5000, "Du bist nicht im Dienst.");
                        return;
                    }

                    var factionId = ServerFactions.GetCharacterFactionId(charId);
                    if (factionId <= 0) return;

                    player.EmitLocked("Client:GivePlayerBill:openCEF", "faction", targetCharId);
                } else if (type == "company") {
                    if (!ServerCompanys.IsCharacterInAnyServerCompany(charId)) {
                        HUDHandler.SendNotification(player, 4, 5000, "Du bist in keinem Unternehmen.");
                        return;
                    }

                    var companyId = ServerCompanys.GetCharacterServerCompanyId(charId);
                    if (companyId <= 0) return;

                    player.EmitLocked("Client:GivePlayerBill:openCEF", "company", targetCharId);
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Raycast:openGivePlayerLicenseCEF")]
        public void openGivePlayerLicenseCEF(IPlayer player, IPlayer targetPlayer) {
            try {
                if (player == null || !player.Exists || targetPlayer == null || !targetPlayer.Exists) return;

                if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                    return;
                }

                var charId = User.GetPlayerOnline(player);
                var targetCharId = User.GetPlayerOnline(targetPlayer);
                if (charId <= 0 || targetCharId <= 0) return;

                if (!ServerFactions.IsCharacterInAnyFaction(charId)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Fehler: Du bist in keiner Fraktion.");
                    return;
                }

                if (!ServerFactions.IsCharacterInFactionDuty(charId)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Fehler: Du bist nicht im Dienst.");
                    return;
                }

                if (ServerFactions.GetCharacterFactionId(charId) != 5) {
                    HUDHandler.SendNotification(player, 3, 5000, "Fehler: Du bist kein Teil der Fahrschule.");
                    return;
                }

                var licArray = CharactersLicenses.GetCharacterLicenses(targetCharId);
                player.EmitLocked("Client:GivePlayerLicense:openCEF", targetCharId, licArray);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:PlayerBill:giveBill")]
        public void PlayerBillGiveBill(IPlayer player, string type, string reason, int targetCharId, int moneyAmount) //Types:  faction | company
        {
            try {
                if (player == null || !player.Exists || targetCharId <= 0 || moneyAmount <= 0 || reason == null || reason == "") return;

                if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                    return;
                }

                if (type != "faction" && type != "company") return;

                var charId = User.GetPlayerOnline(player);
                if (charId == 0) return;

                var targetPlayer = Alt.GetAllPlayers().ToList().FirstOrDefault(x => x.GetCharacterMetaId() == (ulong) targetCharId);
                if (targetPlayer == null || !targetPlayer.Exists) return;

                var factionCompanyId = 0;
                var factionCompanyName = "None";

                if (type == "faction") {
                    if (!ServerFactions.IsCharacterInAnyFaction(charId)) {
                        HUDHandler.SendNotification(player, 3, 5000, "Du bist in keiner Fraktion");
                        return;
                    }

                    if (!ServerFactions.IsCharacterInFactionDuty(charId)) {
                        HUDHandler.SendNotification(player, 3, 5000, "Du bist nicht im Dienst.");
                        return;
                    }

                    factionCompanyId = ServerFactions.GetCharacterFactionId(charId);
                    factionCompanyName = ServerFactions.GetFactionFullName(factionCompanyId);
                } else if (type == "company") {
                    if (!ServerCompanys.IsCharacterInAnyServerCompany(charId)) {
                        HUDHandler.SendNotification(player, 3, 5000, "Du bist in keinem Unternehmen.");
                        return;
                    }

                    factionCompanyId = ServerCompanys.GetCharacterServerCompanyId(charId);
                    factionCompanyName = ServerCompanys.GetServerCompanyName(factionCompanyId);
                }

                if (factionCompanyId <= 0 || factionCompanyName == "None" || factionCompanyName == "") return;

                targetPlayer.EmitLocked("Client:RecievePlayerBill:openCEF", type, factionCompanyId, moneyAmount, reason, factionCompanyName,
                    charId);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:PlayerBill:BillAction")]
        public void PlayerBillAction(IPlayer player, string action, string type, int factionCompanyId, int moneyAmount, string reason,
            int givenBillOwnerCharId) {
            try {
                if (player == null || !player.Exists || action == "" || type == "" || factionCompanyId <= 0 || moneyAmount <= 0 || reason == "" ||
                    givenBillOwnerCharId <= 0) return;
                if (type != "faction" && type != "company") return;
                if (action != "bar" && action != "bank" && action != "decline") return;

                var targetCharId = User.GetPlayerOnline(player);
                if (targetCharId <= 0) return;

                var givenBillPlayer = Alt.GetAllPlayers().ToList().FirstOrDefault(x => x.GetCharacterMetaId() == (ulong) givenBillOwnerCharId);
                if (givenBillPlayer == null || !givenBillPlayer.Exists) return;

                var factionCompanyName = "None";

                if (type == "faction")
                    factionCompanyName = ServerFactions.GetFactionFullName(factionCompanyId);
                else if (type == "company")
                    factionCompanyName = ServerCompanys.GetServerCompanyName(factionCompanyId);

                if (factionCompanyName == "None" || factionCompanyName == "" || factionCompanyName == "Zivilist") return;

                var dateTime = DateTime.Now;

                if (action == "bar") {
                    if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                        HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                        return;
                    }

                    if (!CharactersInventory.ExistCharacterItem(targetCharId, "Bargeld", "inventory")) {
                        HUDHandler.SendNotification(player, 3, 5000, $"Du hast nicht genügend Bargeld dabei ({moneyAmount}$).");
                        HUDHandler.SendNotification(givenBillPlayer, 3, 5000, "Die Person hat nicht genügend Bargeld dabei.");
                        return;
                    }

                    if (CharactersInventory.GetCharacterItemAmount(targetCharId, "Bargeld", "inventory") < moneyAmount) {
                        HUDHandler.SendNotification(player, 3, 5000, $"Du hast nicht genügend Bargeld dabei ({moneyAmount}$).");
                        HUDHandler.SendNotification(givenBillPlayer, 3, 5000, "Die Person hat nicht genügend Bargeld dabei.");
                        return;
                    }

                    CharactersInventory.RemoveCharacterItemAmount(targetCharId, "Bargeld", moneyAmount, "inventory");
                } else if (action == "bank") {
                    if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                        HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                        return;
                    }

                    if (!CharactersBank.HasCharacterBankMainKonto(targetCharId)) {
                        HUDHandler.SendNotification(player, 3, 5000, "Du hast noch kein Hauptkonto in der Bank gesetzt.");
                        HUDHandler.SendNotification(givenBillPlayer, 3, 5000, "Die Person hat noch kein Hauptkonto gesetzt.");
                        return;
                    }

                    var accountNumber = CharactersBank.GetCharacterBankMainKonto(targetCharId);
                    if (accountNumber <= 0) return;

                    if (CharactersBank.GetBankAccountLockStatus(accountNumber)) {
                        HUDHandler.SendNotification(player, 3, 5000, "Dein Hauptkonto ist aktuell gesperrt.");
                        HUDHandler.SendNotification(givenBillPlayer, 3, 5000, "Das Hauptkonto der Person ist gesperrt.");
                        return;
                    }

                    if (CharactersBank.GetBankAccountMoney(accountNumber) < moneyAmount) {
                        HUDHandler.SendNotification(player, 3, 5000, $"Dein Bankkonto ist nicht ausreichend gedeckt ({moneyAmount}$).");
                        HUDHandler.SendNotification(givenBillPlayer, 3, 5000, "Die Person hat nicht genügend Geld auf ihrem Bankkonto.");
                        return;
                    }

                    CharactersBank.SetBankAccountMoney(accountNumber, CharactersBank.GetBankAccountMoney(accountNumber) - moneyAmount);
                    ServerBankPapers.CreateNewBankPaper(accountNumber, dateTime.ToString("dd.MM.yyyy"), dateTime.ToString("HH.mm"),
                        "Ausgehende Überweisung", $"{factionCompanyName}", "Rechnungskartenzahlung", $"-{moneyAmount}$", "Online Banking");
                } else if (action == "decline") {
                    HUDHandler.SendNotification(givenBillPlayer, 3, 5000, $"Die Person hat die Rechnung i.H.v. {moneyAmount}$ abgelehnt.");
                    HUDHandler.SendNotification(player, 3, 5000, $"Du hast die Rechnung i.H.v. {moneyAmount}$ abgelehnt.");
                    return;
                }

                if (type == "faction") {
                    ServerFactions.SetFactionBankMoney(factionCompanyId, ServerFactions.GetFactionBankMoney(factionCompanyId) + moneyAmount);
                    LoggingService.NewFactionLog(factionCompanyId, targetCharId, givenBillOwnerCharId, "bill",
                        $"{Characters.GetCharacterName(targetCharId)} hat die Rechnung von {Characters.GetCharacterName(givenBillOwnerCharId)} i.H.v. {moneyAmount}$ erfolgreich bezahlt ({action}).");
                } else if (type == "company") {
                    ServerCompanys.SetServerCompanyMoney(factionCompanyId, ServerCompanys.GetServerCompanyMoney(factionCompanyId) + moneyAmount);
                    LoggingService.NewCompanyLog(factionCompanyId, targetCharId, givenBillOwnerCharId, "bill",
                        $"{Characters.GetCharacterName(targetCharId)} hat die Rechnung von {Characters.GetCharacterName(givenBillOwnerCharId)} i.H.v. {moneyAmount}$ erfolgreich bezahlt ({action}).");
                }

                HUDHandler.SendNotification(player, 2, 5000, $"Du hast die Rechnung i.H.v. {moneyAmount}$ bezahlt (Zahlungsart: {action}).");
                HUDHandler.SendNotification(givenBillPlayer, 2, 5000,
                    $"Die Person hat die Rechnung i.H.v. {moneyAmount}$ bezahlt (Zahlungsart: {action}).");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Raycast:GiveTakeHandcuffs")]
        public void GiveTakeHandcuffs(IPlayer player, IPlayer targetPlayer) {
            try {
                if (player == null || targetPlayer == null || !player.Exists || !targetPlayer.Exists) return;

                var stopwatch = new Stopwatch();
                stopwatch.Start();

                if (!player.Position.IsInRange(targetPlayer.Position, 3f)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Du bist zu weit entfernt.");
                    return;
                }

                var charId = User.GetPlayerOnline(player);
                var targetCharId = User.GetPlayerOnline(targetPlayer);
                if (charId <= 0 || targetCharId <= 0) return;

                if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                    return;
                }

                var hasTargetHandcuffs = targetPlayer.HasPlayerHandcuffs();
                var hasTargetRopeCuffs = targetPlayer.HasPlayerRopeCuffs();
                var hasTargetFootCuffs = targetPlayer.HasPlayerFootcuffs();

                if (hasTargetRopeCuffs) {
                    HUDHandler.SendNotification(player, 3, 5000, "Fehler: Der Spieler ist mit einem Seil gefesselt.");
                    return;
                }

                if (hasTargetFootCuffs) {
                    if (!CharactersInventory.ExistCharacterItem(charId, "Handschellen", "inventory") &&
                        !CharactersInventory.ExistCharacterItem(charId, "Handschellen", "backpack")) {
                        HUDHandler.SendNotification(player, 3, 5000, "Fehler: Du hast keine Handschellen.");
                        return;
                    }

                    if (CharactersInventory.ExistCharacterItem(charId, "Handschellen", "inventory") &&
                        CharactersInventory.GetCharacterItemAmount(charId, "Handschellen", "inventory") > 0)
                        CharactersInventory.RemoveCharacterItemAmount(charId, "Handschellen", 1, "inventory");
                    else if (CharactersInventory.ExistCharacterItem(charId, "Handschellen", "backpack") &&
                             CharactersInventory.GetCharacterItemAmount(charId, "Handschellen", "backpack") > 0)
                        CharactersInventory.RemoveCharacterItemAmount(charId, "Handschellen", 1, "backpack");

                    InventoryHandler.StopAnimation(targetPlayer, "mp_arresting", "idle");
                    InventoryHandler.InventoryAnimation(targetPlayer, "handcuffs", -1);
                    targetPlayer.SetPlayerIsCuffed("footcuffs", false);
                    targetPlayer.SetPlayerIsCuffed("handcuffs", true);
                    targetPlayer.GiveWeapon(WeaponModel.Fist, 0, true);
                    HUDHandler.SendNotification(targetPlayer, 1, 2000, "Dir wurde die Fußfessel abgenommen und Handschellen angelegt.");
                    HUDHandler.SendNotification(player, 2, 2000, "Fußfessel abgelegt und Handschellen angelegt.");

                    var itemWeight = ServerItems.GetItemWeight("Fußfessel");
                    var invWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory");
                    var backpackWeight = CharactersInventory.GetCharacterItemWeight(charId, "backpack");

                    if (invWeight + itemWeight > 15f && backpackWeight + itemWeight >
                        Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) {
                        HUDHandler.SendNotification(player, 3, 5000, "Du hast nicht genug Platz in deinen Taschen.");
                        return;
                    }

                    if (invWeight + itemWeight <= 15f) {
                        CharactersInventory.AddCharacterItem(charId, "Fußfessel", 1, "inventory");
                        stopwatch.Stop();
                        if (stopwatch.Elapsed.Milliseconds > 30)
                            Alt.Log($"{charId} - GiveTakeHandcuffs benötigte {stopwatch.Elapsed.Milliseconds}ms");
                        return;
                    }

                    if (Characters.GetCharacterBackpack(charId) != -2 && backpackWeight + itemWeight <=
                        Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) {
                        CharactersInventory.AddCharacterItem(charId, "Fußfessel", 1, "backpack");
                        stopwatch.Stop();
                        if (stopwatch.Elapsed.Milliseconds > 30)
                            Alt.Log($"{charId} - GiveTakeHandcuffs benötigte {stopwatch.Elapsed.Milliseconds}ms");
                        return;
                    }

                    return;
                }

                if (hasTargetHandcuffs) {
                    //TargetPlayer hat Handschellen.
                    if (!CharactersInventory.ExistCharacterItem(charId, "Handschellenschluessel", "inventory") &&
                        !CharactersInventory.ExistCharacterItem(charId, "Handschellenschluessel", "backpack")) {
                        HUDHandler.SendNotification(player, 3, 5000, "Fehler: Du hast keinen Schlüssel.");
                        return;
                    }

                    InventoryHandler.StopAnimation(targetPlayer, "mp_arresting", "sprint");
                    targetPlayer.SetPlayerIsCuffed("handcuffs", false);
                    HUDHandler.SendNotification(targetPlayer, 1, 2000, "Dir wurden die Handschellen abgenommen.");

                    var itemWeight = ServerItems.GetItemWeight("Handschellen");
                    var invWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory");
                    var backpackWeight = CharactersInventory.GetCharacterItemWeight(charId, "backpack");

                    if (invWeight + itemWeight > 15f && backpackWeight + itemWeight >
                        Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) {
                        HUDHandler.SendNotification(player, 3, 5000, "Du hast nicht genug Platz in deinen Taschen.");
                        return;
                    }

                    if (invWeight + itemWeight <= 15f) {
                        HUDHandler.SendNotification(player, 2, 5000, "Handschellen abgenommen.");
                        CharactersInventory.AddCharacterItem(charId, "Handschellen", 1, "inventory");
                        stopwatch.Stop();
                        if (stopwatch.Elapsed.Milliseconds > 30)
                            Alt.Log($"{charId} - GiveTakeHandcuffs benötigte {stopwatch.Elapsed.Milliseconds}ms");
                        return;
                    }

                    if (Characters.GetCharacterBackpack(charId) != -2 && backpackWeight + itemWeight <=
                        Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) {
                        HUDHandler.SendNotification(player, 2, 5000, "Handschellen abgenommen.");
                        CharactersInventory.AddCharacterItem(charId, "Handschellen", 1, "backpack");
                        stopwatch.Stop();
                        if (stopwatch.Elapsed.Milliseconds > 30)
                            Alt.Log($"{charId} - GiveTakeHandcuffs benötigte {stopwatch.Elapsed.Milliseconds}ms");
                    }

                } else {
                    //TargetPlayer hat keine Handschellen.
                    if (!CharactersInventory.ExistCharacterItem(charId, "Handschellen", "inventory") &&
                        !CharactersInventory.ExistCharacterItem(charId, "Handschellen", "backpack")) {
                        HUDHandler.SendNotification(player, 3, 5000, "Fehler: Du hast keine Handschellen.");
                        return;
                    }

                    if (CharactersInventory.ExistCharacterItem(charId, "Handschellen", "inventory") &&
                        CharactersInventory.GetCharacterItemAmount(charId, "Handschellen", "inventory") > 0)
                        CharactersInventory.RemoveCharacterItemAmount(charId, "Handschellen", 1, "inventory");
                    else if (CharactersInventory.ExistCharacterItem(charId, "Handschellen", "backpack") &&
                             CharactersInventory.GetCharacterItemAmount(charId, "Handschellen", "backpack") > 0)
                        CharactersInventory.RemoveCharacterItemAmount(charId, "Handschellen", 1, "backpack");

                    InventoryHandler.InventoryAnimation(targetPlayer, "handcuffs", -1);
                    targetPlayer.SetPlayerIsCuffed("handcuffs", true);
                    targetPlayer.GiveWeapon(WeaponModel.Fist, 0, true);
                    HUDHandler.SendNotification(targetPlayer, 1, 2000, "Dir wurden Handschellen angelegt.");
                    HUDHandler.SendNotification(player, 2, 2000, "Handschellen angelegt.");
                    stopwatch.Stop();
                    if (stopwatch.Elapsed.Milliseconds > 30) Alt.Log($"{charId} - GiveTakeHandcuffs benötigte {stopwatch.Elapsed.Milliseconds}ms");
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Raycast:GiveTakeFootcuffs")]
        public void GiveTakeFootcuffs(IPlayer player, IPlayer targetPlayer) {
            try {
                if (player == null || targetPlayer == null || !player.Exists || !targetPlayer.Exists) return;

                var stopwatch = new Stopwatch();
                stopwatch.Start();

                if (!player.Position.IsInRange(targetPlayer.Position, 3f)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Du bist zu weit entfernt.");
                    return;
                }

                var charId = User.GetPlayerOnline(player);
                var targetCharId = User.GetPlayerOnline(targetPlayer);
                if (charId <= 0 || targetCharId <= 0) return;

                if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                    return;
                }

                var hasTargetHandCuffs = targetPlayer.HasPlayerHandcuffs();
                var hasTargetRopeCuffs = targetPlayer.HasPlayerRopeCuffs();
                var hasTargetFootCuffs = targetPlayer.HasPlayerFootcuffs();

                if (hasTargetRopeCuffs) {
                    HUDHandler.SendNotification(player, 3, 5000, "Fehler: Der Spieler ist mit einem Seil gefesselt.");
                    return;
                }

                if (hasTargetHandCuffs) {
                    if (!CharactersInventory.ExistCharacterItem(charId, "Fußfessel", "inventory") &&
                        !CharactersInventory.ExistCharacterItem(charId, "Fußfessel", "backpack")) {
                        HUDHandler.SendNotification(player, 3, 5000, "Fehler: Du hast keine Fußfessel.");
                        return;
                    }

                    if (CharactersInventory.ExistCharacterItem(charId, "Fußfessel", "inventory") &&
                        CharactersInventory.GetCharacterItemAmount(charId, "Fußfessel", "inventory") > 0)
                        CharactersInventory.RemoveCharacterItemAmount(charId, "Fußfessel", 1, "inventory");
                    else if (CharactersInventory.ExistCharacterItem(charId, "Fußfessel", "backpack") &&
                             CharactersInventory.GetCharacterItemAmount(charId, "Fußfessel", "backpack") > 0)
                        CharactersInventory.RemoveCharacterItemAmount(charId, "Fußfessel", 1, "backpack");

                    InventoryHandler.StopAnimation(targetPlayer, "mp_arresting", "sprint");
                    InventoryHandler.InventoryAnimation(targetPlayer, "footcuffs", -1);
                    targetPlayer.SetPlayerIsCuffed("handcuffs", false);
                    targetPlayer.SetPlayerIsCuffed("footcuffs", true);
                    targetPlayer.GiveWeapon(WeaponModel.Fist, 0, true);
                    HUDHandler.SendNotification(targetPlayer, 1, 2000, "Dir wurde die Handschellen abgenommen und Fußfessel angelegt.");
                    HUDHandler.SendNotification(player, 2, 2000, "Handschellen abgelegt und Fußfessel angelegt.");

                    var itemWeight = ServerItems.GetItemWeight("Handschellen");
                    var invWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory");
                    var backpackWeight = CharactersInventory.GetCharacterItemWeight(charId, "backpack");

                    if (invWeight + itemWeight > 15f && backpackWeight + itemWeight >
                        Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) {
                        HUDHandler.SendNotification(player, 3, 5000, "Du hast nicht genug Platz in deinen Taschen.");
                        return;
                    }

                    if (invWeight + itemWeight <= 15f) {
                        CharactersInventory.AddCharacterItem(charId, "Handschellen", 1, "inventory");
                        stopwatch.Stop();
                        if (stopwatch.Elapsed.Milliseconds > 30)
                            Alt.Log($"{charId} - GiveTakeFootcuffs benötigte {stopwatch.Elapsed.Milliseconds}ms");
                        return;
                    }

                    if (Characters.GetCharacterBackpack(charId) != -2 && backpackWeight + itemWeight <=
                        Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) {
                        CharactersInventory.AddCharacterItem(charId, "Handschellen", 1, "backpack");
                        stopwatch.Stop();
                        if (stopwatch.Elapsed.Milliseconds > 30)
                            Alt.Log($"{charId} - GiveTakeFootcuffs benötigte {stopwatch.Elapsed.Milliseconds}ms");
                        return;
                    }

                    return;
                }

                if (hasTargetFootCuffs) {
                    //TargetPlayer hat Fußfesseln.
                    if (!CharactersInventory.ExistCharacterItem(charId, "Handschellenschluessel", "inventory") &&
                        !CharactersInventory.ExistCharacterItem(charId, "Handschellenschluessel", "backpack")) {
                        HUDHandler.SendNotification(player, 3, 5000, "Fehler: Du hast keinen Schlüssel.");
                        return;
                    }

                    InventoryHandler.StopAnimation(targetPlayer, "mp_arresting", "idle");
                    targetPlayer.SetPlayerIsCuffed("footcuffs", false);
                    HUDHandler.SendNotification(targetPlayer, 1, 2000, "Dir wurden die Fußfessel abgenommen.");

                    var itemWeight = ServerItems.GetItemWeight("Fußfessel");
                    var invWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory");
                    var backpackWeight = CharactersInventory.GetCharacterItemWeight(charId, "backpack");

                    if (invWeight + itemWeight > 15f && backpackWeight + itemWeight >
                        Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) {
                        HUDHandler.SendNotification(player, 3, 5000, "Du hast nicht genug Platz in deinen Taschen.");
                        return;
                    }

                    if (invWeight + itemWeight <= 15f) {
                        HUDHandler.SendNotification(player, 2, 5000, "Fußfessel abgenommen.");
                        CharactersInventory.AddCharacterItem(charId, "Fußfessel", 1, "inventory");
                        stopwatch.Stop();
                        if (stopwatch.Elapsed.Milliseconds > 30)
                            Alt.Log($"{charId} - GiveTakeFootcuffs benötigte {stopwatch.Elapsed.Milliseconds}ms");
                        return;
                    }

                    if (Characters.GetCharacterBackpack(charId) != -2 && backpackWeight + itemWeight <=
                        Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) {
                        HUDHandler.SendNotification(player, 2, 5000, "Fußfessel abgenommen.");
                        CharactersInventory.AddCharacterItem(charId, "Fußfessel", 1, "backpack");
                        stopwatch.Stop();
                        if (stopwatch.Elapsed.Milliseconds > 30)
                            Alt.Log($"{charId} - GiveTakeFootcuffs benötigte {stopwatch.Elapsed.Milliseconds}ms");
                    }

                } else {
                    //TargetPlayer hat keine Fußfesseln.
                    if (!CharactersInventory.ExistCharacterItem(charId, "Fußfessel", "inventory") &&
                        !CharactersInventory.ExistCharacterItem(charId, "Fußfessel", "backpack")) {
                        HUDHandler.SendNotification(player, 3, 5000, "Fehler: Du hast keine Fußfessel.");
                        return;
                    }

                    if (CharactersInventory.ExistCharacterItem(charId, "Fußfessel", "inventory") &&
                        CharactersInventory.GetCharacterItemAmount(charId, "Fußfessel", "inventory") > 0)
                        CharactersInventory.RemoveCharacterItemAmount(charId, "Fußfessel", 1, "inventory");
                    else if (CharactersInventory.ExistCharacterItem(charId, "Fußfessel", "backpack") &&
                             CharactersInventory.GetCharacterItemAmount(charId, "Fußfessel", "backpack") > 0)
                        CharactersInventory.RemoveCharacterItemAmount(charId, "Fußfessel", 1, "backpack");

                    InventoryHandler.InventoryAnimation(targetPlayer, "footcuffs", -1);
                    targetPlayer.SetPlayerIsCuffed("footcuffs", true);
                    targetPlayer.GiveWeapon(WeaponModel.Fist, 0, true);
                    HUDHandler.SendNotification(targetPlayer, 1, 2000, "Dir wurden eine Fußfessel angelegt.");
                    HUDHandler.SendNotification(player, 2, 2000, "Fußfessel angelegt.");
                    stopwatch.Stop();
                    if (stopwatch.Elapsed.Milliseconds > 30) Alt.Log($"{charId} - GiveTakeFootcuffs benötigte {stopwatch.Elapsed.Milliseconds}ms");
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Raycast:GiveTakeRopeCuffs")]
        public void GiveTakeRopeCuffs(IPlayer player, IPlayer targetPlayer) {
            try {
                if (player == null || targetPlayer == null || !player.Exists || !targetPlayer.Exists) return;

                var stopwatch = new Stopwatch();
                stopwatch.Start();

                if (!player.Position.IsInRange(targetPlayer.Position, 3f)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Du bist zu weit entfernt.");
                    return;
                }

                var charId = User.GetPlayerOnline(player);
                var targetCharId = User.GetPlayerOnline(targetPlayer);
                if (charId <= 0 || targetCharId <= 0) return;

                if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                    return;
                }

                var hasTargetHandCuffs = targetPlayer.HasPlayerHandcuffs();
                var hasTargetRopeCuffs = targetPlayer.HasPlayerRopeCuffs();
                var hasTargetFootCuffs = targetPlayer.HasPlayerFootcuffs();

                if (hasTargetHandCuffs) {
                    HUDHandler.SendNotification(player, 3, 5000, "Fehler: Der Spieler hat Handschellen an.");
                    return;
                }

                if (hasTargetFootCuffs) {
                    HUDHandler.SendNotification(player, 3, 5000, "Fehler: Der Spieler ist mit einer Fußfessel gefesselt.");
                    return;
                }

                if (hasTargetRopeCuffs) {
                    //TargetPlayer hat Seilfesseln.
                    InventoryHandler.StopAnimation(targetPlayer, "mp_arresting", "sprint");
                    targetPlayer.SetPlayerIsCuffed("ropecuffs", false);
                    HUDHandler.SendNotification(targetPlayer, 1, 2000, "Dir wurden die Seilfesseln abgenommen.");

                    var itemWeight = ServerItems.GetItemWeight("Seil");
                    var invWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory");
                    var backpackWeight = CharactersInventory.GetCharacterItemWeight(charId, "backpack");

                    if (invWeight + itemWeight > 15f && backpackWeight + itemWeight >
                        Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) {
                        HUDHandler.SendNotification(player, 3, 5000, "Du hast nicht genug Platz in deinen Taschen.");
                        return;
                    }

                    if (invWeight + itemWeight <= 15f) {
                        HUDHandler.SendNotification(player, 2, 5000, "Seil abgenommen.");
                        CharactersInventory.AddCharacterItem(charId, "Seil", 1, "inventory");
                        stopwatch.Stop();
                        if (stopwatch.Elapsed.Milliseconds > 30)
                            Alt.Log($"{charId} - GiveTakeRopeCuffs benötigte {stopwatch.Elapsed.Milliseconds}ms");
                        return;
                    }

                    if (Characters.GetCharacterBackpack(charId) != -2 && backpackWeight + itemWeight <=
                        Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) {
                        HUDHandler.SendNotification(player, 2, 5000, "Seil abgenommen.");
                        CharactersInventory.AddCharacterItem(charId, "Seil", 1, "backpack");
                        stopwatch.Stop();
                        if (stopwatch.Elapsed.Milliseconds > 30)
                            Alt.Log($"{charId} - GiveTakeRopeCuffs benötigte {stopwatch.Elapsed.Milliseconds}ms");
                    }

                } else {
                    //TargetPlayer hat keine Seilfesseln.
                    if (!CharactersInventory.ExistCharacterItem(charId, "Seil", "inventory") &&
                        !CharactersInventory.ExistCharacterItem(charId, "Seil", "backpack")) {
                        HUDHandler.SendNotification(player, 3, 5000, "Fehler: Du hast kein Seil dabei.");
                        return;
                    }

                    if (CharactersInventory.ExistCharacterItem(charId, "Seil", "inventory") &&
                        CharactersInventory.GetCharacterItemAmount(charId, "Seil", "inventory") > 0)
                        CharactersInventory.RemoveCharacterItemAmount(charId, "Seil", 1, "inventory");
                    else if (CharactersInventory.ExistCharacterItem(charId, "Seil", "backpack") &&
                             CharactersInventory.GetCharacterItemAmount(charId, "Seil", "backpack") > 0)
                        CharactersInventory.RemoveCharacterItemAmount(charId, "Seil", 1, "backpack");

                    InventoryHandler.InventoryAnimation(targetPlayer, "handcuffs", -1);
                    targetPlayer.SetPlayerIsCuffed("ropecuffs", true);
                    targetPlayer.GiveWeapon(WeaponModel.Fist, 0, true);
                    HUDHandler.SendNotification(targetPlayer, 1, 2000, "Du wurdest mit einem Seil gefesselt.");
                    HUDHandler.SendNotification(player, 2, 2000, "Seil angelegt.");
                    stopwatch.Stop();
                    if (stopwatch.Elapsed.Milliseconds > 30) Alt.Log($"{charId} - GiveTakeRopeCuffs benötigte {stopwatch.Elapsed.Milliseconds}ms");
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Raycast:SearchPlayerInventory")]
        public void SearchPlayerInventory(IPlayer player, IPlayer targetPlayer) {
            try {
                if (player == null || targetPlayer == null || !player.Exists || !targetPlayer.Exists) return;

                if (!player.Position.IsInRange(targetPlayer.Position, 3f)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Du bist zu weit entfernt.");
                    return;
                }

                var charId = User.GetPlayerOnline(player);
                var targetCharId = User.GetPlayerOnline(targetPlayer);
                if (charId <= 0 || targetCharId <= 0) return;

                if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                    return;
                }

                if (!targetPlayer.HasPlayerHandcuffs() && !targetPlayer.HasPlayerRopeCuffs() && !targetPlayer.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 3, 5000, "Dieser Spieler ist nicht gefesselt.");
                    return;
                }

                var targetInvArray = CharactersInventory.GetCharacterInventory(targetCharId); //Inventar Items des zu durchsuchenden Spielers
                player.EmitLocked("Client:PlayerSearch:openCEF", targetCharId, targetInvArray);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Raycast:showIdcard")]
        public void showIdCard(IPlayer player, IPlayer targetPlayer) {
            try {
                if (player == null || targetPlayer == null || !player.Exists || !targetPlayer.Exists) return;

                var stopwatch = new Stopwatch();
                stopwatch.Start();
                var charId = (int) player.GetCharacterMetaId();
                var targetId = (int) targetPlayer.GetCharacterMetaId();
                if (charId <= 0 || targetId <= 0) return;
                if (Characters.GetCharacterAccState(charId) <= 0) return;

                if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                    return;
                }

                var data = "[]";

                if (ServerFactions.IsCharacterInAnyFaction(charId) && ServerFactions.IsCharacterInFactionDuty(charId)) {
                    data = Characters.GetCharacterFactionInformations(charId);
                    if (data == null || data == "[]") return;

                    player.EmitLocked("Client:IdentityCard:showIdentityCard", "faction", data);
                    targetPlayer.EmitLocked("Client:IdentityCard:showIdentityCard", "faction", data);
                    stopwatch.Stop();
                    if (stopwatch.Elapsed.Milliseconds > 30) Alt.Log($"{charId} - showIdCard benötigte {stopwatch.Elapsed.Milliseconds}ms");
                    return;
                }

                data = Characters.GetCharacterInformations(charId);
                if (data == null || data == "[]") return;

                player.EmitLocked("Client:IdentityCard:showIdentityCard", "perso", data);
                targetPlayer.EmitLocked("Client:IdentityCard:showIdentityCard", "perso", data);
                InventoryHandler.InventoryAnimation(player, "give", 0);
                stopwatch.Stop();
                if (stopwatch.Elapsed.Milliseconds > 30) Alt.Log($"{charId} - showIdCard benötigte {stopwatch.Elapsed.Milliseconds}ms");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }
    }
}