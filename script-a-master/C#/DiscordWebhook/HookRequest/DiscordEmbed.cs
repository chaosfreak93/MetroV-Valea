using System;
using Newtonsoft.Json.Linq;

namespace DiscordWebhook.HookRequest
{
    public class DiscordEmbed
    {
        public DiscordEmbed(string Title = "", string Description = "",
            int Color = 0, string ImageUrl = "", string FooterText = "", string FooterIconUrl = "",
            DiscordEmbedField[] Fields = null) {
            var embedData = new JObject();
            embedData.Add("title", Title);
            embedData.Add("description", Description);
            embedData.Add("color", Color);

            var imageData = new JObject();
            imageData.Add("url", ImageUrl);

            var footerData = new JObject();
            footerData.Add("text", FooterText);
            footerData.Add("icon_url", FooterIconUrl);

            embedData.Add("timestamp", DateTime.Now);

            embedData.Add("image", imageData);
            embedData.Add("footer", footerData);

            if (Fields != null) {
                var fieldsData = new JArray();
                foreach (var field in Fields)
                    fieldsData.Add(field.JsonData);
                embedData.Add("fields", fieldsData);
            }

            JsonData = embedData;
        }

        public JObject JsonData { get; }
    }
}