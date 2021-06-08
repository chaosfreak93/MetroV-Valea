using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using AltV.Net;
using AltV.Net.Elements.Entities;
using Altv_Roleplay.models;

namespace Altv_Roleplay.Model
{
    internal class ServerBankPapers
    {
        public static List<Server_Bank_Paper> ServerBankPaper_ = new();

        public static void CreateNewBankPaper(int accountNumber, string Date, string Time, string Type, string ToOrFrom, string Message,
            string moneyAmount, string zoneName) {
            var ServerBankPaperData = new Server_Bank_Paper {
                accountNumber = accountNumber,
                Date = Date,
                Time = Time,
                Type = Type,
                ToOrFrom = ToOrFrom,
                TransactionMessage = Message,
                moneyAmount = moneyAmount,
                zoneName = zoneName
            };

            try {
                ServerBankPaper_.Add(ServerBankPaperData);

                using (var db = new gtaContext()) {
                    db.Server_Bank_Paper.Add(ServerBankPaperData);
                    db.SaveChanges();
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static string GetBankAccountBankPaper(IPlayer player, int accountNumber) {
            if (player == null || !player.Exists) return "";

            var items = ServerBankPaper_.Where(x => x.accountNumber == accountNumber).Select(x => new {
                x.id,
                x.accountNumber,
                x.Date,
                x.Time,
                x.Type,
                x.ToOrFrom,
                Message = x.TransactionMessage,
                x.moneyAmount,
                x.zoneName
            }).OrderByDescending(x => x.id).ToList();

            return JsonSerializer.Serialize(items);
        }

        public static string GetTabletBankAccountBankPaper(int accountNumber) {
            if (accountNumber == 0) return "";

            var items = ServerBankPaper_.Where(x => x.accountNumber == accountNumber).Select(x => new {
                x.id,
                date = x.Date,
                time = x.Time,
                type = x.Type,
                moneyamount = x.moneyAmount,
                location = x.zoneName,
                banknumber = x.ToOrFrom,
                text = x.TransactionMessage
            }).OrderByDescending(x => x.id).ToList();

            return JsonSerializer.Serialize(items);
        }
    }
}