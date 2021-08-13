using System.Net;
using DiscordWebhook.HookRequest;

namespace DiscordWebhook
{
    public class DiscordWebhookMain
    {
        public string HookUrl { get; set; }

        public void Hook(DiscordHook HookRequest) {
            var client = new WebClient();
            client.Headers.Add("Content-Type", $"multipart/form-data; boundary={HookRequest.Boundary}");
            client.UploadData(HookUrl, HookRequest.Body.ToArray());
        }
    }
}