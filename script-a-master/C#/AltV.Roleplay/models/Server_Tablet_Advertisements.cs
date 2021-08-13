using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Altv_Roleplay.models
{
    public class Server_Tablet_Advertisements
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        public int charId { get; set; }
        public int factionId { get; set; }
        public string title { get; set; }
        public string ownerName { get; set; }
        public string callnumber { get; set; }
        public string info { get; set; }
        public DateTime created { get; set; }
    }
}