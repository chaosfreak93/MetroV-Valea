using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using AltV.Net.Elements.Entities;

namespace Altv_Roleplay.models
{
    public class Server_Minijob_Busdriver_Spots
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        public int routeId { get; set; }
        public int spotId { get; set; }
        public float posX { get; set; }
        public float posY { get; set; }
        public float posZ { get; set; }

        [NotMapped] public IColShape destinationColshape { get; set; }
    }
}