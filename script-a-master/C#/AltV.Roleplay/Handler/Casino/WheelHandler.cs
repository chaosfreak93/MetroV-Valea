using System;
using System.Threading.Tasks;
using AltV.Net;
using AltV.Net.Async;
using Altv_Roleplay.Factories;

namespace Altv_Roleplay.Handler.Casino
{
    public class WheelHandler : IScript
    {
        public bool isRolling = false;
         
        [AsyncClientEvent("Client:Casino:DoRoll")]
        public async Task DoRoll(ClassicPlayer player) {
            if (!isRolling) {
                isRolling = true;
                int priceIndex  = new Random().Next(1, 100);

                Alt.EmitAllClients("Client:Casino:StartRoll", priceIndex);
                await Task.Delay(6500);
                switch (priceIndex) {
                    case 1:
                    case 2:
                    case 41:
                    case 42:
                        //2,5k RP
                        Alt.Log("2,5k RP");
                        break;
                    case 3:
                    case 4:
                    case 22:
                    case 23:
                    case 63:
                    case 64:
                        //20k $
                        Alt.Log("20k $");
                        break;
                    case 5:
                    case 6:
                    case 24:
                    case 25:
                    case 26:
                    case 65:
                    case 66:
                        //Discount
                        Alt.Log("Discount");
                        break;
                    case 7:
                    case 8:
                    case 27:
                    case 28:
                        //30k $
                        Alt.Log("30k $");
                        break;
                    case 9:
                    case 10:
                    case 13:
                    case 14:
                    case 17:
                    case 18:
                    case 20:
                    case 21:
                    case 29:
                    case 30:
                    case 33:
                    case 34:
                    case 37:
                    case 38:
                    case 56:
                    case 57:
                    case 60:
                    case 61:
                    case 62:
                    case 76:
                    case 77:
                    case 81:
                    case 82:
                    case 92:
                    case 93:
                    case 94:
                        //Clothing
                        Alt.Log("Clothing");
                        break;
                    case 11:
                    case 12:
                    case 31:
                    case 32:
                    case 90:
                    case 91:
                        //20k Jetons
                        Alt.Log("20k Jetons");
                        break;
                    case 15:
                    case 16:
                    case 35:
                    case 36:
                    case 95:
                    case 96:
                        //40k $
                        Alt.Log("40k $");
                        break;
                    case 19:
                    case 39:
                    case 40:
                    case 58:
                    case 59:
                    case 78:
                    case 79:
                    case 80:
                        //Vehicle
                        Alt.Log("Vehicle");
                        Alt.EmitAllClients("Client:Casino:ShowBigWin");
                        await Task.Delay(7000);
                        break;
                    case 43:
                    case 44:
                    case 83:
                    case 84:
                        //10k Jetons
                        Alt.Log("10k Jetons");
                        break;
                    case 45:
                    case 46:
                    case 85:
                    case 86:
                    case 87:
                        //5k RP
                        Alt.Log("5k RP");
                        break;
                    case 47:
                    case 48:
                    case 49:
                    case 67:
                    case 68:
                    case 88:
                    case 89:
                        //15k Jetons
                        Alt.Log("15k Jetons");
                        break;
                    case 50:
                    case 51:
                    case 69:
                    case 70:
                    case 71:
                        //7,5k RP
                        Alt.Log("7,5k RP");
                        break;
                    case 52:
                    case 53:
                    case 72:
                    case 73:
                        //Mystery
                        Alt.Log("Mystery");
                        break;
                    case 54:
                    case 55:
                    case 74:
                    case 75:
                        //10k RP
                        Alt.Log("10k RP");
                        break;
                    case 97:
                    case 98:
                        //15k RP
                        Alt.Log("15k RP");
                        break;
                    case 99:
                    case 100:
                        //50k $
                        Alt.Log("50k $");
                        break;
                }
                isRolling = false;
                Alt.EmitAllClients("Client:Casino:FinishRoll");
            }
        }
    }
}