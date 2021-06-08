using System;
using System.Collections.Generic;
using AltV.Net;
using AltV.Net.Async;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;
using Altv_Roleplay.Handler;
using Altv_Roleplay.models;

namespace Altv_Roleplay.Model
{
    internal class ServerBanks
    {
        public static List<Server_Banks> ServerBanks_ = new();

        public static void CreateNewBank(IPlayer client, Position pos, string zoneName) {
            if (client == null || !client.Exists) return;

            var ServerBankData = new Server_Banks {
                posX = pos.X,
                posY = pos.Y,
                posZ = pos.Z,
                zoneName = zoneName
            };

            try {
                ServerBanks_.Add(ServerBankData);

                using (var db = new gtaContext()) {
                    db.Server_Banks.Add(ServerBankData);
                    db.SaveChanges();
                }

                HUDHandler.SendNotification(client, 2, 5000, $"Bank in der Zone ({ServerBankData.zoneName}) an deiner Position erstellt.");

                foreach (var player in Alt.Server.GetPlayers()) {
                    if (player == null || !player.Exists) return;

                    player.EmitLocked("Client:ServerBlips:AddNewBlip", "Bank", 2, 1, true, 605, pos.X, pos.Y, pos.Z);
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }
    }
}