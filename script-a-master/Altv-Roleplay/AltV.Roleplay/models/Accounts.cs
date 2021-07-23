﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Altv_Roleplay.models
{
    public class Accounts
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int playerid { get; set; }

        public string playerName { get; set; }
        public string Email { get; set; }
        public ulong socialClub { get; set; }
        public ulong hardwareId { get; set; }
        public string password { get; set; }
        public int Online { get; set; } //CharakterID mit welchem der Spieler eingeloggt ist - 0 = offline.
        public bool TSWhitelist { get; set; }
        public bool ICWhitelist { get; set; }
        public bool ban { get; set; }
        public string banReason { get; set; }
        public int adminLevel { get; set; }
    }
}