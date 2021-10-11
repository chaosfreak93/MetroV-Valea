using System;
using System.Threading.Tasks;
using AltV.Net;
using AltV.Net.Async;
using AltV.Net.Elements.Entities;
using Altv_Roleplay.Handler;
using Altv_Roleplay.Model;
using Altv_Roleplay.Utils;

namespace Altv_Roleplay.Factions.LSMD
{
    public class Functions : IScript
    {
        [AsyncClientEvent("Server:Raycast:RevivePlayer")]
        public async void RevivePlayer(IPlayer player, IPlayer targetPlayer) {
            try {
                if (player == null || !player.Exists || targetPlayer == null || !targetPlayer.Exists) return;

                var targetId = (int) targetPlayer.GetCharacterMetaId();
                var charId = (int) player.GetCharacterMetaId();
                if (charId <= 0 || targetId <= 0 || !Characters.IsCharacterUnconscious(targetId)) return;

                if (!CharactersInventory.ExistCharacterItem(charId, "Defibrilator", "inventory") &&
                    !CharactersInventory.ExistCharacterItem(charId, "Defibrilator", "backpack")) {
                    HUDHandler.SendNotification(player, 3, 3500, "Du hast keinen Defibrilator dabei.");
                    return;
                }

                player.SetSyncedMetaData("IsReviving", true);
                targetPlayer.SetSyncedMetaData("IsReviving", true);
                player.EmitLocked("Client:Inventory:PlayAnimation", "missheistfbi3b_ig8_2", "cpr_loop_paramedic", -1, 1, false);
                targetPlayer.EmitLocked("Client:Inventory:PlayAnimation", "missheistfbi3b_ig8_2", "cpr_loop_victim", -1, 1, false);
                var rnd = new Random().Next(1, 100);
                await Task.Delay(15000);

                if (rnd >= 1 && rnd <= 50) {
                    //Reanimation erfolgreich
                    player.SetSyncedMetaData("IsReviving", false);
                    targetPlayer.SetSyncedMetaData("IsReviving", false);
                    player.EmitLocked("Client:Inventory:StopAnimation");
                    targetPlayer.EmitLocked("Client:Inventory:StopAnimation");
                    if (targetId <= 0 || !Characters.IsCharacterUnconscious(targetId)) return;

                    Characters.SetCharacterUnconscious(targetId, false, 0);
                    DeathHandler.revive(targetPlayer);
                    Characters.SetCharacterHealth(targetId, 115);
                    targetPlayer.Health = 115;
                } else if (rnd >= 51 && rnd <= 100) {
                    //Reanimation nicht erfolgreich
                    player.SetSyncedMetaData("IsReviving", false);
                    targetPlayer.SetSyncedMetaData("IsReviving", false);
                    player.EmitLocked("Client:Inventory:StopAnimation");
                    targetPlayer.EmitLocked("Client:Inventory:PlayAnimation", "missheistfbi3b_ig8_2", "cower_loop_victim", -1, 1, false);
                    HUDHandler.SendNotification(player, 3, 3500, "Die Renimation war nicht erfolgreich, versuch es weiter!");
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:Raycast:healPlayer")]
        public async void HealPlayer(IPlayer player, IPlayer targetPlayer) {
            try {
                if (player == null || !player.Exists || targetPlayer == null || !targetPlayer.Exists) return;

                var targetId = (int) targetPlayer.GetCharacterMetaId();
                var charId = (int) player.GetCharacterMetaId();
                if (!player.Position.IsInRange(targetPlayer.Position, 3f)) return;
                if (charId <= 0 || targetId <= 0 || targetPlayer.Health >= 200) return;

                if (!CharactersInventory.ExistCharacterItem(charId, "Verbandskasten", "inventory") &&
                    !CharactersInventory.ExistCharacterItem(charId, "Verbandskasten", "backpack")) {
                    HUDHandler.SendNotification(player, 3, 2500, "Du hast keinen Verbandskasten dabei.");
                    return;
                }

                //ToDo: Animation abspielen
                await Task.Delay(4000);
                if (player == null || !player.Exists || targetPlayer == null || !targetPlayer.Exists) return;
                if (!player.Position.IsInRange(targetPlayer.Position, 3f)) return;

                Characters.SetCharacterHealth(charId, 200);
                targetPlayer.ClearBloodDamage();
                targetPlayer.Health = 200;
                HUDHandler.SendNotification(player, 2, 2000, "Spieler erfolgreich behandelt.");
                HUDHandler.SendNotification(targetPlayer, 1, 2000, "Ein Arzt hat dich behandelt.");

                if (CharactersInventory.ExistCharacterItem(charId, "Verbandskasten", "inventory"))
                    CharactersInventory.RemoveCharacterItemAmount(charId, "Verbandskasten", 1, "inventory");
                else if (CharactersInventory.ExistCharacterItem(charId, "Verbandskasten", "backpack"))
                    CharactersInventory.RemoveCharacterItemAmount(charId, "Verbandskasten", 1, "backpack");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }
    }
}