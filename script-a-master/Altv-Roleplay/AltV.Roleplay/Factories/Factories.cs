using System;
using AltV.Net;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;

namespace Altv_Roleplay.Factories
{
    public class VehicleFactory : IEntityFactory<IVehicle>
    {
        public IVehicle Create(IntPtr nativePointer, ushort id) {
            return new ClassicVehicle(nativePointer, id);
        }

        public IVehicle Create(uint model, Position position, Rotation rotation) {
            return new ClassicVehicle(model, position, rotation);
        }
    }

    public class AccountsFactory : IEntityFactory<IPlayer>
    {
        public IPlayer Create(IntPtr playerPointer, ushort id) {
            return new ClassicPlayer(playerPointer, id);
        }
    }

    public class ColshapeFactory : IBaseObjectFactory<IColShape>
    {
        public IColShape Create(IntPtr entityPointer) {
            return new ClassicColshape(entityPointer);
        }
    }
}