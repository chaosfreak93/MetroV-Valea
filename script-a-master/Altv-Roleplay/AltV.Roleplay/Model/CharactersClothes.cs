﻿using System;
using System.Collections.Generic;
using System.Linq;
using AltV.Net;
using Altv_Roleplay.models;

namespace Altv_Roleplay.Model
{
    internal class CharactersClothes
    {
        public static List<CharactersOwnedClothes> CharactersOwnedClothes_ = new();

        public static void CreateCharacterOwnedClothes(int charId, int clothId) {
            try {
                if (ExistCharacterClothes(charId, clothId)) return;

                var clothesData = new CharactersOwnedClothes {
                    charId = charId,
                    clothId = clothId
                };
                CharactersOwnedClothes_.Add(clothesData);

                using (var db = new gtaContext()) {
                    db.CharactersOwnedClothes.Add(clothesData);
                    db.SaveChanges();
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static bool ExistCharacterClothes(int charId, int clothesId) {
            try {
                return CharactersOwnedClothes_.ToList().Exists(x => x.charId == charId && x.clothId == clothesId);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return false;
        }
    }
}