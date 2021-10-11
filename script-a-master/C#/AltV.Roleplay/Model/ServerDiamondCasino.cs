/**using System.Collections.Generic;
using System.Linq;
using AltV.Net;
using Altv_Roleplay.models;

namespace Altv_Roleplay.Model
{
    public class ServerDiamondCasino : IScript
    {
        public static List<Server_Diamond_Casino> DiamondCasino = new();

        public static void setPodiumVehicle(string podiumVehicle) {
            using (var db = new gtaContext()) {
                DiamondCasino = new List<Server_Diamond_Casino>(db.Server_Diamond_Casino);

                foreach (var casino in DiamondCasino) {
                    casino.podiumVehicle = podiumVehicle;
                    Alt.SetSyncedMetaData("podiumVehicle", podiumVehicle);
                    db.Server_Diamond_Casino.Update(casino);
                    db.SaveChanges();
                }
            }
        }
        
        public static string getPodiumVehicle() {
            using (var db = new gtaContext()) {
                DiamondCasino = new List<Server_Diamond_Casino>(db.Server_Diamond_Casino);

                return DiamondCasino.First().podiumVehicle.ToLower();
            }
        }
    }
}**/