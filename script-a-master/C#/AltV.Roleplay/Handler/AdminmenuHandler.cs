using System;
using System.Linq;
using AltV.Net;
using AltV.Net.Async;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;
using AltV.Net.Enums;
using Altv_Roleplay.Factories;
using Altv_Roleplay.Model;
using Altv_Roleplay.models;
using Altv_Roleplay.Utils;
using Newtonsoft.Json.Linq;

namespace Altv_Roleplay.Handler
{
    internal class AdminmenuHandler : IScript
    {
        [AsyncClientEvent("Server:AdminMenu:OpenMenu")]
        public void AdminmenuOpenMenu(IPlayer player) {
            try {
                if (player.AdminLevel() != 0) player.EmitLocked("Client:Adminmenu:OpenMenu");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:AdminMenu:CloseMenu")]
        public void AdminmenuCloseMenu(IPlayer player) {
            try {
                if (player.AdminLevel() != 0) player.EmitLocked("Client:Adminmenu:CloseMenu");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:AdminMenu:DoAction")]
        public void AdminmenuDoAction(IPlayer player, string action, string info, string addinfo, string inputvalue) {
            try {
                if (player.AdminLevel() != 0)
                    switch (action) {
                        // PLAYER
                        case "noclip":
                            if (player.AdminLevel() < 4) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            player.EmitLocked("Client:AdminMenu:Noclip", info);

                            var text = "";
                            if (info == "on") text = " hat **NoClip** angemacht.";
                            else text = " hat **NoClip** ausgemacht.";
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + text);
                            break;
                        case "unsichtbar":
                            if (player.AdminLevel() < 4) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            if (player.Visible) player.Visible = false;
                            else player.Visible = true;

                            if (info == "on") text = " hat sich **unsichtbar** gemacht.";
                            else text = " hat sich **sichtbar** gemacht.";
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + text);
                            break;
                        case "adminoutfit":
                            if (player.AdminLevel() < 3) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            SetAdminClothes(player, info);

                            if (info == "on") text = " hat sich das **Adminoutfit angezogen**.";
                            else text = " hat sich das **Adminoutfit ausgezogen**.";
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + text);
                            break;
                        case "godmode":
                            if (player.AdminLevel() < 5) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            player.EmitLocked("Client:AdminMenu:Godmode", info);

                            if (info == "on") text = " hat den **Godmode** angemacht.";
                            else text = " hat den **Godmode** ausgemacht.";
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + text);
                            break;
                        case "heilen":
                            if (player.AdminLevel() < 4) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            player.ClearBloodDamage();
                            player.Health = 200;

                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sich **geheilt**.");
                            break;
                        case "wiederbeleben":
                            if (player.AdminLevel() < 4) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            DeathHandler.revive(player);

                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sich **wiederbelebt**.");
                            break;
                        // ONLINE
                        case "spieler_kicken":
                            if (player.AdminLevel() < 3) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            var kickedPlayer = Alt.GetAllPlayers().ToList()
                                .FirstOrDefault(x => User.GetPlayerUsername(((ClassicPlayer) x).accountId) == addinfo);

                            if (player.AdminLevel() <= kickedPlayer.AdminLevel()) {
                                HUDHandler.SendNotification(player, 4, 3000,
                                    "Du kannst " + Characters.GetCharacterName((int) kickedPlayer.GetCharacterMetaId()) + " nicht kicken!");
                                break;
                            }

                            if (string.IsNullOrWhiteSpace(inputvalue)) {
                                kickedPlayer.kickWithMessage("Du wurdest von einem Teammitglied gekickt.");
                                DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                    Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat " +
                                    Characters.GetCharacterName((int) kickedPlayer.GetCharacterMetaId()) + " **gekickt**.");
                            } else {
                                kickedPlayer.kickWithMessage("Du wurdest von einem Teammitglied gekickt. Grund: " + inputvalue);
                                DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                    Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat " +
                                    Characters.GetCharacterName((int) kickedPlayer.GetCharacterMetaId()) + " **gekickt**. Grund: " + inputvalue);
                            }

                            break;
                        case "spieler_bannen":
                            if (player.AdminLevel() < 4) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            var bannedPlayer = Alt.GetAllPlayers().ToList()
                                .FirstOrDefault(x => User.GetPlayerUsername(((ClassicPlayer) x).accountId) == addinfo);

                            if (player.AdminLevel() <= bannedPlayer.AdminLevel()) {
                                HUDHandler.SendNotification(player, 4, 3000,
                                    "Du kannst " + Characters.GetCharacterName((int) bannedPlayer.GetCharacterMetaId()) + " nicht bannen!");
                                break;
                            }

                            if (string.IsNullOrWhiteSpace(inputvalue)) {
                                User.SetPlayerBanned(((ClassicPlayer) bannedPlayer).accountId, true,
                                    $"Gebannt von {Characters.GetCharacterName(User.GetPlayerOnline(player))}");
                                if (bannedPlayer != null) bannedPlayer.Kick("Du wurdest von einem Teammitglied gebannt.");
                                DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                    Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat " +
                                    Characters.GetCharacterName((int) bannedPlayer.GetCharacterMetaId()) + " **gebannt**.");
                            } else {
                                User.SetPlayerBanned(((ClassicPlayer) bannedPlayer).accountId, true,
                                    $"Gebannt von {Characters.GetCharacterName(User.GetPlayerOnline(player))}. Grund: " + inputvalue);
                                if (bannedPlayer != null) bannedPlayer.Kick("Du wurdest von einem Teammitglied gebannt. Grund: " + inputvalue);
                                DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                    Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat " +
                                    Characters.GetCharacterName((int) bannedPlayer.GetCharacterMetaId()) + " **gebannt**. Grund: " + inputvalue);
                            }

                            break;
                        case "spieler_einfrieren":
                            if (player.AdminLevel() < 4) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            var kickedPlayerr = Alt.GetAllPlayers().ToList()
                                .FirstOrDefault(x => User.GetPlayerUsername(((ClassicPlayer) x).accountId) == addinfo);
                            AltAsync.EmitAllClients("Client:AdminMenu:SetFreezed", kickedPlayerr, info);

                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat " +
                                Characters.GetCharacterName((int) kickedPlayerr.GetCharacterMetaId()) + " **eingefroren**.");
                            break;
                        case "spieler_spectaten":
                            if (player.AdminLevel() < 4) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            var spectatedPlayer = Alt.GetAllPlayers().ToList()
                                .FirstOrDefault(x => User.GetPlayerUsername(((ClassicPlayer) x).accountId) == addinfo);
                            player.EmitLocked("Client:AdminMenu:Spectate", spectatedPlayer, info);

                            if (info == "on") {
                                text = " **spectated** nun " + Characters.GetCharacterName((int) spectatedPlayer.GetCharacterMetaId());
                                AltAsync.EmitAllClients("Client:AdminMenu:SetInvisible", player, "on");
                            } else {
                                text = " hat aufgehört, " + Characters.GetCharacterName((int) spectatedPlayer.GetCharacterMetaId()) +
                                       " **spectaten**.";
                                AltAsync.EmitAllClients("Client:AdminMenu:SetInvisible", player, "off");
                            }

                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + text);
                            break;
                        case "spieler_heilen":
                            if (player.AdminLevel() < 4) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            var HealedPlayer = Alt.GetAllPlayers().ToList()
                                .FirstOrDefault(x => User.GetPlayerUsername(((ClassicPlayer) x).accountId) == addinfo);
                            HealedPlayer.ClearBloodDamage();
                            HealedPlayer.Health = 200;

                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat " +
                                Characters.GetCharacterName((int) HealedPlayer.GetCharacterMetaId()) + " **geheilt**.");
                            break;
                        case "spieler_wiederbeleben":
                            if (player.AdminLevel() < 4) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            var RevivedPlayer = Alt.GetAllPlayers().ToList()
                                .FirstOrDefault(x => User.GetPlayerUsername(((ClassicPlayer) x).accountId) == addinfo);
                            DeathHandler.revive(RevivedPlayer);

                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat " +
                                Characters.GetCharacterName((int) RevivedPlayer.GetCharacterMetaId()) + " **wiederbelebt**.");
                            break;
                        case "tp_zu_spieler":
                            if (player.AdminLevel() < 3) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            var TeleportToPlayer = Alt.GetAllPlayers().ToList()
                                .FirstOrDefault(x => User.GetPlayerUsername(((ClassicPlayer) x).accountId) == addinfo);
                            player.Position = new Position(TeleportToPlayer.Position.X, TeleportToPlayer.Position.Y, TeleportToPlayer.Position.Z);

                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sich zu " +
                                Characters.GetCharacterName((int) TeleportToPlayer.GetCharacterMetaId()) + " **teleportiert**.");
                            break;
                        case "spieler_zu_mir_tp":
                            if (player.AdminLevel() < 3) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            var TeleportPlayer = Alt.GetAllPlayers().ToList()
                                .FirstOrDefault(x => User.GetPlayerUsername(((ClassicPlayer) x).accountId) == addinfo);
                            TeleportPlayer.Position = new Position(player.Position.X, player.Position.Y, player.Position.Z);

                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat " +
                                Characters.GetCharacterName((int) TeleportPlayer.GetCharacterMetaId()) + " zu sich **teleportiert**.");
                            break;
                        case "item_geben":
                            if (player.AdminLevel() < 4) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }

                            if (string.IsNullOrWhiteSpace(inputvalue)) break;

                            if (!ServerItems.ExistItem(ServerItems.ReturnNormalItemName(inputvalue))) {
                                HUDHandler.SendNotification(player, 4, 5000, $"Itemname nicht gefunden: {inputvalue}");
                                break;
                            }

                            var GiveItemPlayer = Alt.GetAllPlayers().ToList()
                                .FirstOrDefault(x => User.GetPlayerUsername(((ClassicPlayer) x).accountId) == addinfo);

                            CharactersInventory.AddCharacterItem((int) GiveItemPlayer.GetCharacterMetaId(), inputvalue, 1, "inventory");
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat " +
                                Characters.GetCharacterName((int) GiveItemPlayer.GetCharacterMetaId()) + " das **Item " + inputvalue +
                                " gegeben**.");
                            break;
                        case "adminlevel_geben":
                            if (player.AdminLevel() < 5) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }

                            if (string.IsNullOrWhiteSpace(inputvalue)) break;

                            var GiveAdminPlayer = Alt.GetAllPlayers().ToList()
                                .FirstOrDefault(x => User.GetPlayerUsername(((ClassicPlayer) x).accountId) == addinfo);

                            if (!int.TryParse(inputvalue, out var newinputvaluea)) {
                                HUDHandler.SendNotification(player, 4, 5000, "Du musst eine Zahl angeben");
                                break;
                            }

                            User.SetPlayerAdminLevel(((ClassicPlayer) GiveAdminPlayer).accountId, newinputvaluea);

                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat " +
                                Characters.GetCharacterName((int) GiveAdminPlayer.GetCharacterMetaId()) + " **Adminlevel " + newinputvaluea +
                                "** zugewiesen.");
                            break;
                        // MISC
                        case "zum_wegpunkt":
                            if (player.AdminLevel() < 4) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            player.Emit("Client:AdminMenu:GetWaypointInfo");
                            break;
                        case "nametags":
                            if (player.AdminLevel() < 4) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            player.Emit("Client:Adminmenu:ToggleNametags", info);
                            string infoString = null;

                            if (info == "on")
                                infoString = "eingeblendet";
                            else
                                infoString = "ausgeblendet";

                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sich die Nametags " + infoString + "!");
                            break;
                        case "spieler_auf_der_karte_anzeigen":
                            if (player.AdminLevel() < 5) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            player.Emit("Client:Adminmenu:TogglePlayerBlips", info);
                            string info2String = null;

                            if (info == "on")
                                info2String = "eingeblendet";
                            else
                                info2String = "ausgeblendet";

                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sich die Playerblips " + info2String + "!");
                            break;
                        // FARHEUG
                        case "fahrzeug_spawnen":
                            if (player.AdminLevel() < 5) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }

                            if (string.IsNullOrWhiteSpace(inputvalue)) break;

                            try {
                                var veh = Alt.CreateVehicle(inputvalue, player.Position, player.Rotation);
                                veh.EngineOn = true;
                                veh.LockState = VehicleLockState.Unlocked;
                                player.EmitLocked("Client:Utilities:setIntoVehicle", veh);
                                DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                    Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sich das **Fahrzeug " + inputvalue +
                                    " gespawnt**");
                                break;
                            }
                            catch (Exception) {
                                HUDHandler.SendNotification(player, 4, 2000, "Dieses Fahrzeug existiert nicht");
                                break;
                            }
                        case "reparieren":
                            if (player.AdminLevel() < 5) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            if (player.Vehicle == null || !player.Vehicle.Exists) break;

                            ServerVehicles.SetVehicleEngineHealthy(player.Vehicle, true);
                            player.Vehicle.SetVehicleTrunkState(false);
                            player.Vehicle.SetVehicleEngineHoodState(false);
                            AltAsync.EmitAllClients("Client:Utilities:repairVehicle", player.Vehicle);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Fahrzeug repariert**");
                            break;
                        case "fahrzeug_löschen":
                            if (player.AdminLevel() < 5) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }

                            if (player.Vehicle == null || !player.Vehicle.Exists || !player.IsInVehicle) break;

                            try {
                                player.Vehicle.Remove();
                            }
                            catch (Exception e) {
                                Alt.Log(e.ToString());
                            }

                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Fahrzeug gelöscht**");
                            break;
                        case "fahrzeugmotor_an_ausschalten":
                            if (player.Vehicle == null || !player.Vehicle.Exists) break;

                            if (!player.Vehicle.EngineOn) player.Vehicle.EngineOn = true;
                            else player.Vehicle.EngineOn = false;
                            break;
                        // PEDS
                        case "zurücksetzen":
                            if (!Characters.GetCharacterGender((int) player.GetCharacterMetaId())) player.Model = Alt.Hash("mp_m_freemode_01");
                            else player.Model = Alt.Hash("mp_f_freemode_01");

                            Characters.SetCharacterCorrectClothes(player);

                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Outfit zurückgesetzt**");
                            break;
                        case "a_c_boar":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_cat_01":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_chickenhawk":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_chimp":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_chop":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_cormorant":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_cow":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_coyote":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_crow":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_deer":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_dolphin":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_fish":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_sharkhammer":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_hen":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_humpback":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_husky":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_killerwhale":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_mtlion":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_pig":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_pigeon":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_poodle":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_pug":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_rabbit_01":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_rat":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_retriever":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_rhesus":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_rottweiler":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_seagull":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_shepherd":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_stingray":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_sharktiger":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_westy":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "a_c_panther":
                            player.Model = Alt.Hash(action);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + action + " geändert**");
                            break;
                        case "other":
                            if (string.IsNullOrWhiteSpace(inputvalue)) break;

                            try {
                                player.Model = Alt.Hash(inputvalue);
                                DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                    Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sein **Model zu " + inputvalue +
                                    " geändert**");
                                break;
                            }
                            catch (Exception) {
                                HUDHandler.SendNotification(player, 4, 2000, "Dieses Model existiert nicht");
                                break;
                            }
                        // SERVER
                        case "ankündigung":
                            if (player.AdminLevel() < 4) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }

                            if (string.IsNullOrWhiteSpace(inputvalue)) break;

                            foreach (var client in Alt.GetAllPlayers()) {
                                if (client == null || !client.Exists) continue;

                                HUDHandler.SendNotification(client, 4, 5000, inputvalue);
                            }

                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat eine Ankündigung gemacht: **" + inputvalue +
                                "**");
                            break;
                        case "account_aktivieren":
                            if (player.AdminLevel() < 2) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }

                            if (string.IsNullOrWhiteSpace(inputvalue)) break;

                            if (!User.ExistPlayerName(inputvalue)) {
                                HUDHandler.SendNotification(player, 4, 3000, $"Benutzername {inputvalue} wurde nicht gefunden");
                                break;
                            }

                            if (User.IsPlayerTSWhitelisted(inputvalue)) {
                                HUDHandler.SendNotification(player, 4, 3000, $"Spieler {inputvalue} ist bereits gewhitelisted");
                                break;
                            }

                            User.SetPlayerTSWhitelistState(User.GetPlayerAccountIdByUsername(inputvalue), true);
                            HUDHandler.SendNotification(player, 1, 3000, inputvalue + " wurde erfolgreich gewhitelisted");

                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat **" + inputvalue + " gewhitelistet**");
                            break;
                        case "einreisen":
                            if (player.AdminLevel() < 2) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }

                            if (string.IsNullOrWhiteSpace(inputvalue)) break;

                            if (!Characters.ExistCharacterName(inputvalue)) {
                                HUDHandler.SendNotification(player, 4, 3000, $"Benutzername {inputvalue} wurde nicht gefunden");
                                break;
                            }

                            if (Characters.IsPlayerICWhitelisted(inputvalue)) {
                                HUDHandler.SendNotification(player, 4, 3000, $"Spieler {inputvalue} ist bereits gewhitelisted");
                                break;
                            }

                            Characters.SetPlayerICWhitelistState(Characters.GetCharacterIdFromCharName(inputvalue), true);

                            var playerEntry = Alt.GetAllPlayers().ToList().FirstOrDefault(x =>
                                ((ClassicPlayer) x).CharacterId == Characters.GetCharacterIdFromCharName(inputvalue));
                            
                            TownhallHandler.tryCreateIdentityCardApplyForm(playerEntry);
                            
                            HUDHandler.SendNotification(player, 1, 3000, inputvalue + " darf nun einreisen");

                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat **" + inputvalue + " gewhitelistet**");
                            break;
                        case "tp_airport":
                            if (player.AdminLevel() < 2) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }

                            player.Position = Constants.Positions.AdminPos_Airport;
                            player.Rotation = Constants.Positions.AdminRot_Airport;
                            break;
                        case "fahrzeug_einparken":
                            if (player.AdminLevel() < 4) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }
                            
                            if (string.IsNullOrWhiteSpace(inputvalue)) break;

                            var vehicle = Alt.GetAllVehicles().ToList().FirstOrDefault(x =>
                                x != null && x.Exists && x.HasVehicleId() && (int) x.GetVehicleId() > 0 &&
                                x.NumberplateText.ToLower() == inputvalue.ToLower());

                            if (vehicle == null) {
                                HUDHandler.SendNotification(player, 4, 2000, $"Fahrzeug mit dem Kennzeichen {inputvalue} existiert nicht");
                                break;
                            }

                            if (!vehicle.Exists) break;

                            var currentGarageId2 = ServerVehicles.GetVehicleGarageId(vehicle);
                            if (currentGarageId2 <= 0) return;

                            ServerVehicles.SetVehicleInGarage(vehicle, true, currentGarageId2);
                            var plate = vehicle.NumberplateText;
                            HUDHandler.SendNotification(player, 4, 5000,
                                $"Fahrzeug mit dem Kennzeichen {plate} in Garage {currentGarageId2} ({ServerGarages.GetGarageName(currentGarageId2)}) eingeparkt");

                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat das **Fahrzeug mit dem Kennzeichen " +
                                inputvalue + " eingeparkt**");
                            break;
                        case "alle_fahrzeuge_einparken":
                            if (player.AdminLevel() < 8) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }

                            var count = 0;

                            foreach (var veh in Alt.GetAllVehicles().ToList().Where(x => x != null && x.Exists && x.HasVehicleId())) {
                                if (veh == null || !veh.Exists || !veh.HasVehicleId()) continue;

                                var currentGarageId = ServerVehicles.GetVehicleGarageId(veh);
                                if (currentGarageId <= 0) continue;

                                ServerVehicles.SetVehicleInGarage(veh, true, currentGarageId);
                                count++;
                            }

                            HUDHandler.SendNotification(player, 1, 3500, $"{count} Fahrzeuge eingeparkt");
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat ** alle Fahrzeuge (" + count +
                                ") eingeparkt**");
                            break;
                        case "fahrzeuginhaber_finden":
                            if (string.IsNullOrWhiteSpace(inputvalue)) break;

                            var fvehicle = Alt.GetAllVehicles().ToList().FirstOrDefault(x =>
                                x != null && x.Exists && x.HasVehicleId() && (int) x.GetVehicleId() > 0 &&
                                x.NumberplateText.ToLower() == inputvalue.ToLower());

                            if (fvehicle == null) {
                                HUDHandler.SendNotification(player, 4, 2000, $"Fahrzeug mit dem Kennzeichen {inputvalue} existiert nicht");
                                break;
                            }

                            var ownerId = ServerVehicles.GetVehicleOwner(fvehicle);
                            var findvehownermsg = "AccId: " + User.GetPlayerByCharId(ownerId).playerid + " | CharId: " + ownerId +
                                                  " | Benutzername: " + User.GetPlayerUsername(User.GetPlayerByCharId(ownerId).playerid) +
                                                  " | Name: " + Characters.GetCharacterName(ownerId);
                            HUDHandler.SendNotification(player, 1, 10000, findvehownermsg);
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) +
                                " nach dem Besitzer des Fahrzeuges mit dem Kennzeichen " + inputvalue + " gesucht.\nResultat: **" +
                                findvehownermsg + "**");
                            break;
                        case "hardwareid_zurücksetzen":
                            if (player.AdminLevel() < 5) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }

                            if (string.IsNullOrWhiteSpace(inputvalue)) break;

                            if (!User.ExistPlayerName(inputvalue)) {
                                HUDHandler.SendNotification(player, 4, 3000, $"Benutzername {inputvalue} wurde nicht gefunden");
                                break;
                            }

                            User.ResetPlayerHardwareID(User.GetPlayerAccountIdByUsername(inputvalue));
                            HUDHandler.SendNotification(player, 1, 3000, "Hardware-ID von " + inputvalue + " wurde erfolgreich zurückgesetzt");
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat die **Hardware-ID von " + inputvalue +
                                " wurde zurückgesetzt**");
                            break;
                        case "socialclubid_zurücksetzen":
                            if (player.AdminLevel() < 5) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }

                            if (string.IsNullOrWhiteSpace(inputvalue)) break;

                            if (!User.ExistPlayerName(inputvalue)) {
                                HUDHandler.SendNotification(player, 4, 3000, $"Benutzername {inputvalue} wurde nicht gefunden");
                                break;
                            }

                            User.ResetPlayerSocialID(User.GetPlayerAccountIdByUsername(inputvalue));
                            HUDHandler.SendNotification(player, 1, 3000, "Socialclub-ID von " + inputvalue + " wurde erfolgreich zurückgesetzt");
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat die **Socialclub-ID von " + inputvalue +
                                " wurde zurückgesetzt**");
                            break;
                        case "passwort_zurücksetzen":
                            if (player.AdminLevel() < 5) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }

                            if (string.IsNullOrWhiteSpace(inputvalue)) break;

                            if (!User.ExistPlayerName(inputvalue)) {
                                HUDHandler.SendNotification(player, 4, 3000, $"Benutzername {inputvalue} wurde nicht gefunden");
                                break;
                            }

                            User.ResetPasswort(User.GetPlayerAccountIdByUsername(inputvalue));
                            HUDHandler.SendNotification(player, 1, 3000, "Passwort von " + inputvalue + " wurde erfolgreich zurückgesetzt");
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat das **Passwort von " + inputvalue +
                                " wurde zurückgesetzt**");
                            break;
                        case "spieler_entbannen":
                            if (player.AdminLevel() < 4) {
                                HUDHandler.SendNotification(player, 4, 3000, "Dazu hast du keine Rechte!");
                                break;
                            }

                            if (string.IsNullOrWhiteSpace(inputvalue)) break;
                            
                            if (!User.ExistPlayerName(inputvalue)) {
                                HUDHandler.SendNotification(player, 4, 3000, $"Benutzername {inputvalue} wurde nicht gefunden");
                                break;
                            }

                            int unbannedPlayer = User.GetPlayerAccountIdByUsername(inputvalue);
                            User.SetPlayerBanned(unbannedPlayer, false, $"Entbannt von {Characters.GetCharacterName(User.GetPlayerOnline(player))}");
                            DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs", 
                                Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat " + 
                                User.GetPlayerUsername(unbannedPlayer) + " **entbannt**.");
                            break;
                        // DEFAULT
                        default:
                            Console.WriteLine("Missing Adminmenu Action: " + action);
                            break;
                    }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:AdminMenu:RequestAllOnlinePlayers")]
        public void RequestAllOnlinePlayers(IPlayer player) {
            try {
                if (player.AdminLevel() != 0)
                    try {
                        dynamic array = new JArray();
                        dynamic entry = new JObject();

                        foreach (var plr in Alt.GetAllPlayers().Where(p => p != null && p.Exists)) {
                            if (((ClassicPlayer) plr).accountId == 0 || (int) plr.GetCharacterMetaId() == 0 ||
                                Characters.GetCharacterName((int) plr.GetCharacterMetaId()) == "SYSTEM" ||
                                User.GetPlayerUsername(((ClassicPlayer) plr).accountId) == "Undefined") continue;

                            entry = new JObject();
                            entry.accid = ((ClassicPlayer) plr).accountId;
                            entry.charid = (int) plr.GetCharacterMetaId();
                            entry.fullname = Characters.GetCharacterName((int) plr.GetCharacterMetaId());
                            entry.username = User.GetPlayerUsername(((ClassicPlayer) plr).accountId);
                            array.Add(entry);
                        }

                        player.Emit("Client:AdminMenu:SendAllOnlinePlayers", array.ToString());
                    }
                    catch (Exception e) {
                        Alt.Log($"{e}");
                    }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:AdminMenu:TeleportWaypoint")]
        public void TeleportWaypoint(IPlayer player, int x, int y, int z) {
            try {
                if (player.AdminLevel() != 0)
                    try {
                        player.Position = new Position(x, y, z);
                        DiscordLog.DiscordLog.SendEmbed("adminmenu", "Adminmenu Logs",
                            Characters.GetCharacterName((int) player.GetCharacterMetaId()) + " hat sich **zum Wegpunkt teleportiert**.");
                    }
                    catch (Exception e) {
                        Alt.Log($"{e}");
                    }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:AdminMenu:GetPlayer")]
        public void GetPlayer(IPlayer player, string reason, string username, string other) {
            try {
                if (player.AdminLevel() != 0) {
                    var GetPlayerPlayer = Alt.GetAllPlayers().ToList()
                        .FirstOrDefault(x => User.GetPlayerUsername(((ClassicPlayer) x).accountId) == username);
                    if (reason == "GetPlayerMeta") player.Emit("Client:Adminmenu:ReceiveMeta", GetPlayerPlayer);
                    else if (reason == "SetMeta") player.Emit("Client:Adminmenu:SetMetaDef", GetPlayerPlayer, other);
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static void SetAdminClothes(IPlayer player, string info) {
            if (info == "on") {
                if (!Characters.GetCharacterGender((int) player.GetCharacterMetaId())) {
                    //Männlich
                    player.SetClothes(1, 135, 2, 0);
                    player.SetClothes(4, 114, 2, 0);
                    player.SetClothes(6, 78, 2, 0);
                    player.SetClothes(3, 3, 0, 0);
                    player.SetClothes(11, 287, 2, 0);
                    player.SetClothes(8, 1, 99, 0);
                } else {
                    //Weiblich
                    player.SetClothes(1, 135, 2, 0);
                    player.SetClothes(11, 300, 2, 0);
                    player.SetClothes(4, 121, 2, 0);
                    player.SetClothes(3, 8, 0, 0);
                    player.SetClothes(8, 1, 99, 0);
                    player.SetClothes(6, 82, 2, 0);
                }
            } else if (info == "off") {
                Characters.SetCharacterCorrectClothes(player);
            }
        }
    }
}