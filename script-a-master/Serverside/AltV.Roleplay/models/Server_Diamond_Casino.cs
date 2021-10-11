using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Altv_Roleplay.models
{
    public class Server_Diamond_Casino
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id;
        public string podiumVehicle;
        public float insideTrackX;
        public float insideTrackY;
        public float insideTrackZ;
    }
}