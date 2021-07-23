﻿using System.Collections.Generic;
using System.Linq;
using AltV.Net.Data;
using Altv_Roleplay.models;

namespace Altv_Roleplay.Model
{
    internal class ServerGarages
    {
        public static List<Server_Garages> ServerGarages_ = new();
        public static List<Server_Garage_Slots> ServerGarageSlots_ = new();

        public static string GetGarageName(int garageID) {
            if (garageID == 0) return "Unbekannt";

            var garages = ServerGarages_.FirstOrDefault(g => g.id == garageID);

            if (garages != null)
                return garages.name;

            return "Unbekannt";
        }

        public static int GetGarageType(int garageID) {
            if (garageID == 0) return -1;

            var garages = ServerGarages_.FirstOrDefault(g => g.id == garageID);

            if (garages != null)
                return garages.type;

            return -1;
        }

        public static Position GetGarageSlotPosition(int garageid, int pId) {
            var pos = new Position(0, 0, 0);
            if (garageid == 0 || pId == 0) return pos;

            var slot = ServerGarageSlots_.FirstOrDefault(s => s.garageId == garageid && s.parkId == pId);

            if (slot != null)
                pos = new Position(slot.posX, slot.posY, slot.posZ);

            return pos;
        }

        public static Rotation GetGarageSlotRotation(int garageid, int pId) {
            var rot = new Rotation(0, 0, 0);
            if (garageid == 0 || pId == 0) return rot;

            var slot = ServerGarageSlots_.FirstOrDefault(s => s.garageId == garageid && s.parkId == pId);

            if (slot != null)
                rot = new Rotation(slot.rotX, slot.rotY, slot.rotZ);

            return rot;
        }
    }
}