using System.IO;

namespace DiscordWebhook.HookRequest
{
    public class DiscordHook
    {
        internal DiscordHook(MemoryStream BodyData, string Bound) {
            Body = BodyData;
            Boundary = Bound;
        }

        public string Boundary { get; }
        public MemoryStream Body { get; }
    }
}