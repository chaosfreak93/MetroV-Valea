using System;
using System.Collections.Generic;
using System.Linq;
using AltV.Net;
using Altv_Roleplay.models;

namespace Altv_Roleplay.Model
{
    internal class ServerAllVehicles
    {
        public static List<Server_All_Vehicles> ServerAllVehicles_ = new();

        public static int GetVehicleTaxes(long hash) {
            var tax = 0;
            if (hash <= 0) return tax;

            var veh = ServerAllVehicles_.FirstOrDefault(x => x.hash == hash);

            if (veh != null)
                tax = veh.tax;

            return tax;
        }

        public static string GetVehicleNameOnHash(long hash) {
            var vehName = "undefined";
            if (hash == 0) return vehName;

            var vehs = ServerAllVehicles_.FirstOrDefault(x => x.hash == hash);

            if (vehs != null)
                vehName = vehs.name;

            return vehName;
        }

        public static int GetVehicleClass(long hash) {
            try {
                if (hash <= 0) return 0;

                var vehs = ServerAllVehicles_.FirstOrDefault(x => x.hash == hash);

                if (vehs != null)
                    return vehs.vehClass;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }
    }
}