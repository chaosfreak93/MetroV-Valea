using AltV.Net.Data;
using Altv_Roleplay.models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Altv_Roleplay.Model
{
    class ServerDroppedItems
    {
        public static List<Server_Dropped_Items> ServerDroppedItems_ = new List<Server_Dropped_Items>();

        public static void AddItem(string itemName, int amount, Position pos, DateTime droppedTime, int dimension)
        {
            try
            {
                Server_Dropped_Items item = new Server_Dropped_Items
                {
                    itemName = itemName,
                    itemAmount = amount,
                    pos = pos,
                    droppedTimestamp = droppedTime,
                    dimension = dimension,
                    prop = EntityStreamer.PropStreamer.Create("prop_paper_bag_01", pos, new System.Numerics.Vector3(0), dimension: dimension, frozen: true, streamRange: 100),
                    textLabel = EntityStreamer.TextLabelStreamer.Create($"Drücke E um den Gegenstand '{itemName} ({amount}x)' aufzuheben. ", pos, dimension, streamRange: 3),
                };

                ServerDroppedItems_.Add(item);
                using (gtaContext db = new gtaContext())
                {
                    db.Server_Dropped_Items.Add(item);
                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }

        public static void RemoveItem(Server_Dropped_Items item)
        {
            if (item == null) return;
            if (item.prop != null)
                EntityStreamer.PropStreamer.Delete(item.prop);

            if (item.textLabel != null)
                EntityStreamer.TextLabelStreamer.DestroyDynamicTextLabel(item.textLabel);

            ServerDroppedItems_.Remove(item);

            using (gtaContext db = new gtaContext())
            {
                db.Server_Dropped_Items.Remove(item);
                db.SaveChanges();
            }
        }
    }
}