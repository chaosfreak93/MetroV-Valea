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
        //public static int priceIndex = 0;
         
        [AsyncClientEvent("Client:Casino:DoRoll")]
        public async Task DoRoll(ClassicPlayer player) {
            if (!isRolling) {
                isRolling = true;
                int priceIndex  = new Random().Next(1, 200);

                Alt.EmitAllClients("Client:Casino:StartRoll", priceIndex);
                await Task.Delay(7500);
                switch (priceIndex) {
                    case 1:
                    case 2:
                    case 41:
                    case 42:
                    case 121:
                    case 122:
                    case 123:
                        //2,5k RP
                        Alt.Log("2,5k RP");
                        break;
                    case 3:
                    case 4:
                    case 22:
                    case 23:
                    case 63:
                    case 64:
                    case 102:
                    case 103:
                    case 142:
                    case 143:
                    case 182:
                    case 183:
                    case 184:
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
                    case 104:
                    case 105:
                    case 106:
                    case 124:
                    case 125:
                    case 126:
                    case 144:
                    case 145:
                    case 146:
                    case 185:
                    case 186:
                        //Discount
                        Alt.Log("Discount");
                        break;
                    case 7:
                    case 8:
                    case 27:
                    case 28:
                    case 107:
                    case 108:
                    case 127:
                    case 128: 
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
                    case 117:
                    case 118:
                    case 137:
                    case 138:
                    case 152:
                    case 153:
                    case 154:
                    case 160:
                    case 161:
                    case 162:
                    case 168:
                    case 169:
                    case 170:
                    case 176:
                    case 177:
                    case 178:
                    case 196:
                    case 197:
                        //Clothing
                        Alt.Log("Clothing");
                        break;
                    case 11:
                    case 12:
                    case 31:
                    case 32:
                    case 90:
                    case 91:
                    case 190:
                    case 191:
                    case 192:
                        //20k Jetons
                        Alt.Log("20k Jetons");
                        break;
                    case 15:
                    case 16:
                    case 35:
                    case 36:
                    case 95:
                    case 96:
                    case 114:
                    case 115:
                    case 116:
                    case 134:
                    case 135:
                    case 136:
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
                    case 198:
                    case 199:
                    case 200:
                        //Vehicle
                        Alt.Log("Vehicle");
                        Alt.EmitAllClients("Client:Casino:ShowBigWin");
                        await Task.Delay(7000);
                        break;
                    case 43:
                    case 44:
                    case 83:
                    case 84:
                    case 163:
                    case 164:
                        //10k Jetons
                        Alt.Log("10k Jetons");
                        break;
                    case 45:
                    case 46:
                    case 85:
                    case 86:
                    case 87:
                    case 165:
                    case 166:
                    case 167:
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
                    case 147:
                    case 148:
                    case 149:
                    case 187:
                    case 188:
                    case 189:
                        //15k Jetons
                        Alt.Log("15k Jetons");
                        break;
                    case 50:
                    case 51:
                    case 69:
                    case 70:
                    case 71:
                    case 109:
                    case 110:
                    case 111:
                    case 129:
                    case 130:
                    case 131:
                    case 150:
                    case 151:
                        //7,5k RP
                        Alt.Log("7,5k RP");
                        break;
                    case 52:
                    case 53:
                    case 72:
                    case 73:
                    case 112:
                    case 113:
                    case 132:
                    case 133:
                    case 171:
                    case 172:
                    case 173:
                        //Mystery
                        Alt.Log("Mystery");
                        break;
                    case 54:
                    case 55:
                    case 74:
                    case 75:
                    case 174:
                    case 175:
                    case 193:
                    case 194:
                    case 195:
                        //10k RP
                        Alt.Log("10k RP");
                        break;
                    case 97:
                    case 98:
                    case 158:
                    case 159:
                        //15k RP
                        Alt.Log("15k RP");
                        break;
                    case 99:
                    case 100:
                    case 101:
                    case 119:
                    case 120:
                    case 139:
                    case 140:
                    case 141:
                    case 179:
                    case 180:
                    case 181:
                        //50k $
                        Alt.Log("50k $");
                        break;
                    case 155:
                    case 156:
                    case 157:
                        //25k Jetons
                        break;
                }
                await Task.Delay(1000);
                isRolling = false;
                Alt.EmitAllClients("Client:Casino:FinishRoll");
            }
        }
    }
}