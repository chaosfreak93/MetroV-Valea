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
            targetPlayer.GetSyncedMetaData("IsUnconscious", out bool IsUnconscious);
            targetPlayer.GetSyncedMetaData("HasFootCuffs", out bool HasFootCuffs);
            targetPlayer.GetStreamSyncedMetaData("isOnHands", out bool isOnHands);

            if (!isOnHands) {
                if (IsUnconscious) {
                    await targetPlayer.SetStreamSyncedMetaDataAsync("isOnHands", true);
                    targetPlayer.AttachToEntity(player, 0, 0, new Position(0.27f, 0.15f, 0.63f), new Rotation(0.5f, 0.5f, 180f), true, false);
                } else if (HasFootCuffs) {
                    await targetPlayer.SetStreamSyncedMetaDataAsync("isOnHands", true);
                    targetPlayer.AttachToEntity(player, 0, 0, new Position(0.5f, 0.5f, 0.0025f), new Rotation(0f, 0f, 0f), true, false);
                }
            } else {
                await targetPlayer.SetStreamSyncedMetaDataAsync("isOnHands", false);
                targetPlayer.Detach();
            }
        }
    }
}