using System.Collections.Generic;
using AltV.Net.Elements.Entities;
using Altv_Roleplay.models;

namespace Altv_Roleplay.Model
{
    internal class ServerFarmingSpots
    {
        public static List<Server_Farming_Spots> ServerFarmingSpots_ = new();
        public static List<Server_Farming_Producer> ServerFarmingProducer_ = new();
        public static List<IColShape> ServerFarmingSpotsColshapes_ = new();
        public static List<IColShape> ServerFarmingProducerColshapes_ = new();
    }
}