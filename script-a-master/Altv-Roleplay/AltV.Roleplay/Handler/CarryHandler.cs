using System.Threading.Tasks;
using AltV.Net;
using AltV.Net.Async;
using AltV.Net.Data;
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
                targetPlayer.AttachToEntity(player, 0, 0, new Position(0.5f, 0.5f, 0.0025f), new Rotation(0f, 0f, 0f), true, false);
            } else {
                await targetPlayer.SetSyncedMetaDataAsync("isOnHands", false);
                targetPlayer.Detach();
            }
        }
    }
}