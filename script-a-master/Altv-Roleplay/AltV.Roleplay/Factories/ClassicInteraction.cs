using System.Linq;
using System.Numerics;
using AltV.Net;
using AltV.Net.Async;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;
using AltV.Net.Interactions;
using Altv_Roleplay.Handler;
using Altv_Roleplay.Model;
using Altv_Roleplay.Utils;

namespace Altv_Roleplay.Factories
{
    public class ClassicInteraction : Interaction
    {
        public ClassicInteraction(ulong type, ulong id, Vector3 position, int dimension, uint range) : base(type, id, position, dimension, range) {
        }

        public override bool OnInteraction(IPlayer player, Vector3 interactionPosition, int interactionDimension) {
            var cPlayer = (ClassicPlayer) player;
            var charId = cPlayer.CharacterId;
            var serverDoorLockCol =
                ServerDoors.ServerDoorsLockColshapes_.FirstOrDefault(x => player.Position.IsInRange(x.Position, 6f));
            
            Alt.Log(serverDoorLockCol.ToString());

            if (serverDoorLockCol != null) {
                var doorColData = ServerDoors.ServerDoors_.FirstOrDefault(x => x.id == (int) serverDoorLockCol.Id);
                Alt.Log(doorColData.ToString());

                if (doorColData != null) {
                    var doorKey = doorColData.doorKey;
                    var doorKey2 = doorColData.doorKey2;
                    if (doorKey == null || doorKey2 == null) return false;
                    if (!CharactersInventory.ExistCharacterItem(charId, doorKey, "inventory") &&
                        !CharactersInventory.ExistCharacterItem(charId, doorKey, "backpack") &&
                        !CharactersInventory.ExistCharacterItem(charId, doorKey2, "inventory") &&
                        !CharactersInventory.ExistCharacterItem(charId, doorKey2, "backpack")) return false;

                    if (!doorColData.state)
                        HUDHandler.SendNotification(player, 4, 1500, "Tür abgeschlossen.");
                    else
                        HUDHandler.SendNotification(player, 2, 1500, "Tür aufgeschlossen.");

                    doorColData.state = !doorColData.state;
                    AltAsync.EmitAllClients("Client:DoorManager:ManageDoor", doorColData.doorHash, doorColData.doorHash2,
                        new Position(doorColData.posX, doorColData.posY, doorColData.posZ),
                        new Position(doorColData.posX2, doorColData.posY2, doorColData.posZ2), doorColData.state);
                }
            }
            return true;
        }
    }
}