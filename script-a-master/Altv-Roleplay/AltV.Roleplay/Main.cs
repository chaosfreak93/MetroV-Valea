﻿using System;
using System.Linq;
using System.Threading;
using AltV.Net;
using AltV.Net.Async;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;
using Altv_Roleplay.Database;
using Altv_Roleplay.Factions.ACLS;
using Altv_Roleplay.Factions.LSMD;
using Altv_Roleplay.Factions.LSPD;
using Altv_Roleplay.Factories;
using Altv_Roleplay.Handler;
using Altv_Roleplay.Model;
using Altv_Roleplay.Utils;
using Timer = System.Timers.Timer;

namespace Altv_Roleplay
{
    public class Main : AsyncResource
    {
        public override IEntityFactory<IPlayer> GetPlayerFactory() {
            return new AccountsFactory();
        }

        public override IBaseObjectFactory<IColShape> GetColShapeFactory() {
            return new ColshapeFactory();
        }

        public override IEntityFactory<IVehicle> GetVehicleFactory() {
            return new VehicleFactory();
        }

        public override void OnStart() {
            AltV.Net.EntitySync.AltEntitySync.Init(7, (threadId) => 200, (threadId) => false,
                (threadCount, repository) => new AltV.Net.EntitySync.ServerEvent.ServerEventNetworkLayer(threadCount, repository),
                (entity, threadCount) => entity.Type,
                (entityId, entityType, threadCount) => entityType,
                (threadId) =>
                {
                    return threadId switch
                    {
                        // Marker
                        0 => new AltV.Net.EntitySync.SpatialPartitions.LimitedGrid3(50_000, 50_000, 75, 10_000, 10_000, 64),
                        // Text
                        1 => new AltV.Net.EntitySync.SpatialPartitions.LimitedGrid3(50_000, 50_000, 75, 10_000, 10_000, 32),
                        // Props
                        2 => new AltV.Net.EntitySync.SpatialPartitions.LimitedGrid3(50_000, 50_000, 100, 10_000, 10_000, 1500),
                        // Help Text
                        3 => new AltV.Net.EntitySync.SpatialPartitions.LimitedGrid3(50_000, 50_000, 100, 10_000, 10_000, 1),
                        // Blips
                        4 => new EntityStreamer.GlobalEntity(),
                        // Dynamic Blip
                        5 => new AltV.Net.EntitySync.SpatialPartitions.LimitedGrid3(50_000, 50_000, 175, 10_000, 10_000, 200),
                        // Ped
                        6 => new AltV.Net.EntitySync.SpatialPartitions.LimitedGrid3(50_000, 50_000, 175, 10_000, 10_000, 64),
                        _ => new AltV.Net.EntitySync.SpatialPartitions.LimitedGrid3(50_000, 50_000, 175, 10_000, 10_000, 115),
                    };
                },
                new AltV.Net.EntitySync.IdProvider());
            
            Environment.SetEnvironmentVariable("COMPlus_legacyCorruptedState­­ExceptionsPolicy", "1");

            //Datenbank laden
            DatabaseHandler.ResetDatabaseOnlineState();
            DatabaseHandler.LoadAllPlayers();
            DatabaseHandler.LoadAllPlayerCharacters();
            DatabaseHandler.LoadAllCharacterSkins();
            DatabaseHandler.LoadAllCharacterBankAccounts();
            DatabaseHandler.LoadAllCharacterLastPositions();
            DatabaseHandler.LoadAllCharacterInventorys();
            DatabaseHandler.LoadAllCharacterLicenses();
            DatabaseHandler.LoadAllCharacterPermissions();
            DatabaseHandler.LoadAllCharacterMinijobData();
            DatabaseHandler.LoadAllCharacterPhoneChats();
            DatabaseHandler.LoadAllCharacterWanteds();
            DatabaseHandler.LoadAllServerBlips();
            DatabaseHandler.LoadAllServerMarkers();
            DatabaseHandler.LoadAllServerVehiclesGlobal();
            DatabaseHandler.LoadAllServerAnimations();
            DatabaseHandler.LoadAllServerATMs();
            DatabaseHandler.LoadAllServerBanks();
            DatabaseHandler.LoadAllServerBankPapers();
            DatabaseHandler.LoadAllServerItems();
            DatabaseHandler.LoadAllServerPeds();
            DatabaseHandler.LoadAllClothesShops();
            DatabaseHandler.LoadAllServerShops();
            DatabaseHandler.LoadAllServerShopItems();
            DatabaseHandler.LoadAllServerBarbers();
            DatabaseHandler.LoadAllServerTeleports();
            DatabaseHandler.LoadAllGarages();
            DatabaseHandler.LoadAllGarageSlots();
            DatabaseHandler.LoadAllServerVehicleMods();
            DatabaseHandler.LoadAllVehicleMods();
            DatabaseHandler.LoadAllVehicles();
            DatabaseHandler.LoadAllVehicleTrunkItems();
            DatabaseHandler.LoadAllVehicleShops();
            DatabaseHandler.LoadAllVehicleShopItems();
            DatabaseHandler.LoadAllServerFarmingSpots();
            DatabaseHandler.LoadAllServerFarmingProducers();
            DatabaseHandler.LoadAllServerJobs();
            DatabaseHandler.LoadAllServerLicenses();
            DatabaseHandler.LoadAllServerFuelStations();
            DatabaseHandler.LoadALlServerFuelStationSpots();
            DatabaseHandler.LoadAllServerTabletAppData();
            DatabaseHandler.LoadAllCharactersTabletApps();
            DatabaseHandler.LoadAllCharactersTabletTutorialEntrys();
            DatabaseHandler.LoadAllServerTabletEvents();
            DatabaseHandler.LoadAllServerTabletAdvertisements();
            DatabaseHandler.LoadAllServerTabletNotes();
            DatabaseHandler.LoadAllServerCompanys();
            DatabaseHandler.LoadAllServerCompanyMember();
            DatabaseHandler.LoadAllServerFactions();
            DatabaseHandler.LoadAllServerFactionRanks();
            DatabaseHandler.LoadAllServerFactionMembers();
            DatabaseHandler.LoadAllServerFactionStorageItems();
            DatabaseHandler.LoadAllServerDoors();
            DatabaseHandler.LoadAllServerHotels();
            DatabaseHandler.LoadAllServerHouses();
            DatabaseHandler.LoadAllServerMinijobBusdriverRoutes();
            DatabaseHandler.LoadAllServerMinijobBusdriverRouteSpots();
            DatabaseHandler.LoadAllServerMinijobGarbageSpots();
            DatabaseHandler.LoadAllServerLogsFaction();
            DatabaseHandler.LoadAllServerLogsCompany();
            DatabaseHandler.LoadAllTattooStuff();

            WeatherHandler.GetRealWeatherType();

            //Database.DatabaseHandler.RenewAll();

            Minijobs.Elektrolieferant.Main.Initialize();
            Minijobs.Pilot.Main.Initialize();
            Minijobs.Müllmann.Main.Initialize();
            Minijobs.Busfahrer.Main.Initialize();
            //TODO: Reaktivieren
            ACLSBot.Main();
            //LSPDBot.Main();
            LSMDBot.Main();

            //Events registrieren
            Alt.OnColShape += ColAction;
            //Alt.OnClient<IPlayer, string, string>("Server:Login:ValidateLoginCredentials", LoginHandler.ValidateLoginCredentials);
            //Alt.OnClient<IPlayer, int>("Server:Charselector:PreviewCharacter", LoginHandler.PreviewCharacter);
            //Alt.OnClient<IPlayer, string, string>("Server:Charselector:spawnChar", Handler.LoginHandler.CharacterSelectedSpawnPlace);
            //Alt.OnClient<IPlayer, int>("Server:Charselector:KillCharacter", Characters.KillCharacter);
            //Alt.OnClient<IPlayer, string, string, string, string>("Server:Register:RegisterNewPlayer", Handler.RegisterHandler.RegisterNewPlayer);
            //Alt.OnClient<IPlayer>("Server:Charcreator:CreateCEF", Handler.CharCreatorHandler.CreateCefBrowser);
            //Alt.OnClient<IPlayer, string, string, bool, string, string, string>("Server:Charcreator:CreateCharacter", Handler.CharCreatorHandler.CreateCharacter);
            /*Alt.OnClient<IPlayer, float, float, float>("ServerBlip:TpWayPoint", tptoWaypoint); //ToDo: entfernen*/
            //Alt.OnClient<IPlayer>("Server:Inventory:RequestInventoryItems", Handler.InventoryHandler.RequestInventoryItems);
            //Alt.OnClient<IPlayer, string, int, string, string>("Server:Inventory:switchItemToDifferentInv", Handler.InventoryHandler.switchItemToDifferentInv);
            //Alt.OnClient<IPlayer, string, int, string>("Server:Inventory:UseItem", Handler.InventoryHandler.UseItem);
            //Alt.OnClient<IPlayer, string, int, string>("Server:Inventory:DropItem", Handler.InventoryHandler.DropItem);
            //Alt.OnClient<IPlayer, string, int, string, int>("Server:Inventory:GiveItem", InventoryHandler.GiveItem);
            //Alt.OnClient<IPlayer>("Server:KeyHandler:PressE", Handler.KeyHandler.PressE);
            //Alt.OnClient<IPlayer>("Server:KeyHandler:PressU", KeyHandler.PressU);
            //Alt.OnClient<IPlayer, string>("Server:HUD:sendIdentityCardApplyForm", Handler.TownhallHandler.sendIdentityCardApplyForm);
            //Alt.OnClient<IPlayer, string>("Server:Bank:CreateNewBankAccount", Handler.BankHandler.CreateNewBankAccount);
            //Alt.OnClient<IPlayer, string, string>("Server:Bank:BankAccountAction", Handler.BankHandler.BankAccountAction);
            //Alt.OnClient<IPlayer>("Server:Inventory:closeCEF", Handler.InventoryHandler.CloseInventoryCEF);
            //Alt.OnClient<IPlayer, bool>("Server:CEF:setCefStatus", setCefStatus);
            //Alt.OnClient<IPlayer, int>("Server:ATM:requestBankData", Handler.BankHandler.requestATMBankData);
            //Alt.OnClient<IPlayer, int, int, string>("Server:ATM:WithdrawMoney", Handler.BankHandler.WithdrawATMMoney);
            //Alt.OnClient<IPlayer, int, int, string>("Server:ATM:DepositMoney", Handler.BankHandler.DepositATMMoney);
            //Alt.OnClient<IPlayer, int, int, int, string>("Server:ATM:TransferMoney", Handler.BankHandler.TransferATMMoney);
            //Alt.OnClient<IPlayer, string, int>("Server:ATM:TryPin", Handler.BankHandler.TryATMPin);
            //Alt.OnClient<IPlayer, int, int, string>("Server:Shop:buyItem", Handler.ShopHandler.buyShopItem);
            //Alt.OnClient<IPlayer, int, int, string>("Server:Shop:sellItem", ShopHandler.sellShopItem);
            //Alt.OnClient<IPlayer, string>("Server:Barber:finishBarber", Handler.CharCreatorHandler.finishBarber);
            //Alt.OnClient<IPlayer>("Server:Barber:RequestCurrentSkin", Handler.CharCreatorHandler.SetCorrectCharacterSkin);
            //Alt.OnClient<IPlayer, IVehicle>("Server:Raycast:LockVehicle", RaycastHandler.LockVehicle);
            //Alt.OnClient<IPlayer, IVehicle>("Server:Raycast:ToggleVehicleEngine", RaycastHandler.ToggleVehicleEngine);
            //Alt.OnClient<IPlayer, IVehicle>("Server:Raycast:OpenVehicleFuelMenu", RaycastHandler.OpenVehicleFuelMenu);
            //Alt.OnClient<IPlayer, IVehicle>("Server:Raycast:OpenCloseVehicleTrunk", RaycastHandler.OpenCloseVehicleTrunk);
            //Alt.OnClient<IPlayer, IVehicle>("Server:Raycast:ViewVehicleTrunk", RaycastHandler.ViewVehicleTrunk);
            //Alt.OnClient<IPlayer, IVehicle>("Server:Raycast:ViewVehicleGlovebox", RaycastHandler.ViewVehicleGlovebox);
            //Alt.OnClient<IPlayer, int, int, string, int, string, string>("Server:VehicleTrunk:StorageItem", VehicleHandler.VehicleTrunkStorageItem);
            //Alt.OnClient<IPlayer, int, int, string, int, string>("Server:VehicleTrunk:TakeItem", VehicleHandler.VehicleTrunkTakeItem);
            //Alt.OnClient<IPlayer, IPlayer>("Server:Raycast:showPlayerSupportId", RaycastHandler.showPlayerSupportId);
            //Alt.OnClient<IPlayer, IPlayer, string>("Server:Raycast:OpenGivePlayerBillCEF", RaycastHandler.OpenGivePlayerBillCEF);
            //Alt.OnClient<IPlayer, IPlayer>("Server:Raycast:RevivePlayer", Factions.LSFD.Functions.RevivePlayer);
            //Alt.OnClient<IPlayer, string, string, int, int>("Server:PlayerBill:giveBill", RaycastHandler.PlayerBillGiveBill);
            //Alt.OnClient<IPlayer, string, string, int, int, string, int>("Server:PlayerBill:BillAction", RaycastHandler.PlayerBillAction);
            //Alt.OnClient<IPlayer, IPlayer>("Server:Raycast:givePlayerItemRequest", RaycastHandler.givePlayerItemRequest);
            //Alt.OnClient<IPlayer, IPlayer>("Server:Raycast:GiveTakeHandcuffs", RaycastHandler.GiveTakeHandcuffs);
            //Alt.OnClient<IPlayer, IPlayer>("Server:Raycast:GiveTakeRopeCuffs", RaycastHandler.GiveTakeRopeCuffs);
            //Alt.OnClient<IPlayer, IPlayer>("Server:Raycast:SearchPlayerInventory", RaycastHandler.SearchPlayerInventory);
            //Alt.OnClient<IPlayer, int, string, string, int>("Server:PlayerSearch:TakeItem", InventoryHandler.PlayerSearchTakeItem);
            //Alt.OnClient<IPlayer, IPlayer>("Server:Raycast:openGivePlayerLicenseCEF", RaycastHandler.openGivePlayerLicenseCEF);
            //Alt.OnClient<IPlayer, int, string, int>("Server:Garage:DoAction", GarageHandler.DoGarageAction);
            //Alt.OnClient<IPlayer, int, string>("Server:VehicleShop:BuyVehicle", ShopHandler.BuyVehicle);
            //Alt.OnClient<IPlayer, float>("Server:Vehicle:UpdateVehicleKM", HUDHandler.UpdateVehicleKM);
            //Alt.OnClient<IPlayer, string>("Server:Jobcenter:SelectJob", TownhallHandler.SelectJobcenterJob);
            //Alt.OnClient<IPlayer, int, int, string, int, int>("Server:FuelStation:FuelVehicleAction", FuelStationHandler.FuelVehicle);
            //Alt.OnClient<IPlayer>("Server:ClothesShop:RequestCurrentSkin", Characters.SetCharacterCorrectClothes);
            //Alt.OnClient<IPlayer, int, int, string>("Server:ClothesShop:buyItem", ShopHandler.buyShopItem);
            //Alt.OnClient<IPlayer>("Server:Tablet:openCEF", TabletHandler.openCEF);
            //Alt.OnClient<IPlayer>("Server:Tablet:RequestTabletData", TabletHandler.RequestTabletData);
            //Alt.OnClient<IPlayer, string, bool>("Server:Tablet:AppStoreInstallUninstallApp", TabletHandler.AppStoreInstallUninstallApp);
            //Alt.OnClient<IPlayer, int, string, int>("Server:Tablet:BankingAppNewTransaction", TabletHandler.BankingAppNewTransaction);
            //Alt.OnClient<IPlayer, string, string, string, string, string, string, string>("Server:Tablet:EventsAppNewEntry", TabletHandler.EventsAppNewEntry);
            //Alt.OnClient<IPlayer, string, string, string>("Server:Tablet:NotesAppNewNote", TabletHandler.NotesAppNewNote);
            //Alt.OnClient<IPlayer, int>("Server:Tablet:NotesAppDeleteNote", TabletHandler.NotesAppDeleteNote);
            //Alt.OnClient<IPlayer, string, int, string>("Server:Tablet:VehicleStoreBuyVehicle", TabletHandler.VehicleStoreBuyVehicle);
            //Alt.OnClient<IPlayer, string, int>("Server:Tablet:CompanyAppInviteNewMember", TabletHandler.CompanyAppInviteNewMember);
            //Alt.OnClient<IPlayer>("Server:Tablet:CompanyAppLeaveCompany", TabletHandler.CompanyAppLeaveCompany);
            //Alt.OnClient<IPlayer, int, int>("Server:Tablet:CompanyAppRankAction", TabletHandler.CompanyAppRankAction);
            //Alt.OnClient<IPlayer, string, int, int>("Server:FactionBank:DepositMoney", BankHandler.DepositFactionMoney);
            //Alt.OnClient<IPlayer, string, int, int>("Server:FactionBank:WithdrawMoney", BankHandler.WithdrawFactionMoney);
            //Alt.OnClient<IPlayer, string, int, int>("Server:Tablet:FactionManagerAppInviteNewMember", TabletHandler.FactionManagerAppInviteNewMember);
            //Alt.OnClient<IPlayer, string, int>("Server:Tablet:FactionManagerRankAction", TabletHandler.FactionManagerRankAction);
            //Alt.OnClient<IPlayer, int, int>("Server:Tablet:FactionManagerSetRankPaycheck", TabletHandler.FactionManagerSetRankPaycheck);
            //Alt.OnClient<IPlayer, int, int, string, int, string>("Server:FactionStorage:StorageItem", FactionHandler.FactionStorageStorageItem);
            //Alt.OnClient<IPlayer, int, int, string, int>("Server:FactionStorage:TakeItem", FactionHandler.FactionStorageTakeItem);
            //Alt.OnClient<IPlayer, string, IVehicle>("Server:InteractionMenu:GetMenuVehicleItems", RaycastHandler.GetMenuVehicleItems);
            //Alt.OnClient<IPlayer, string, IPlayer>("Server:InteractionMenu:GetMenuPlayerItems", RaycastHandler.GetMenuPlayerItems);
            //Alt.OnClient<IPlayer, string, int, string, string>("Server:VehicleLicensing:LicensingAction", VehicleHandler.LicensingAction);
            //Alt.OnClient<IPlayer, string>("Server:Tablet:LSPDAppSearchPerson", Factions.LSPD.Functions.LSPDAppSearchPerson);
            //Alt.OnClient<IPlayer, string>("Server:Tablet:LSPDAppSearchVehiclePlate", Factions.LSPD.Functions.LSPDAppSearchVehiclePlate);
            //Alt.OnClient<IPlayer, string>("Server:Tablet:LSPDAppSearchLicense", Factions.LSPD.Functions.LSPDAppSearchLicense);
            //Alt.OnClient<IPlayer, string, string>("Server:Tablet:LSPDAppTakeLicense", Factions.LSPD.Functions.LSPDAppTakeLicense);
            //Alt.OnClient<IPlayer, int, string>("Server:GivePlayerLicense:GiveLicense", Factions.LSFS.Functions.GiveLicense);
            //Alt.OnClient<IPlayer, string>("Server:Tablet:JusticeAppGiveWeaponLicense", Factions.Justice.Functions.GiveWeaponLicense);
            //Alt.OnClient<IPlayer, string>("Server:Tablet:JusticeAppSearchBankAccounts", Factions.Justice.Functions.SearchBankAccounts);
            //Alt.OnClient<IPlayer, int>("Server:Tablet:JusticeAppViewBankTransactions", Factions.Justice.Functions.ViewBankTransactions);
            //Alt.OnClient<IPlayer, int>("Server:MinijobPilot:StartJob", Minijobs.Pilot.Main.StartMiniJob);
            //Alt.OnClient<IPlayer, int>("Server:MinijobBusdriver:StartJob", Minijobs.Busfahrer.Main.StartMiniJob);
            //Alt.OnClient<IPlayer, int, int>("Server:Hotel:RentHotel", HotelHandler.RentHotel);
            //Alt.OnClient<IPlayer, int, int>("Server:Hotel:LockHotel", HotelHandler.LockHotel);
            //Alt.OnClient<IPlayer, int, int>("Server:Hotel:EnterHotel", HotelHandler.EnterHotel);
            //Alt.OnClient<IPlayer, int, string, int, string>("Server:HotelStorage:StorageItem", HotelHandler.StorageHotelItem);
            //Alt.OnClient<IPlayer, int, string, int>("Server:HotelStorage:TakeItem", HotelHandler.TakeHotelItem);
            //Alt.OnClient<IPlayer, int>("Server:House:BuyHouse", HouseHandler.BuyHouse);
            //Alt.OnClient<IPlayer, int>("Server:House:EnterHouse", HouseHandler.EnterHouse);
            //Alt.OnClient<IPlayer, int, string, int, string>("Server:HouseStorage:StorageItem", HouseHandler.StorageItem);
            //Alt.OnClient<IPlayer, int, string, int>("Server:HouseStorage:TakeItem", HouseHandler.TakeItem);
            //Alt.OnClient<IPlayer, int>("Server:House:RentHouse", HouseHandler.RentHouse);
            //Alt.OnClient<IPlayer, int>("Server:House:UnrentHouse", HouseHandler.UnrentHouse);
            //Alt.OnClient<IPlayer, int, int>("Server:HouseManage:setRentPrice", HouseHandler.setRentPrice);
            //Alt.OnClient<IPlayer, int, string>("Server:HouseManage:setRentState", HouseHandler.setRentState);
            //Alt.OnClient<IPlayer, int, int>("Server:HouseManage:RemoveRenter", HouseHandler.RemoveRenter);
            //Alt.OnClient<IPlayer, int, string>("Server:HouseManage:BuyUpgrade", HouseHandler.BuyUpgrade);
            //Alt.OnClient<IPlayer, int, int>("Server:HouseManage:WithdrawMoney", HouseHandler.WithdrawMoney);
            //Alt.OnClient<IPlayer, int, int>("Server:HouseManage:DepositMoney", HouseHandler.DepositMoney);
            //Alt.OnClient<IPlayer, int, string>("Server:Tablet:sendDispatchToFaction", TabletHandler.sendDispatchToFaction);
            //Alt.OnClient<IPlayer, int, int>("Server:Tablet:DeleteFactionDispatch", TabletHandler.DeleteFactionDispatch);
            //Alt.OnClient<IPlayer, IPlayer>("Server:Raycast:showIdcard", RaycastHandler.showIdCard);
            //Alt.OnClient<IPlayer, int>("Server:House:SellHouse", HouseHandler.SellHouse);
            //Alt.OnClient<IPlayer, int>("Server:House:setMainHouse", HouseHandler.setMainHouse);
            //Alt.OnClient<IPlayer, IPlayer>("Server:Raycast:healPlayer", Factions.LSFD.Functions.HealPlayer);
            //Alt.OnClient<IPlayer, IVehicle>("Server:Raycast:RepairVehicle", Factions.ACLS.Functions.RepairVehicle);
            //Alt.OnClient<IPlayer, IVehicle>("Server:Raycast:towVehicle", Factions.ACLS.Functions.TowVehicle);
            //Alt.OnClient<IPlayer, IVehicle>("Server:Raycast:tuneVehicle", Factions.ACLS.Functions.openTuningMenu);
            //Alt.OnClient<IPlayer, IVehicle, string, string, int, int, int>("Server:Tuning:switchTuningColor", Factions.ACLS.Functions.switchTuningColor);
            //Alt.OnClient<IPlayer, IVehicle>("Server:Tuning:resetToNormal", Factions.ACLS.Functions.resetTuningToNormal);
            //Alt.OnClient<IPlayer, IVehicle, string, int, string>("Server:Tuning:switchTuning", Factions.ACLS.Functions.switchTuning);
            Alt.OnClient<IPlayer, string, int, int>("Server:Utilities:createNewMod", createnewmod);
            Alt.OnClient<IPlayer, string>("Server:Utilities:BanMe", banme);

            //Timer initialisieren
            var checkTimer = new Timer();
            var entityTimer = new Timer();
            var desireTimer = new Timer();
            var hotelTimer = new Timer();
            checkTimer.Elapsed += TimerHandler.OnCheckTimer;
            entityTimer.Elapsed += TimerHandler.OnEntityTimer;
            desireTimer.Elapsed += TimerHandler.OnDesireTimer;
            hotelTimer.Elapsed += TimerHandler.HotelTimer;
            checkTimer.Interval += 15000;
            entityTimer.Interval += 60000;
            desireTimer.Interval += 300000;
            hotelTimer.Interval += 300000;
            checkTimer.Enabled = true;
            entityTimer.Enabled = true;
            desireTimer.Enabled = true;
            hotelTimer.Enabled = true;

            Console.WriteLine($"Main-Thread = {Thread.CurrentThread.ManagedThreadId}");
        }

        private void banme(IPlayer player, string msg) {
            try {
                if (player == null || !player.Exists || player.AdminLevel() != 0) return;

                Alt.Log($"Ban Me: {player.Name} - {DateTime.Now.ToString()}");
                var charId = User.GetPlayerOnline(player);
                player.Kick("");
                if (charId <= 0) return;

                User.SetPlayerBanned(Characters.GetCharacterAccountId(charId), true, $"Grund: {msg}");
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        private void createnewmod(IPlayer player, string MName, int MType, int MID) {
            try {
                if (player == null || !player.Exists) return;

                if (player.IsInVehicle) {
                    if (player.Vehicle == null || !player.Vehicle.Exists) return;

                    var vehHash = player.Vehicle.Model;

                    var success = ServerVehicles.AddVehicleMods(vehHash, MName, MType, MID);

                    if (success) {
                        HUDHandler.SendNotification(player, 2, 2500, $"Mod gespeichert: {vehHash} - {MName} - {MType} - {MID}");
                        Alt.Log("Mod erfolgreich gespeichert");
                    } else {
                        HUDHandler.SendNotification(player, 4, 2500,
                            $"Mod konnte nicht gespeichert werden (existiert er schon?): {vehHash} - {MName} - {MType} - {MID}");
                        Alt.Log($"FEHLER: MOD NICHT GESPEICHERT {MType} - {MID} - {MName}");
                    }
                }
            }
            catch (Exception e) {
                Alt.Log($"{e}");
            }
        }

        private void ColAction(IColShape colShape, IEntity targetEntity, bool state) {
            if (colShape == null) return;
            if (!colShape.Exists) return;

            var client = targetEntity as IPlayer;
            if (client == null || !client.Exists) return;

            var colshapeName = colShape.GetColShapeName();
            var colshapeId = colShape.GetColShapeId();

            if (colshapeName == "Cardealer" && state) {
                var vehprice = colShape.GetColshapeCarDealerVehPrice();
                var vehname = colShape.GetColshapeCarDealerVehName();
                HUDHandler.SendNotification(client, 1, 2500, $"Name: {vehname}<br>Preis: {vehprice}$");
            } else if (colshapeName == "DoorShape" && state) {
                var doorData = ServerDoors.ServerDoors_.FirstOrDefault(x => x.id == (int) colshapeId);
                if (doorData == null) return;

                client.EmitLocked("Client:DoorManager:ManageDoor", doorData.doorHash, doorData.doorHash2,
                    new Position(doorData.posX, doorData.posY, doorData.posZ), new Position(doorData.posX2, doorData.posY2, doorData.posZ2),
                    doorData.state);
            }
        }

        private void tptoWaypoint(IPlayer player, float x, float y, float z) //ToDo: entfernen
        {
            if (player == null) return;

            player.Position = new Position(x, y, z);
        }

        public override void OnStop() {
            foreach (var player in Alt.GetAllPlayers().Where(p => p is {Exists: true}))
                player.kickWithMessage("Server wird heruntergefahren...");

            ACLSBot.Stop();
            //LSPDBot.Stop();
            LSMDBot.Stop();
            AltAsync.Log("Server ist gestoppt.");
        }
    }
}