﻿using System;
using System.Collections.Generic;
using System.Linq;
using AltV.Net;
using AltV.Net.Elements.Entities;
using Altv_Roleplay.Factories;
using Altv_Roleplay.models;
using Altv_Roleplay.Utils;

namespace Altv_Roleplay.Model
{
    internal class User
    {
        public static List<Accounts> Player = new();

        public static void CreatePlayerAccount(IPlayer player, string username, string email, string password) {
            if (player == null || !player.Exists) return;

            var PlayerData = new Accounts {
                playerName = username,
                Email = email,
                socialClub = player.SocialClubId,
                password = BCrypt.Net.BCrypt.HashPassword(password),
                hardwareId = 0,
                Online = 0,
                TSWhitelist = false,
                ban = false,
                banReason = "",
                adminLevel = 0
            };

            try {
                Player.Add(PlayerData);

                using (var db = new gtaContext()) {
                    db.Accounts.Add(PlayerData);
                    db.SaveChanges();
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static bool ExistPlayerName(string playerName) {
            var pl = Player.FirstOrDefault(p => p.playerName == playerName);

            if (pl != null)
                return true;

            return false;
        }

        public static bool ExistPlayerSocialClub(IPlayer player) {
            var pl = Player.FirstOrDefault(p => p.socialClub == player.SocialClubId);

            if (pl != null)
                return true;

            return false;
        }

        public static bool ExistPlayerEmail(string email) {
            var pl = Player.FirstOrDefault(p => p.Email == email);

            if (pl != null)
                return true;

            return false;
        }

        public static bool IsPlayerTSWhitelisted(string playerName) {
            var pl = Player.FirstOrDefault(p => p.playerName == playerName);

            if (pl != null)
                return pl.TSWhitelist;

            return false;
        }

        public static bool IsPlayerTSWhitelisted(int playerId) {
            var pl = Player.FirstOrDefault(p => p.playerid == playerId);

            if (pl != null)
                return pl.TSWhitelist;

            return false;
        }

        public static bool IsPlayerBanned(IPlayer player) {
            if (player == null || !player.Exists) return false;

            var pl = Player.FirstOrDefault(p => p.socialClub == player.SocialClubId);

            if (pl != null)
                return pl.ban;

            return false;
        }

        public static bool IsPlayerBanned(int accId) {
            try {
                if (accId <= 0) return false;

                var pl = Player.FirstOrDefault(x => x.playerid == accId);
                if (pl != null) return pl.ban;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return false;
        }

        public static string GetPlayerBanReason(IPlayer player) {
            if (player == null || !player.Exists) return "";

            var pl = Player.FirstOrDefault(p => p.socialClub == player.SocialClubId);

            if (pl != null)
                return pl.banReason;

            return "";
        }

        public static int GetPlayerAccountId(IPlayer player) {
            if (player == null || !player.Exists) return 0;

            var pl = Player.FirstOrDefault(p => p.socialClub == player.SocialClubId);

            if (pl != null)
                return pl.playerid;

            return 0;
        }

        public static Accounts GetPlayerByCharId(int charId) {
            var pl = Player.FirstOrDefault(p => p.Online == charId);

            return pl;
        }

        public static int GetPlayerAccountIdByUsername(string username) {
            if (string.IsNullOrWhiteSpace(username)) return 0;

            var pl = Player.FirstOrDefault(p => p.playerName == username);

            if (pl != null)
                return pl.playerid;

            return 0;
        }

        public static ulong GetPlayerSocialclubId(string playerName) {
            var pl = Player.FirstOrDefault(p => p.playerName == playerName);

            if (pl != null)
                return pl.socialClub;

            return 0;
        }

        public static ulong GetPlayerSocialclubIdbyAccId(int accId) {
            var pl = Player.FirstOrDefault(p => p.playerid == accId);

            if (pl != null)
                return pl.socialClub;

            return 0;
        }

        public static ulong GetPlayerHardwareIdbyAccId(int accId) {
            var pl = Player.FirstOrDefault(p => p.playerid == accId);

            if (pl != null)
                return pl.hardwareId;

            return 0;
        }

        public static string GetPlayerPassword(string playerName) {
            var pl = Player.FirstOrDefault(p => p.playerName == playerName);

            if (pl != null)
                return pl.password;

            return "JKODSAJKOSADJIASDJI";
        }

        public static string GetPlayerUsername(int accId) {
            var pl = Player.FirstOrDefault(p => p.playerid == accId);

            if (pl != null)
                return pl.playerName;

            return "Undefined";
        }

        public static int GetPlayerOnline(IPlayer player) {
            try {
                if (player == null || !player.Exists) return 0;

                var pl = Player.FirstOrDefault(p => p.socialClub == player.SocialClubId);

                if (pl != null)
                    return pl.Online;

                return 0;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
                return 0;
            }
        }

        public static bool IsCharacterOnline(int charId) {
            try {
                var character = Characters.PlayerCharacters.ToList().FirstOrDefault(x => x.charId == charId);
                if (character == null) return false;

                return Player.ToList().Exists(x => x.Online == charId);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return false;
        }

        public static ulong GetPlayerHardwareID(IPlayer player) {
            if (player == null || !player.Exists) return 0;

            var pl = Player.FirstOrDefault(p => p.socialClub == player.SocialClubId);

            if (pl != null)
                return pl.hardwareId;

            return 0;
        }

        public static void SetPlayerHardwareID(IPlayer player) {
            if (player == null || !player.Exists) return;

            var pl = Player.FirstOrDefault(p => p.socialClub == player.SocialClubId);

            if (pl != null) {
                pl.hardwareId = player.HardwareIdHash;

                using (var db = new gtaContext()) {
                    db.Accounts.Update(pl);
                    db.SaveChanges();
                }
            }
        }

        public static void SetPlayerSocialID(IPlayer player) {
            if (player == null || !player.Exists) return;

            var pl = Player.FirstOrDefault(p => p.hardwareId == player.HardwareIdHash);

            if (pl != null) {
                pl.socialClub = player.SocialClubId;

                using (var db = new gtaContext()) {
                    db.Accounts.Update(pl);
                    db.SaveChanges();
                }
            }
        }

        public static void SetPlayerPassword(IPlayer player, string password) {
            if (player == null || !player.Exists) return;

            var pl = Player.FirstOrDefault(p => p.hardwareId == player.HardwareIdHash || p.socialClub == player.SocialClubId);

            if (pl != null) {
                pl.password = password;

                using (var db = new gtaContext()) {
                    db.Accounts.Update(pl);
                    db.SaveChanges();
                }
            }
        }

        public static void ResetPlayerHardwareID(int accId) {
            var pl = Player.FirstOrDefault(p => p.playerid == accId);

            if (pl != null) {
                pl.hardwareId = 0;

                using (var db = new gtaContext()) {
                    db.Accounts.Update(pl);
                    db.SaveChanges();
                }
            }
        }

        public static void ResetPlayerSocialID(int accId) {
            var pl = Player.FirstOrDefault(p => p.playerid == accId);

            if (pl != null) {
                pl.socialClub = 0;

                using (var db = new gtaContext()) {
                    db.Accounts.Update(pl);
                    db.SaveChanges();
                }
            }
        }

        public static void ResetPasswort(int accId) {
            var pl = Player.FirstOrDefault(p => p.playerid == accId);

            if (pl != null) {
                pl.password = "";

                using (var db = new gtaContext()) {
                    db.Accounts.Update(pl);
                    db.SaveChanges();
                }
            }
        }

        public static void SetPlayerOnline(ClassicPlayer player, int charId) {
            if (player == null || !player.Exists) return;

            player.SetCharacterMetaId(Convert.ToUInt64(charId));

            var pl = Player.FirstOrDefault(p => p.socialClub == player.SocialClubId);

            if (pl != null) {
                player.CharacterId = charId;
                pl.Online = charId;

                try {
                    using (var db = new gtaContext()) {
                        db.Accounts.Update(pl);
                        db.SaveChanges();
                    }
                }
                catch (Exception e) {
                    Alt.Log($"{e}");
                }
            }
        }

        public static void SetPlayerBanned(IPlayer player, bool state, string reason) {
            if (player == null || !player.Exists) return;

            var pl = Player.FirstOrDefault(p => p.socialClub == player.SocialClubId);

            if (pl != null) {
                pl.ban = state;
                pl.banReason = reason;

                try {
                    using (var db = new gtaContext()) {
                        db.Accounts.Update(pl);
                        db.SaveChanges();
                    }
                }
                catch (Exception e) {
                    Alt.Log($"{e}");
                }
            }
        }

        public static void SetPlayerBanned(int playerId, bool state, string reason) {
            try {
                if (playerId <= 0) return;

                var pl = Player.FirstOrDefault(x => x.playerid == playerId);

                if (pl != null) {
                    pl.ban = state;
                    pl.banReason = reason;

                    using (var db = new gtaContext()) {
                        db.Accounts.Update(pl);
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static bool ExistPlayerById(int playerId) {
            try {
                if (playerId <= 0) return false;

                var pl = Player.FirstOrDefault(x => x.playerid == playerId);
                if (pl != null) return true;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return false;
        }

        public static void SetPlayerTSWhitelistState(int playerId, bool state) {
            try {
                if (playerId <= 0) return;

                var pl = Player.FirstOrDefault(x => x.playerid == playerId);

                if (pl != null) {
                    pl.TSWhitelist = state;

                    using (var db = new gtaContext()) {
                        db.Accounts.Update(pl);
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static void SetPlayerAdminLevel(int playerId, int adminLevel) {
            try {
                if (playerId <= 0) return;

                var pl = Player.FirstOrDefault(p => p.playerid == playerId);

                if (pl != null) {
                    pl.adminLevel = adminLevel;

                    using (var db = new gtaContext()) {
                        db.Accounts.Update(pl);
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }
    }
}