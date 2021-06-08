﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using AltV.Net;
using AltV.Net.Elements.Entities;
using Altv_Roleplay.models;

namespace Altv_Roleplay.Model
{
    internal class CharactersBank
    {
        public static List<Characters_Bank> CharactersBank_ = new();

        public static void CreateBankAccount(int charid, int accountNumber, int PIN, string zoneName) {
            try {
                var BankAccountData = new Characters_Bank {
                    charId = charid,
                    accountNumber = accountNumber,
                    money = 0,
                    pin = PIN,
                    mainAccount = false,
                    closed = false,
                    pinTrys = 0,
                    createZone = zoneName
                };

                CharactersBank_.Add(BankAccountData);

                using (var db = new gtaContext()) {
                    db.Characters_Bank.Add(BankAccountData);
                    db.SaveChanges();
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static void ChangeBankAccountPIN(int accountNumber, int newPin) {
            try {
                var charBankAcc = CharactersBank_.FirstOrDefault(x => x.accountNumber == accountNumber);
                if (charBankAcc == null) return;

                charBankAcc.pin = newPin;

                using (var db = new gtaContext()) {
                    db.Characters_Bank.Update(charBankAcc);
                    db.SaveChanges();
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static void ChangeBankAccountLockStatus(int accountNumber) {
            try {
                var charBankAcc = CharactersBank_.FirstOrDefault(x => x.accountNumber == accountNumber);
                if (charBankAcc == null) return;

                if (charBankAcc.closed)
                    charBankAcc.closed = false;
                else if (!charBankAcc.closed)
                    charBankAcc.closed = true;

                using (var db = new gtaContext()) {
                    db.Characters_Bank.Update(charBankAcc);
                    db.SaveChanges();
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static void ResetBankAccountPINTrys(int accountNumber) {
            try {
                var charBankAcc = CharactersBank_.FirstOrDefault(x => x.accountNumber == accountNumber);
                if (charBankAcc == null) return;

                charBankAcc.pinTrys = 0;

                using (var db = new gtaContext()) {
                    db.Characters_Bank.Update(charBankAcc);
                    db.SaveChanges();
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static int GetCharacterBankMainKonto(int charId) {
            if (charId <= 0) return 0;

            var charBankAcc = CharactersBank_.FirstOrDefault(x => x.charId == charId && x.mainAccount);

            if (charBankAcc != null)
                return charBankAcc.accountNumber;

            return 0;
        }

        public static bool HasCharacterBankMainKonto(int charId) {
            if (charId == 0) return false;

            var charBankAcc = CharactersBank_.FirstOrDefault(x => x.charId == charId && x.mainAccount);

            if (charBankAcc != null)
                return true;

            return false;
        }

        public static void SetCharacterBankMainKonto(int accountNumber) {
            try {
                var charBankAcc = CharactersBank_.FirstOrDefault(x => x.accountNumber == accountNumber);
                if (charBankAcc == null) return;

                if (charBankAcc.mainAccount) charBankAcc.mainAccount = false;
                else charBankAcc.mainAccount = true;

                using (var db = new gtaContext()) {
                    db.Characters_Bank.Update(charBankAcc);
                    db.SaveChanges();
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static string GetCharacterBankAccounts(int charId) {
            if (charId <= 0) return "";

            var items = CharactersBank_.Where(x => x.charId == charId).Select(x => new {
                charid = x.charId,
                x.accountNumber,
                x.money,
                x.mainAccount,
                x.closed,
                x.createZone,
                isFactionAccount = false
            }).ToList();

            return JsonSerializer.Serialize(items);
        }

        public static int GetCharacterBankAccountCount(IPlayer player) {
            if (player == null || !player.Exists) return 0;

            var charid = User.GetPlayerOnline(player);
            var count = 0;
            if (charid <= 0) return 0;

            count = CharactersBank_.Where(x => x.charId == charid).Count();
            return count;
        }

        public static bool ExistBankAccountNumber(int accountNumber) {
            if (CharactersBank_.FirstOrDefault(x => x.accountNumber == accountNumber) != null)
                return true;

            return false;
        }

        public static bool GetBankAccountLockStatus(int accountNumber) {
            try {
                var charBankAcc = CharactersBank_.FirstOrDefault(x => x.accountNumber == accountNumber);
                if (charBankAcc != null) return charBankAcc.closed;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return false;
        }

        public static int GetBankAccountPIN(int accountNumber) {
            try {
                var charBankAcc = CharactersBank_.FirstOrDefault(x => x.accountNumber == accountNumber);
                if (charBankAcc != null) return charBankAcc.pin;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        public static int GetBankAccountMoney(int accountNumber) {
            try {
                var charBankAcc = CharactersBank_.FirstOrDefault(x => x.accountNumber == accountNumber);
                if (charBankAcc != null) return charBankAcc.money;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        public static void SetBankAccountMoney(int accountNumber, int money) {
            try {
                var charBankAcc = CharactersBank_.FirstOrDefault(x => x.accountNumber == accountNumber);

                if (charBankAcc != null) {
                    charBankAcc.money = money;

                    using (var db = new gtaContext()) {
                        db.Characters_Bank.Update(charBankAcc);
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        public static int GetBankAccountPinTrys(int accountNumber) {
            try {
                var charBankAcc = CharactersBank_.FirstOrDefault(x => x.accountNumber == accountNumber);
                if (charBankAcc != null) return charBankAcc.pinTrys;
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }

            return 0;
        }

        public static void SetBankAccountPinTrys(int accountNumber, int Trys) {
            try {
                var charBankAcc = CharactersBank_.FirstOrDefault(x => x.accountNumber == accountNumber);

                if (charBankAcc != null) {
                    charBankAcc.pinTrys = Trys;

                    using (var db = new gtaContext()) {
                        db.Characters_Bank.Update(charBankAcc);
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }
    }
}