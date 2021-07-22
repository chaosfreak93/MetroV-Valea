using System.Collections.Generic;
using AltV.Net.Elements.Entities;
using Altv_Roleplay.models;

namespace Altv_Roleplay.Model
{
    internal class ServerDoors
    {
        public static List<Server_Doors> ServerDoors_ = new();
        public static List<IColShape> ServerDoorsColshapes_ = new();
        public static List<IColShape> ServerDoorsLockColshapes_ = new();
    }
}