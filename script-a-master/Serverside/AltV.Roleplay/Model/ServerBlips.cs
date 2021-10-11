using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using Altv_Roleplay.models;

namespace Altv_Roleplay.Model
{
    internal class ServerBlips
    {
        public static List<Server_Blips> ServerBlips_ = new();
        public static List<Server_Markers> ServerMarkers_ = new();

        public static string GetAllServerBlips() {
            var items = ServerBlips_.Select(x => new {
                x.name,
                x.color,
                x.scale,
                x.shortRange,
                x.sprite,
                x.posX,
                x.posY,
                x.posZ
            }).ToList();

            return JsonSerializer.Serialize(items);
        }

        public static string GetAllServerMarkers() {
            var items = ServerMarkers_.Select(x => new {
                x.type,
                x.posX,
                x.posY,
                x.posZ,
                x.scaleX,
                x.scaleY,
                x.scaleZ,
                x.red,
                x.green,
                x.blue,
                x.alpha,
                x.bobUpAndDown
            }).ToList();

            return JsonSerializer.Serialize(items);
        }
    }
}