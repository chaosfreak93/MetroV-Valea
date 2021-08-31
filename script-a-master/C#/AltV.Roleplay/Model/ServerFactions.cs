﻿using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.Json;
using AltV.Net;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;
using Altv_Roleplay.Handler;
using Altv_Roleplay.models;
using Altv_Roleplay.Utils;

namespace Altv_Roleplay.Model
{
    internal class ServerFactions
    {
        public static List<Server_Factions> ServerFactions_ = new();
        public static List<Server_Faction_Ranks> ServerFactionRanks_ = new();
        public static List<Server_Faction_Members> ServerFactionMembers_ = new();
        public static List<Server_Faction_Storage_Items> ServerFactionStorageItems_ = new();
        public static List<Server_Faction_Positions> ServerFactionPositions_ = new();
        public static List<ServerFaction_Dispatch> ServerFactionDispatches_ = new();
        public static List<Server_Faction_Clothes> ServerFactionClothes_ = new();

        public static List<Logs_Faction> LogsFaction_ = new();
        // 1  = DoJ, 2 = LSPD, 3 = LSMD, 4 = ACLS, 5 = Fahrschule

        public static void CreateServerFactionMember(int factionId, int charId, int rank, int dienstnummer) {
            try {
                if (factionId == 0 || charId == 0) return;

                var factionMemberData = ServerFactionMembers_.FirstOrDefault(x => x.charId == charId);
                if (factionMemberData != null) return;

                var factionInviteData = new Server_Faction_Members {
                    charId = charId,
                    factionId = factionId,
                    rank = rank,
                    serviceNumber = dienstnummer,
                    isDuty = false,
                    lastChange = DateTime.Now
                };
                ServerFactionMembers_.Add(factionInviteData);

                using (var db = new gtaContext()) {
                    db.Server_Faction_Members.Add(factionInviteData);
                    db.SaveChanges();
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static void sendMsg(int fId, string msg) {
            try {
                foreach (var p in Alt.GetAllPlayers().Where(x =>
                        x != null && x.Exists && x.GetCharacterMetaId() > 0 && IsCharacterInAnyFaction((int) x.GetCharacterMetaId()) &&
                        IsCharacterInFactionDuty((int) x.GetCharacterMetaId()) && GetCharacterFactionId((int) x.GetCharacterMetaId()) == fId)
                    .ToList()) {
                    if (p == null || !p.Exists) continue;

                    HUDHandler.SendNotification(p, 1, 2500, $"{msg}");
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static int GetFactionIdByServiceNumber(int number) {
            try {
                var faction = ServerFactions_.ToList().FirstOrDefault(x => x.phoneNumber == number);
                if (faction != null) return faction.id;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        internal static void UpdateCurrent(int factionId, int v) {
            throw new NotImplementedException();
        }

        public static int GetCurrentServicePhoneOwner(int factionId) {
            try {
                var faction = ServerFactions_.ToList().FirstOrDefault(x => x.id == factionId);
                if (faction != null) return faction.currentPhoneOwnerId;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        public static bool IsNumberAFactionNumber(int number) {
            try {
                var faction = ServerFactions_.ToList().FirstOrDefault(x => x.phoneNumber == number);
                if (faction != null) return true;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return false;
        }

        public static void UpdateCurrentServicePhoneOwner(int factionId, int newid) {
            try {
                if (factionId <= 0 || newid < 0) return;

                var factiondata = ServerFactions_.FirstOrDefault(x => x.id == factionId);
                if (factiondata == null) return;

                factiondata.currentPhoneOwnerId = newid;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static void AddNewFactionDispatch(int senderId, int factionId, string message, Position pos) {
            try {
                if (senderId < 0 || factionId <= 0) return;

                var data = new ServerFaction_Dispatch {
                    senderCharId = senderId,
                    factionId = factionId,
                    message = message,
                    Date = DateTime.Now.ToString("d", CultureInfo.CreateSpecificCulture("de-DE")),
                    Destination = pos
                };

                ServerFactionDispatches_.Add(data);
                
                using (gtaContext db = new gtaContext())
                {
                    db.Server_Faction_Dispatch.Add(data);
                    db.SaveChanges();
                }

            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }
        
        public static void AddNewFactionDispatchNoName(string alternativename, int factionId, string message, Position pos)
        {
            try
            {
                if (factionId <= 0) return;

                var data = new ServerFaction_Dispatch
                {
                    senderCharId = 0,
                    factionId = factionId,
                    message = message,
                    Date = DateTime.Now.ToString("d", CultureInfo.CreateSpecificCulture("de-DE")),
                    Destination = pos,
                    altname = alternativename
                };

                ServerFactionDispatches_.Add(data);

                using (gtaContext db = new gtaContext())
                {
                    db.Server_Faction_Dispatch.Add(data);
                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {
                Alt.Log($"{e}");
            }
        }

        public static bool ExistDispatchBySender(int senderId, int factionId) {
            try {
                if (senderId <= 0) return false;

                var dispatch = ServerFactionDispatches_.FirstOrDefault(x => x.senderCharId == senderId && x.factionId == factionId);
                if (dispatch != null) return true;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return false;
        }

        public static bool ExistDispatch(int factionId, int senderId) {
            try {
                if (factionId <= 0 || senderId < 0) return false;

                var dispatch = ServerFactionDispatches_.FirstOrDefault(x => x.senderCharId == senderId && x.factionId == factionId);
                if (dispatch != null) return true;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return false;
        }

        public static void RemoveDispatch(int factionId, int senderId) {
            try {
                if (factionId <= 0 || senderId < 0) return;

                var dispatch = ServerFactionDispatches_.FirstOrDefault(x => x.factionId == factionId && x.senderCharId == senderId);

                if (dispatch != null) {
                    ServerFactionDispatches_.Remove(dispatch);

                    using (gtaContext db = new gtaContext()) {
                        db.Server_Faction_Dispatch.Remove(dispatch);
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static void RemoveDispatchWithoutFactionId(int senderId) {
            try {
                if (senderId <= 0) return;

                var dispatch = ServerFactionDispatches_.FirstOrDefault(x => x.senderCharId == senderId);

                if (dispatch != null) {
                    ServerFactionDispatches_.Remove(dispatch);

                    using (gtaContext db = new gtaContext()) {
                        db.Server_Faction_Dispatch.Remove(dispatch);
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static void RemoveServerFactionMember(int factionId, int charId) {
            try {
                if (factionId <= 0 || charId <= 0) return;

                var factionMemberData = ServerFactionMembers_.FirstOrDefault(x => x.factionId == factionId && x.charId == charId);

                if (factionMemberData != null) {
                    ServerFactionMembers_.Remove(factionMemberData);

                    using (var db = new gtaContext()) {
                        db.Server_Faction_Members.Remove(factionMemberData);
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static void AddServerFactionStorageItem(int factionId, int charId, string itemName, int itemAmount) {
            if (charId <= 0 || factionId <= 0 || itemName == "" || itemAmount <= 0) return;

            var itemData = new Server_Faction_Storage_Items {
                charId = charId,
                factionId = factionId,
                itemName = itemName,
                amount = itemAmount
            };

            try {
                var hasItem = ServerFactionStorageItems_.FirstOrDefault(i =>
                    i.charId == charId && i.itemName == itemName && i.factionId == factionId);

                if (hasItem != null) {
                    //Item existiert, itemAmount erhöhen
                    hasItem.amount += itemAmount;

                    using (var db = new gtaContext()) {
                        var dbitem = db.Server_Faction_Storage_Items.FirstOrDefault(i =>
                            i.charId == charId && i.itemName == itemName && i.factionId == factionId);

                        if (dbitem != null)
                            dbitem.amount = dbitem.amount += itemAmount;

                        db.SaveChanges();
                    }
                } else {
                    //Existiert nicht, Item neu adden
                    ServerFactionStorageItems_.Add(itemData);

                    using (var db = new gtaContext()) {
                        db.Server_Faction_Storage_Items.Add(itemData);
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static int GetServerFactionStorageItemAmount(int factionId, int charId, string itemName) {
            try {
                if (factionId <= 0 || charId <= 0 || itemName == "") return 0;

                var item = ServerFactionStorageItems_.FirstOrDefault(x => x.factionId == factionId && x.charId == charId && x.itemName == itemName);
                if (item != null) return item.amount;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        public static void RemoveServerFactionStorageItemAmount(int factionId, int charId, string itemName, int itemAmount) {
            try {
                if (charId <= 0 || itemName == "" || itemAmount == 0 || factionId <= 0) return;

                var item = ServerFactionStorageItems_.FirstOrDefault(i => i.charId == charId && i.itemName == itemName && i.factionId == factionId);

                if (item != null)
                    using (var db = new gtaContext()) {
                        var prevAmount = item.amount;
                        item.amount -= itemAmount;

                        if (item.amount > 0) {
                            db.Server_Faction_Storage_Items.Update(item);
                            db.SaveChanges();
                        } else {
                            RemoveServerFactionStorageItem(factionId, charId, itemName);
                        }
                    }
            }
            catch (Exception _) {
                Alt.Log($"{_}");
            }
        }

        public static void RemoveServerFactionStorageItem(int factionId, int charId, string itemName) {
            try {
                var item = ServerFactionStorageItems_.FirstOrDefault(i => i.charId == charId && i.itemName == itemName && i.factionId == factionId);

                if (item != null) {
                    ServerFactionStorageItems_.Remove(item);

                    using (var db = new gtaContext()) {
                        db.Server_Faction_Storage_Items.Remove(item);
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static string GetFactionFullName(int factionId) {
            if (factionId <= 0) return "Zivilist";

            var fullName = "Zivilist";
            var factionData = ServerFactions_.FirstOrDefault(x => x.id == factionId);

            if (factionData != null)
                fullName = factionData.factionName;

            return fullName;
        }

        public static string GetFactionShortName(int factionid) {
            var shortCut = "Zivilist";
            if (factionid == 0) return shortCut;

            var factionData = ServerFactions_.FirstOrDefault(x => x.id == factionid);

            if (factionData != null)
                shortCut = factionData.factionShort;

            return shortCut;
        }

        public static string GetFactionRankName(int factionId, int rankId) {
            if (factionId == 0 || rankId == 0) return "";

            var factionRankData = ServerFactionRanks_.FirstOrDefault(x => x.factionId == factionId && x.rankId == rankId);

            if (factionRankData != null)
                return factionRankData.name;

            return "";
        }

        public static int GetFactionRankPaycheck(int factionId, int rankId) {
            if (factionId == 0 || rankId == 0) return 0;

            var factionRankData = ServerFactionRanks_.FirstOrDefault(x => x.factionId == factionId && x.rankId == rankId);

            if (factionRankData != null)
                return factionRankData.paycheck;

            return 0;
        }

        public static void SetFactionRankPaycheck(int factionId, int rankId, int money) {
            try {
                if (factionId <= 0 || rankId <= 0 || money <= 0) return;

                var factionRankData = ServerFactionRanks_.FirstOrDefault(x => x.factionId == factionId && x.rankId == rankId);

                if (factionRankData != null) {
                    factionRankData.paycheck = money;

                    using (var db = new gtaContext()) {
                        db.Server_Faction_Ranks.Update(factionRankData);
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static bool IsCharacterInAnyFaction(int charId) {
            try {
                if (charId == 0) return false;

                var factionMemberData = ServerFactionMembers_.FirstOrDefault(x => x.charId == charId);

                if (factionMemberData != null)
                    return true;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return false;
        }

        public static int GetCharacterFactionId(int charId) {
            try {
                if (charId == 0) return 0;

                var factionMemberData = ServerFactionMembers_.FirstOrDefault(x => x.charId == charId);

                if (factionMemberData != null)
                    return factionMemberData.factionId;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        public static int GetCharacterFactionRank(int charId) {
            try {
                if (charId == 0) return 0;

                var factionMemberData = ServerFactionMembers_.FirstOrDefault(x => x.charId == charId);

                if (factionMemberData != null)
                    return factionMemberData.rank;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        public static void SetCharacterFactionRank(int charId, int newRank) {
            try {
                if (charId <= 0 || newRank <= 0) return;

                var factionMemberData = ServerFactionMembers_.FirstOrDefault(x => x.charId == charId);

                if (factionMemberData != null) {
                    factionMemberData.rank = newRank;

                    using (var db = new gtaContext()) {
                        db.Server_Faction_Members.Update(factionMemberData);
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static int GetCharacterFactionServiceNumber(int charId) //Dienstnummer
        {
            try {
                if (charId == 0) return 0;

                var factionMemberData = ServerFactionMembers_.FirstOrDefault(x => x.charId == charId);

                if (factionMemberData != null)
                    return factionMemberData.serviceNumber;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        public static DateTime GetCharacterFactionLastChange(int charId) {
            var dt = new DateTime(0, 0, 0, 0, 0, 0);

            try {
                if (charId == 0) return dt;

                var factionMemberData = ServerFactionMembers_.FirstOrDefault(x => x.charId == charId);

                if (factionMemberData != null)
                    dt = factionMemberData.lastChange;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return dt;
        }

        public static bool ExistFactionServiceNumber(int factionId, int serviceNumber) //Existiert Dienstnummer bereits?
        {
            try {
                if (factionId == 0 || serviceNumber == 0) return false;

                var factionMemberData = ServerFactionMembers_.FirstOrDefault(x => x.factionId == factionId && x.serviceNumber == serviceNumber);
                if (factionMemberData != null) return true;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return false;
        }

        public static int GetFactionMaxRankCount(int factionId) {
            var rankCount = 0;

            try {
                if (factionId == 0) return rankCount;

                rankCount = ServerFactionRanks_.Where(x => x.factionId == factionId).Count();
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return rankCount;
        }

        public static bool IsCharacterInFactionDuty(int charId) {
            try {
                if (charId == 0) return false;

                var factionMemberData = ServerFactionMembers_.FirstOrDefault(x => x.charId == charId);

                if (factionMemberData != null)
                    return factionMemberData.isDuty;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return false;
        }

        public static int GetFactionDutyMemberCount(int factionId) {
            var memberCount = 0;

            try {
                if (factionId <= 0) return memberCount;

                memberCount = ServerFactionMembers_.Where(x =>
                    x.factionId == factionId && x.isDuty &&
                    Alt.GetAllPlayers().ToList().FirstOrDefault(p => p.GetCharacterMetaId() == (ulong) x.charId) != null).Count();
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return memberCount;
        }

        public static void SetCharacterInFactionDuty(int charId, bool state) {
            try {
                if (charId <= 0) return;

                var factionMemberData = ServerFactionMembers_.FirstOrDefault(x => x.charId == charId);

                if (factionMemberData != null) {
                    factionMemberData.isDuty = state;

                    using (var db = new gtaContext()) {
                        db.Server_Faction_Members.Update(factionMemberData);
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static int GetFactionBankMoney(int factionId) {
            try {
                if (factionId == 0) return 0;

                var factionData = ServerFactions_.FirstOrDefault(x => x.id == factionId);

                if (factionData != null)
                    return factionData.factionMoney;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        public static void SetFactionBankMoney(int factionId, int money) {
            try {
                if (factionId <= 0 || money < 0) return;

                var factionData = ServerFactions_.FirstOrDefault(x => x.id == factionId);

                if (factionData != null) {
                    factionData.factionMoney = money;

                    using (var db = new gtaContext()) {
                        db.Server_Factions.Update(factionData);
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static int GetServerFactionMemberCount(int factionId) {
            var Count = 0;
            if (factionId == 0) return Count;

            Count = ServerFactionMembers_.Where(x => x.factionId == factionId).Count();
            return Count;
        }

        public static int GetServerFactionLeader(int factionId) {
            if (factionId == 0) return 0;

            var factionMemberData =
                ServerFactionMembers_.FirstOrDefault(x => x.factionId == factionId && x.rank == GetFactionMaxRankCount(factionId));

            if (factionMemberData != null)
                return factionMemberData.charId;

            return 0;
        }

        public static string GetServerFactionManagerInfos(int factionId) {
            if (factionId == 0) return "";

            var items = ServerFactions_.Where(x => x.id == factionId).Select(x => new {
                factionId,
                x.factionName,
                factionOwner = Characters.GetCharacterName(GetServerFactionLeader(factionId)),
                factionBalance = x.factionMoney,
                factionMemberCount = GetServerFactionMemberCount(factionId)
            }).ToList();

            return JsonSerializer.Serialize(items);
        }

        public static string GetFactionDispatches(int factionId) {
            if (factionId <= 0) return "[]";

            var items = ServerFactionDispatches_.Where(x => x.factionId == factionId).Select(x => new {
                x.factionId,
                x.senderCharId,
                senderName = Characters.GetCharacterName(x.senderCharId),
                x.message,
                x.Date,
                posX = x.Destination.X,
                posY = x.Destination.Y,
                posZ = x.Destination.Z,
                altname = x.altname
            }).ToList();

            return JsonSerializer.Serialize(items);
        }

        public static int GetFactionDispatcheCount(int factionId) {
            var dispatchCount = 0;

            try {
                if (factionId <= 0) return dispatchCount;

                dispatchCount = ServerFactionDispatches_.Where(x => x.factionId == factionId).Count();
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return dispatchCount;
        }

        public static string GetServerFactionMembers(int factionId) {
            if (factionId == 0) return "";

            var items = ServerFactionMembers_.Where(x => x.factionId == factionId).Select(x => new {
                x.factionId,
                x.charId,
                charName = Characters.GetCharacterName(x.charId),
                x.rank,
                x.serviceNumber,
                date = x.lastChange.ToString("dd.MM.yyy")
            }).OrderByDescending(x => x.rank).ToList();

            return JsonSerializer.Serialize(items);
        }

        public static string GetServerFactionRanks(int factionId) {
            if (factionId == 0) return "";

            var items = ServerFactionRanks_.Where(x => x.factionId == factionId).Select(x => new {
                x.factionId,
                x.rankId,
                rankName = x.name,
                rankCurPaycheck = x.paycheck
            }).OrderBy(x => x.rankId).ToList();

            return JsonSerializer.Serialize(items);
        }

        public static string GetServerFactionStorageItems(int factionId, int charId) {
            if (factionId <= 0 || charId <= 0) return "[]";

            var items = ServerFactionStorageItems_.Where(x => x.factionId == factionId && x.charId == charId).Select(x => new {
                x.id,
                x.charId,
                x.factionId,
                x.itemName,
                x.amount,
                itemPicName = ServerItems.ReturnItemPicSRC(x.itemName)
            }).ToList();
            return JsonSerializer.Serialize(items);
        }

        public static bool ExistServerFactionStorageItem(int factionId, int charId, string itemName) {
            try {
                if (factionId <= 0 || charId <= 0 || itemName == "") return false;

                var storageData =
                    ServerFactionStorageItems_.FirstOrDefault(x => x.factionId == factionId && x.charId == charId && x.itemName == itemName);
                if (storageData != null) return true;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return false;
        }

        public static bool ExistServerFactionRankOnId(int factionid, int rankId) {
            try {
                if (factionid <= 0 || rankId <= 0) return false;

                var factionRankData = ServerFactionRanks_.FirstOrDefault(x => x.factionId == factionid && x.rankId == rankId);

                if (factionRankData != null)
                    return true;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return false;
        }
        
        public static Server_Faction_Clothes GetCharacterClothes(int factionId, string clotheType, int gender) {
            try {
                if (factionId == 0) return null;

                var factionClothesData = ServerFactionClothes_.FirstOrDefault(x => x.factionId == factionId && x.clothesType == clotheType && x.gender == gender);
                if (factionClothesData == null) return null;

                return factionClothesData;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
                return null;
            }
        }
        
        public static bool HasFactionClothes(int factionId) {
            try {
                if (factionId == 0) return false;

                var factionClothesData = ServerFactionClothes_.FirstOrDefault(x => x.factionId == factionId);
                if (factionClothesData == null) return false;

                return true;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
                return false;
            }
        }
    }
}