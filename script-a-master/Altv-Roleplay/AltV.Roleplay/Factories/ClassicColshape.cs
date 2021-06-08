using System;
using AltV.Net.Elements.Entities;

namespace Altv_Roleplay.Factories
{
    public class ClassicColshape : ColShape
    {
        public ClassicColshape(IntPtr nativePointer) : base(nativePointer) {

        }

        public int ColshapeId { get; set; } = 0;
        public string ColshapeName { get; set; } = "None";
        public string CarDealerVehName { get; set; }
        public long CarDealerVehPrice { get; set; }
        public float Radius { get; set; }

        public bool IsInRange(ClassicPlayer player) {
            lock (player) {
                if (!player.Exists) return false;

                return player.Position.Distance(Position) <= Radius;
            }
        }
    }
}