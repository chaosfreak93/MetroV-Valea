using System;
using System.Linq;
using System.Threading.Tasks;
using AltV.Net;
using AltV.Net.Async;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;
using AltV.Net.Enums;
using AltV.Net.Resources.Chat.Api;
using Altv_Roleplay.Factories;
using Altv_Roleplay.Model;
using Altv_Roleplay.Utils;

namespace Altv_Roleplay.Handler
{
    internal class DeathHandler : IScript
    {
        [ScriptEvent(ScriptEventType.PlayerDead)]
        public bool OnPlayerDeath(ClassicPlayer player, IEntity killer, uint weapon) {
            try {
                if (player == null || !player.Exists) return false;

                var charId = (int) player.GetCharacterMetaId();
                if (charId <= 0) return false;
                if (Characters.IsCharacterUnconscious(charId)) return false;

                /**if (Characters.IsCharacterInJail(charId)) {
                    player.Spawn(new Position(1691.4594f, 2565.7056f, 45.556763f), 0);
                    player.Position = new Position(1691.4594f, 2565.7056f, 45.556763f);
                    return;
                }**/

                openDeathscreen(player);
                Characters.SetCharacterUnconscious(charId, true, 20); // Von 15 auf 20 geändert.
                ServerFactions.createFactionDispatch(player, 2, "HandyNotruf", "Eine Verletzte Person wurde gemeldet");

                AltAsync.Emit("Server:Smartphone:leaveRadioFrequence", player);
                AltAsync.Emit("SaltyChat:SetPlayerAlive", player, false);

                if (killer is ClassicVehicle) return true;
                var killerPlayer = (ClassicPlayer) killer;
                if (killer is not {Exists: true}) return false;

                var weaponModel = (WeaponModel) weapon;

                foreach (var p in Alt.GetAllPlayers().ToList()
                    .Where(x => x != null && x.Exists && ((ClassicPlayer) x).CharacterId > 0 && x.AdminLevel() > 0))
                    p.SendChatMessage(
                        $"{Characters.GetCharacterName(killerPlayer.CharacterId)} ({killerPlayer.CharacterId}) hat {Characters.GetCharacterName(player.CharacterId)} ({player.CharacterId}) getötet. Waffe: {weaponModel}");

                if (Enum.IsDefined(typeof(AntiCheat.forbiddenWeapons), (AntiCheat.forbiddenWeapons) weaponModel)) {
                    User.SetPlayerBanned(killerPlayer, true, $"Waffen Hack[2]: {weaponModel}");
                    killerPlayer.Kick("");
                    player.Health = 200;

                    foreach (var p in Alt.GetAllPlayers().ToList()
                        .Where(x => x != null && x.Exists && ((ClassicPlayer) x).CharacterId > 0 && x.AdminLevel() > 0))
                        p.SendChatMessage($"{Characters.GetCharacterName(killerPlayer.CharacterId)} wurde gebannt: Waffenhack[2] - {weaponModel}");

                    return false;
                }

                return true;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return false;
        }

        internal static async Task openDeathscreen(IPlayer player) {
            try {
                if (player == null || !player.Exists) return;

                var charId = (int) player.GetCharacterMetaId();
                if (charId <= 0) return;

                var pos = new Position(player.Position.X, player.Position.Y, player.Position.Z + 1);
                player.Spawn(pos);
                await Task.Delay(50);
                player.EmitLocked("Client:Inventory:PlayAnimation", "missheistfbi3b_ig8_2", "cower_loop_victim", -1, 1, false);
                player.EmitLocked("Client:Deathscreen:openCEF"); // Deathscreen öffnen
                player.SetPlayerIsUnconscious(true);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        internal static void closeDeathscreen(IPlayer player) {
            try {
                if (player == null || !player.Exists) return;

                var charId = (int) player.GetCharacterMetaId();
                if (charId <= 0) return;

                player.EmitLocked("Client:Deathscreen:closeCEF");
                player.SetPlayerIsUnconscious(false);
                player.SetPlayerIsFastFarm(false);
                player.EmitLocked("Client:Inventory:StopAnimation");
                Characters.SetCharacterUnconscious(charId, false, 0);
                Characters.SetCharacterFastFarm(charId, false, 0);
                player.EmitLocked("Client:Inventory:StopEffect", "DrugsMichaelAliensFight");
                AltAsync.Emit("SaltyChat:SetPlayerAlive", player, true);

                foreach (var item in CharactersInventory.CharactersInventory_.ToList().Where(x => x.charId == charId)) {
                    if (item.itemName.Contains("EC Karte") || item.itemName.Contains("Ausweis") || item.itemName.Contains("Fahrzeugschluessel") ||
                        ServerItems.GetItemType(ServerItems.ReturnNormalItemName(item.itemName)) == "clothes") continue;

                    CharactersInventory.RemoveCharacterItem(charId, item.itemName, item.itemLocation);
                }

                Characters.SetCharacterWeapon(player, "PrimaryWeapon", "None");
                Characters.SetCharacterWeapon(player, "PrimaryAmmo", 0);
                Characters.SetCharacterWeapon(player, "SecondaryWeapon2", "None");
                Characters.SetCharacterWeapon(player, "SecondaryWeapon", "None");
                Characters.SetCharacterWeapon(player, "SecondaryAmmo2", 0);
                Characters.SetCharacterWeapon(player, "SecondaryAmmo", 0);
                Characters.SetCharacterWeapon(player, "FistWeapon", "None");
                Characters.SetCharacterWeapon(player, "FistWeaponAmmo", 0);
                player.EmitLocked("Client:Smartphone:equipPhone", false, Characters.GetCharacterPhonenumber(charId),
                    Characters.IsCharacterPhoneFlyModeEnabled(charId), Characters.GetCharacterPhoneWallpaper(charId));
                Characters.SetCharacterPhoneEquipped(charId, false);
                player.RemoveAllWeaponsAsync();
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        internal static void revive(IPlayer player) {
            try {
                if (player == null || !player.Exists) return;

                var charId = (int) player.GetCharacterMetaId();
                if (charId <= 0) return;

                player.EmitLocked("Client:Deathscreen:closeCEF");
                player.SetPlayerIsUnconscious(false);
                player.EmitLocked("Client:Inventory:StopAnimation");
                Characters.SetCharacterUnconscious(charId, false, 0);
                AltAsync.Emit("SaltyChat:SetPlayerAlive", player, true);
                ServerFactions.SetFactionBankMoney(3, ServerFactions.GetFactionBankMoney(3) + 1500); //ToDo: Preis anpassen
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }
    }
}