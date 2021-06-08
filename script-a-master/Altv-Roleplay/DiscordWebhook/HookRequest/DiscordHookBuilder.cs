using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace DiscordWebhook.HookRequest
{
    public class DiscordHookBuilder
    {
        private readonly string _avatar;
        private readonly string _bound;

        private readonly JObject _json;

        private readonly string _nick;

        private DiscordHookBuilder(string Nickname, string AvatarUrl) {
            _bound = $"------------------------{DateTime.Now.Ticks.ToString("x")}";

            _nick = Nickname;
            _avatar = AvatarUrl;

            _json = new JObject();

            Embeds = new List<DiscordEmbed>();
        }

        public List<DiscordEmbed> Embeds { get; }
        public string Message { get; set; }
        public bool UseTTS { get; set; }

        public static DiscordHookBuilder Create(string Nickname = null, string AvatarUrl = null) {
            return new(Nickname, AvatarUrl);
        }

        public DiscordHook Build() {
            var stream = new MemoryStream();

            var boundary = Encoding.UTF8.GetBytes($"--{_bound}\r\n");
            stream.Write(boundary, 0, boundary.Length);

            _json.Add("username", _nick);
            _json.Add("avatar_url", _avatar);
            _json.Add("content", Message);
            _json.Add("tts", UseTTS);

            var embeds = new JArray();
            foreach (var embed in Embeds) embeds.Add(embed.JsonData);
            if (embeds.Count > 0) _json.Add("embeds", embeds);

            var jsonBody = "Content-Disposition: form-data; name=\"payload_json\"\r\n" +
                           "Content-Type: application/json\r\n\r\n" +
                           $"{_json.ToString(Formatting.None)}\r\n" +
                           $"--{_bound}--";
            var jsonBodyData = Encoding.UTF8.GetBytes(jsonBody);

            stream.Write(jsonBodyData, 0, jsonBodyData.Length);
            return new DiscordHook(stream, _bound);
        }
    }
}