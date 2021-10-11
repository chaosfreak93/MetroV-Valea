using System;
using AltV.Net;
using AltV.Net.Async;
using AltV.Net.Elements.Entities;
using Altv_Roleplay.Factories;
using Altv_Roleplay.Model;

namespace Altv_Roleplay.Handler
{
    internal class ClothesRadialMenuHandler : IScript
    {
        [AsyncClientEvent("Server:ClothesRadial:GetClothesRadialItems")]
        public void GetAnimationItems(IPlayer player) {
            try {
                var interactHTML = "";
                interactHTML +=
                    "<li><p id='InteractionMenu-SelectedTitle'>Schließen</p></li><li class='interactitem' data-action='close' data-actionstring='Schließen'><img src='../utils/img/cancel.png'></li>";

                interactHTML +=
                    "<li class='interactitem' id='InteractionMenu-maske' data-action='maske' data-actionstring='Maske ausziehen'><img src='../utils/img/Maske.png'></li>";
                interactHTML +=
                    "<li class='interactitem' id='InteractionMenu-hut' data-action='hut' data-actionstring='Hut ausziehen'><img src='../utils/img/witch-hat.png'></li>";
                interactHTML +=
                    "<li class='interactitem' id='InteractionMenu-brille' data-action='brille' data-actionstring='Brille ausziehen'><img src='../utils/img/sun-glasses.png'></li>";
                interactHTML +=
                    "<li class='interactitem' id='InteractionMenu-tshirt' data-action='tshirt' data-actionstring='T-Shirt ausziehen'><img src='../utils/img/shirt.png'></li>";
                interactHTML +=
                    "<li class='interactitem' id='InteractionMenu-unterhemd' data-action='unterhemd' data-actionstring='Unterhemd ausziehen'><img src='../utils/img/undershirt.png'></li>";
                interactHTML +=
                    "<li class='interactitem' id='InteractionMenu-hose' data-action='hose' data-actionstring='Hose ausziehen'><img src='../utils/img/jeans.png'></li>";
                interactHTML +=
                    "<li class='interactitem' id='InteractionMenu-schuhe' data-action='schuhe' data-actionstring='Schuhe ausziehen'><img src='../utils/img/shoes.png'></li>";
                interactHTML +=
                    "<li class='interactitem' id='InteractionMenu-kette' data-action='kette' data-actionstring='Kette ausziehen'><img src='../utils/img/necklace.png'></li>";

                player.EmitLocked("Client:ClothesRadial:SetMenuItems", interactHTML);
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        [AsyncClientEvent("Server:ClothesRadial:SetNormalSkin")]
        public static void SetNormalSkin(IPlayer player, string action) {
            if (player == null || !player.Exists) return;

            var charid = User.GetPlayerOnline(player);
            byte type = 0;
            var ClothesType = "Cloth";
            var TypeText = "none";
            if (charid == 0) return;

            if (action == "maske") {
                if (!player.HasData("HasMaskOn")) {
                    player.SetClothes(1, 0, 0, 0);
                    player.SetData("HasMaskOn", true);
                    return;
                }

                type = 1;
                TypeText = "Mask";
                player.DeleteData("HasMaskOn");
            } else if (action == "hut") {
                if (!player.HasData("HasHatOn")) {
                    if (!Characters.GetCharacterGender(charid)) player.SetProps(0, 11, 0);
                    else player.SetProps(0, 57, 0);
                    player.SetData("HasHatOn", true);
                    return;
                }

                type = 0;
                TypeText = "Hat";
                ClothesType = "Prop";
                player.DeleteData("HasHatOn");
            } else if (action == "brille") {
                if (!player.HasData("HasGlassesOn")) {
                    if (!Characters.GetCharacterGender(charid)) player.SetProps(1, 0, 0);
                    else player.SetProps(1, 12, 0);
                    player.SetData("HasGlassesOn", true);
                    return;
                }

                type = 1;
                TypeText = "Glass";
                ClothesType = "Prop";
                player.DeleteData("HasGlassesOn");
            } else if (action == "tshirt") {
                if (!player.HasData("HasShirtOn")) {
                    player.SetClothes(3, 15, 0, 0);
                    player.SetClothes(11, 15, 0, 0);
                    player.SetData("HasShirtOn", true);
                    return;
                }

                type = 11;
                TypeText = "Top";
                player.DeleteData("HasShirtOn");
                player.SetClothes(3, 
                    ServerClothes.GetClothesDraw(Characters.GetCharacterClothes(charid, "Torso"), Convert.ToInt32(Characters.GetCharacterGender(((ClassicPlayer) player).CharacterId))),
                    ServerClothes.GetClothesTexture(Characters.GetCharacterClothes(charid, "Torso"), Convert.ToInt32(Characters.GetCharacterGender(((ClassicPlayer) player).CharacterId))), 0);
            } else if (action == "unterhemd") {
                if (!player.HasData("HasUndershirtOn")) {
                    player.SetClothes(8, 15, 0, 0);
                    player.SetData("HasUndershirtOn", true);
                    return;
                }

                type = 8;
                TypeText = "Undershirt";
                player.DeleteData("HasUndershirtOn");
            } else if (action == "hose") {
                if (!player.HasData("HasPantsOn")) {
                    player.SetClothes(4, 14, 0, 0);
                    player.SetData("HasPantsOn", true);
                    return;
                }

                type = 4;
                TypeText = "Leg";
                player.DeleteData("HasPantsOn");
            } else if (action == "schuhe") {
                if (!player.HasData("HasShoesOn")) {
                    if (!Characters.GetCharacterGender(charid)) player.SetClothes(6, 34, 0, 2);
                    else player.SetClothes(6, 35, 0, 2);
                    player.SetData("HasShoesOn", true);
                    return;
                }

                type = 6;
                TypeText = "Feet";
                player.DeleteData("HasShoesOn");
            } else if (action == "kette") {
                if (!player.HasData("HasNecklaceOn")) {
                    player.SetClothes(7, 0, 0, 0);
                    player.SetData("HasNecklaceOn", true);
                    return;
                }

                type = 7;
                TypeText = "Necklace";
                player.DeleteData("HasNecklaceOn");
            }

            if (TypeText == "none" || Characters.GetCharacterClothes(charid, TypeText) == -2 || ServerClothes.GetClothesDraw(Characters.GetCharacterClothes(charid, TypeText), (byte)Convert.ToInt32(Characters.GetCharacterGender(((ClassicPlayer)player).CharacterId))) == 0) return;

            if (ClothesType == "Prop") {
                if (ServerFactions.IsCharacterInAnyFaction(charid) && ServerFactions.IsCharacterInFactionDuty(charid) &&
                    ServerFactions.HasFactionClothes(ServerFactions.GetCharacterFactionId(charid))) {
                    var factionId = ServerFactions.GetCharacterFactionId(charid);
                    var gender = Convert.ToInt32(Characters.GetCharacterGender(((ClassicPlayer)player).CharacterId));
                    player.SetProps(type, ServerFactions.GetCharacterClothes(factionId, TypeText, Convert.ToInt32(gender)).drawable, ServerFactions.GetCharacterClothes(factionId, TypeText, Convert.ToInt32(gender)).texture);
                } else {
                    player.SetProps(type,
                        ServerClothes.GetClothesDraw(Characters.GetCharacterClothes(charid, TypeText),
                            Convert.ToInt32(Characters.GetCharacterGender(((ClassicPlayer)player).CharacterId))),
                        ServerClothes.GetClothesTexture(Characters.GetCharacterClothes(charid, TypeText),
                            Convert.ToInt32(Characters.GetCharacterGender(((ClassicPlayer)player).CharacterId))));
                }
                return;
            }

            if (ServerFactions.IsCharacterInAnyFaction(charid) && ServerFactions.IsCharacterInFactionDuty(charid) &&
                ServerFactions.HasFactionClothes(ServerFactions.GetCharacterFactionId(charid))) {
                var factionId = ServerFactions.GetCharacterFactionId(charid);
                var gender = Convert.ToInt32(Characters.GetCharacterGender(((ClassicPlayer)player).CharacterId));
                player.SetClothes(type, ServerFactions.GetCharacterClothes(factionId, TypeText, Convert.ToInt32(gender)).drawable, ServerFactions.GetCharacterClothes(factionId, TypeText, Convert.ToInt32(gender)).texture, 0);
            } else {
                player.SetClothes(type, 
                    ServerClothes.GetClothesDraw(Characters.GetCharacterClothes(charid, TypeText), Convert.ToInt32(Characters.GetCharacterGender(((ClassicPlayer) player).CharacterId))),
                    ServerClothes.GetClothesTexture(Characters.GetCharacterClothes(charid, TypeText), Convert.ToInt32(Characters.GetCharacterGender(((ClassicPlayer) player).CharacterId))), 0);   
            }

            Characters.SetCharacterCorrectTorso(player, player.GetClothes(11).Drawable);
        }
    }
}