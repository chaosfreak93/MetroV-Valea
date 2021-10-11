using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.Json;
using AltV.Net;
using AltV.Net.Async;
using Altv_Roleplay.Factories;
using Altv_Roleplay.Model;
using Altv_Roleplay.Utils;

namespace Altv_Roleplay.Handler
{
    internal class SmartphoneHandler : IScript
    {
        [AsyncClientEvent("Server:Smartphone:requestPhoneLicenses")]
        public void requestPhoneLicenses(ClassicPlayer player) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0) return;

                var licenses = CharactersLicenses.GetCharacterLicenses(player.CharacterId);
                player.EmitLocked("Client:Smartphone:addLicenseJSON", licenses);
                player.EmitLocked("Client:Smartphone:setAllLicenses");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        #region Anrufsystem

        [AsyncClientEvent("Server:Smartphone:tryCall")]
        public void tryCall(ClassicPlayer player, int targetPhoneNumber, bool isAnonymCall) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0 || targetPhoneNumber <= 0 ||
                    !CharactersInventory.ExistCharacterItem(player.CharacterId, "Smartphone", "inventory") ||
                    CharactersInventory.GetCharacterItemAmount(player.CharacterId, "Smartphone", "inventory") <= 0 ||
                    !Characters.IsCharacterPhoneEquipped(player.CharacterId) || Characters.IsCharacterPhoneFlyModeEnabled(player.CharacterId) ||
                    Characters.GetCharacterPhonenumber(player.CharacterId) <= 0 || Characters.IsCharacterUnconscious(player.CharacterId) ||
                    player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() || player.HasPlayerFootcuffs() ||
                    Characters.GetCharacterCurrentlyRecieveCaller(player.CharacterId) != 0 ||
                    Characters.GetCharacterPhoneTargetNumber(player.CharacterId) != 0) return;

                if (ServerFactions.IsNumberAFactionNumber(targetPhoneNumber)) {
                    var factionId = ServerFactions.GetFactionIdByServiceNumber(targetPhoneNumber);

                    if (factionId <= 0) {
                        player.EmitLocked("Client:Smartphone:ShowPhoneCallError", 1);
                        return;
                    }

                    var currentOwnerId = ServerFactions.GetCurrentServicePhoneOwner(factionId);

                    if (currentOwnerId <= 0) {
                        player.EmitLocked("Client:Smartphone:ShowPhoneCallError", 2);
                        return;
                    }

                    var targetServicePlayer = (ClassicPlayer) Alt.GetAllPlayers().ToList()
                        .FirstOrDefault(x => x != null && x.Exists && ((ClassicPlayer) x).CharacterId == currentOwnerId);

                    if (targetServicePlayer == null || !targetServicePlayer.Exists || !Characters.IsCharacterPhoneEquipped(currentOwnerId) ||
                        Characters.IsCharacterPhoneFlyModeEnabled(currentOwnerId)) {
                        ServerFactions.sendMsg(factionId,
                            "Da die Leitstelle nicht erreichbar war, wurde die Nummer zurückgesetzt. Jemand anderes sollte die Leitstelle nun übernehmen.");
                        ServerFactions.UpdateCurrentServicePhoneOwner(factionId, 0);
                        player.EmitLocked("Client:Smartphone:ShowPhoneCallError", 2);
                        return;
                    }

                    targetPhoneNumber = Characters.GetCharacterPhonenumber(currentOwnerId);

                    if (!Characters.ExistPhoneNumber(targetPhoneNumber)) {
                        ServerFactions.sendMsg(factionId,
                            "Da die Leitstelle nicht erreichbar war, wurde die Nummer zurückgesetzt. Jemand anderes sollte die Leitstelle nun übernehmen.");
                        ServerFactions.UpdateCurrentServicePhoneOwner(factionId, 0);
                        player.EmitLocked("Client:Smartphone:ShowPhoneCallError", 2);
                        return;
                    }

                    if (Characters.GetCharacterPhoneTargetNumber(currentOwnerId) != 0 ||
                        Characters.GetCharacterCurrentlyRecieveCaller(currentOwnerId) != 0) {
                        player.EmitLocked("Client:Smartphone:ShowPhoneCallError", 3);
                        return;
                    }

                    Characters.SetCharacterCurrentlyRecieveCallState(currentOwnerId, player.CharacterId);
                    Characters.SetCharacterCurrentlyRecieveCallState(player.CharacterId, currentOwnerId);
                    targetServicePlayer.EmitLocked("Client:Smartphone:showPhoneReceiveCall",
                        Characters.GetCharacterPhonenumber(player.CharacterId), false);
                    return;
                }

                if (!Characters.ExistPhoneNumber(targetPhoneNumber)) {
                    player.EmitLocked("Client:Smartphone:ShowPhoneCallError", 1);
                    //HUDHandler.SendNotification(player, 4, 2500, "Kein Anschluss unter dieser Nummer..");
                    return;
                }

                var targetPlayer = (ClassicPlayer) Alt.GetAllPlayers().ToList().FirstOrDefault(x =>
                    x != null && x.Exists && ((ClassicPlayer) x).CharacterId > 0 &&
                    Characters.GetCharacterPhonenumber(((ClassicPlayer) x).CharacterId) == targetPhoneNumber);

                if (targetPlayer == null || !targetPlayer.Exists || !Characters.IsCharacterPhoneEquipped(targetPlayer.CharacterId) ||
                    Characters.IsCharacterPhoneFlyModeEnabled(targetPlayer.CharacterId)) {
                    player.EmitLocked("Client:Smartphone:ShowPhoneCallError", 2);
                    //HUDHandler.SendNotification(player, 4, 2500, "Der angerufene Teilnehmer ist nicht erreichbar..");
                    return;
                }

                if (Characters.GetCharacterPhoneTargetNumber(targetPlayer.CharacterId) != 0 ||
                    Characters.GetCharacterCurrentlyRecieveCaller(targetPlayer.CharacterId) != 0) {
                    player.EmitLocked("Client:Smartphone:ShowPhoneCallError", 3);
                    //HUDHandler.SendNotification(player, 4, 2500, "Der angegebene Anschluss ist besetzt..");
                    return;
                }

                //Characters.SetCharacterTargetPhoneNumber(player.CharacterId, targetPhoneNumber);
                Characters.SetCharacterCurrentlyRecieveCallState(targetPlayer.CharacterId, player.CharacterId);
                Characters.SetCharacterCurrentlyRecieveCallState(player.CharacterId, targetPlayer.CharacterId);
                targetPlayer.EmitLocked("Client:Smartphone:showPhoneReceiveCall", Characters.GetCharacterPhonenumber(player.CharacterId), isAnonymCall);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Smartphone:acceptCall")]
        public void acceptCall(ClassicPlayer player) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0) return;
                if (Characters.GetCharacterCurrentlyRecieveCaller(player.CharacterId) <= 0) return;

                var callerId = Characters.GetCharacterCurrentlyRecieveCaller(player.CharacterId);
                var caller = (ClassicPlayer) Alt.GetAllPlayers().ToList()
                    .FirstOrDefault(x => x != null && x.Exists && ((ClassicPlayer) x).CharacterId == callerId);
                if (caller == null || !caller.Exists) return;

                Characters.SetCharacterCurrentlyRecieveCallState(caller.CharacterId, 0);
                Characters.SetCharacterCurrentlyRecieveCallState(player.CharacterId, 0);
                Characters.SetCharacterTargetPhoneNumber(caller.CharacterId, Characters.GetCharacterPhonenumber(player.CharacterId));
                Characters.SetCharacterTargetPhoneNumber(player.CharacterId, Characters.GetCharacterPhonenumber(caller.CharacterId));
                caller.EmitLocked("Client:Smartphone:showPhoneCallActive", Characters.GetCharacterPhonenumber(player.CharacterId));
                player.EmitLocked("Client:Smartphone:showPhoneCallActive", Characters.GetCharacterPhonenumber(caller.CharacterId));

                AltAsync.Emit("SaltyChat:StartCall", caller, player);
            }
            catch (Exception e) {
                AltAsync.Log($"{e}");
            }
        }

        [ScriptEvent(ScriptEventType.PlayerDisconnect)]
        public void PlayerDisconnect(ClassicPlayer player, string reason) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0) return;

                denyCall(player);
                Characters.SetCharacterCurrentFunkFrequence(player.CharacterId, null);
                var factionId = ServerFactions.GetCharacterFactionId(player.CharacterId);
                ServerFactions.UpdateCurrentServicePhoneOwner(factionId, 0);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Smartphone:denyCall")]
        public void denyCall(ClassicPlayer player) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0) return;

                if (Characters.GetCharacterCurrentlyRecieveCaller(player.CharacterId) != 0) {
                    var callerId = Characters.GetCharacterCurrentlyRecieveCaller(player.CharacterId); //ID vom Spieler der Anruft
                    var targetPlayer = (ClassicPlayer) Alt.GetAllPlayers().ToList()
                        .FirstOrDefault(x => x != null && x.Exists && ((ClassicPlayer) x).CharacterId == callerId);

                    if (targetPlayer != null && targetPlayer.Exists && targetPlayer.CharacterId > 0) {
                        Characters.SetCharacterTargetPhoneNumber(targetPlayer.CharacterId, 0);
                        Characters.SetCharacterCurrentlyRecieveCallState(targetPlayer.CharacterId, 0);
                        targetPlayer.EmitLocked("Client:Smartphone:ShowPhoneCallError", 4);
                        //HUDHandler.SendNotification(targetPlayer, 3, 2000, "AnrufTry beendet");
                    }

                    Characters.SetCharacterCurrentlyRecieveCallState(player.CharacterId, 0);
                    Characters.SetCharacterTargetPhoneNumber(player.CharacterId, 0);
                    player.EmitLocked("Client:Smartphone:ShowPhoneCallError", 4);
                    //HUDHandler.SendNotification(player, 3, 2000, "AnrufTry beendet");
                    return;
                }

                if (Characters.GetCharacterPhoneTargetNumber(player.CharacterId) != 0) {
                    var phoneNumber = Characters.GetCharacterPhoneTargetNumber(player.CharacterId);
                    if (!Characters.ExistPhoneNumber(phoneNumber)) return;

                    var targetPlayer = (ClassicPlayer) Alt.GetAllPlayers().ToList().FirstOrDefault(x =>
                        x != null && x.Exists && ((ClassicPlayer) x).CharacterId > 0 &&
                        Characters.GetCharacterPhonenumber(((ClassicPlayer) x).CharacterId) == phoneNumber &&
                        Characters.GetCharacterPhoneTargetNumber(((ClassicPlayer) x).CharacterId) ==
                        Characters.GetCharacterPhonenumber(player.CharacterId));

                    if (targetPlayer != null && targetPlayer.Exists && targetPlayer.CharacterId > 0) {
                        Characters.SetCharacterTargetPhoneNumber(targetPlayer.CharacterId, 0);
                        Characters.SetCharacterCurrentlyRecieveCallState(targetPlayer.CharacterId, 0);
                        AltAsync.Emit("SaltyChat:EndCall", targetPlayer, player);
                        targetPlayer.EmitLocked("Client:Smartphone:ShowPhoneCallError", 4);
                        HUDHandler.SendNotification(targetPlayer, 3, 2000, "Anruf beendet");
                    }

                    Characters.SetCharacterTargetPhoneNumber(player.CharacterId, 0);
                    Characters.SetCharacterCurrentlyRecieveCallState(player.CharacterId, 0);
                    AltAsync.Emit("SaltyChat:EndCall", player, targetPlayer);
                    player.EmitLocked("Client:Smartphone:ShowPhoneCallError", 4);
                    HUDHandler.SendNotification(player, 3, 2000, "Anruf beendet");
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        #endregion

        #region SMS System

        [AsyncClientEvent("Server:Smartphone:requestChats")]
        public void requestSmartphoneChats(ClassicPlayer player) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0 || Characters.IsCharacterPhoneFlyModeEnabled(player.CharacterId) ||
                    Characters.IsCharacterUnconscious(player.CharacterId) || player.HasPlayerHandcuffs() || player.HasPlayerRopeCuffs() ||
                    player.HasPlayerFootcuffs()) return;

                var playerNumber = Characters.GetCharacterPhonenumber(player.CharacterId);
                if (!Characters.ExistPhoneNumber(playerNumber)) return;

                CharactersPhone.RequestChatJSON(player, playerNumber);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Smartphone:requestChatMessages")]
        public static void requestChatMessages(ClassicPlayer player, int chatId) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0 || chatId <= 0) return;

                var messages = CharactersPhone.CharactersPhoneChatMessages_.ToList().Where(x => x.chatId == chatId).Select(x => new {
                    x.id,
                    x.chatId,
                    from = x.fromNumber,
                    to = x.toNumber,
                    x.unix,
                    text = x.message
                }).OrderBy(x => x.unix).TakeLast(50).ToList();

                var itemCount = messages.Count;
                var iterations = Math.Floor((decimal) (itemCount / 5));
                var rest = itemCount % 5;

                for (var i = 0; i < iterations; i++) {
                    var skip = i * 5;
                    player.EmitLocked("Client:Smartphone:addMessageJSON", JsonSerializer.Serialize(messages.Skip(skip).Take(5).ToList()));
                }

                if (rest != 0)
                    player.EmitLocked("Client:Smartphone:addMessageJSON",
                        JsonSerializer.Serialize(messages.Skip((int) iterations * 5).ToList()));
                player.EmitLocked("Client:Smartphone:setAllMessages");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Smartphone:createNewChat")]
        public void createNewChat(ClassicPlayer player, int targetPhoneNumber) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0 || targetPhoneNumber <= 0) return;

                var phoneNumber = Characters.GetCharacterPhonenumber(player.CharacterId);
                if (!Characters.ExistPhoneNumber(phoneNumber) || !Characters.ExistPhoneNumber(targetPhoneNumber) ||
                    CharactersPhone.ExistChatByNumbers(phoneNumber, targetPhoneNumber) || phoneNumber == targetPhoneNumber) return;

                CharactersPhone.CreatePhoneChat(phoneNumber, targetPhoneNumber);
                CharactersPhone.RequestChatJSON(player, phoneNumber);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Smartphone:sendChatMessage")]
        public void sendChatMessage(ClassicPlayer player, int chatId, int phoneNumber, int targetPhoneNumber, string message) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0 || chatId <= 0 || phoneNumber <= 0 || targetPhoneNumber <= 0 ||
                    phoneNumber != Characters.GetCharacterPhonenumber(player.CharacterId) || !Characters.ExistPhoneNumber(targetPhoneNumber) ||
                    !CharactersPhone.ExistChatByNumbers(phoneNumber, targetPhoneNumber)) return;

                long unix = DateTimeOffset.Now.ToUnixTimeSeconds();
                CharactersPhone.CreatePhoneChatMessage(chatId, phoneNumber, targetPhoneNumber, int.Parse(unix.ToString()), message);
                requestChatMessages(player, chatId);

                var targetPlayer = (ClassicPlayer) Alt.GetAllPlayers().ToList().FirstOrDefault(x =>
                    x != null && x.Exists && ((ClassicPlayer) x).CharacterId > 0 &&
                    Characters.GetCharacterPhonenumber(((ClassicPlayer) x).CharacterId) == targetPhoneNumber);
                if (targetPlayer == null || !targetPlayer.Exists) return;

                targetPlayer.EmitLocked("Client:Smartphone:recieveNewMessage", chatId, phoneNumber, message);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Smartphone:deleteChat")]
        public void deleteChat(ClassicPlayer player, int chatId) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0 || chatId <= 0 || !CharactersPhone.ExistChatById(chatId)) return;

                CharactersPhone.DeletePhoneChat(chatId);
                requestSmartphoneChats(player);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        #endregion

        #region Kontaktesystem

        [AsyncClientEvent("Server:Smartphone:requestPhoneContacts")]
        public void requestPhoneContacts(ClassicPlayer player) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0) return;

                var phoneNumber = Characters.GetCharacterPhonenumber(player.CharacterId);
                var contacts = CharactersPhone.CharactersPhoneContacts_.ToList().Where(x => x.phoneNumber == phoneNumber).Select(x => new {
                    x.contactId,
                    x.contactName,
                    x.contactNumber
                }).OrderBy(x => x.contactName).ToList();
                var itemCount = contacts.Count;
                var iterations = Math.Floor((decimal) (itemCount / 10));
                var rest = itemCount % 10;

                for (var i = 0; i < iterations; i++) {
                    var skip = i * 10;
                    player.EmitLocked("Client:Smartphone:addContactJSON", JsonSerializer.Serialize(contacts.Skip(skip).Take(10).ToList()));
                }

                if (rest != 0)
                    player.EmitLocked("Client:Smartphone:addContactJSON",
                        JsonSerializer.Serialize(contacts.Skip((int) iterations * 10).ToList()));
                player.EmitLocked("Client:Smartphone:setAllContacts");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Smartphone:editContact")]
        public void editContact(ClassicPlayer player, int contactId, string name, int contactNumber) {
            if (player == null || !player.Exists || player.CharacterId <= 0 || contactId <= 0 || name == "" || contactNumber <= 0) return;

            var phoneNumber = Characters.GetCharacterPhonenumber(player.CharacterId);
            if (phoneNumber <= 0) return;

            if (!CharactersPhone.ExistContactById(contactId, phoneNumber)) {
                player.EmitLocked("Client:Smartphone:showNotification", "Kontakt konnte nicht bearbeitet werden.", "error", null, "error");
                return;
            }

            CharactersPhone.EditContact(contactId, contactNumber, name);
            requestPhoneContacts(player);
        }

        [AsyncClientEvent("Server:Smartphone:addNewContact")]
        public void addNewContact(ClassicPlayer player, string name, int contactNumber) {
            try {
                if (player == null || !player.Exists || contactNumber <= 0 || name == "" || player.CharacterId <= 0) return;

                var phoneNumber = Characters.GetCharacterPhonenumber(player.CharacterId);
                if (phoneNumber <= 0) return;

                if (CharactersPhone.ExistContactByName(phoneNumber, name) || CharactersPhone.ExistContactByNumber(phoneNumber, contactNumber)) {
                    player.EmitLocked("Client:Smartphone:showNotification", "Kontakt konnte nicht gespeichert werden.", "error", null, "error");
                    return;
                }

                CharactersPhone.CreatePhoneContact(phoneNumber, name, contactNumber);
                requestPhoneContacts(player);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Smartphone:deleteContact")]
        public void deleteContact(ClassicPlayer player, int contactId) {
            try {
                if (player == null || !player.Exists || contactId <= 0 || player.CharacterId <= 0) return;

                var phoneNumber = Characters.GetCharacterPhonenumber(player.CharacterId);
                if (phoneNumber <= 0 || !CharactersPhone.ExistContactById(contactId, phoneNumber)) return;

                CharactersPhone.DeletePhoneContact(contactId, phoneNumber);
                requestPhoneContacts(player);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        #endregion

        #region LSPD Intranet

        public static void RequestLSPDIntranet(ClassicPlayer player) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0) return;

                if (!ServerFactions.IsCharacterInAnyFaction(player.CharacterId) ||
                    ServerFactions.GetCharacterFactionId(player.CharacterId) != 1 ||
                    !ServerFactions.IsCharacterInFactionDuty(player.CharacterId)) {
                    player.EmitLocked("Client:Smartphone:ShowLSPDIntranetApp", false, "[]");
                    return;
                }

                var serverWanteds = JsonSerializer.Serialize(CharactersWanteds.ServerWanteds_.Select(x => new {
                    x.wantedId,
                    x.wantedName,
                    x.paragraph,
                    x.category,
                    x.jailtime,
                    x.ticketfine
                }).OrderBy(x => x.paragraph).ToList());
                player.EmitLocked("Client:Smartphone:ShowLSPDIntranetApp", true, serverWanteds);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Smartphone:SearchLSPDIntranetPeople")]
        public void SearchLSPDIntranetPeople(ClassicPlayer player, string name) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0 || string.IsNullOrWhiteSpace(name) ||
                    !ServerFactions.IsCharacterInAnyFaction(player.CharacterId) || !ServerFactions.IsCharacterInFactionDuty(player.CharacterId) ||
                    ServerFactions.GetCharacterFactionId(player.CharacterId) != 1) return;

                var containedPlayers = Characters.PlayerCharacters.ToList()
                    .Where(x => x.charname.ToLower().Contains(name.ToLower()) && User.IsCharacterOnline(x.charId)).Select(x => new {
                        x.charId,
                        x.charname
                    }).OrderBy(x => x.charname).Take(15).ToList();

                player.EmitLocked("Client:Smartphone:SetLSPDIntranetSearchedPeople", JsonSerializer.Serialize(containedPlayers));
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Smartphone:GiveLSPDIntranetWanteds")]
        public void GiveLSPDIntranetWanteds(ClassicPlayer player, int selectedCharId, string wanteds) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0 || selectedCharId <= 0 || string.IsNullOrWhiteSpace(wanteds) ||
                    !ServerFactions.IsCharacterInAnyFaction(player.CharacterId) || !ServerFactions.IsCharacterInFactionDuty(player.CharacterId) ||
                    ServerFactions.GetCharacterFactionId(player.CharacterId) != 1) return;

                var decompiledWanteds = JsonSerializer.Deserialize<List<int>>(wanteds);
                if (decompiledWanteds == null) return;

                var targetPlayer = (ClassicPlayer) Alt.GetAllPlayers().ToList()
                    .FirstOrDefault(x => x != null && x.Exists && ((ClassicPlayer) x).CharacterId == selectedCharId);

                if (targetPlayer == null || !targetPlayer.Exists) {
                    HUDHandler.SendNotification(player, 3, 2500, $"Der Spieler ist nicht online ({selectedCharId})");
                    return;
                }

                var givenString =
                    $"{DateTime.Now.ToString("d", CultureInfo.CreateSpecificCulture("de-DE"))} {DateTime.Now.ToString("t", CultureInfo.CreateSpecificCulture("de-DE"))} von {Characters.GetCharacterName(player.CharacterId)}.";

                CharactersWanteds.CreateCharacterWantedEntry(selectedCharId, givenString, decompiledWanteds);
                requestLSPDIntranetPersonWanteds(player, selectedCharId);

                foreach (ClassicPlayer policeMember in Alt.GetAllPlayers().ToList().Where(x =>
                    x != null && x.Exists && ((ClassicPlayer) x).CharacterId > 0 &&
                    ServerFactions.IsCharacterInAnyFaction(((ClassicPlayer) x).CharacterId) &&
                    (ServerFactions.GetCharacterFactionId(((ClassicPlayer) x).CharacterId) == 1)))
                    HUDHandler.SendNotification(policeMember, 1, 3000,
                        $"{Characters.GetCharacterName(player.CharacterId)} hat die Akte von {Characters.GetCharacterName(selectedCharId)} bearbeitet.");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Smartphone:requestLSPDIntranetPersonWanteds")]
        public static void requestLSPDIntranetPersonWanteds(ClassicPlayer player, int selectedCharId) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0 || selectedCharId <= 0 ||
                    !ServerFactions.IsCharacterInAnyFaction(player.CharacterId) || !ServerFactions.IsCharacterInFactionDuty(player.CharacterId) ||
                    ServerFactions.GetCharacterFactionId(player.CharacterId) != 1) return;

                var wantedList = JsonSerializer.Serialize(CharactersWanteds.CharactersWanteds_.Where(x => x.charId == selectedCharId).Select(
                    x => new {
                        x.id,
                        x.wantedId,
                        x.givenString
                    }).ToList());

                player.EmitLocked("Client:Smartphone:setLSPDIntranetPersonWanteds", wantedList);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Smartphone:requestPoliceAppMostWanteds")]
        public void requestPoliceAppMostWanteds(ClassicPlayer player) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0 || !ServerFactions.IsCharacterInAnyFaction(player.CharacterId) ||
                    !ServerFactions.IsCharacterInFactionDuty(player.CharacterId) ||
                    ServerFactions.GetCharacterFactionId(player.CharacterId) != 1) return;

                if (ServerFactions.GetCharacterFactionId(player.CharacterId) == 1 &&
                    ServerFactions.GetCharacterFactionRank(player.CharacterId) < 6) {
                    HUDHandler.SendNotification(player, 3, 2500, "Keine Berechtigung: ab Rang 6.");
                    return;
                }

                var mostWantedList = JsonSerializer.Serialize(Characters.PlayerCharacters.ToList()
                    .Where(x => User.IsCharacterOnline(x.charId) && CharactersWanteds.HasCharacterWanteds(x.charId) &&
                                Characters.IsCharacterPhoneEquipped(x.charId)).Select(x => new {
                        description = $"{x.charname} - {CharactersWanteds.GetCharacterWantedFinalJailTime(x.charId)} Hafteinheiten",
                        posX = $"{Characters.GetCharacterLastPosition(x.charId).X}",
                        posY = $"{Characters.GetCharacterLastPosition(x.charId).Y}"
                    }).OrderBy(x => x.description).ToList());
                player.EmitLocked("Client:Smartphone:setPoliceAppMostWanteds", mostWantedList);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Smartphone:DeleteLSPDIntranetWanted")]
        public void DeleteLSPDIntranetWanted(ClassicPlayer player, int dbId, int selectedCharId) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0 || dbId <= 0 || !CharactersWanteds.ExistWantedEntry(dbId) ||
                    !ServerFactions.IsCharacterInAnyFaction(player.CharacterId) || !ServerFactions.IsCharacterInFactionDuty(player.CharacterId) ||
                    ServerFactions.GetCharacterFactionId(player.CharacterId) != 1) return;

                CharactersWanteds.RemoveWantedEntry(dbId);
                requestLSPDIntranetPersonWanteds(player, selectedCharId);

                foreach (ClassicPlayer policeMember in Alt.GetAllPlayers().ToList().Where(x =>
                    x != null && x.Exists && ((ClassicPlayer) x).CharacterId > 0 &&
                    ServerFactions.IsCharacterInAnyFaction(((ClassicPlayer) x).CharacterId) &&
                    (ServerFactions.GetCharacterFactionId(((ClassicPlayer) x).CharacterId) == 1)))
                    HUDHandler.SendNotification(policeMember, 1, 3000,
                        $"{Characters.GetCharacterName(player.CharacterId)} hat die Akte von {Characters.GetCharacterName(selectedCharId)} bearbeitet.");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        #endregion

        #region Funksystem

        [AsyncClientEvent("Server:Smartphone:joinRadioFrequence")]
        public void joinRadioFrequence(ClassicPlayer player, string radioFrequence) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0 || string.IsNullOrWhiteSpace(radioFrequence)) return;

                Alt.Log($"Funk: {radioFrequence}");

                switch (radioFrequence) {
                    case "450000":
                    case "450100":
                    case "450200":
                    case "450300":
                        if (!ServerFactions.IsCharacterInAnyFaction(player.CharacterId) ||
                            ServerFactions.GetCharacterFactionId(player.CharacterId) != 1) {
                            HUDHandler.SendNotification(player, 4, 5000, "Dieser Funk ist Verschlüsselt!");
                            Characters.SetCharacterCurrentFunkFrequence(player.CharacterId, null);
                            player.EmitLocked("Client:Smartphone:setCurrentFunkFrequence", "null");
                            AltAsync.Emit("SaltyChat:LeaveAllRadioChannel", player);
                            return;
                        }

                        break;
                    case "451000":
                    case "451100":
                    case "451200":
                    case "451300":
                        if (!ServerFactions.IsCharacterInAnyFaction(player.CharacterId) ||
                            ServerFactions.GetCharacterFactionId(player.CharacterId) != 2) {
                            HUDHandler.SendNotification(player, 4, 5000, "Dieser Funk ist Verschlüsselt!");
                            Characters.SetCharacterCurrentFunkFrequence(player.CharacterId, null);
                            player.EmitLocked("Client:Smartphone:setCurrentFunkFrequence", "null");
                            AltAsync.Emit("SaltyChat:LeaveAllRadioChannel", player);
                            return;
                        }

                        break;
                    case "494000":
                    case "494100":
                    case "494200":
                    case "494300":
                        if (!ServerFactions.IsCharacterInAnyFaction(player.CharacterId) ||
                            ServerFactions.GetCharacterFactionId(player.CharacterId) != 5) {
                            HUDHandler.SendNotification(player, 4, 5000, "Dieser Funk ist Verschlüsselt!");
                            Characters.SetCharacterCurrentFunkFrequence(player.CharacterId, null);
                            player.EmitLocked("Client:Smartphone:setCurrentFunkFrequence", "null");
                            AltAsync.Emit("SaltyChat:LeaveAllRadioChannel", player);
                            return;
                        }

                        break;
                    case "495000":
                    case "495100":
                    case "495200":
                    case "495300":
                        if (!ServerFactions.IsCharacterInAnyFaction(player.CharacterId) ||
                            ServerFactions.GetCharacterFactionId(player.CharacterId) != 4) {
                            HUDHandler.SendNotification(player, 4, 5000, "Dieser Funk ist Verschlüsselt!");
                            Characters.SetCharacterCurrentFunkFrequence(player.CharacterId, null);
                            player.EmitLocked("Client:Smartphone:setCurrentFunkFrequence", "null");
                            AltAsync.Emit("SaltyChat:LeaveAllRadioChannel", player);
                            return;
                        }

                        break;
                }

                if (Characters.GetCharacterCurrentFunkFrequence(player.CharacterId) != null) {
                    AltAsync.Emit("SaltyChat:LeaveAllRadioChannel", player);
                    player.EmitLocked("Client:Smartphone:setCurrentFunkFrequence", null);
                }

                Characters.SetCharacterCurrentFunkFrequence(player.CharacterId, radioFrequence);
                player.EmitLocked("Client:Smartphone:setCurrentFunkFrequence", radioFrequence);
                AltAsync.Emit("SaltyChat:JoinRadioChannel", player, radioFrequence, true);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [ServerEvent("Server:Smartphone:leaveRadioFrequence")]
        public void leaveRadioFrequenceServer(ClassicPlayer player) {
            leaveRadioFrequence(player);
        }


        [AsyncClientEvent("Server:Smartphone:leaveRadioFrequence")]
        public void leaveRadioFrequence(ClassicPlayer player) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0 ||
                    Characters.GetCharacterCurrentFunkFrequence(player.CharacterId) == null) return;

                //string currentFrequence = Characters.GetCharacterCurrentFunkFrequence(player.CharacterId);
                Characters.SetCharacterCurrentFunkFrequence(player.CharacterId, null);
                player.EmitLocked("Client:Smartphone:setCurrentFunkFrequence", "null");
                AltAsync.Emit("SaltyChat:LeaveAllRadioChannel", player);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        #endregion

        #region Utilities

        [AsyncClientEvent("Server:Smartphone:setFlyModeEnabled")]
        public void setFlyModeEnabled(ClassicPlayer player, bool isEnabled) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0) return;

                Characters.SetCharacterPhoneFlyModeEnabled(player.CharacterId, isEnabled);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Smartphone:setWallpaperId")]
        public void setWallpaperId(ClassicPlayer player, int wallpaperId) {
            try {
                if (player == null || !player.Exists || player.CharacterId <= 0) return;

                Characters.SetCharacterPhoneWallpaper(player.CharacterId, wallpaperId);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        #endregion
    }
}