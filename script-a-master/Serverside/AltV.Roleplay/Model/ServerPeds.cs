using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using AltV.Net;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;
using Altv_Roleplay.Handler;
using Altv_Roleplay.models;

namespace Altv_Roleplay.Model
{
    internal class ServerPeds
    {
        public static List<Server_Peds> ServerPeds_ = new();

        public static void CreateServerPed(IPlayer client, string model, Position pos, float rotation) {
            if (client == null || !client.Exists) return;

            var ServerPedData = new Server_Peds {
                model = model,
                posX = pos.X,
                posY = pos.Y,
                posZ = pos.Z,
                rotation = rotation
            };

            try {
                ServerPeds_.Add(ServerPedData);

                using (var db = new gtaContext()) {
                    db.Server_Peds.Add(ServerPedData);
                    db.SaveChanges();
                }

                HUDHandler.SendNotification(client, 2, 5000, $"Ped mit dem Model ({ServerPedData.model}) an deiner Position erstellt.");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static string GetAllServerPeds() {
            var items = ServerPeds_.Select(x => new {
                x.model,
                x.posX,
                x.posY,
                x.posZ,
                x.rotation
            }).ToList();

            return JsonSerializer.Serialize(items);
        }
    }
}