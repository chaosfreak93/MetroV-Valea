using System;
using System.Diagnostics;
using System.Linq;
using AltV.Net;
using AltV.Net.Async;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;
using Altv_Roleplay.Model;
using Altv_Roleplay.Services;
using Altv_Roleplay.Utils;

namespace Altv_Roleplay.Handler
{
    internal class TabletHandler : IScript
    {
        [AsyncClientEvent("Server:Tablet:openCEF")]
        public void openCEF(IPlayer player) {
            try {
                if (player == null || !player.Exists) return;

                var charId = User.GetPlayerOnline(player);
                if (charId <= 0) return;

                if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 3, 5000, "Wie willst du das mit Handschellen/Fesseln machen?");
                    return;
                }

                if (!CharactersInventory.ExistCharacterItem(charId, "Tablet", "inventory") &&
                    !CharactersInventory.ExistCharacterItem(charId, "Tablet", "backpack")) {
                    HUDHandler.SendNotification(player, 3, 5000, "Du besitzt kein Tablet.");
                    return;
                }

                player.EmitLocked("Client:Tablet:createCEF");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:RequestTabletData")]
        public void RequestTabletData(IPlayer player) {
            try {
                if (player == null || !player.Exists) return;

                var stopwatch = new Stopwatch();
                stopwatch.Start();
                var charId = User.GetPlayerOnline(player);
                if (charId == 0) return;

                RefreshTabletData(player, true);
                stopwatch.Stop();
                Alt.Log($"{charId} - RequestTabletData benötigte {stopwatch.Elapsed.Milliseconds}ms");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static void RefreshTabletData(IPlayer player, bool openTablet) {
            try {
                if (player == null || !player.Exists) return;

                var stopwatch = new Stopwatch();
                stopwatch.Start();
                var charId = User.GetPlayerOnline(player);
                if (charId <= 0) return;

                if (!CharactersTablet.HasCharacterTutorialEntryFinished(charId, "openTablet")) {
                    CharactersTablet.SetCharacterTutorialEntryState(charId, "openTablet", true);
                    HUDHandler.SendNotification(player, 1, 5000, "Erfolg abgeschlossen: Tablet öffnen.");
                }

                var vehicleStoreArray = ServerVehicleShops.GetTabletVehicleStoreItems();
                player.EmitLocked("Client:Tablet:setTabletHomeAppData", CharactersTablet.GetCharacterTabletApps(charId));
                player.EmitLocked("Client:Tablet:SetVehicleStoreAppContent", vehicleStoreArray);
                player.EmitLocked("Client:Tablet:SetTutorialAppContent", CharactersTablet.GetCharacterTabletTutorialEntrys(charId));

                if (CharactersTablet.HasCharacterTabletApp(charId, "banking")) {
                    var bankingAppOwnerArray = CharactersTablet.GetCharacterTabletBankingAppOwnerInfo(charId);
                    var bankPaperArray = ServerBankPapers.GetTabletBankAccountBankPaper(CharactersBank.GetCharacterBankMainKonto(charId));
                    player.EmitLocked("Client:Tablet:SetBankingAppContent", bankingAppOwnerArray, bankPaperArray);
                }

                if (CharactersTablet.HasCharacterTabletApp(charId, "events")) {
                    var eventArray = CharactersTablet.GetServerTabletEvents();
                    player.EmitLocked("Client:Tablet:SetEventsAppContent", eventArray);
                }

                if (CharactersTablet.HasCharacterTabletApp(charId, "lifeinvader")) {
                    var adArray = CharactersTablet.GetServerTabletAdvertisements();
                    player.EmitLocked("Client:Tablet:SetLifeinvaderAppContent", adArray);
                }

                if (CharactersTablet.HasCharacterTabletApp(charId, "notices")) {
                    var notesArray = CharactersTablet.GetCharacterTabletNotes(charId);
                    player.EmitLocked("Client:Tablet:NotesAppAddNotesContent", notesArray);
                }

                if (CharactersTablet.HasCharacterTabletApp(charId, "vehicles")) {
                    var vehicleArray = CharactersTablet.GetCharacterTabletVehicles(charId);
                    player.EmitLocked("Client:Tablet:SetVehiclesAppContent", vehicleArray);
                }

                if (ServerCompanys.IsCharacterInAnyServerCompany(charId)) {
                    var memberArray = ServerCompanys.GetServerCompanyMembers(ServerCompanys.GetCharacterServerCompanyId(charId));
                    var companyInfos = ServerCompanys.GetServerCompanyInfos(ServerCompanys.GetCharacterServerCompanyId(charId));
                    player.EmitLocked("Client:Tablet:SetCompanyAppContent", ServerCompanys.GetCharacterServerCompanyId(charId), companyInfos,
                        memberArray);
                }

                if (ServerFactions.IsCharacterInAnyFaction(charId)) {
                    var charRank = ServerFactions.GetCharacterFactionRank(charId);

                    if (charRank > ServerFactions.GetFactionMaxRankCount(ServerFactions.GetCharacterFactionId(charId)) - 2) {
                        var infoArray = ServerFactions.GetServerFactionManagerInfos(ServerFactions.GetCharacterFactionId(charId));
                        var memberArray = ServerFactions.GetServerFactionMembers(ServerFactions.GetCharacterFactionId(charId));
                        var rankArray = ServerFactions.GetServerFactionRanks(ServerFactions.GetCharacterFactionId(charId));
                        player.EmitLocked("Client:Tablet:SetFactionManagerAppContent", ServerFactions.GetCharacterFactionId(charId), infoArray,
                            memberArray, rankArray);
                    }

                    if (ServerFactions.IsCharacterInFactionDuty(charId) && ServerFactions.GetCharacterFactionId(charId) > 0) {
                        var factionDutyMemberAmount = ServerFactions.GetFactionDutyMemberCount(ServerFactions.GetCharacterFactionId(charId));
                        var factionDispatchAmount = ServerFactions.GetFactionDispatcheCount(ServerFactions.GetCharacterFactionId(charId));
                        var factionShort = ServerFactions.GetFactionShortName(ServerFactions.GetCharacterFactionId(charId));
                        player.EmitLocked("Client:Tablet:SetFactionAppContent", factionDutyMemberAmount, factionDispatchAmount,
                            ServerVehicles.GetAllParkedOutFactionVehicles(factionShort));

                        var dispatches = ServerFactions.GetFactionDispatches(ServerFactions.GetCharacterFactionId(charId));
                        if (dispatches != "[]")
                            player.EmitLocked("Client:Tablet:setDispatches", ServerFactions.GetCharacterFactionId(charId), dispatches);
                    }
                }

                if (openTablet) player.EmitLocked("Client:Tablet:finaly");
                //if (openTablet) player.Emit("Client:Tablet:finaly");
                stopwatch.Stop();
                Alt.Log($"{charId} - RefreshTabletData benötigte {stopwatch.Elapsed.Milliseconds}ms");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:AppStoreInstallUninstallApp")]
        public void AppStoreInstallUninstallApp(IPlayer player, string appName, bool isInstalling) {
            try {
                if (player == null || !player.Exists || appName == "" || appName == "undefined") return;

                var charId = User.GetPlayerOnline(player);
                if (charId == 0) return;

                if (isInstalling) {
                    if (!CharactersBank.HasCharacterBankMainKonto(charId)) {
                        HUDHandler.SendNotification(player, 4, 5000, "Du hast noch kein Hauptkonto in deiner Bankfiliale festgelegt.");
                        return;
                    }

                    var accountNumber = CharactersBank.GetCharacterBankMainKonto(charId);
                    var appPrice = CharactersTablet.GetServerTabletAppPrice(appName);

                    if (CharactersBank.GetBankAccountLockStatus(accountNumber)) {
                        HUDHandler.SendNotification(player, 3, 5000, "Dieses Bankkonto ist gesperrt und kann nicht weiter benutzt werden.");
                        return;
                    }

                    if (appPrice > CharactersBank.GetBankAccountMoney(accountNumber)) {
                        HUDHandler.SendNotification(player, 3, 5000, $"Du hast nicht genügend Geld auf deinem Konto ({appPrice}$).");
                        return;
                    }

                    var dateTime = DateTime.Now;
                    CharactersBank.SetBankAccountMoney(accountNumber, CharactersBank.GetBankAccountMoney(accountNumber) - appPrice);
                    ServerBankPapers.CreateNewBankPaper(accountNumber, dateTime.ToString("dd.MM.yyyy"), dateTime.ToString("HH.mm"),
                        "Ausgehende Überweisung", "Tablet App-Store", $"App-Kauf: {appName}", $"-{appPrice}$", "Online");
                    CharactersTablet.ChangeCharacterTabletAppInstallState(charId, appName, true);
                    HUDHandler.SendNotification(player, 2, 5000, $"Sie haben die App erfolgreich für {appPrice}$ installiert.");
                } else {
                    CharactersTablet.ChangeCharacterTabletAppInstallState(charId, appName, false);
                    HUDHandler.SendNotification(player, 2, 5000, "Sie haben die App erfolgreich deinstalliert.");
                }

                RefreshTabletData(player, false);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:BankingAppNewTransaction")]
        public void BankingAppNewTransaction(IPlayer player, int targetAccountNumber, string transactionMessage, int moneyAmount) {
            try {
                if (player == null || targetAccountNumber == 0 || moneyAmount < 1) return;

                var charId = User.GetPlayerOnline(player);
                if (charId == 0) return;

                if (!CharactersBank.HasCharacterBankMainKonto(charId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Du hast noch kein Hauptkonto in deiner Bankfiliale festgelegt.");
                    return;
                }

                var ownAccountNumber = CharactersBank.GetCharacterBankMainKonto(charId);

                if (CharactersBank.GetBankAccountLockStatus(ownAccountNumber)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Dieses Bankkonto ist gesperrt und kann nicht weiter benutzt werden.");
                    return;
                }

                if (CharactersBank.GetBankAccountMoney(ownAccountNumber) < moneyAmount) {
                    HUDHandler.SendNotification(player, 3, 5000, $"Du hast nicht genügend Geld auf deinem Konto ({moneyAmount}$).");
                    return;
                }

                var dateTime = DateTime.Now;
                CharactersBank.SetBankAccountMoney(ownAccountNumber, CharactersBank.GetBankAccountMoney(ownAccountNumber) - moneyAmount);
                CharactersBank.SetBankAccountMoney(targetAccountNumber, CharactersBank.GetBankAccountMoney(targetAccountNumber) + moneyAmount);
                ServerBankPapers.CreateNewBankPaper(ownAccountNumber, dateTime.ToString("dd.MM.yyyy"), dateTime.ToString("HH.mm"),
                    "Ausgehende Überweisung", $"{targetAccountNumber}", $"{transactionMessage}", $"-{moneyAmount}$", "Online Banking");
                ServerBankPapers.CreateNewBankPaper(targetAccountNumber, dateTime.ToString("dd.MM.yyyy"), dateTime.ToString("HH.mm"),
                    "Eingehende Überweisung", $"{ownAccountNumber}", $"{transactionMessage}", $"+{moneyAmount}$", "Online Banking");
                HUDHandler.SendNotification(player, 2, 5000,
                    $"Sie haben erfolgreich eine Überweisung i.H.v. {moneyAmount}$ an die Kontonummer {targetAccountNumber} getätigt.");
                RefreshTabletData(player, false);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:EventsAppNewEntry")]
        public void EventsAppNewEntry(IPlayer player, string title, string callNumber, string eventDate, string eventTime, string location,
            string eventType, string information) {
            try {
                if (player == null || !player.Exists || title == "" || title == "undefined" || eventDate == "" || eventTime == "" ||
                    location == "" || location == "undefined" || information == "") return;

                var charId = User.GetPlayerOnline(player);
                if (charId == 0) return;

                if (!CharactersBank.HasCharacterBankMainKonto(charId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Du hast noch kein Hauptkonto in deiner Bankfiliale festgelegt.");
                    return;
                }

                var ownAccountNumber = CharactersBank.GetCharacterBankMainKonto(charId);

                if (CharactersBank.GetBankAccountLockStatus(ownAccountNumber)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Dieses Bankkonto ist gesperrt und kann nicht weiter benutzt werden.");
                    return;
                }

                if (CharactersBank.GetBankAccountMoney(ownAccountNumber) < 250) {
                    HUDHandler.SendNotification(player, 3, 5000, "Du hast nicht genügend Geld auf deinem Konto (250$).");
                    return;
                }

                CharactersBank.SetBankAccountMoney(ownAccountNumber, CharactersBank.GetBankAccountMoney(ownAccountNumber) - 250);
                var dateTime = DateTime.Now;
                ServerBankPapers.CreateNewBankPaper(ownAccountNumber, dateTime.ToString("dd.MM.yyyy"), dateTime.ToString("HH.mm"),
                    "Ausgehende Überweisung", "Event Dienstleister", $"Event-Eintrag: {eventDate}", "-250$", "Online Banking");
                CharactersTablet.CreateServerTabletEvent(charId, title, callNumber, eventDate, eventTime, location, eventType, information);
                HUDHandler.SendNotification(player, 2, 5000,
                    "Sie haben erfolgreich ein Event für eine Gebühr von 250$ eingetragen. Die Anzeigedauer beträgt 7 Tage.");
                RefreshTabletData(player, false);

                foreach (var client in Alt.GetAllPlayers().ToList()) {
                    if (client == null || !client.Exists) continue;

                    HUDHandler.SendNotification(client, 1, 5000, "Ein neues Event wurde eingetragen, checke die Events-App im Tablet!");
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:LifeinvaderAppNewEntry")]
        public void LifeinvaderAppNewEntry(IPlayer player, string title, string callNumber, string information) {
            try {
                if (player == null || !player.Exists || title == "" || title == "undefined" || information == "") return;

                var charId = User.GetPlayerOnline(player);
                if (charId == 0) return;

                var factionId = 0;
                if (ServerFactions.IsCharacterInFactionDuty(charId)) factionId = ServerFactions.GetCharacterFactionId(charId);

                if (!CharactersBank.HasCharacterBankMainKonto(charId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Du hast noch kein Hauptkonto in deiner Bankfiliale festgelegt.");
                    return;
                }

                var ownAccountNumber = CharactersBank.GetCharacterBankMainKonto(charId);

                if (CharactersBank.GetBankAccountLockStatus(ownAccountNumber)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Dieses Bankkonto ist gesperrt und kann nicht weiter benutzt werden.");
                    return;
                }

                if (CharactersBank.GetBankAccountMoney(ownAccountNumber) < 2000) {
                    HUDHandler.SendNotification(player, 3, 5000, "Du hast nicht genügend Geld auf deinem Konto (2000$).");
                    return;
                }

                CharactersBank.SetBankAccountMoney(ownAccountNumber, CharactersBank.GetBankAccountMoney(ownAccountNumber) - 2000);
                var dateTime = DateTime.Now;
                ServerBankPapers.CreateNewBankPaper(ownAccountNumber, dateTime.ToString("dd.MM.yyyy"), dateTime.ToString("HH.mm"),
                    "Ausgehende Überweisung", "Lifeinvader", $"Werbung: {title}", "-2000$", "Online Banking");
                CharactersTablet.CreateServerTabletAdvertisement(charId, factionId, title, callNumber, information);
                HUDHandler.SendNotification(player, 2, 5000,
                    "Sie haben erfolgreich ein Werberanzeige für eine Gebühr von 2000$ eingetragen. Die Anzeigedauer beträgt 7 Tage.");
                RefreshTabletData(player, false);

                foreach (var client in Alt.GetAllPlayers().ToList()) {
                    if (client == null || !client.Exists) continue;

                    HUDHandler.SendNotification(client, 1, 5000, "Ein neue Werberanzeige wurde eingetragen, checke die Lifeinvader-App im Tablet!");
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:VehicleStoreBuyVehicle")]
        public void VehicleStoreBuyVehicle(IPlayer player, string hash, int shopId, string color) {
            try {
                if (player == null || !player.Exists || hash == "" || hash == "undefined" || shopId <= 0 || color == "" ||
                    color == "undefined") return;

                var fHash = Convert.ToInt64(hash);
                var charId = User.GetPlayerOnline(player);
                if (charId == 0 || fHash == 0) return;

                var Price = ServerVehicleShops.GetVehicleShopPrice(shopId, fHash);
                var rnd = new Random().Next(100000, 999999);
                var fColor = 0;

                if (ServerVehicles.ExistServerVehiclePlate($"NL{rnd}")) {
                    VehicleStoreBuyVehicle(player, hash, shopId, color);
                    return;
                }

                if (!CharactersBank.HasCharacterBankMainKonto(charId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Du hast noch kein Hauptkonto in deiner Bankfiliale festgelegt.");
                    return;
                }

                var bankAccountNumber = CharactersBank.GetCharacterBankMainKonto(charId);

                if (CharactersBank.GetBankAccountLockStatus(bankAccountNumber)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Dieses Bankkonto ist gesperrt und kann nicht weiter benutzt werden.");
                    return;
                }

                if (CharactersBank.GetBankAccountMoney(bankAccountNumber) < Price) {
                    HUDHandler.SendNotification(player, 3, 5000, $"Du hast nicht genügend Geld auf deinem Konto ({Price}$).");
                    return;
                }

                switch (color) {
                    case "schwarz":
                        fColor = 0;
                        break;
                    case "weiß":
                        fColor = 112;
                        break;
                    case "blau":
                        fColor = 64;
                        break;
                    case "rot":
                        fColor = 27;
                        break;
                    case "grün":
                        fColor = 57;
                        break;
                    case "gelb":
                        fColor = 42;
                        break;
                }

                var dateTime = DateTime.Now;
                CharactersBank.SetBankAccountMoney(bankAccountNumber, CharactersBank.GetBankAccountMoney(bankAccountNumber) - Price);
                ServerBankPapers.CreateNewBankPaper(bankAccountNumber, dateTime.ToString("dd.MM.yyyy"), dateTime.ToString("HH.mm"),
                    "Ausgehende Überweisung", "Online Fahrzeugshop", $"Fahrzeugkauf: {ServerVehicles.GetVehicleNameOnHash(fHash)}", $"-{Price}",
                    "Online Banking");
                ServerVehicles.CreateVehicle(fHash, charId, 0, 0, true, 1, new Position(0, 0, 0), new Rotation(0, 0, 0), $"NL{rnd}", fColor,
                    fColor);
                CharactersInventory.AddCharacterItem(charId, $"Fahrzeugschluessel NL{rnd}", 2, "inventory");
                HUDHandler.SendNotification(player, 2, 5000,
                    $"Fahrzeug '{ServerVehicles.GetVehicleNameOnHash(fHash)}' erfolgreich für {Price}$ erworben.<br>Lieferort: La Mesa Fahrzeuggarage.");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:NotesAppNewNote")]
        public void NotesAppNewNote(IPlayer player, string title, string text, string color) {
            try {
                if (player == null || !player.Exists || title == "" || text == "" || color == "") return;

                var charId = User.GetPlayerOnline(player);
                if (charId == 0) return;

                CharactersTablet.CreateServerTabletNote(charId, title, text, color);
                HUDHandler.SendNotification(player, 2, 5000, "Neue Notiz erfolgreich angelegt.");
                RefreshTabletData(player, false);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:NotesAppDeleteNote")]
        public void NotesAppDeleteNote(IPlayer player, int noteId) {
            try {
                if (player == null || !player.Exists || noteId == 0) return;

                var charId = User.GetPlayerOnline(player);
                if (charId == 0) return;

                CharactersTablet.DeleteServerTabletNote(charId, noteId);
                RefreshTabletData(player, false);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:DeleteFactionDispatch")]
        public void DeleteFactionDispatch(IPlayer player, int factionId, int senderId) {
            try {
                if (player == null || !player.Exists || factionId <= 0 || senderId < 0) return;

                var charId = (int) player.GetCharacterMetaId();
                if (charId <= 0) return;
                if (!ServerFactions.ExistDispatch(factionId, senderId)) return;

                ServerFactions.RemoveDispatch(factionId, senderId);
                HUDHandler.SendNotification(player, 2, 2500, "Dispatch erfolgreich entfernt.");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:CompanyAppInviteNewMember")]
        public void CompanyAppInviteNewMember(IPlayer player, string targetCharName, int companyId) {
            try {
                if (targetCharName == "" || targetCharName == "undefined" || companyId <= 0 || !player.Exists || player == null) return;

                var charId = User.GetPlayerOnline(player);
                if (charId == 0) return;

                if (ServerCompanys.GetCharacterServerCompanyId(charId) != companyId) {
                    HUDHandler.SendNotification(player, 4, 5000, "Ein unerwarteter Fehler ist aufgetreten [COMPANY-INVITE-001]");
                    return;
                }

                if (ServerCompanys.GetCharacterServerCompanyRank(charId) < 1) {
                    HUDHandler.SendNotification(player, 4, 5000, "Du hast keine Berechtigung dafür.");
                    return;
                }

                if (!Characters.ExistCharacterName(targetCharName)) {
                    HUDHandler.SendNotification(player, 3, 5000, $"Der eingegebene Name wurde nicht gefunden ({targetCharName}).");
                    return;
                }

                var targetCharId = Characters.GetCharacterIdFromCharName(targetCharName);

                if (targetCharId <= 0) {
                    HUDHandler.SendNotification(player, 4, 5000, "Ein unerwarteter Fehler ist aufgetreten [COMPANY-INVITE-002]");
                    return;
                }

                if (ServerCompanys.IsCharacterInAnyServerCompany(targetCharId)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Die angegebene Person ist bereits in einem Unternehmen.");
                    return;
                }

                var targetPlayer = Alt.GetAllPlayers().ToList().FirstOrDefault(x => x.GetCharacterMetaId() == (ulong) targetCharId);

                if (targetPlayer == null || !targetPlayer.Exists) {
                    HUDHandler.SendNotification(player, 4, 5000,
                        "Der angegebene Spieler ist nicht in deiner Nähe oder ihr seid nicht an dem Verwaltungspunkt des Unternehmens. [FEHLER: COMPANY-INVITE-003]");
                    return;
                }

                if (!player.Position.IsInRange(ServerCompanys.GetServerCompanyPosition(companyId), 5f) ||
                    !targetPlayer.Position.IsInRange(ServerCompanys.GetServerCompanyPosition(companyId), 5f)) {
                    HUDHandler.SendNotification(player, 3, 5000,
                        "Der angegebene Spieler ist nicht in deiner Nähe oder ihr seid nicht an dem Verwaltungspunkt des Unternehmens. [FEHLER: COMPANY-INVITE-004]");
                    return;
                }

                ServerCompanys.CreateServerCompanyMember(companyId, targetCharId, 0);
                var licName = ServerCompanys.GetServerCompanyGivenLicense(companyId);

                if (licName != "None" && !Characters.HasCharacterPermission(targetCharId, licName))
                    Characters.AddCharacterPermission(targetCharId, licName);

                HUDHandler.SendNotification(player, 2, 8000,
                    $"Du hast die Person '{targetCharName}' erfolgreich als Mitarbeiter (Rang 0) eingestellt. Dieser hat nun Zugriff auf alle Funktionen des Unternehmens (bspw. exklusive Shops).");
                HUDHandler.SendNotification(targetPlayer, 1, 5000,
                    $"Du wurdest erfolgreich als Mitarbeiter in das Unternehmen '{ServerCompanys.GetServerCompanyName(companyId)}' eingestellt.");
                RefreshTabletData(player, false);
                LoggingService.NewCompanyLog(companyId, charId, targetCharId, "invite",
                    $"{Characters.GetCharacterName(charId)} ({charId}) hat {Characters.GetCharacterName(targetCharId)} ({targetCharId}) in das Unternehmen eingestellt.");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:FactionManagerAppInviteNewMember")]
        public void FactionManagerAppInviteNewMember(IPlayer player, string targetCharName, int dienstnummer, int factionId) {
            try {
                if (targetCharName == "" || targetCharName == "undefined" || factionId <= 0 || !player.Exists || player == null) return;

                var charId = User.GetPlayerOnline(player);
                if (charId == 0) return;

                if (ServerFactions.GetCharacterFactionId(charId) != factionId) {
                    HUDHandler.SendNotification(player, 4, 5000, "Ein unerwarteter Fehler ist aufgetreten [FACTION-INVITE-001]");
                    return;
                }

                if (ServerFactions.GetCharacterFactionRank(charId) < ServerFactions.GetFactionMaxRankCount(factionId) - 2) {
                    HUDHandler.SendNotification(player, 4, 5000, "Dazu hast du keine Berechtigung.");
                    return;
                }

                if (!Characters.ExistCharacterName(targetCharName)) {
                    HUDHandler.SendNotification(player, 3, 5000, $"Der eingegebene Name wurde nicht gefunden ({targetCharName}).");
                    return;
                }

                var targetCharId = Characters.GetCharacterIdFromCharName(targetCharName);

                if (targetCharId <= 0) {
                    HUDHandler.SendNotification(player, 4, 5000, "Ein unerwarteter Fehler ist aufgetreten [FACTION-INVITE-002]");
                    return;
                }

                if (ServerFactions.IsCharacterInAnyFaction(targetCharId)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Die angegebene Person ist bereits in einer Fraktion.");
                    return;
                }

                if (ServerFactions.ExistFactionServiceNumber(factionId, dienstnummer)) {
                    HUDHandler.SendNotification(player, 3, 5000, "Die eingegebene Dienstnummer ist bereits vergeben.");
                    return;
                }

                var targetPlayer = Alt.GetAllPlayers().ToList().FirstOrDefault(x => x.GetCharacterMetaId() == (ulong) targetCharId);

                if (targetPlayer == null || !targetPlayer.Exists) {
                    HUDHandler.SendNotification(player, 4, 5000,
                        "Der angegebene Spieler ist nicht in deiner Nähe oder ihr seid nicht an dem Verwaltungspunkt der Fraktion. [FEHLER: FACTION-INVITE-003]");
                    return;
                }

                if (!player.Position.IsInRange(targetPlayer.Position, 5f)) {
                    HUDHandler.SendNotification(player, 3, 5000,
                        "Der angegebene Spieler ist nicht in deiner Nähe oder ihr seid nicht an dem Verwaltungspunkt der Fraktion. [FEHLER: FACTION-INVITE-004]");
                    return;
                }

                ServerFactions.CreateServerFactionMember(factionId, targetCharId, 1, dienstnummer);
                HUDHandler.SendNotification(player, 2, 8000,
                    $"Du hast die Person '{targetCharName}' erfolgreich als Mitarbeiter (Rang 1) eingestellt. Dieser hat nun Zugriff auf alle Funktionen der Fraktion.");
                HUDHandler.SendNotification(targetPlayer, 1, 5000,
                    $"Du wurdest erfolgreich als Mitarbeiter (Rang 1) in die Fraktion '{ServerFactions.GetFactionFullName(factionId)}' eingestellt.");
                RefreshTabletData(player, false);
                LoggingService.NewFactionLog(factionId, charId, targetCharId, "invite",
                    $"{Characters.GetCharacterName(charId)} ({charId}) hat {Characters.GetCharacterName(targetCharId)} ({targetCharId}) in die Fraktion eingestellt.");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:CompanyAppLeaveCompany")]
        public void CompanyAppLeaveCompany(IPlayer player) {
            try {
                if (player == null || !player.Exists) return;

                var charId = User.GetPlayerOnline(player);
                if (charId == 0) return;

                if (!ServerCompanys.IsCharacterInAnyServerCompany(charId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Du bist in keinem Unternehmen welches du verlassen kannst.");
                    return;
                }

                if (ServerCompanys.GetCharacterServerCompanyRank(charId) > 1) {
                    HUDHandler.SendNotification(player, 4, 5000,
                        "Du kannst als Geschäftsführer dein Unternehmen nicht einfach verlassen, tue dies beim Gewerbeamt.");
                    return;
                }

                var currentCompany = ServerCompanys.GetCharacterServerCompanyId(charId);

                if (currentCompany <= 0) {
                    HUDHandler.SendNotification(player, 4, 5000, "Ein unerwarteter Fehler ist aufgetreten. [COMPANY-LEAVE-COMPANY-001]");
                    return;
                }

                var companyLicName = ServerCompanys.GetServerCompanyGivenLicense(currentCompany);

                if (companyLicName != "None" && Characters.HasCharacterPermission(charId, companyLicName))
                    Characters.RemoveCharacterPermission(charId, companyLicName);

                CharactersTablet.ChangeCharacterTabletAppInstallState(charId, "company", false);
                ServerCompanys.RemoveServerCompanyMember(currentCompany, charId);
                HUDHandler.SendNotification(player, 2, 5000, "Du hast das Unternehmen erfolgreich verlassen.");
                RefreshTabletData(player, false);
                LoggingService.NewCompanyLog(currentCompany, charId, 0, "leavecompany",
                    $"{Characters.GetCharacterName(charId)} ({charId}) hat das Unternehmen verlassen.");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:CompanyAppRankAction")]
        public void CompanyAppRankAction(IPlayer player, int rankId, int targetCharId) {
            try {
                if (player == null || !player.Exists || targetCharId <= 0) return;

                var charId = User.GetPlayerOnline(player);
                if (charId <= 0) return;

                if (!ServerCompanys.IsCharacterInAnyServerCompany(charId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Du bist in keinem Unternehmen welches du verwalten kannst.");
                    return;
                }

                var companyId = ServerCompanys.GetCharacterServerCompanyId(charId);

                if (companyId <= 0) {
                    HUDHandler.SendNotification(player, 4, 5000, "Ein unerwarteter Fehler ist aufgetreten. [COMPANY-RANK-ACTION-001]");
                    return;
                }

                if (ServerCompanys.GetCharacterServerCompanyRank(charId) < 1) {
                    HUDHandler.SendNotification(player, 4, 5000, "Dafür hast du keine Berechtigung.");
                    return;
                }

                if (!ServerCompanys.IsCharacterInAnyServerCompany(targetCharId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Ein unerwarteter Fehler ist aufgetreten. [COMPANY-RANK-ACTION-002]");
                    return;
                }

                if (ServerCompanys.GetCharacterServerCompanyRank(targetCharId) > 1) {
                    HUDHandler.SendNotification(player, 3, 5000, "Diese Person kannst du nicht verwalten.");
                    return;
                }

                if (ServerCompanys.GetCharacterServerCompanyRank(charId) == 1 && ServerCompanys.GetCharacterServerCompanyRank(targetCharId) >= 1) {
                    HUDHandler.SendNotification(player, 3, 5000, "Dieser Person kannst du diesen Rang nicht setzen.");
                    return;
                }

                if (ServerCompanys.GetCharacterServerCompanyRank(targetCharId) == rankId) {
                    HUDHandler.SendNotification(player, 3, 5000, "Die Person besitzt diesen Rang bereits.");
                    return;
                }

                if (ServerCompanys.GetCharacterServerCompanyRank(charId) == 1 && ServerCompanys.GetCharacterServerCompanyRank(targetCharId) == 0 &&
                    rankId > 0 && rankId < 5) {
                    HUDHandler.SendNotification(player, 3, 5000, "Dieser Person kannst du diesen Rang nicht setzen.");
                    return;
                }

                var targetPlayer = Alt.GetAllPlayers().ToList().FirstOrDefault(x => x.GetCharacterMetaId() == (ulong) targetCharId);

                if (rankId == 1337) {
                    //Entlasse Spieler aus Unternehmen.
                    var companyLicName = ServerCompanys.GetServerCompanyGivenLicense(companyId);

                    if (companyLicName != "None" && Characters.HasCharacterPermission(targetCharId, companyLicName))
                        Characters.RemoveCharacterPermission(targetCharId, companyLicName);

                    CharactersTablet.ChangeCharacterTabletAppInstallState(targetCharId, "company", false);
                    ServerCompanys.RemoveServerCompanyMember(companyId, targetCharId);
                    RefreshTabletData(player, false);
                    HUDHandler.SendNotification(player, 2, 5000,
                        $"Du hast die Person {Characters.GetCharacterName(targetCharId)} aus deinem Unternehmen entlassen.");
                    LoggingService.NewCompanyLog(companyId, charId, targetCharId, "uninvite",
                        $"{Characters.GetCharacterName(charId)} ({charId}) hat die Person {Characters.GetCharacterName(targetCharId)} ({targetCharId}) aus dem Unternehmen entlassen.");

                    if (targetPlayer != null && targetPlayer.Exists) {
                        RefreshTabletData(targetPlayer, false);
                        HUDHandler.SendNotification(targetPlayer, 1, 5000,
                            $"Du wurdest aus dem Unternehmen {ServerCompanys.GetServerCompanyName(companyId)} entlassen.");
                    }

                    return;
                }

                ServerCompanys.ChangeServerCompanyMemberRank(companyId, targetCharId, rankId);
                RefreshTabletData(player, false);
                HUDHandler.SendNotification(player, 2, 5000,
                    $"Du hast der Person {Characters.GetCharacterName(targetCharId)} den Rang {ServerCompanys.GetServerCompanyRankName(rankId)} gesetzt.");
                LoggingService.NewCompanyLog(companyId, charId, targetCharId, "rankchange",
                    $"{Characters.GetCharacterName(charId)} ({charId}) hat den Unternehmensrang von {Characters.GetCharacterName(targetCharId)} ({targetCharId}) auf Rang {rankId} ({ServerCompanys.GetServerCompanyRankName(rankId)}) geändert.");

                if (targetPlayer != null && targetPlayer.Exists) {
                    RefreshTabletData(targetPlayer, false);
                    HUDHandler.SendNotification(targetPlayer, 1, 5000,
                        $"Im Unternehmen '{ServerCompanys.GetServerCompanyName(companyId)}' wurde dir der Rang {ServerCompanys.GetServerCompanyRankName(rankId)} gesetzt.");
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:FactionManagerRankAction")]
        public void FactionManagerRankAction(IPlayer player, string action, int targetCharId) {
            try {
                if (player == null || !player.Exists || targetCharId <= 0) return;

                if (action != "rankup" && action != "rankdown" && action != "remove") {
                    HUDHandler.SendNotification(player, 3, 5000, "Ein unerwarteter Fehler ist aufgetreten. [FACTION-RANKACTION-001]");
                    return;
                }

                var charId = User.GetPlayerOnline(player);
                if (charId <= 0) return;

                if (charId == targetCharId) {
                    HUDHandler.SendNotification(player, 3, 5000, "Du kannst dich nicht selbst verwalten.");
                    return;
                }

                if (!ServerFactions.IsCharacterInAnyFaction(charId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Du bist in keiner Fraktion um dies zu tun.");
                    return;
                }

                if (!ServerFactions.IsCharacterInAnyFaction(targetCharId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Die ausgewählte Person ist in keiner Fraktion dessen Rang du verwalten kannst.");
                    return;
                }

                if (ServerFactions.GetCharacterFactionId(charId) != ServerFactions.GetCharacterFactionId(targetCharId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Die ausgewählte Person ist in keiner Fraktion dessen Rang du verwalten kannst.");
                    return;
                }

                if (ServerFactions.GetCharacterFactionRank(charId) <
                    ServerFactions.GetFactionMaxRankCount(ServerFactions.GetCharacterFactionId(charId)) - 2) {
                    HUDHandler.SendNotification(player, 3, 5000, "Du bist nicht dazu berechtigt.");
                    return;
                }

                var targetPlayer = Alt.GetAllPlayers().ToList().FirstOrDefault(x => x.GetCharacterMetaId() == (ulong) targetCharId);
                var factionId = ServerFactions.GetCharacterFactionId(charId);
                var currentTargetRank = ServerFactions.GetCharacterFactionRank(targetCharId);
                var currentActorRank = ServerFactions.GetCharacterFactionRank(charId);
                if (factionId <= 0) return;

                if (action == "remove") {
                    if (currentActorRank <= currentTargetRank) {
                        HUDHandler.SendNotification(player, 3, 5000, "Dazu hast du keine Berechtigung.");
                        return;
                    }

                    ServerFactions.RemoveServerFactionMember(factionId, targetCharId);
                    HUDHandler.SendNotification(player, 2, 5000,
                        $"Du hast die Person {Characters.GetCharacterName(targetCharId)} erfolgreich aus der Fraktion {ServerFactions.GetFactionFullName(factionId)} entlassen.");
                    RefreshTabletData(player, false);
                    if (targetPlayer == null || !targetPlayer.Exists) return;

                    HUDHandler.SendNotification(targetPlayer, 1, 5000,
                        $"Du wurdest aus der Fraktion {ServerFactions.GetFactionFullName(factionId)} entlassen.");
                    LoggingService.NewFactionLog(factionId, charId, targetCharId, "uninvite",
                        $"{Characters.GetCharacterName(charId)} ({charId}) hat {Characters.GetCharacterName(targetCharId)} ({targetCharId}) aus der Fraktion entlassen.");
                } else if (action == "rankup") {
                    if (currentTargetRank + 1 >= ServerFactions.GetFactionMaxRankCount(factionId)) {
                        HUDHandler.SendNotification(player, 3, 5000, "Auf den Rang der Fraktionsleiter kann nur das Bürgeramt befördern.");
                        return;
                    }

                    if (currentTargetRank + 1 >= currentActorRank) {
                        HUDHandler.SendNotification(player, 3, 5000, "Diese Person kannst du nicht weiter befördern");
                        return;
                    }

                    if (currentTargetRank == ServerFactions.GetFactionMaxRankCount(factionId)) {
                        HUDHandler.SendNotification(player, 3, 5000, "Diesen Rang gibt es nicht.");
                        return;
                    }

                    if (currentActorRank <= currentTargetRank) {
                        HUDHandler.SendNotification(player, 3, 5000, "Diese Person kannst du nicht verwalten.");
                        return;
                    }

                    if (currentActorRank == ServerFactions.GetFactionMaxRankCount(factionId) - 1 &&
                        currentTargetRank >= ServerFactions.GetFactionMaxRankCount(factionId) - 1) {
                        HUDHandler.SendNotification(player, 3, 5000, "Diese Person kannst du nicht verwalten.");
                        return;
                    }

                    if (currentActorRank == ServerFactions.GetFactionMaxRankCount(factionId) - 2 &&
                        currentTargetRank > ServerFactions.GetFactionMaxRankCount(factionId) - 2) {
                        HUDHandler.SendNotification(player, 3, 5000, "Diese Person kannst du nicht verwalten.");
                        return;
                    }

                    ServerFactions.SetCharacterFactionRank(targetCharId, currentTargetRank + 1);
                    HUDHandler.SendNotification(player, 2, 5000,
                        $"Sie haben den Rang von der Person {Characters.GetCharacterName(targetCharId)} von {currentTargetRank} auf {currentTargetRank + 1} geändert.");
                    RefreshTabletData(player, false);
                    if (targetPlayer == null || !targetPlayer.Exists) return;

                    HUDHandler.SendNotification(targetPlayer, 1, 5000,
                        $"Ihr Rang in der Fraktion {ServerFactions.GetFactionFullName(factionId)} wurde von {currentTargetRank} auf {currentTargetRank + 1} geändert.");
                    LoggingService.NewFactionLog(factionId, charId, targetCharId, "rankchange",
                        $"{Characters.GetCharacterName(charId)} ({charId}) hat den Rang von {Characters.GetCharacterName(targetCharId)} von Rang {currentTargetRank} auf Rang {currentTargetRank + 1} geändert.");
                } else if (action == "rankdown") {
                    if (currentTargetRank - 1 <= 0) {
                        HUDHandler.SendNotification(player, 4, 5000, "Weiter runter geht es nicht.");
                        return;
                    }

                    if (currentActorRank <= currentTargetRank) {
                        HUDHandler.SendNotification(player, 3, 5000, "Diese Person kannst du nicht verwalten.");
                        return;
                    }

                    if (currentActorRank == ServerFactions.GetFactionMaxRankCount(factionId) - 1 &&
                        currentTargetRank >= ServerFactions.GetFactionMaxRankCount(factionId) - 1) {
                        HUDHandler.SendNotification(player, 3, 5000, "Diese Person kannst du nicht verwalten.");
                        return;
                    }

                    if (currentActorRank == ServerFactions.GetFactionMaxRankCount(factionId) - 2 &&
                        currentTargetRank > ServerFactions.GetFactionMaxRankCount(factionId) - 2) {
                        HUDHandler.SendNotification(player, 3, 5000, "Diese Person kannst du nicht verwalten.");
                        return;
                    }

                    ServerFactions.SetCharacterFactionRank(targetCharId, currentTargetRank - 1);
                    HUDHandler.SendNotification(player, 2, 5000,
                        $"Sie haben den Rang von der Person {Characters.GetCharacterName(targetCharId)} von {currentTargetRank} auf {currentTargetRank - 1} geändert.");
                    RefreshTabletData(player, false);
                    if (targetPlayer == null || !targetPlayer.Exists) return;

                    HUDHandler.SendNotification(targetPlayer, 1, 5000,
                        $"Ihr Rang in der Fraktion {ServerFactions.GetFactionFullName(factionId)} wurde von {currentTargetRank} auf {currentTargetRank - 1} geändert.");
                    LoggingService.NewFactionLog(factionId, charId, targetCharId, "rankchange",
                        $"{Characters.GetCharacterName(charId)} ({charId}) hat den Rang von {Characters.GetCharacterName(targetCharId)} von Rang {currentTargetRank} auf Rang {currentTargetRank - 1} geändert.");
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:FactionManagerSetRankPaycheck")]
        public void FactionManagerSetRankPaycheck(IPlayer player, int rankId, int paycheck) {
            try {
                if (player == null || !player.Exists || rankId <= 0 || paycheck <= 0) return;

                if (paycheck > 20000) {
                    HUDHandler.SendNotification(player, 3, 5000, "Fehler: Das Gehalt kann nur maximal auf 20.000$ gesetzt werden.");
                    return;
                }

                var charId = User.GetPlayerOnline(player);
                if (charId <= 0) return;

                if (!ServerFactions.IsCharacterInAnyFaction(charId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Du bist in keiner Fraktion dessen Gehalt du festlegen kannst.");
                    return;
                }

                var factionId = ServerFactions.GetCharacterFactionId(charId);
                if (factionId <= 0) return;

                var currentPaycheck = ServerFactions.GetFactionRankPaycheck(factionId, rankId);

                if (currentPaycheck == paycheck)
                    return;

                var charRank = ServerFactions.GetCharacterFactionRank(charId);
                if (charRank <= 0) return;

                if (charRank < ServerFactions.GetFactionMaxRankCount(factionId) - 2) {
                    HUDHandler.SendNotification(player, 4, 5000, "Dazu hast du keine Berechtigungen.");
                    return;
                }

                if (!ServerFactions.ExistServerFactionRankOnId(factionId, rankId)) {
                    HUDHandler.SendNotification(player, 4, 5000, "Ein unerwarteter Fehler ist aufgetreten. [FACTION-RANKPAYCHECK-001]");
                    return;
                }

                ServerFactions.SetFactionRankPaycheck(factionId, rankId, paycheck);
                HUDHandler.SendNotification(player, 2, 5000,
                    $"Du hast das Gehalt des Ranges '{ServerFactions.GetFactionRankName(factionId, rankId)}' der Fraktion '{ServerFactions.GetFactionFullName(factionId)}' von {currentPaycheck}$ auf {paycheck}$ gesetzt.");
                RefreshTabletData(player, false);
                LoggingService.NewFactionLog(factionId, charId, 0, "rankpaycheck",
                    $"{Characters.GetCharacterName(charId)} ({charId}) hat das Gehalt des Ranges '{ServerFactions.GetFactionRankName(factionId, rankId)}' von {currentPaycheck}$ auf {paycheck}$ gesetzt.");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Tablet:sendDispatchToFaction")]
        public void sendDispatchToFaction(IPlayer player, int factionId, string msg) {
            try {
                if (player == null || !player.Exists || factionId <= 0 || msg.Length <= 0) return;

                var charId = (int) player.GetCharacterMetaId();
                if (charId <= 0) return;
                if (Characters.IsCharacterUnconscious(charId)) return;
                if (!CharactersInventory.ExistCharacterItem(charId, "Tablet", "inventory") &&
                    !CharactersInventory.ExistCharacterItem(charId, "Tablet", "backpack")) return;

                if (player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs()) {
                    HUDHandler.SendNotification(player, 4, 3500, "Fehler: Du bist gefesselt.");
                    return;
                }

                if (ServerFactions.ExistDispatch(factionId, charId)) {
                    HUDHandler.SendNotification(player, 3, 2500, "Du hast bei dieser Fraktion bereits einen Dispatch offen.");
                    return;
                }

                ServerFactions.AddNewFactionDispatch(charId, factionId, msg, player.Position);
                HUDHandler.SendNotification(player, 2, 2500, "Notruf erfolgreich gesendet.");

                foreach (var p in Alt.GetAllPlayers().Where(x => x != null && x.Exists && x.GetCharacterMetaId() > 0).ToList()) {
                    if (p == null || !p.Exists) continue;
                    if (!ServerFactions.IsCharacterInAnyFaction((int) p.GetCharacterMetaId()) ||
                        !ServerFactions.IsCharacterInFactionDuty((int) p.GetCharacterMetaId()) ||
                        ServerFactions.GetCharacterFactionId((int) p.GetCharacterMetaId()) != factionId) continue;

                    p.EmitLocked("Client:Tablet:sendDispatchSound", "../utils/sounds/dispatch.mp3");
                    p.Emit("Client:Tablet:sendDispatchSound", "../utils/sounds/dispatch.mp3");
                    HUDHandler.SendNotification(p, 1, 9500, "Ein neuer Notruf ist eingegangen.");
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }
    }
}