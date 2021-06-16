using System;
using AltV.Net;
using AltV.Net.Async;
using AltV.Net.Elements.Entities;

namespace Altv_Roleplay.Handler
{
    internal class TriggerHandler : IScript
    {
        [AsyncClientEvent("Server:Farming:StartProcessing")]
        public void FarmingStartProcessing(IPlayer player, string neededItem, int neededItemAmount,
            string neededItemTWO, int neededItemTWOAmount, string neededItemTHREE, int neededItemTHREEAmount, string producedItem,
            int producedItemAmount, int duration) {
            try {
                FarmingHandler.ProduceItem(player, neededItem, neededItemAmount, neededItemTWO, neededItemTWOAmount,
                    neededItemTHREE, neededItemTHREEAmount, producedItem, producedItemAmount, duration);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [ScriptEvent(ScriptEventType.PlayerWeaponChange)]
        public bool WeaponChange(IPlayer player, uint oldWeapon, uint weapon) {
            player.Emit("Player:ChangeWeapon", player, weapon);
            return false;
        }
    }
}