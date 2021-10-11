﻿using AltV.Net;
using AltV.Net.Async;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;
using Altv_Roleplay.Factories;
using Altv_Roleplay.Model;

namespace Altv_Roleplay.Handler
{
    internal class CharCreatorHandler : IScript
    {
        [AsyncClientEvent("Server:Charcreator:CreateCEF")]
        public void CreateCefBrowser(IPlayer client) {
            if (client == null || !client.Exists) return;

            if (((ClassicPlayer) client).accountId <= 0) client.Kick("");
            client.EmitLocked("Client:Charcreator:CreateCEF");
            client.Position = new Position((float) 402.778, (float) -996.9758, -98);
            client.Rotation = new Rotation(0, 0, (float) 3.1168559);
        }

        [AsyncClientEvent("Server:Charcreator:CreateCharacter")]
        public void CreateCharacter(IPlayer client, string charname, string birthdate, bool gender, string facefeaturesarray,
            string headblendsdataarray, string headoverlaysarray) {
            if (client == null || !client.Exists) return;

            if (Characters.ExistCharacterName(charname)) {
                client.EmitLocked("Client:Charcreator:showError", "Der eingegebene Charaktername ist bereits vergeben.");
                return;
            }
            //ToDo: Abfrage ob Umlaute oder Sonderzeichen im namen sind, falls ja => error

            Characters.CreatePlayerCharacter(client, charname, birthdate, gender, facefeaturesarray, headblendsdataarray, headoverlaysarray);
            client.EmitLocked("Client:Charcreator:DestroyCEF");
            LoginHandler.CreateLoginBrowser(client);
        }

        [AsyncClientEvent("Server:Barber:finishBarber")]
        public void finishBarber(IPlayer player, string headoverlaysarray) {
            if (player == null || !player.Exists) return;

            var charId = User.GetPlayerOnline(player);
            if (charId == 0 || headoverlaysarray == "") return;

            if (!CharactersInventory.ExistCharacterItem(charId, "Bargeld", "inventory") ||
                CharactersInventory.GetCharacterItemAmount(charId, "Bargeld", "inventory") < 50) {
                HUDHandler.SendNotification(player, 3, 5000, "Du hast nicht genug Bargeld dabei (50$).");
                SetCorrectCharacterSkin(player);
                return;
            }

            CharactersInventory.RemoveCharacterItemAmount(charId, "Bargeld", 50, "inventory");
            Characters.SetCharacterHeadOverlays(charId, headoverlaysarray);
        }

        [AsyncClientEvent("Server:Barber:RequestCurrentSkin")]
        public void SetCorrectCharacterSkin(IPlayer player) {
            if (player == null || !player.Exists) return;

            var charid = User.GetPlayerOnline(player);
            if (charid == 0) return;

            player.EmitLocked("Client:SpawnArea:setCharSkin", Characters.GetCharacterSkin("facefeatures", charid),
                Characters.GetCharacterSkin("headblendsdata", charid), Characters.GetCharacterSkin("headoverlays", charid));
        }
    }
}