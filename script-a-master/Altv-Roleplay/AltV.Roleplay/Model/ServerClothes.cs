using System;
using System.Linq;
using AltV.Net;

namespace Altv_Roleplay.Model
{
    internal class ServerClothes
    {
        public static int GetClothesGender(int clothesId) {
            try {
                var clothes = ServerClothesShops.ServerClothesShopsItems_.ToList().FirstOrDefault(x => x.id == clothesId);
                if (clothes != null) return clothes.gender;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        public static byte GetClothesComponent(int clothesId, int gender) {
            try {
                var clothes = ServerClothesShops.ServerClothesShopsItems_.ToList().FirstOrDefault(x => x.id == clothesId && x.gender == gender);
                if (clothes != null) return clothes.componentId;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        public static ushort GetClothesDraw(int clothesId, int gender) {
            try {
                var clothes = ServerClothesShops.ServerClothesShopsItems_.ToList().FirstOrDefault(x => x.id == clothesId && x.gender == gender);
                if (clothes != null) return clothes.drawableId;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        public static byte GetClothesTexture(int clothesId, int gender) {
            try {
                var clothes = ServerClothesShops.ServerClothesShopsItems_.ToList().FirstOrDefault(x => x.id == clothesId && x.gender == gender);
                if (clothes != null) return clothes.textureId;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        public static int GetClothesId(int ComponentId, int DrawableId, int TextureId, int gender) {
            try {
                var clothes = ServerClothesShops.ServerClothesShopsItems_.ToList().FirstOrDefault(x =>
                    x.componentId == ComponentId && x.drawableId == DrawableId && x.textureId == TextureId && x.gender == gender);
                if (clothes != null) return clothes.id;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        public static bool ExistClothes(int clothId, int gender) {
            try {
                return ServerClothesShops.ServerClothesShopsItems_.ToList().Exists(x => x.id == clothId && x.gender == gender);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return false;
        }
    }
}