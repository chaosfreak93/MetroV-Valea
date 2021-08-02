using AltV.Net.Data;

namespace Altv_Roleplay.Utils
{
    public static class Constants
    {
        public static class DatabaseConfig
        {
            public static string Host = "127.0.0.1";
            public static string User = "altv";
            public static string Password = "qS*qD7tc@cv#aJtu";
            public static string Port = "3306";
            public static string Database = "gta";
        }

        public static class Positions
        {
            public static readonly Position Empty = new(0, 0, 0);

            public static readonly Position
                TownhallHouseSelector = new((float) -555.468, (float) -228.237, (float) 38.15); //Einwohnermeldeamt

            public static readonly Position Jobcenter_Position =
                new((float) -534.5739135742188, (float) -166.22256469726562, (float) 38.324703216552734); //Arbeitsamt

            public static readonly Position VehicleLicensing_Position =
                new((float) -582.9364624023438, (float) -194.5109100341797, (float) 38.324703216552734); //Zulassungsstelle

            public static readonly Position VehicleLicensing_VehPosition =
                new((float) -567.5684814453125, (float) -165.79913330078125, (float) 37.36898422241211); //Zulassungsstele Fzg Pos

            public static readonly Position AutoClubLosSantos_StoreVehPosition =
                new((float) 400.4967, (float) -1632.4088, (float) 29.279907); //Verwahrstelle Einparkpunkt

            public static readonly Position SpawnPos_Airport = new((float) -1140.8704, (float) -2806.1538, (float) 26.8);
            public static readonly Rotation SpawnRot_Airport = new(0, 0, (float) -1.9789561);
            
            public static readonly Position ExitTPPos_Airport = new((float) -1065.68, (float) -2798.35, (float) 26.8659);
            public static readonly Position ExitTargetPos_Airport = new((float) -1043.12, (float) -2746.98, (float) 20.5136);
            public static readonly Rotation ExitTargetRot_Airport = new(0, 0, (float) -0.5);

            public static readonly Position Minijob_Elektrolieferent_StartPos =
                new((float) 727.170654296875, (float) 135.3732147216797, (float) 80.75458526611328);

            public static readonly Position Minijob_Elektrolieferant_VehOutPos =
                new((float) 694.11426, (float) 51.375824, (float) 83.5531);

            public static readonly Rotation Minijob_Elektrolieferant_VehOutRot = new((float) -0.015625, (float) 0.0625, (float) -2.078125);

            public static readonly Position Minijob_Pilot_StartPos =
                new((float) -992.7115478515625, (float) -2948.3564453125, (float) 13.957913398742676);

            public static readonly Position Minijob_Pilot_VehOutPos = new((float) -981.54724, (float) -2994.8044, (float) 14.208423);
            public static readonly Rotation Minijob_Pilot_VehOutRot = new(0, 0, (float) 1.015625);

            public static readonly Position Minijob_Müllmann_StartPos =
                new((float) -617.0723266601562, (float) -1622.7850341796875, (float) 33.010528564453125);

            public static readonly Position Minijob_Müllmann_VehOutPos = new((float) -591.8637, (float) -1586.2814, (float) 25.977295);
            public static readonly Rotation Minijob_Müllmann_VehOutRot = new(0, 0, (float) 1.453125);

            public static readonly Position Minijob_Busdriver_StartPos =
                new((float) 454.12713623046875, (float) -600.075927734375, (float) 28.578372955322266);

            public static readonly Position Minijob_Busdriver_VehOutPos = new((float) 466.33847, (float) -579.0725, (float) 27.729614);
            public static readonly Rotation Minijob_Busdriver_VehOutRot = new(0, 0, (float) 3.046875);

            public static readonly Position Hotel_Apartment_ExitPos =
                new((float) 266.08685302734375, (float) -1007.5635986328125, (float) -101.00853729248047);

            public static readonly Position Hotel_Apartment_StoragePos =
                new((float) 265.9728698730469, (float) -999.4517211914062, (float) -99.00858306884766);

            public static readonly Position Arrest_Position = new(1690.9055f, 2591.222f, 45.910645f);
            public static readonly Position ProcessTest = new((float) -252.05, (float) -971.736, (float) 31.21);
        }
    }
}