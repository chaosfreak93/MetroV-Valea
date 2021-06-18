using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Altv_Roleplay.models
{
    public class Server_Clothes_Shops_Items
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }

        public byte componentId { get; set; }
        public ushort drawableId { get; set; }
        public byte textureId { get; set; }
        public int gender { get; set; }
        public int isProp { get; set; }
    }
}