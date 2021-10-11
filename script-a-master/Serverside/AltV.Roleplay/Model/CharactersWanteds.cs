﻿using System;
using System.Collections.Generic;
using System.Linq;
using AltV.Net;
using Altv_Roleplay.models;

namespace Altv_Roleplay.Model
{
    internal class CharactersWanteds
    {
        public static List<Characters_Wanteds> CharactersWanteds_ = new();
        public static List<Server_Wanteds> ServerWanteds_ = new();

        public static void CreateCharacterWantedEntry(int targetCharId, string givenString, List<int> decompiledWanteds) {
            try {
                if (targetCharId <= 0 || decompiledWanteds == null || decompiledWanteds.Count <= 0) return;

                foreach (var wantedEntry in decompiledWanteds) {
                    var wantedData = new Characters_Wanteds {
                        charId = targetCharId,
                        wantedId = wantedEntry,
                        givenString = $"{givenString}"
                    };

                    CharactersWanteds_.Add(wantedData);

                    using (var db = new gtaContext()) {
                        db.Characters_Wanteds.Add(wantedData);
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static void RemoveWantedEntry(int dbId) {
            try {
                var entry = CharactersWanteds_.FirstOrDefault(x => x.id == dbId);
                if (entry == null) return;

                CharactersWanteds_.Remove(entry);

                using (var db = new gtaContext()) {
                    db.Characters_Wanteds.Remove(entry);
                    db.SaveChanges();
                }
            }
            catch (Exception _) {
                Alt.Log($"{_}");
            }
        }

        public static void RemoveCharacterWanteds(int charId) {
            try {
                using (var db = new gtaContext()) {
                    foreach (var wantedEntry in CharactersWanteds_.ToList().Where(x => x.charId == charId)) {
                        CharactersWanteds_.Remove(wantedEntry);
                        db.Characters_Wanteds.Remove(wantedEntry);
                    }

                    db.SaveChanges();
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static bool ExistWantedEntry(int id) {
            try {
                return CharactersWanteds_.Exists(x => x.id == id);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return false;
        }

        public static bool HasCharacterWanteds(int charId) {
            try {
                return CharactersWanteds_.Exists(x => x.charId == charId);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return false;
        }

        public static int GetCharacterWantedFinalJailTime(int charId) {
            try {
                var jailTime = 0;

                foreach (var wantedEntry in CharactersWanteds_.ToList().Where(x => x.charId == charId))
                    jailTime += GetWantedJailTime(wantedEntry.wantedId);

                return jailTime;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        public static int GetCharacterWantedFinalJailPrice(int charId) {
            try {
                var price = 0;
                foreach (var wantedEntry in CharactersWanteds_.ToList().Where(x => x.charId == charId))
                    price += GetWantedJailPrice(wantedEntry.wantedId);
                return price;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        public static int GetWantedJailTime(int wantedId) {
            try {
                var we = ServerWanteds_.ToList().FirstOrDefault(x => x.wantedId == wantedId);
                if (we != null) return we.jailtime;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        public static int GetWantedJailPrice(int wantedId) {
            try {
                var we = ServerWanteds_.ToList().FirstOrDefault(x => x.wantedId == wantedId);
                if (we != null) return we.ticketfine;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }
    }
}