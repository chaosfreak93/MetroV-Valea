using System;
using AltV.Net;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;

namespace Altv_Roleplay.Factories
{
    public class ClassicVehicle : Vehicle
    {
        public ClassicVehicle(IServer server, IntPtr nativePointer, ushort id) : base(server, nativePointer, id) {
        }

        public ClassicVehicle(IServer server, uint model, Position position, Rotation rotation) : base(server, model, position, rotation) {
        }

        public int VehicleId { get; set; }
        public bool Trunkstate { get; set; } = false;
        public bool EngineHood { get; set; } = false;
    }
}