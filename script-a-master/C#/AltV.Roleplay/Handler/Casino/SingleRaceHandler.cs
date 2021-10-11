using System.Linq;
using System.Threading.Tasks;
using AltV.Net;
using AltV.Net.Async;
using Altv_Roleplay.Factories;
using Altv_Roleplay.Model;

namespace Altv_Roleplay.Handler.Casino
{
    public class SingleRaceHandler
    {
        [AsyncClientEvent("Server:Casino:SingleRace:UpdateBetValues")]
        public async Task updateBetValues(ClassicPlayer player, int horse, int bet, int gain, bool showBetScreen) {
            int jetons = 0;
            jetons += CharactersInventory.GetCharacterItemAmount(player.CharacterId, "Jetons", "inventory");
            jetons += CharactersInventory.GetCharacterItemAmount(player.CharacterId, "Jetons", "backpack");
            
            await player.EmitAsync("Client:Casino:SingleRace:UpdateBetValues", horse, bet, jetons, gain);
            if (showBetScreen) await player.EmitAsync("Client:Casino:SingleRace:ShowBetScreen");
        }

        [AsyncClientEvent("Server:Casino:SingleRace:WinRace")]
        public void winRace(ClassicPlayer player, int gain) {
            string location = CharactersInventory.CharactersInventory_.FirstOrDefault(x => x.itemName == "Jetons").itemLocation;
            CharactersInventory.AddCharacterItem(player.CharacterId, "Jetons", gain, location.Length > 0 ? location : "inventory");
            ServerCompanys.SetServerCompanyMoney(2, ServerCompanys.GetServerCompanyMoney(2) - gain);
        }

        [AsyncClientEvent("Server:Casino:SingleRace:StartRace")]
        public void startRace(ClassicPlayer player, int bet) {
            string location = CharactersInventory.CharactersInventory_.FirstOrDefault(x => x.itemName == "Jetons").itemLocation;
            if (location == null || CharactersInventory.GetCharacterItemAmount(player.CharacterId, "Jetons", location) < 1000) {
                HUDHandler.SendNotification(player, 2, 6250, "Du hast nicht genug Jetons dabei. Minimum: 1000 Jetons");
                return;
            }
            
            CharactersInventory.RemoveCharacterItemAmount(player.CharacterId, "Jetons", bet, location);
            ServerCompanys.SetServerCompanyMoney(2, ServerCompanys.GetServerCompanyMoney(2) + bet);
            player.Emit("Client:Casino:SingleRace:StartRace");
        }
    }
}