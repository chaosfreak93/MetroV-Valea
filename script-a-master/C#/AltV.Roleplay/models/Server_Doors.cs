using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Altv_Roleplay.models
{
    public class Server_Doors
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        public string name { get; set; }
        public string doorHash { get; set; }
        public float posX { get; set; }
        public float posY { get; set; }
        public float posZ { get; set; }
        public string doorHash2 { get; set; }
        public float posX2 { get; set; }
        public float posY2 { get; set; }
        public float posZ2 { get; set; }
        public bool state { get; set; } //0 = offen | 1 = zu
        public string doorKey { get; set; }
        public string doorKey2 { get; set; }
        public string type { get; set; } //Door | Gate
        public float lockPosX { get; set; }
        public float lockPosY { get; set; }
        public float lockPosZ { get; set; }
    }
}