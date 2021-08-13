﻿using System;
using AltV.Net;
using AltV.Net.Elements.Entities;
using AltV.Net.Enums;
using Altv_Roleplay.Model;

namespace Altv_Roleplay.Handler
{
    internal class WeaponHandler
    {
        public static void EquipCharacterWeapon(IPlayer player, string type, string wName, int amount, string fromContainer) {
            try {
                var charId = User.GetPlayerOnline(player);
                var wType = "None";
                var normalWName = "None";
                var ammoWName = "None";
                WeaponModel wHash = 0;

                switch (wName) {
                    case "Pistole":
                    case "Pistolen Munition":
                        wType = "Secondary";
                        normalWName = "Pistole";
                        ammoWName = "Pistolen";
                        wHash = (WeaponModel) 0x1B06D571;
                        break;
                    case "MkII Pistole":
                    case "MkII Pistolen Munition":
                        wType = "Secondary";
                        normalWName = "MkII Pistole";
                        ammoWName = "MkII Pistolen";
                        wHash = (WeaponModel) 0xBFE256D4;
                        break;
                    case "Pistole .50":
                    case "Pistole .50 Munition":
                        wType = "Secondary";
                        normalWName = "Pistole .50";
                        ammoWName = "Pistole .50";
                        wHash = (WeaponModel) 0x99AEEB3B;
                        break;
                    case "Revolver":
                    case "Revolver Munition":
                        wType = "Secondary";
                        normalWName = "Revolver";
                        ammoWName = "Revolver";
                        wHash = (WeaponModel) 0xC1B3C3D1;
                        break;
                    case "Elektroschocker":
                        wType = "Secondary";
                        wHash = WeaponModel.StunGun;
                        break;
                    case "Flaregun":
                    case "Flaregun Munition":
                        wType = "Secondary";
                        normalWName = "Flaregun";
                        ammoWName = "Flaregun";
                        wHash = (WeaponModel) 0x47757124;
                        break;
                    case "PDW":
                    case "PDW Munition":
                        wType = "Primary";
                        normalWName = "PDW";
                        ammoWName = "PDW";
                        wHash = (WeaponModel) 0x0A3D4D34;
                        break;
                    case "Karabiner":
                    case "Karabiner Munition":
                        wType = "Primary";
                        normalWName = "Karabiner";
                        ammoWName = "Karabiner";
                        wHash = (WeaponModel) 0x83BF0278;
                        break;
                    case "AK-47":
                    case "AK-47 Munition":
                        wType = "Primary";
                        normalWName = "AK-47";
                        ammoWName = "AK-47";
                        wHash = (WeaponModel) 0xBFEFFF6D;
                        break;
                    case "SMG":
                    case "SMG Munition":
                        wType = "Primary";
                        normalWName = "SMG";
                        ammoWName = "SMG";
                        wHash = (WeaponModel) 0x2BE6766B;
                        break;
                    case "Schlagstock":
                        wType = "Fist";
                        normalWName = "Schlagstock";
                        wHash = (WeaponModel) 0x678B81B1;
                        break;
                    case "Messer":
                        wType = "Fist";
                        normalWName = "Messer";
                        wHash = (WeaponModel) 0x99B507EA;
                        break;
                    case "Brecheisen":
                        wType = "Fist";
                        normalWName = "Brecheisen";
                        wHash = (WeaponModel) 0x84BD7BFD;
                        break;
                    case "Baseballschlaeger":
                        wType = "Fist";
                        normalWName = "Baseballschlaeger";
                        wHash = (WeaponModel) 0x958A4A8F;
                        break;
                    case "Dolch":
                        wType = "Fist";
                        normalWName = "Dolch";
                        wHash = (WeaponModel) 0x92A27487;
                        break;
                    case "Hammer":
                        wType = "Fist";
                        normalWName = "Hammer";
                        wHash = (WeaponModel) 0x4E875F73;
                        break;
                    case "Axt":
                        wType = "Fist";
                        normalWName = "Axt";
                        wHash = (WeaponModel) 0xF9DCBF2D;
                        break;
                    case "Machete":
                        wType = "Fist";
                        normalWName = "Machete";
                        wHash = (WeaponModel) 0xDD5DF8D9;
                        break;
                    case "Springmesser":
                        wType = "Fist";
                        normalWName = "Springmesser";
                        wHash = (WeaponModel) 0xDFE37640;
                        break;
                    case "Schlagring":
                        wType = "Fist";
                        normalWName = "Schlagring";
                        wHash = (WeaponModel) 0xD8DF3C3C;
                        break;
                    case "Taschenlampe":
                        wType = "Fist";
                        normalWName = "Taschenlampe";
                        wHash = (WeaponModel) 0x8BB05FD7;
                        break;
                    case "Golfschlaeger":
                        wType = "Fist";
                        normalWName = "Golfschlaeger";
                        wHash = (WeaponModel) 0x440E4788;
                        break;
                }


                if (type == "Weapon") {
                    if (wType == "Primary") {
                        var primWeapon = (string) Characters.GetCharacterWeapon(player, "PrimaryWeapon");

                        if (primWeapon == "None") {
                            player.GiveWeapon(wHash, 0, true);
                            Characters.SetCharacterWeapon(player, "PrimaryWeapon", wName);
                            Characters.SetCharacterWeapon(player, "PrimaryAmmo", 0);
                            SetWeaponComponents(player, wName);
                            HUDHandler.SendNotification(player, 2, 5000, $"{wName} erfolgreich ausgerüstet.");
                        } else if (primWeapon == wName) {
                            var wAmmoAmount = (int) Characters.GetCharacterWeapon(player, "PrimaryAmmo");
                            var invWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory");
                            var backpackWeight = CharactersInventory.GetCharacterItemWeight(charId, "backpack");
                            var bigWeight = invWeight + backpackWeight;
                            var itemWeight = ServerItems.GetItemWeight($"{ammoWName} Munition");
                            var multiWeight = itemWeight * wAmmoAmount;
                            var finalWeight = bigWeight + multiWeight;
                            var helpWeight = 15f + Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId));
                            var inBackpack = false;

                            if (invWeight + multiWeight > 15f && backpackWeight + multiWeight >
                                Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) {
                                HUDHandler.SendNotification(player, 4, 5000, "Nicht genügend Platz.");
                                return;
                            }

                            if (wAmmoAmount >= 1 && ammoWName != "None" && finalWeight <= helpWeight) {
                                if (invWeight + multiWeight <= 15f) {
                                    CharactersInventory.AddCharacterItem(charId, $"{ammoWName} Munition", wAmmoAmount, "inventory");
                                    inBackpack = false;
                                } else {
                                    inBackpack = true;
                                }

                                if (backpackWeight + multiWeight <= Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId)) &&
                                    inBackpack)
                                    CharactersInventory.AddCharacterItem(charId, $"{ammoWName} Munition", wAmmoAmount, "backpack");
                            }

                            if (finalWeight <= helpWeight) {
                                HUDHandler.SendNotification(player, 2, 5000, $"{wName} erfolgreich abgelegt.");
                                Characters.SetCharacterWeapon(player, "PrimaryWeapon", "None");
                                Characters.SetCharacterWeapon(player, "PrimaryAmmo", 0);
                                player.RemoveWeapon(wHash);
                            }
                        } else {
                            HUDHandler.SendNotification(player, 3, 5000,
                                "Du musst zuerst deine Hauptwaffe ablegen bevor du eine neue anlegen kannst.");
                        }
                    } else if (wType == "Fist") {
                        var fistWeapon = (string) Characters.GetCharacterWeapon(player, "FistWeapon");

                        if (fistWeapon == "None") {
                            player.GiveWeapon(wHash, 0, false);
                            Characters.SetCharacterWeapon(player, "FistWeapon", wName);
                            Characters.SetCharacterWeapon(player, "FistWeaponAmmo", 0);
                            HUDHandler.SendNotification(player, 2, 500, $"{wName} erfolgreich ausgerüstet.");
                        } else if (fistWeapon == wName) {
                            var curWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory") +
                                            CharactersInventory.GetCharacterItemWeight(charId, "backpack");
                            var maxWeight = 15f + Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId));

                            if (curWeight < maxWeight) {
                                Characters.SetCharacterWeapon(player, "FistWeapon", "None");
                                Characters.SetCharacterWeapon(player, "FistWeaponAmmo", 0);
                                player.RemoveWeapon(wHash);
                                HUDHandler.SendNotification(player, 2, 5000, $"{wName} erfolgreich abgelegt.");
                            } else {
                                HUDHandler.SendNotification(player, 4, 5000, "Du hast nicht genügend Platz.");
                            }
                        } else {
                            HUDHandler.SendNotification(player, 3, 5000,
                                "Du musst zuerst deine Schlagwaffe ablegen bevor du eine neue anlegen kannst.");
                        }
                    } else if (wType == "Secondary") {
                        var secondaryWeapon = (string) Characters.GetCharacterWeapon(player, "SecondaryWeapon");
                        var secondaryWeapon2 = (string) Characters.GetCharacterWeapon(player, "SecondaryWeapon2");

                        if (secondaryWeapon == "None") {
                            if (secondaryWeapon2 == wName) {
                                var ammoAmount = (int) Characters.GetCharacterWeapon(player, "SecondaryAmmo2");
                                var invWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory");
                                var backpackWeight = CharactersInventory.GetCharacterItemWeight(charId, "backpack");
                                var bigWeight = invWeight + backpackWeight;
                                var itemWeight = ServerItems.GetItemWeight($"{ammoWName} Munition");
                                var multiWeight = itemWeight * ammoAmount;
                                var finalWeight = bigWeight + multiWeight;
                                var helpWeight = 15f + Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId));
                                var inBackpack = false;

                                if (invWeight + multiWeight > 15f && backpackWeight + multiWeight >
                                    Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) {
                                    HUDHandler.SendNotification(player, 4, 5000, "Nicht genügend Platz.");
                                    return;
                                }

                                if (ammoAmount >= 1 && ammoWName != "None" && finalWeight <= helpWeight) {
                                    if (invWeight + multiWeight <= 15f) {
                                        CharactersInventory.AddCharacterItem(charId, $"{ammoWName} Munition", ammoAmount, "inventory");
                                        inBackpack = false;
                                    } else {
                                        inBackpack = true;
                                    }

                                    if (backpackWeight + multiWeight <=
                                        Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId)) && inBackpack)
                                        CharactersInventory.AddCharacterItem(charId, $"{ammoWName} Munition", ammoAmount, "backpack");
                                }

                                if (finalWeight <= helpWeight) {
                                    HUDHandler.SendNotification(player, 2, 5000, $"{wName} erfolgreich abgelegt.");
                                    Characters.SetCharacterWeapon(player, "SecondaryWeapon2", "None");
                                    Characters.SetCharacterWeapon(player, "SecondaryAmmo2", "None");
                                    player.RemoveWeapon(wHash);
                                }
                            } else {
                                player.GiveWeapon(wHash, 0, true);
                                Characters.SetCharacterWeapon(player, "SecondaryWeapon", wName);
                                Characters.SetCharacterWeapon(player, "SecondaryAmmo", 0);
                                SetWeaponComponents(player, wName);
                                HUDHandler.SendNotification(player, 2, 5000, $"{wName} erfolgreich ausgerüstet.");
                            }
                        } else if (secondaryWeapon == wName) {
                            var ammoAmount = (int) Characters.GetCharacterWeapon(player, "SecondaryAmmo");
                            var invWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory");
                            var backpackWeight = CharactersInventory.GetCharacterItemWeight(charId, "backpack");
                            var bigWeight = invWeight + backpackWeight;
                            var itemWeight = ServerItems.GetItemWeight($"{ammoWName} Munition");
                            var multiWeight = itemWeight * ammoAmount;
                            var finalWeight = bigWeight + multiWeight;
                            var helpWeight = 15f + Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId));
                            var inBackpack = false;

                            if (invWeight + multiWeight > 15f && backpackWeight + multiWeight >
                                Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) {
                                HUDHandler.SendNotification(player, 4, 5000, "Nicht genügend Platz.");
                                return;
                            }

                            if (ammoAmount >= 1 && ammoWName != "None" && finalWeight <= helpWeight) {
                                if (invWeight + multiWeight <= 15f) {
                                    CharactersInventory.AddCharacterItem(charId, $"{ammoWName} Munition", ammoAmount, "inventory");
                                    inBackpack = false;
                                } else {
                                    inBackpack = true;
                                }

                                if (backpackWeight + multiWeight <= Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId)) &&
                                    inBackpack)
                                    CharactersInventory.AddCharacterItem(charId, $"{ammoWName} Munition", ammoAmount, "backpack");
                            }

                            if (finalWeight <= helpWeight) {
                                HUDHandler.SendNotification(player, 2, 5000, $"{wName} erfolgreich abgelegt.");
                                Characters.SetCharacterWeapon(player, "SecondaryWeapon", "None");
                                Characters.SetCharacterWeapon(player, "SecondaryAmmo", 0);
                                player.RemoveWeapon(wHash);
                            }
                        } else {
                            if (secondaryWeapon2 == "None") {
                                player.GiveWeapon(wHash, 0, true);
                                Characters.SetCharacterWeapon(player, "SecondaryWeapon2", wName);
                                Characters.SetCharacterWeapon(player, "SecondaryAmmo2", 0);
                                SetWeaponComponents(player, wName);
                                HUDHandler.SendNotification(player, 2, 5000, $"{wName} erfolgreich ausgerüstet.");
                            } else if (secondaryWeapon2 == wName) {
                                var ammoAmount = (int) Characters.GetCharacterWeapon(player, "SecondaryAmmo2");
                                var invWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory");
                                var backpackWeight = CharactersInventory.GetCharacterItemWeight(charId, "backpack");
                                var bigWeight = invWeight + backpackWeight;
                                var itemWeight = ServerItems.GetItemWeight($"{ammoWName} Munition");
                                var multiWeight = itemWeight * ammoAmount;
                                var finalWeight = bigWeight + multiWeight;
                                var helpWeight = 15f + Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId));
                                var inBackpack = false;

                                if (ammoAmount >= 1 && ammoWName != "None" && finalWeight <= helpWeight) {
                                    if (invWeight + multiWeight <= 15f) {
                                        CharactersInventory.AddCharacterItem(charId, $"{ammoWName} Munition", ammoAmount, "inventory");
                                        inBackpack = false;
                                    } else {
                                        inBackpack = true;
                                    }

                                    if (backpackWeight + multiWeight <=
                                        Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId)) && inBackpack)
                                        CharactersInventory.AddCharacterItem(charId, $"{ammoWName} Munition", ammoAmount, "backpack");
                                }

                                if (finalWeight <= helpWeight) {
                                    HUDHandler.SendNotification(player, 2, 5000, $"{wName} erfolgreich abgelegt.");
                                    Characters.SetCharacterWeapon(player, "SecondaryWeapon2", "None");
                                    Characters.SetCharacterWeapon(player, "SecondaryAmmo2", 0);
                                    player.RemoveWeapon(wHash);
                                }
                            } else {
                                HUDHandler.SendNotification(player, 3, 5000,
                                    "Du musst zuerst deine Sekundärwaffe ablegen bevor du eine neue anlegen kannst.");
                            }
                        }
                    }
                } else if (type == "Ammo") {
                    if (wType == "Primary") {
                        var primaryWeapon = (string) Characters.GetCharacterWeapon(player, "PrimaryWeapon");

                        if (primaryWeapon == "None") {
                            HUDHandler.SendNotification(player, 3, 5000, "Du hast keine Primärwaffe angelegt.");
                        } else if (primaryWeapon == normalWName) {
                            var newAmmo = (int) Characters.GetCharacterWeapon(player, "PrimaryAmmo") + amount;
                            player.GiveWeapon(wHash, newAmmo, true);
                            Characters.SetCharacterWeapon(player, "PrimaryAmmo", newAmmo);
                            HUDHandler.SendNotification(player, 2, 5000, $"Du hast {wName} in deine Waffe geladen.");

                            if (CharactersInventory.ExistCharacterItem(charId, $"{wName}", fromContainer))
                                CharactersInventory.RemoveCharacterItemAmount(charId, $"{wName}", amount, fromContainer);
                        } else {
                            HUDHandler.SendNotification(player, 3, 5000, "Die Munitionen passen nicht in deine Waffe.");
                        }
                    } else if (wType == "Secondary") {
                        var secondaryWeapon = (string) Characters.GetCharacterWeapon(player, "SecondaryWeapon");

                        if (secondaryWeapon == "None") {
                            HUDHandler.SendNotification(player, 4, 5000, "Du hast keine Sekundärwaffe angelegt.");
                        } else if (secondaryWeapon == normalWName) {
                            var newAmmo = (int) Characters.GetCharacterWeapon(player, "SecondaryAmmo") + amount;
                            player.GiveWeapon(wHash, newAmmo, true);
                            Characters.SetCharacterWeapon(player, "SecondaryAmmo", newAmmo);
                            HUDHandler.SendNotification(player, 2, 5000, $"Du hast {wName} in deine Waffe geladen.");

                            if (CharactersInventory.ExistCharacterItem(charId, $"{wName}", fromContainer))
                                CharactersInventory.RemoveCharacterItemAmount(charId, $"{wName}", amount, fromContainer);
                        } else {
                            var secondary2Weapon = (string) Characters.GetCharacterWeapon(player, "SecondaryWeapon2");

                            if (secondary2Weapon == "None") {
                                HUDHandler.SendNotification(player, 4, 5000, "Du hast keine Sekundärwaffe angelegt.");
                            } else if (secondary2Weapon == normalWName) {
                                var newAmmo = (int) Characters.GetCharacterWeapon(player, "SecondaryAmmo2") + amount;
                                player.GiveWeapon(wHash, newAmmo, true);
                                Characters.SetCharacterWeapon(player, "SecondaryAmmo2", newAmmo);
                                HUDHandler.SendNotification(player, 2, 5000, $"Du hast {wName} in deine Waffe geladen.");

                                if (CharactersInventory.ExistCharacterItem(charId, $"{wName}", fromContainer))
                                    CharactersInventory.RemoveCharacterItemAmount(charId, $"{wName}", amount, fromContainer);
                            } else {
                                HUDHandler.SendNotification(player, 4, 5000, "Die Munitionen passen nicht in deine Waffe.");
                            }
                        }
                    }
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static void SetWeaponComponents(IPlayer player, string wName) {
            if (player == null || !player.Exists) return;

            switch (wName) {
                case "PDW":
                    player.AddWeaponComponent(WeaponModel.CombatPDW, 0x7BC4CDDC); //Flashlight
                    player.AddWeaponComponent(WeaponModel.CombatPDW, 0xAA2C45B4); //Scope
                    player.AddWeaponComponent(WeaponModel.CombatPDW, 0xC164F53); //Grip
                    player.AddWeaponComponent(WeaponModel.CombatPDW, 0x4317F19E); //Magazin
                    break;
                case "MkII Pistole":
                    player.AddWeaponComponent(WeaponModel.PistolMkII, 0x43FD595B); //Flashlight
                    player.AddWeaponComponent(WeaponModel.PistolMkII, 0x21E34793); //Mündungsbremse
                    break;
            }
        }

        public static WeaponModel GetWeaponModelByName(string wName) {
            WeaponModel wHash = 0;

            switch (wName) {
                case "Pistole":
                    wHash = WeaponModel.Pistol;
                    break;
                case "MkII Pistole":
                    wHash = WeaponModel.PistolMkII;
                    break;
                case "Pistole .50":
                    wHash = WeaponModel.Pistol50;
                    break;
                case "Revolver":
                    wHash = WeaponModel.HeavyRevolver;
                    break;
                case "Elektroschocker":
                    wHash = WeaponModel.StunGun;
                    break;
                case "Flaregun":
                    wHash = WeaponModel.FlareGun;
                    break;
                case "PDW":
                    wHash = WeaponModel.CombatPDW;
                    break;
                case "Schlagstock":
                    wHash = WeaponModel.Nightstick;
                    break;
                case "Messer":
                    wHash = WeaponModel.Knife;
                    break;
                case "AK-47":
                    wHash = (WeaponModel) 0xBFEFFF6D;
                    break;
                case "Brecheisen":
                    wHash = WeaponModel.Crowbar;
                    break;
                case "Baseballschlaeger":
                    wHash = WeaponModel.BaseballBat;
                    break;
                case "Dolch":
                    wHash = WeaponModel.AntiqueCavalryDagger;
                    break;
                case "Hammer":
                    wHash = WeaponModel.Hammer;
                    break;
                case "Axt":
                    wHash = WeaponModel.Hatchet;
                    break;
                case "Machete":
                    wHash = WeaponModel.Machete;
                    break;
                case "Springmesser":
                    wHash = WeaponModel.Switchblade;
                    break;
                case "Schlagring":
                    wHash = WeaponModel.BrassKnuckles;
                    break;
                case "Taschenlampe":
                    wHash = WeaponModel.Flashlight;
                    break;
            }

            return wHash;
        }
    }
}