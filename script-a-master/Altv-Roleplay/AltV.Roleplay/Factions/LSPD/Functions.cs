using System;
using System.Globalization;
using AltV.Net;
using AltV.Net.Async;
using AltV.Net.Elements.Entities;
using Altv_Roleplay.Handler;
using Altv_Roleplay.Model;
using Altv_Roleplay.Utils;

namespace Altv_Roleplay.Factions.LSPD
{
    internal class Functions : IScript
    {
        [AsyncClientEvent("Server:Tablet:LSPDAppSearchPerson")]
        public void LSPDAppSearchPerson(IPlayer player, string targetCharname) {
            try {
                if (player == null || !player.Exists || targetCharname == "") return;

                var charId = User.GetPlayerOnline(player);
                if (charId <= 0) return;

                if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 4, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                    return;
                }

                if (!ServerFactions.IsCharacterInAnyFaction(charId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Fehler: Du bist in keiner Fraktion.");
                    return;
                }

                if (ServerFactions.GetCharacterFactionId(charId) != 1 && ServerFactions.GetCharacterFactionId(charId) != 3) {
                    HUDHandler.SendNotification(player, 4, 5000, "Fehler: Du bist nicht im L.S.P.D. oder der Justiz angestellt.");
                    return;
                }

                if (!ServerFactions.IsCharacterInFactionDuty(charId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Fehler: Du bist nicht im Dienst.");
                    return;
                }

                if (!Characters.ExistCharacterName(targetCharname)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Fehler: Der eingegebene Name wurde nicht gefunden.");
                    return;
                }

                var targetCharId = Characters.GetCharacterIdFromCharName(targetCharname);
                if (targetCharId <= 0) return;

                var charName = Characters.GetCharacterName(targetCharId);
                var gender = "Unbekannt";
                var birthdate = Characters.GetCharacterBirthdate(targetCharId);
                var birthplace = Characters.GetCharacterBirthplace(targetCharId);
                var address = $"{Characters.GetCharacterStreet(targetCharId)}";
                var job = Characters.GetCharacterJob(targetCharId);
                var mainBankAccount = "Nicht vorhanden";
                var firstJoinDate =
                    $"{Characters.GetCharacterFirstJoinDate(targetCharId).ToString("d", CultureInfo.CreateSpecificCulture("de-DE"))}";

                if (job == "None")
                    job = "Arbeitslos";

                if (CharactersBank.HasCharacterBankMainKonto(targetCharId))
                    mainBankAccount = $"{CharactersBank.GetCharacterBankMainKonto(targetCharId)}";

                if (Characters.GetCharacterGender(targetCharId))
                    gender = "Weiblich";
                else
                    gender = "Männlich";

                player.EmitLocked("Client:Tablet:SetLSPDAppPersonSearchData", charName, gender, birthdate, birthplace, address, job,
                    mainBankAccount, firstJoinDate);
                HUDHandler.SendNotification(player, 2, 1500, $"Personenabfrage durchgeführt: {charName}.");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:LSPDAppSearchVehiclePlate")]
        public void LSPDAppSearchVehiclePlate(IPlayer player, string targetPlate) {
            try {
                if (player == null || !player.Exists || targetPlate == "") return;

                var charId = User.GetPlayerOnline(player);
                if (charId <= 0) return;

                if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 4, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                    return;
                }

                if (!ServerFactions.IsCharacterInAnyFaction(charId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Fehler: Du bist in keiner Fraktion.");
                    return;
                }

                if (ServerFactions.GetCharacterFactionId(charId) != 2 && ServerFactions.GetCharacterFactionId(charId) != 1) {
                    HUDHandler.SendNotification(player, 4, 5000, "Fehler: Du bist nicht im L.S.P.D. oder der Justiz angestellt.");
                    return;
                }

                if (!ServerFactions.IsCharacterInFactionDuty(charId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Fehler: Du bist nicht im Dienst.");
                    return;
                }

                if (!ServerVehicles.ExistServerVehiclePlate(targetPlate)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Fehler: Das angegebene Kennzeichen wurde nicht gefunden.");
                    return;
                }

                var vehicleId = ServerVehicles.GetVehicleIdByPlate(targetPlate);
                if (vehicleId <= 0) return;

                var ownerId = ServerVehicles.GetVehicleOwnerById(vehicleId);
                if (ownerId <= 0) return;

                var owner = Characters.GetCharacterName(ownerId);
                var vehName = ServerVehicles.GetVehicleNameOnHash(ServerVehicles.GetVehicleHashById(vehicleId));
                var manufactor = ServerVehicles.GetVehicleManufactorOnHash(ServerVehicles.GetVehicleHashById(vehicleId));
                var buyDate = $"{ServerVehicles.GetVehicleBuyDate(vehicleId).ToString("d", CultureInfo.CreateSpecificCulture("de-DE"))}";
                var trunk = $"{ServerVehicles.GetVehicleTrunkCapacityOnHash(ServerVehicles.GetVehicleHashById(vehicleId))}kg";
                var tax = $"{ServerAllVehicles.GetVehicleTaxes(ServerVehicles.GetVehicleHashById(vehicleId))}$";
                var maxfuel = $"{ServerVehicles.GetVehicleFuelLimitOnHash(ServerVehicles.GetVehicleHashById(vehicleId))}";
                var fuelType = ServerVehicles.GetVehicleFuelTypeOnHash(ServerVehicles.GetVehicleHashById(vehicleId));
                player.EmitLocked("Client:Tablet:SetLSPDAppSearchVehiclePlateData", owner, vehName, manufactor, buyDate, trunk, maxfuel, tax,
                    fuelType);
                HUDHandler.SendNotification(player, 2, 1500, $"Fahrzeugabfrage durchgeführt: {targetPlate}");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:LSPDAppSearchLicense")]
        public void LSPDAppSearchLicense(IPlayer player, string targetCharname) {
            try {
                if (player == null || !player.Exists || targetCharname == "") return;

                var charId = User.GetPlayerOnline(player);
                if (charId <= 0) return;

                if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 4, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                    return;
                }

                if (!ServerFactions.IsCharacterInAnyFaction(charId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Fehler: Du bist in keiner Fraktion.");
                    return;
                }

                if (ServerFactions.GetCharacterFactionId(charId) != 2 && ServerFactions.GetCharacterFactionId(charId) != 1) {
                    HUDHandler.SendNotification(player, 4, 5000, "Fehler: Du bist nicht im L.S.P.D. oder der Justiz angestellt.");
                    return;
                }

                if (!ServerFactions.IsCharacterInFactionDuty(charId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Fehler: Du bist nicht im Dienst.");
                    return;
                }

                if (!Characters.ExistCharacterName(targetCharname)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Fehler: Der eingegebene Name wurde nicht gefunden.");
                    return;
                }

                var targetCharId = Characters.GetCharacterIdFromCharName(targetCharname);
                if (targetCharId <= 0) return;

                var charName = Characters.GetCharacterName(targetCharId);
                var licArray = CharactersLicenses.GetCharacterLicenses(targetCharId);
                player.EmitLocked("Client:Tablet:SetLSPDAppLicenseSearchData", charName, licArray);
                HUDHandler.SendNotification(player, 2, 1500, $"Lizenzabfrage durchgeführt: {charName}.");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:LSPDAppTakeLicense")]
        public void LSPDAppTakeLicense(IPlayer player, string targetCharname, string licName) {
            try {
                if (player == null || !player.Exists || targetCharname == "" || licName == "") return;

                var charId = User.GetPlayerOnline(player);
                if (charId <= 0) return;

                if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 4, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                    return;
                }

                if (!ServerFactions.IsCharacterInAnyFaction(charId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Fehler: Du bist in keiner Fraktion.");
                    return;
                }

                if (ServerFactions.GetCharacterFactionId(charId) != 2) {
                    HUDHandler.SendNotification(player, 4, 5000, "Fehler: Du bist nicht im L.S.P.D. angestellt.");
                    return;
                }

                if (!ServerFactions.IsCharacterInFactionDuty(charId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Fehler: Du bist nicht im Dienst.");
                    return;
                }

                if (!Characters.ExistCharacterName(targetCharname)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Fehler: Der eingegebene Name wurde nicht gefunden.");
                    return;
                }

                Alt.Log($"{CharactersLicenses.GetFullLicenseName(licName)}");
                if (CharactersLicenses.GetFullLicenseName(licName) == "None") return;

                var targetCharId = Characters.GetCharacterIdFromCharName(targetCharname);
                if (targetCharId <= 0) return;

                if (!CharactersLicenses.HasCharacterLicense(targetCharId, licName)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Fehler: Der Spieler hat diese Lizenz nicht mehr.");
                    return;
                }

                CharactersLicenses.SetCharacterLicense(targetCharId, licName, false);
                HUDHandler.SendNotification(player, 2, 2000,
                    $"{targetCharname} wurde die Lizenz {CharactersLicenses.GetFullLicenseName(licName)} entzogen.");
                LSPDAppSearchLicense(player, targetCharname);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }
    }
}