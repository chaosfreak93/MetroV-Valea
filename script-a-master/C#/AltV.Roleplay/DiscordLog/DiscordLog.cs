using DiscordWebhook;
using DiscordWebhook.HookRequest;

namespace Altv_Roleplay.DiscordLog
{
    internal class DiscordLog
    {
        internal static void SendEmbed(string type, string nickname, string text) {
            var hook = new DiscordWebhookMain();

            switch (type) {
                case "adminmenu":
                    hook.HookUrl =
                        "https://discord.com/api/webhooks/872123901486972948/r-AxEdFOp7fIv9C-AOq4JyA-GJbnEFQaFnRWPJtB7ANrkfePBYXGgyrpxEAlGevWBKPr";
                    break;
                default:
                    hook.HookUrl =
                        "https://discord.com/api/webhooks/872123901486972948/r-AxEdFOp7fIv9C-AOq4JyA-GJbnEFQaFnRWPJtB7ANrkfePBYXGgyrpxEAlGevWBKPr";
                    break;
            }

            if (hook.HookUrl == "YOUR_WEBHOOK") return; //Hier YOUR_WEBHOOK nicht ersetzen

            var builder = DiscordHookBuilder.Create(nickname,
                "https://media.discordapp.net/attachments/723871259791720520/784117781271937034/Logo.png?width=519&height=519");

            var embed = new DiscordEmbed(
                "MetroV - Logs",
                text,
                0xf54242,
                FooterText: "MetroV - Logs",
                FooterIconUrl: "https://media.discordapp.net/attachments/723871259791720520/784117781271937034/Logo.png?width=519&height=519");
            builder.Embeds.Add(embed);

            var HookMessage = builder.Build();
            hook.Hook(HookMessage);
        }
    }
}