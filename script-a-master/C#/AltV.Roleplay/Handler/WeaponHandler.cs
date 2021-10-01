﻿using AltV.Net;
using AltV.Net.Async;
using AltV.Net.Elements.Entities;
using AltV.Net.Enums;
using Altv_Roleplay.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Altv_Roleplay.Handler
{
    class WeaponHandler : IScript
    {
        public static void EquipCharacterWeapon(IPlayer player, string type, string wName, int amount, string fromContainer)
        {
            try
            {
                int charId = User.GetPlayerOnline(player);
                string wType = "None";
                string normalWName = "None";
                string ammoWName = "None";
                WeaponModel wHash = 0;

                switch (wName)
                {
                    case "Pistole":
                    case "Pistolen Munition":
                        wType = "Secondary";
                        normalWName = "Pistole";
                        ammoWName = "Pistolen";
                        wHash = (WeaponModel)0x1B06D571;
                        break;
                    case "MkII Pistole":
                    case "MkII Pistolen Munition":
                        wType = "Secondary";
                        normalWName = "MkII Pistole";
                        ammoWName = "MkII Pistolen";
                        wHash = (WeaponModel)0xBFE256D4;
                        break;
                    case "Pistole .50":
                    case "Pistole .50 Munition":
                        wType = "Secondary";
                        normalWName = "Pistole .50";
                        ammoWName = "Pistole .50";
                        wHash = (WeaponModel)0x99AEEB3B;
                        break;
                    case "Revolver":
                    case "Revolver Munition":
                        wType = "Secondary";
                        normalWName = "Revolver";
                        ammoWName = "Revolver";
                        wHash = (WeaponModel)0xC1B3C3D1;
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
                        wHash = (WeaponModel)0x47757124;
                        break;
                    case "PDW":
                    case "PDW Munition":
                        wType = "Primary";
                        normalWName = "PDW";
                        ammoWName = "PDW";
                        wHash = (WeaponModel)0x0A3D4D34;
                        break;
                    case "Karabiner":
                    case "Karabiner Munition":
                        wType = "Primary";
                        normalWName = "Karabiner";
                        ammoWName = "Karabiner";
                        wHash = (WeaponModel)0x83BF0278;
                        break;
                    case "AK-47":
                    case "AK-47 Munition":
                        wType = "Primary";
                        normalWName = "AK-47";
                        ammoWName = "AK-47";
                        wHash = (WeaponModel)0xBFEFFF6D;
                        break;
                    case "SMG":
                    case "SMG Munition":
                        wType = "Primary";
                        normalWName = "SMG";
                        ammoWName = "SMG";
                        wHash = (WeaponModel)0x2BE6766B;
                        break;
                    case "Schlagstock":
                        wType = "Fist";
                        normalWName = "Schlagstock";
                        wHash = (WeaponModel)0x678B81B1;
                        break;
                    case "Messer":
                        wType = "Fist";
                        normalWName = "Messer";
                        wHash = (WeaponModel)0x99B507EA;
                        break;
                    case "Brecheisen":
                        wType = "Fist";
                        normalWName = "Brecheisen";
                        wHash = (WeaponModel)0x84BD7BFD;
                        break;
                    case "Baseballschlaeger":
                        wType = "Fist";
                        normalWName = "Baseballschlaeger";
                        wHash = (WeaponModel)0x958A4A8F;
                        break;
                    case "Dolch":
                        wType = "Fist";
                        normalWName = "Dolch";
                        wHash = (WeaponModel)0x92A27487;
                        break;
                    case "Hammer":
                        wType = "Fist";
                        normalWName = "Hammer";
                        wHash = (WeaponModel)0x4E875F73;
                        break;
                    case "Axt":
                        wType = "Fist";
                        normalWName = "Axt";
                        wHash = (WeaponModel)0xF9DCBF2D;
                        break;
                    case "Machete":
                        wType = "Fist";
                        normalWName = "Machete";
                        wHash = (WeaponModel)0xDD5DF8D9;
                        break;
                    case "Springmesser":
                        wType = "Fist";
                        normalWName = "Springmesser";
                        wHash = (WeaponModel)0xDFE37640;
                        break;
                    case "Schlagring":
                        wType = "Fist";
                        normalWName = "Schlagring";
                        wHash = (WeaponModel)0xD8DF3C3C;
                        break;
                    case "Taschenlampe":
                        wType = "Fist";
                        normalWName = "Taschenlampe";
                        wHash = (WeaponModel)0x8BB05FD7;
                        break;
                    case "Golfschlaeger":
                        wType = "Fist";
                        normalWName = "Golfschlaeger";
                        wHash = (WeaponModel)0x440E4788;
                        break;
                }

                if (type == "Weapon")
                {
                    if (wType == "Primary")
                    {
                        string primWeapon = (string)Characters.GetCharacterWeapon(player, "PrimaryWeapon");
                        if (primWeapon == "None") {
                            player.GiveWeapon(wHash, 0, true);
                            player.Emit("Client:Weapon:SetWeaponAmmo", (uint)wHash, 0);
                            Characters.SetCharacterWeapon(player, "PrimaryWeapon", wName); 
                            Characters.SetCharacterWeapon(player, "PrimaryAmmo", 0);
                            SetWeaponComponents(player, wName);
                            HUDHandler.SendNotification(player, 2, 5000, $"{wName} erfolgreich ausgerüstet.");                             
                            return; 
                        }
                        else if (primWeapon == wName)
                        {
                            int wAmmoAmount = (int)Characters.GetCharacterWeapon(player, "PrimaryAmmo");
                            float invWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory");
                            float backpackWeight = CharactersInventory.GetCharacterItemWeight(charId, "backpack");
                            float bigWeight = invWeight + backpackWeight;
                            float itemWeight = ServerItems.GetItemWeight($"{ammoWName} Munition");
                            float multiWeight = itemWeight * wAmmoAmount;
                            float finalWeight = bigWeight + multiWeight;
                            float helpWeight = 15f + Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId));

                            if (invWeight + multiWeight > 15f && backpackWeight + multiWeight > Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) { HUDHandler.SendNotification(player, 4, 5000, "Nicht genügend Platz."); return; }

                            if (wAmmoAmount >= 1 && ammoWName != "None" && finalWeight <= helpWeight) player.Emit("Client:Weapon:GetWeaponAmmo", (uint)wHash, ammoWName);

                            if (finalWeight <= helpWeight)
                            {
                                HUDHandler.SendNotification(player, 2, 5000, $"{wName} erfolgreich abgelegt.");
                                Characters.SetCharacterWeapon(player, "PrimaryWeapon", "None");
                                Characters.SetCharacterWeapon(player, "PrimaryAmmo", 0);
                                player.RemoveWeapon(wHash);
                            }
                        }
                        else
                        {
                            HUDHandler.SendNotification(player, 3, 5000, "Du musst zuerst deine Hauptwaffe ablegen bevor du eine neue anlegen kannst.");
                        }
                    }
                    else if (wType == "Fist")
                    {
                        string fistWeapon = (string)Characters.GetCharacterWeapon(player, "FistWeapon");
                        if (fistWeapon == "None")
                        {
                            player.GiveWeapon(wHash, 0, false);
                            player.Emit("Client:Weapon:SetWeaponAmmo", (uint)wHash, 0);
                            Characters.SetCharacterWeapon(player, "FistWeapon", wName);
                            Characters.SetCharacterWeapon(player, "FistWeaponAmmo", 0);
                            HUDHandler.SendNotification(player, 2, 500, $"{wName} erfolgreich ausgerüstet.");
                        }
                        else if (fistWeapon == wName)
                        {
                            float curWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory") + CharactersInventory.GetCharacterItemWeight(charId, "backpack");
                            float maxWeight = 15f + Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId));
                            if (curWeight < maxWeight) { Characters.SetCharacterWeapon(player, "FistWeapon", "None"); Characters.SetCharacterWeapon(player, "FistWeaponAmmo", 0); player.RemoveWeapon(wHash); HUDHandler.SendNotification(player, 2, 5000, $"{wName} erfolgreich abgelegt."); }
                            else { HUDHandler.SendNotification(player, 4, 5000, "Du hast nicht genügend Platz."); }
                        }
                        else
                        {
                            HUDHandler.SendNotification(player, 3, 5000, "Du musst zuerst deine Schlagwaffe ablegen bevor du eine neue anlegen kannst.");
                        }
                    }
                    else if (wType == "Secondary")
                    {
                        string secondaryWeapon = (string)Characters.GetCharacterWeapon(player, "SecondaryWeapon");
                        string secondaryWeapon2 = (string)Characters.GetCharacterWeapon(player, "SecondaryWeapon2");

                        if (secondaryWeapon == "None")
                        {
                            if (secondaryWeapon2 == wName)
                            {
                                int ammoAmount = (int)Characters.GetCharacterWeapon(player, "SecondaryAmmo2");
                                float invWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory");
                                float backpackWeight = CharactersInventory.GetCharacterItemWeight(charId, "backpack");
                                float bigWeight = invWeight + backpackWeight;
                                float itemWeight = ServerItems.GetItemWeight($"{ammoWName} Munition");
                                float multiWeight = itemWeight * ammoAmount;
                                float finalWeight = bigWeight + multiWeight;
                                float helpWeight = 15f + Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId));

                                if (invWeight + multiWeight > 15f && backpackWeight + multiWeight > Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) { HUDHandler.SendNotification(player, 4, 5000, "Nicht genügend Platz."); return; }

                                if (ammoAmount >= 1 && ammoWName != "None" && finalWeight <= helpWeight) player.Emit("Client:Weapon:GetWeaponAmmo", (uint)wHash, ammoWName);

                                if (finalWeight <= helpWeight)
                                {
                                    HUDHandler.SendNotification(player, 2, 5000, $"{wName} erfolgreich abgelegt.");
                                    Characters.SetCharacterWeapon(player, "SecondaryWeapon2", "None");
                                    Characters.SetCharacterWeapon(player, "SecondaryAmmo2", "None");
                                    player.RemoveWeapon(wHash);
                                }
                            }
                            else
                            {
                                player.GiveWeapon(wHash, 0, true);
                                player.Emit("Client:Weapon:SetWeaponAmmo", (uint)wHash, 0);
                                Characters.SetCharacterWeapon(player, "SecondaryWeapon", wName);
                                Characters.SetCharacterWeapon(player, "SecondaryAmmo", 0);
                                SetWeaponComponents(player, wName);
                                HUDHandler.SendNotification(player, 2, 5000, $"{wName} erfolgreich ausgerüstet.");
                            }
                        }
                        else if (secondaryWeapon == wName)
                        {
                            int ammoAmount = (int)Characters.GetCharacterWeapon(player, "SecondaryAmmo");
                            float invWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory");
                            float backpackWeight = CharactersInventory.GetCharacterItemWeight(charId, "backpack");
                            float bigWeight = invWeight + backpackWeight;
                            float itemWeight = ServerItems.GetItemWeight($"{ammoWName} Munition");
                            float multiWeight = itemWeight * ammoAmount;
                            float finalWeight = bigWeight + multiWeight;
                            float helpWeight = 15f + Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId));

                            if (invWeight + multiWeight > 15f && backpackWeight + multiWeight > Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) { HUDHandler.SendNotification(player, 4, 5000, "Nicht genügend Platz."); return; }

                            if (ammoAmount >= 1 && ammoWName != "None" && finalWeight <= helpWeight) player.Emit("Client:Weapon:GetWeaponAmmo", (uint)wHash, ammoWName);

                            if (finalWeight <= helpWeight)
                            {
                                HUDHandler.SendNotification(player, 2, 5000, $"{wName} erfolgreich abgelegt.");
                                Characters.SetCharacterWeapon(player, "SecondaryWeapon", "None");
                                Characters.SetCharacterWeapon(player, "SecondaryAmmo", 0);
                                player.RemoveWeapon(wHash);
                            }
                        }
                        else
                        {
                            if (secondaryWeapon2 == "None")
                            {
                                player.GiveWeapon(wHash, 0, true);
                                player.Emit("Client:Weapon:SetWeaponAmmo", (uint)wHash, 0);
                                Characters.SetCharacterWeapon(player, "SecondaryWeapon2", wName);
                                Characters.SetCharacterWeapon(player, "SecondaryAmmo2", 0);
                                SetWeaponComponents(player, wName);
                                HUDHandler.SendNotification(player, 2, 5000, $"{wName} erfolgreich ausgerüstet.");
                            }
                            else if (secondaryWeapon2 == wName)
                            {
                                int ammoAmount = (int)Characters.GetCharacterWeapon(player, "SecondaryAmmo2");
                                float invWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory");
                                float backpackWeight = CharactersInventory.GetCharacterItemWeight(charId, "backpack");
                                float bigWeight = invWeight + backpackWeight;
                                float itemWeight = ServerItems.GetItemWeight($"{ammoWName} Munition");
                                float multiWeight = itemWeight * ammoAmount;
                                float finalWeight = bigWeight + multiWeight;
                                float helpWeight = 15f + Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId));

                                if (ammoAmount >= 1 && ammoWName != "None" && finalWeight <= helpWeight) player.Emit("Client:Weapon:GetWeaponAmmo", (uint)wHash, ammoWName);

                                if (finalWeight <= helpWeight)
                                {
                                    HUDHandler.SendNotification(player, 2, 5000, $"{wName} erfolgreich abgelegt.");
                                    Characters.SetCharacterWeapon(player, "SecondaryWeapon2", "None");
                                    Characters.SetCharacterWeapon(player, "SecondaryAmmo2", 0);
                                    player.RemoveWeapon(wHash);
                                }
                            }
                            else { HUDHandler.SendNotification(player, 3, 5000, "Du musst zuerst deine Sekundärwaffe ablegen bevor du eine neue anlegen kannst."); }
                        }
                    }
                }
                else if (type == "Ammo")
                {
                    if (wType == "Primary")
                    {
                        string primaryWeapon = (string)Characters.GetCharacterWeapon(player, "PrimaryWeapon");
                        if (primaryWeapon == "None") { HUDHandler.SendNotification(player, 3, 5000, "Du hast keine Primärwaffe angelegt."); }
                        else if (primaryWeapon == normalWName)
                        {
                            int newAmmo = (int)Characters.GetCharacterWeapon(player, "PrimaryAmmo") + amount;
                            player.Emit("Client:Weapon:SetWeaponAmmo", (uint)wHash, newAmmo);
                            Characters.SetCharacterWeapon(player, "PrimaryAmmo", newAmmo);
                            HUDHandler.SendNotification(player, 2, 5000, $"Du hast {wName} in deine Waffe geladen.");

                            if (CharactersInventory.ExistCharacterItem(charId, $"{wName}", fromContainer))
                            {
                                CharactersInventory.RemoveCharacterItemAmount(charId, $"{wName}", amount, fromContainer);
                            }
                        }
                        else
                        {
                            HUDHandler.SendNotification(player, 3, 5000, "Die Munitionen passen nicht in deine Waffe.");
                        }
                    }
                    else if (wType == "Secondary")
                    {
                        string secondaryWeapon = (string)Characters.GetCharacterWeapon(player, "SecondaryWeapon");
                        if (secondaryWeapon == "None") { HUDHandler.SendNotification(player, 4, 5000, "Du hast keine Sekundärwaffe angelegt."); }
                        else if (secondaryWeapon == normalWName)
                        {
                            int newAmmo = (int)Characters.GetCharacterWeapon(player, "SecondaryAmmo") + amount;
                            player.Emit("Client:Weapon:SetWeaponAmmo", (uint)wHash, newAmmo);
                            Characters.SetCharacterWeapon(player, "SecondaryAmmo", newAmmo);
                            HUDHandler.SendNotification(player, 2, 5000, $"Du hast {wName} in deine Waffe geladen.");

                            if (CharactersInventory.ExistCharacterItem(charId, $"{wName}", fromContainer))
                            {
                                CharactersInventory.RemoveCharacterItemAmount(charId, $"{wName}", amount, fromContainer);
                            }
                        }
                        else
                        {
                            string secondary2Weapon = (string)Characters.GetCharacterWeapon(player, "SecondaryWeapon2");
                            if (secondary2Weapon == "None") { HUDHandler.SendNotification(player, 4, 5000, "Du hast keine Sekundärwaffe angelegt."); }
                            else if (secondary2Weapon == normalWName)
                            {
                                int newAmmo = (int)Characters.GetCharacterWeapon(player, "SecondaryAmmo2") + amount;
                                player.Emit("Client:Weapon:SetWeaponAmmo", (uint)wHash, newAmmo);
                                Characters.SetCharacterWeapon(player, "SecondaryAmmo2", newAmmo);
                                HUDHandler.SendNotification(player, 2, 5000, $"Du hast {wName} in deine Waffe geladen.");

                                if (CharactersInventory.ExistCharacterItem(charId, $"{wName}", fromContainer))
                                {
                                    CharactersInventory.RemoveCharacterItemAmount(charId, $"{wName}", amount, fromContainer);
                                }
                            }
                            else
                            {
                                HUDHandler.SendNotification(player, 4, 5000, "Die Munitionen passen nicht in deine Waffe.");
                            }
                        }
                    }
                }
            }
            catch (Exception e)
            {
                Alt.Log($"{e}");
            }
        }

        public static void SetWeaponComponents(IPlayer player, string wName)
        {
            if (player == null || !player.Exists) return;
            switch(wName)
            {
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

        public static WeaponModel GetWeaponModelByName(string wName)
        {
            WeaponModel wHash = 0;
            switch(wName)
            {
                case "Pistole": wHash = WeaponModel.Pistol; break;
                case "MkII Pistole": wHash = WeaponModel.PistolMkII; break;
                case "Pistole .50": wHash = WeaponModel.Pistol50; break;
                case "Revolver": wHash = WeaponModel.HeavyRevolver; break;
                case "Elektroschocker": wHash = WeaponModel.StunGun; break;
                case "Flaregun": wHash = WeaponModel.FlareGun; break;
                case "PDW": wHash = WeaponModel.CombatPDW; break;
                case "Schlagstock": wHash = WeaponModel.Nightstick; break;
                case "Messer": wHash = WeaponModel.Knife; break;
                case "AK-47": wHash = WeaponModel.AssaultRifle; break;
                case "Brecheisen": wHash = WeaponModel.Crowbar; break;
                case "Baseballschlaeger": wHash = WeaponModel.BaseballBat; break;
                case "Dolch": wHash = WeaponModel.AntiqueCavalryDagger; break;
                case "Hammer": wHash = WeaponModel.Hammer; break;
                case "Axt": wHash = WeaponModel.Hatchet; break;
                case "Machete": wHash = WeaponModel.Machete; break;
                case "Springmesser": wHash = WeaponModel.Switchblade; break;
                case "Schlagring": wHash = WeaponModel.BrassKnuckles; break;
                case "Taschenlampe": wHash = WeaponModel.Flashlight; break;
                case "SMG": wHash = WeaponModel.SMG; break;
            }
            return wHash;
        }

        [AsyncClientEvent("Server:Weapon:SendWeaponAmmo")]
        public static void SetWeaponAmmo(IPlayer player, string name, int ammo)
        { 
            try
            {
                int charId = User.GetPlayerOnline(player);

                float invWeight = CharactersInventory.GetCharacterItemWeight(charId, "inventory");
                float backpackWeight = CharactersInventory.GetCharacterItemWeight(charId, "backpack");
                float itemWeight = ServerItems.GetItemWeight($"{name} Munition");
                float multiWeight = itemWeight * ammo;

                if (invWeight + multiWeight <= 15f) CharactersInventory.AddCharacterItem(charId, $"{name} Munition", ammo, "inventory");
                else if (backpackWeight + multiWeight <= Characters.GetCharacterBackpackSize(Characters.GetCharacterBackpack(charId))) CharactersInventory.AddCharacterItem(charId, $"{name} Munition", ammo, "backpack");
                InventoryHandler.RequestInventoryItems(player);
            }
            catch (Exception e)
            {
                Alt.Log($"{e}");
            }
        }

            [AsyncClientEvent("Server:Weapon:UpdateAmmo")]
        public static void UpdateWeaponAmmo(IPlayer player, uint hash, int ammo)
        {
            try
            {
                string wType = "None";
                string normalWName = "None";

                switch (hash)
                    {
                        case 453432689:
                            wType = "Secondary";
                            normalWName = "Pistole";
                            break;
                        case 3219281620:
                            wType = "Secondary";
                            normalWName = "MkII Pistole";
                            break;
                        case 2578377531:
                            wType = "Secondary";
                            normalWName = "Pistole .50";
                            break;
                        case 3249783761:
                            wType = "Secondary";
                            normalWName = "Revolver";
                            break;
                        case 1198879012:
                            wType = "Secondary";
                            normalWName = "Flaregun";
                            break;
                        case 171789620:
                            wType = "Primary";
                            normalWName = "PDW";
                            break;
                        case 2210333304:
                            wType = "Primary";
                            normalWName = "Karabiner";
                            break;
                        case 736523883:
                            wType = "Primary";
                            normalWName = "SMG";
                            break;
                        case 3220176749:
                            wType = "Primary";
                            normalWName = "AK-47";
                            break;
                    }

                if (wType == "Primary") Characters.SetCharacterWeapon(player, "PrimaryAmmo", ammo);
                else if (wType == "Fist") Characters.SetCharacterWeapon(player, "FistWeaponAmmo", ammo);
                else if (normalWName == (string)Characters.GetCharacterWeapon(player, "SecondaryWeapon")) Characters.SetCharacterWeapon(player, "SecondaryAmmo", ammo);
                else if (wType != "None") Characters.SetCharacterWeapon(player, "SecondaryAmmo2", ammo);
            }
            catch (Exception e)
            {
                Alt.Log($"{e}");
            }
        }
    }
}