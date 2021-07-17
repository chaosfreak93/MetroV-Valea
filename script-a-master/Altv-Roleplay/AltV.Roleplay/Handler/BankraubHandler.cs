using System;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using AltV.Net;
using AltV.Net.Async;
using Altv_Roleplay.Factories;
using Altv_Roleplay.Model;
using Altv_Roleplay.Utils;
using Newtonsoft.Json.Linq;

namespace Altv_Roleplay.Handler
{
    internal class BankraubHandler
    {
        public int cooldown = 1800000;
        public JObject info = JObject.Parse("{\"stage\": 0, \"style\": null, \"locked\": false}");
        public long lastrobbed;
        public int maxcash = 16000;
        public int mincash = 10000;
        public int mincops = 1;

        public JArray PoliceDoors = JArray.Parse(
            "[{\"loc\":{\"x\":257.1,\"y\":220.3,\"z\":106.28},\"txtloc\":{\"x\":257.1,\"y\":220.3,\"z\":106.28},\"model\":\"hei_v_ilev_bk_gate_pris\",\"model2\":\"hei_v_ilev_bk_gate_molten\",\"obj\":null,\"obj2\":null,\"locked\":true},{\"loc\":{\"x\":237.7704,\"y\":227.87,\"z\":106.426},\"txtloc\":{\"x\":236.91,\"y\":227.5,\"z\":106.29},\"model\":\"v_ilev_bk_door\",\"model2\":\"v_ilev_bk_door\",\"obj\":null,\"obj2\":null,\"locked\":true},{\"loc\":{\"x\":262.1981,\"y\":222.5188,\"z\":106.4296},\"txtloc\":{\"x\":262.35,\"y\":223,\"z\":107.05},\"model\":\"hei_v_ilev_bk_gate2_pris\",\"model2\":\"hei_v_ilev_bk_gate2_pris\",\"obj\":null,\"obj2\":null,\"locked\":true},{\"loc\":{\"x\":251.8576,\"y\":221.0655,\"z\":101.8324},\"txtloc\":{\"x\":252.72,\"y\":220.95,\"z\":101.68},\"model\":\"hei_v_ilev_bk_safegate_pris\",\"model2\":\"hei_v_ilev_bk_safegate_molten\",\"obj\":null,\"obj2\":null,\"locked\":true},{\"loc\":{\"x\":261.01,\"y\":215.01,\"z\":101.68},\"txtloc\":{\"x\":261.01,\"y\":215.01,\"z\":101.68},\"model\":\"hei_v_ilev_bk_safegate_pris\",\"model2\":\"hei_v_ilev_bk_safegate_molten\",\"obj\":null,\"obj2\":null,\"locked\":true},{\"loc\":{\"x\":253.92,\"y\":224.56,\"z\":101.88},\"txtloc\":{\"x\":253.92,\"y\":224.56,\"z\":101.88},\"model\":\"v_ilev_bk_vaultdoor\",\"model2\":\"v_ilev_bk_vaultdoor\",\"obj\":null,\"obj2\":null,\"locked\":true}]");

        public int totalcash;

        [AsyncClientEvent("utk_oh:GetData")]
        public async Task GetData(ClassicPlayer player) {
            await player.EmitAsync("utk_oh:GetData", info.ToString());
        }

        [AsyncClientEvent("utk_oh:GetDoors")]
        public async Task GetDoors(ClassicPlayer player) {
            await player.EmitAsync("utk_oh:GetDoors_c", PoliceDoors.ToString());
        }

        [AsyncClientEvent("utk_oh:startevent")]
        public async Task startevent(ClassicPlayer player, int method) {
            if (!bool.Parse(info["locked"].ToString())) {
                if (ServerFactions.GetFactionDutyMemberCount(2) + ServerFactions.GetFactionDutyMemberCount(12) < mincops) {
                    HUDHandler.SendNotification(player, 3, 2500, "Es sind weniger als 4 Polizisten im Staat.");
                    return;
                }

                var current = DateTimeOffset.Now.ToUnixTimeMilliseconds();

                if (current - cooldown > lastrobbed) {
                    if (method == 1) {
                        info["stage"] = 1;
                        info["style"] = 1;
                        info["locked"] = true;
                        await player.EmitAsync("utk_oh:startevent_c", method, true);
                    } else if (method == 2) {
                        info["stage"] = 1;
                        info["style"] = 2;
                        info["locked"] = true;
                        await player.EmitAsync("utk_oh:startevent_c", method, true);
                    }
                }
            }
        }

        [AsyncClientEvent("utk_oh:gettotalcash")]
        public async Task getTotalCash(ClassicPlayer player) {
            await player.EmitAsync("utk_oh:gettotalcash_c", totalcash);
        }

        [AsyncClientEvent("utk_oh:updatecheck")]
        public void UpdateCheck(ClassicPlayer player, object data, object status) {
            Alt.EmitAllClients("utk_oh:updatecheck_c", data, status);
        }

        [AsyncClientEvent("utk_oh:policeDoor")]
        public void policeDoor(ClassicPlayer player, int doornum, bool status) {
            PoliceDoors[doornum]["locked"] = status;
            Alt.EmitAllClients("utk_oh:policeDoor_c", doornum, status);
        }

        [AsyncClientEvent("utk_oh:moltgate")]
        public void moltgate(ClassicPlayer player, int x, int y, int z, string oldmodel, string newmodel, int method) {
            Alt.EmitAllClients("utk_oh:moltgate_c", x, y, z, oldmodel, newmodel, method);
        }

        [AsyncClientEvent("utk_oh:fixdoor")]
        public void FixDoor(ClassicPlayer player, int hash, Vector3 coords, int heading) {
            Alt.EmitAllClients("utk_oh:fixdoor_c", hash, coords, heading);
        }

        [AsyncClientEvent("utk_oh:openvault")]
        public void OpenVault(ClassicPlayer player, int method) {
            Alt.EmitAllClients("utk_oh:openvault_c", method);
        }

        [AsyncClientEvent("utk_oh:startloot")]
        public void StartLoot(ClassicPlayer player) {
            Alt.EmitAllClients("utk_oh:startloot_c");
        }

        [AsyncClientEvent("utk_oh:rewardCash")]
        public void RewardCash(ClassicPlayer player) {
            var reward = new Random().Next(mincash, maxcash);

            CharactersInventory.AddCharacterItem(player.CharacterId, "Bargeld", reward, "inventory");
            HUDHandler.SendNotification(player, 2, 2500, "Du hast " + reward + "$ erhalten.");
            totalcash = totalcash + reward;
        }

        [AsyncClientEvent("utk_oh:ostimer")]
        public async Task OsTimer(ClassicPlayer player) {
            lastrobbed = DateTimeOffset.Now.ToUnixTimeMilliseconds();
            info["stage"] = 0;
            info["style"] = null;
            info["locked"] = false;
            await Task.Delay(300000);

            for (var i = 0; i < PoliceDoors.Count; i++) {
                PoliceDoors[i]["locked"] = true;
                Alt.EmitAllClients("utk_oh:policeDoor_c", i, true);
            }

            totalcash = 0;
            Alt.EmitAllClients("utk_oh:reset");
        }

        [AsyncClientEvent("utk_oh:spraygas")]
        public void SprayGas(ClassicPlayer player) {
            Alt.EmitAllClients("utk_oh:spraygas_c");
        }

        [AsyncClientEvent("utk_oh:gas")]
        public void Gas(ClassicPlayer player) {
            Alt.EmitAllClients("utk_oh:gas_c");
        }

        [AsyncClientEvent("utk_oh:ptfx")]
        public void ptfx(ClassicPlayer player, int method) {
            Alt.EmitAllClients("utk_oh:ptfx_c", method);
        }

        [AsyncClientEvent("utk_oh:alarm_s")]
        public void alarm(ClassicPlayer player) {
            ServerFactions.AddNewFactionDispatch(0, 1, "Aktiver Bankraub", player.Position);

            foreach (var p in Alt.Server.GetPlayers().Where(x => x != null && x.Exists && x.GetCharacterMetaId() > 0).ToList()) {
                if (!ServerFactions.IsCharacterInAnyFaction((int) p.GetCharacterMetaId()) ||
                    !ServerFactions.IsCharacterInFactionDuty((int) p.GetCharacterMetaId()) ||
                    ServerFactions.GetCharacterFactionId((int) p.GetCharacterMetaId()) != 3) continue;

                HUDHandler.SendNotification(p, 1, 9500, "Ein stiller Alarm wurde ausgelöst.");
            }
        }

        [AsyncClientEvent("utk_oh:createObject")]
        public void CreateObject(ClassicPlayer player, int hash, float x, float y, float z) {
            Alt.EmitAllClients("utk_oh:createObject_c", player, hash, x, y, z);
        }

        [AsyncClientEvent("utk_oh:deleteObject")]
        public void DeleteObject(ClassicPlayer player, object model) {
            Alt.EmitAllClients("utk_oh:deleteObject_c", model);
        }
        //TODO: Create and delete Object
    }
}