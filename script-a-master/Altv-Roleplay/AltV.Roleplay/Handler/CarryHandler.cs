using System.Threading.Tasks;
using AltV.Net;
using AltV.Net.Async;
using Altv_Roleplay.Factories;

namespace Altv_Roleplay.Handler
{
    internal class CarryHandler : IScript
    {
        [AsyncClientEvent("Server:CarryPlayer")]
        public async Task CarryPlayer(ClassicPlayer player, ClassicPlayer targetPlayer) {
            targetPlayer.GetSyncedMetaData("isOnHands", out bool isOnHands);

            if (!isOnHands) {
                await targetPlayer.SetSyncedMetaDataAsync("isOnHands", true);
                targetPlayer.SetNetworkOwner(player, false);
                AltAsync.EmitAllClients("Client:Carry", player, targetPlayer);
            } else {
                await targetPlayer.SetSyncedMetaDataAsync("isOnHands", false);
                targetPlayer.SetNetworkOwner(targetPlayer, false);
                AltAsync.EmitAllClients("Client:Detach", player, targetPlayer);
            }
        }
    }
}