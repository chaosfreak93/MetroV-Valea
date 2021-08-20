using System;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AltV.Net;
using AltV.Net.Async;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;
using Altv_Roleplay.Factories;
using Altv_Roleplay.Model;
using Altv_Roleplay.models;
using Altv_Roleplay.Services;
using Altv_Roleplay.Utils;

namespace Altv_Roleplay.Handler
{
    internal class LoginHandler : IScript
    {
        [ScriptEvent(ScriptEventType.PlayerConnect)]
        public void OnPlayerConnect_Handler(ClassicPlayer player, string reason) {
            if (player is not {Exists: true}) return;

            player.SetSyncedMetaData("PLAYER_SPAWNED", false);
            player.SetSyncedMetaData("ADMINLEVEL", 0);
            player.SetPlayerIsCuffed("handcuffs", false);
            player.SetPlayerIsCuffed("footcuffs", false);
            player.SetPlayerIsCuffed("ropecuffs", false);
            player.SetStreamSyncedMetaData("isOnHands", false);
            player.SetPlayerCurrentMinijob("None");
            player.SetPlayerCurrentMinijobRouteId(0);
            player.SetPlayerCurrentMinijobStep("None");
            player.SetPlayerCurrentMinijobActionCount(0);
            player.SetPlayerFarmingActionMeta("None");
            User.SetPlayerOnline(player, 0);
            player.EmitLocked("Client:Pedcreator:spawnPed", ServerPeds.GetAllServerPeds());
            CreateLoginBrowser(player);
        }

        [ScriptEvent(ScriptEventType.PlayerDisconnect)]
        public void OnPlayerDisconnected_Handler(ClassicPlayer player, string reason) {
            try {
                if (player == null) return;

                if (User.GetPlayerOnline(player) != 0)
                    Characters.SetCharacterLastPosition(User.GetPlayerOnline(player), player.Position, player.Dimension);
                User.SetPlayerOnline(player, 0);
                Characters.SetCharacterCurrentFunkFrequence(player.CharacterId, null);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static void CreateLoginBrowser(IPlayer client) {
            if (client is not {Exists: true}) return;

            client.Model = 0x3D843282;
            client.Dimension = 10000;
            client.Position = new Position(3120, 5349, 10);
            client.EmitLocked("Client:Login:CreateCEF"); //Login triggern
        }

        [AsyncClientEvent("Server:Login:ValidateLoginCredentials")]
        public void ValidateLoginCredentials(ClassicPlayer client, string username, string password, string discordId) {
            if (client is not {Exists: true}) return;

            var stopwatch = new Stopwatch();
            stopwatch.Start();

            if (string.IsNullOrWhiteSpace(discordId)) {
                client.EmitLocked("Client:Login:showError", "Bitte öffne Discord und starte alt:V neu.");
                return;
            }

            if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password)) {
                client.EmitLocked("Client:Login:showError", "Eines der Felder wurde nicht ordnungsgemäß ausgefüllt.");
                return;
            }

            if (!User.ExistPlayerName(username)) {
                client.EmitLocked("Client:Login:showError", "Der eingegebene Benutzername wurde nicht gefunden.");
                LoggingService.NewLoginLog(username, client.SocialClubId, client.Ip, client.HardwareIdHash, false,
                    $"Der eingegebene Benutzername wurde nicht gefunden ({username}).");
                return;
            }

            if (string.IsNullOrWhiteSpace(User.GetPlayerPassword(username))) {
                client.EmitLocked("Client:Login:showArea", "reset");
                return;
            }

            if (!BCrypt.Net.BCrypt.Verify(password, User.GetPlayerPassword(username))) {
                client.EmitLocked("Client:Login:showError", "Das eingegebene Passwort ist falsch.");
                LoggingService.NewLoginLog(username, client.SocialClubId, client.Ip, client.HardwareIdHash, false,
                    "Das eingegebene Passwort ist falsch");
                return;
            }

            /*if(User.GetPlayerSocialclubId(username) != client.SocialClubId)*/
            if (User.GetPlayerSocialclubId(username) != 0) {
                if (User.GetPlayerSocialclubId(username) != client.SocialClubId) {
                    client.EmitLocked("Client:Login:showError", "Fehler bei der Anmeldung (Fehlercode 508).");
                    return;
                }
            } else {
                User.SetPlayerSocialID(client);
            }

            if (!User.IsPlayerTSWhitelisted(username)) {
                client.EmitLocked("Client:Login:showError", "Dieser Benutzeraccount wurde noch nicht im TS Support aktiviert.");
                LoggingService.NewLoginLog(username, client.SocialClubId, client.Ip, client.HardwareIdHash, false,
                    $"Dieser Benutzeraccount wurde noch nicht im Support aktiviert ({username}).");
                return;
            }

            if (User.GetPlayerHardwareID(client) != 0) {
                if (User.GetPlayerHardwareID(client) != client.HardwareIdHash) {
                    client.EmitLocked("Client:Login:showError", "Fehler bei der Anmeldung (Fehlercode 187).");
                    return;
                }
            } else {
                User.SetPlayerHardwareID(client);
            }

            if (User.IsPlayerBanned(client)) {
                client.EmitLocked("Client:Login:showError", "Dieser Benutzeraccount wurde gebannt, im Support melden.");
                LoggingService.NewLoginLog(username, client.SocialClubId, client.Ip, client.HardwareIdHash, false,
                    $"Dieser Benutzeraccount wurde gebannt, im Support melden ({username}).");
                return;
            }

            client.EmitLocked("Client:Login:SaveLoginCredentialsToStorage", username, discordId);
            User.SetPlayerOnline(client, 0);

            lock (client) {
                if (client is not {Exists: true}) return;

                client.accountId = (short) User.GetPlayerAccountId(client);
                client.Dimension = (short) User.GetPlayerAccountId(client);
            }

            client.SetSyncedMetaData("discordId", discordId);
            SendDataToCharselectorArea(client);
            LoggingService.NewLoginLog(username, client.SocialClubId, client.Ip, client.HardwareIdHash, true, "Erfolgreich eingeloggt.");
            stopwatch.Stop();
            if (stopwatch.Elapsed.Milliseconds > 30) Alt.Log($"ValidateLoginCredentials benötigte {stopwatch.Elapsed.Milliseconds}ms");
        }

        [AsyncClientEvent("Server:Login:resetPW")]
        public void resetPW(IPlayer client, string password) {
            if (client is not {Exists: true}) return;
            
            User.SetPlayerPassword(client, BCrypt.Net.BCrypt.HashPassword(password));
            client.EmitLocked("Client:Login:showArea", "login");
        }

        [AsyncClientEvent("Server:Charselector:PreviewCharacter")]
        public void PreviewCharacter(IPlayer client, int charid) {
            if (client is not {Exists: true}) return;

            client.EmitLocked("Client:Charselector:ViewCharacter", Characters.GetCharacterGender(charid),
                Characters.GetCharacterSkin("facefeatures", charid), Characters.GetCharacterSkin("headblendsdata", charid),
                Characters.GetCharacterSkin("headoverlays", charid));
        }

        public static void SendDataToCharselectorArea(IPlayer client) {
            if (client is not {Exists: true} || ((ClassicPlayer) client).accountId <= 0) return;

            var charArray = Characters.GetPlayerCharacters(client);

            lock (client) {
                if (client is not {Exists: true}) return;

                client.Position = new Position((float) 402.778, (float) -996.9758, -98);
            }

            client.EmitLocked("Client:Charselector:sendCharactersToCEF", charArray);
            client.EmitLocked("Client:Login:showArea", "charselect");
        }

        [AsyncClientEvent("Server:Charselector:spawnChar")]
        public async void CharacterSelectedSpawnPlace(ClassicPlayer client, string charcid) {
            if (client is not {Exists: true} || charcid == null || client.accountId <= 0 || User.GetPlayerAccountId(client) <= 0) return;

            var stopwatch = new Stopwatch();
            stopwatch.Start();
            var charid = Convert.ToInt32(charcid);
            if (charid <= 0) return;

            if (User.GetPlayerAccountId(client) != Characters.GetCharacterAccountId(charid)) {
                client.Kick("Login Fehler!");
                return;
            }

            var charName = Characters.GetCharacterName(charid);
            User.SetPlayerOnline(client, charid); //Online Feld = CharakterID

            lock (client) {
                if (client is not {Exists: true}) return;

                client.CharacterId = charid;
            }


            if (Characters.GetCharacterFirstJoin(charid) && Characters.GetCharacterFirstSpawnPlace(client, charid) == "unset") {
                Characters.SetCharacterFirstSpawnPlace(client, charid);
                CharactersInventory.AddCharacterItem(charid, "Bargeld", 10000, "inventory");
                CharactersInventory.AddCharacterItem(charid, "Tasche", 1, "inventory");
                Characters.SetCharacterBackpack(client, "Tasche");
                //client.SetClothes(5, 0, 0, 0);
                CharactersInventory.AddCharacterItem(charid, "Sandwich", 3, "backpack");
                CharactersInventory.AddCharacterItem(charid, "Wasser", 3, "backpack");
                CharactersInventory.AddCharacterItem(charid, "Tablet", 1, "inventory");
                CharactersInventory.AddCharacterItem(charid, "Smartphone", 1, "inventory");

                // First-Spawn Kleider
                /**if (!Characters.GetCharacterGender((int) client.GetCharacterMetaId())) {
                    //Männlich
                    Characters.SwitchCharacterClothes(client, 5048, false);
                    Characters.SwitchCharacterClothes(client, 7761, false);
                    Characters.SwitchCharacterClothes(client, 4860, false);
                    CharactersClothes.CreateCharacterOwnedClothes(client.CharacterId, 5048);
                    CharactersClothes.CreateCharacterOwnedClothes(client.CharacterId, 7761);
                    CharactersClothes.CreateCharacterOwnedClothes(client.CharacterId, 4860);
                } else {
                    //Weiblich
                    Characters.SwitchCharacterClothes(client, 17018, false);
                    Characters.SwitchCharacterClothes(client, 21383, false);
                    Characters.SwitchCharacterClothes(client, 27501, false);
                    CharactersClothes.CreateCharacterOwnedClothes(client.CharacterId, 17018);
                    CharactersClothes.CreateCharacterOwnedClothes(client.CharacterId, 21383);
                    CharactersClothes.CreateCharacterOwnedClothes(client.CharacterId, 27501);
                }**/
                
                Characters.CreateCharacterLastPos(charid, Constants.Positions.SpawnPos_Airport, 0);
                client.Rotation = Constants.Positions.SpawnRot_Airport;
            }
            
            if (!Characters.IsPlayerICWhitelisted(client.accountId)) {
                foreach (var admin in Alt.GetAllPlayers().ToList().Where(x => x.AdminLevel() > 1)) {
                    HUDHandler.SendNotification(admin, 3, 5000, "Es ist ein neuer User im Airport!");
                }
            }

            lock (client) {
                if (client is not {Exists: true}) return;

                client.Model = Characters.GetCharacterGender(charid) ? 0x9C9EFFD8 : 0x705E61F2;
            }

            client.EmitLocked("Client:ServerBlips:LoadAllBlips", ServerBlips.GetAllServerBlips());
            client.EmitLocked("Client:ServerMarkers:LoadAllMarkers", ServerBlips.GetAllServerMarkers());
            client.EmitLocked("Client:SpawnArea:setCharSkin", Characters.GetCharacterSkin("facefeatures", charid),
                Characters.GetCharacterSkin("headblendsdata", charid), Characters.GetCharacterSkin("headoverlays", charid));
            var dbPos = Characters.GetCharacterLastPosition(charid);
            dbPos.Z += 1f;

            lock (client) {
                if (client is not {Exists: true}) return;

                client.Position = dbPos;
                client.Spawn(dbPos, 0);
            }

            if (Characters.GetCharacterPedName(client.CharacterId) != "none" &&
                !string.IsNullOrWhiteSpace(Characters.GetCharacterPedName(client.CharacterId)))
                client.Model = Alt.Hash(Characters.GetCharacterPedName(client.CharacterId));

            lock (client) {
                if (client is not {Exists: true}) return;

                client.Dimension = Characters.GetCharacterLastDimension(charid);
                client.Health = (ushort) (Characters.GetCharacterHealth(charid) + 100);
                client.Armor = (ushort) Characters.GetCharacterArmor(charid);
            }

            HUDHandler.CreateHUDBrowser(client); //HUD erstellen
            WeatherHandler.SetRealWeather(client);
            Characters.SetCharacterCorrectClothes(client);
            Characters.SetCharacterLastLogin(charid, DateTime.Now);
            Characters.SetCharacterCurrentFunkFrequence(charid, null);
            Alt.Log($"Eingeloggt {client.Name}");
            AltAsync.Emit("PlayerLoggedIn", client, charid);
            AltAsync.Emit("SaltyChat:EnablePlayer", client);
            client.SetSyncedMetaData("NAME",
                User.GetPlayerUsername(client.accountId) + " | " +
                Characters.GetCharacterName((int) client.GetCharacterMetaId()));

            if (Characters.IsCharacterUnconscious(charid)) {

                lock (client) {
                    if (client is not {Exists: true}) return;
                    
                    client.Position = dbPos;
                    client.Spawn(dbPos, 0);
                    client.EmitLocked("Client:Inventory:PlayAnimation", "missheistfbi3b_ig8_2", "cower_loop_victim", -1, 1, false);
                    client.EmitLocked("Client:Deathscreen:openCEF");
                    client.SetPlayerIsUnconscious(true);
                }
            }

            if (Characters.IsCharacterFastFarm(charid)) {
                var fastFarmTime = Characters.GetCharacterFastFarmTime(charid) * 60000;
                client.EmitLocked("Client:Inventory:PlayEffect", "DrugsMichaelAliensFight", fastFarmTime);
                HUDHandler.SendNotification(client, 2, 2000, $"Du bist durch dein Koks noch {fastFarmTime} Minuten effektiver.");
            }

            ServerAnimations.RequestAnimationMenuContent(client);

            if (Characters.IsCharacterPhoneEquipped(charid) && CharactersInventory.ExistCharacterItem(charid, "Smartphone", "inventory") &&
                CharactersInventory.GetCharacterItemAmount(charid, "Smartphone", "inventory") > 0) {
                client.EmitLocked("Client:Smartphone:equipPhone", true, Characters.GetCharacterPhonenumber(charid),
                    Characters.IsCharacterPhoneFlyModeEnabled(charid), Characters.GetCharacterPhoneWallpaper(charid));
                Characters.SetCharacterPhoneEquipped(charid, true);
            } else if (!Characters.IsCharacterPhoneEquipped(charid) || !CharactersInventory.ExistCharacterItem(charid, "Smartphone", "inventory") ||
                       CharactersInventory.GetCharacterItemAmount(charid, "Smartphone", "inventory") <= 0) {
                client.EmitLocked("Client:Smartphone:equipPhone", false, Characters.GetCharacterPhonenumber(charid),
                    Characters.IsCharacterPhoneFlyModeEnabled(charid), Characters.GetCharacterPhoneWallpaper(charid));
                Characters.SetCharacterPhoneEquipped(charid, false);
            }
            
            client.SetStreamSyncedMetaData("sharedUsername", $"{charName} ({Characters.GetCharacterAccountId(charid)})");
            client.SetSyncedMetaData("ADMINLEVEL", client.AdminLevel());
            client.SetSyncedMetaData("PLAYER_SPAWNED", true);
            client.SetSyncedMetaData("IsUnconscious", client.IsUnconscious);
            client.SetSyncedMetaData("IsReviving", false);

            if (Characters.IsCharacterInJail(charid)) {
                HUDHandler.SendNotification(client, 1, 2500,
                    $"Du befindest dich noch {Characters.GetCharacterJailTime(charid)} Minuten im Gefängnis.", 8000);

                lock (client) {
                    if (client is not {Exists: true}) return;

                    client.Position = new Position(1691.4594f, 2565.7056f, 45.556763f);
                }

                if (Characters.GetCharacterGender(charid) == false) {
                    client.SetClothes(11, 5, 0, 0);
                    client.SetClothes(3, 5, 0, 0);
                    client.SetClothes(4, 7, 15, 0);
                    client.SetClothes(6, 7, 0, 0);
                    client.SetClothes(8, 1, 88, 0);
                }
            }

            client.updateTattoos();
            
            client.Emit("Client:SpawnArea:SwitchIn");
            stopwatch.Stop();
            if (stopwatch.Elapsed.Milliseconds > 30)
                Alt.Log($"{charid} - CharacterSelectedSpawnPlace benötigte {stopwatch.Elapsed.Milliseconds}ms");
            await Task.Delay(5000);
            ServerTattoos.GetAllTattoos(client);
        }
    }
}