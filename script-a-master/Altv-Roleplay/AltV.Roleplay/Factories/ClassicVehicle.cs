using System;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;

namespace Altv_Roleplay.Factories
{
    public class ClassicVehicle : Vehicle
    {
        public ClassicVehicle(IntPtr nativePointer, ushort id) : base(nativePointer, id) {
        }

        public ClassicVehicle(uint model, Position position, Rotation rotation) : base(model, position, rotation) {
        }

        public int VehicleId { get; set; }
        public bool Trunkstate { get; set; } = false;
        public bool EngineHood { get; set; } = false;
    }
}