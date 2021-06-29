using System.Linq;
using System.Threading.Tasks;
using System.Timers;
using AltV.Net;
using AltV.Net.Async;
using Altv_Roleplay.Factories;
using Altv_Roleplay.Handler;
using Altv_Roleplay.Model;
using Discord;
using Discord.WebSocket;

namespace Altv_Roleplay.Factions.LSMD
{
    internal class LSMDBot
    {
        private static DiscordSocketClient _client;

        private static int status;

        public static void Main() {
            new LSMDBot().MainAsync().GetAwaiter().GetResult();
        }

        private async Task MainAsync() {
            var _config = new DiscordSocketConfig {
                AlwaysDownloadUsers = true,
                MessageCacheSize = 250
            };
            _client = new DiscordSocketClient(_config);

            await _client.LoginAsync(TokenType.Bot, Config.token);
            await _client.StartAsync();

            _client.ReactionAdded += ReactionAdded;
            _client.ReactionRemoved += ReactionRemoved;
            _client.MessageReceived += MessageReceived;
            var statusTimer = new Timer();
            statusTimer.Elapsed += SetStatus;
            statusTimer.Interval += 20000;
            statusTimer.Enabled = true;
            _client.Ready += () =>
            {
                AltAsync.Log("LSMD Bot is connected!");
                return Task.CompletedTask;
            };
        }

        public static async void SetStatus(object sender, ElapsedEventArgs e) {
            if (status == 0) {
                await _client.SetGameAsync("Mitarbeiter im Dienst: " + ServerFactions.GetFactionDutyMemberCount(Config.factionId));
                status = 1;
            } else if (status == 1) {
                await _client.SetGameAsync("Aktive Notrufe: " + ServerFactions.GetFactionDispatcheCount(Config.factionId));
                status = 0;
            }

            await Task.CompletedTask;
        }

        public static async void Stop() {
            await _client.StopAsync();
        }

        public async Task ReactionAdded(Cacheable<IUserMessage, ulong> cachedMessage, ISocketMessageChannel originChannel,
            SocketReaction reaction) {
            var message = await cachedMessage.GetOrDownloadAsync();

            if (message != null && reaction.User.IsSpecified) {
                if (message.Id != Config.message) return;
                if (reaction.UserId == _client.CurrentUser.Id) return;

                switch (reaction.Emote.Name) {
                    case "🛠️":
                    {
                        if (reaction.UserId == _client.CurrentUser.Id) return;

                        var online = (ClassicPlayer) Alt.GetAllPlayers().ToList().Find(player =>
                        {
                            var discordID = player.GetSyncedMetaData("discordId", out string discordId);
                            if (!discordID) return false;

                            return ulong.Parse(discordId) == reaction.UserId;
                        });

                        if (online != null) {
                            if (ServerFactions.GetCharacterFactionId(online.CharacterId) != Config.factionId) {
                                await message.RemoveReactionAsync(new Emoji("🛠️"), reaction.UserId);
                                return;
                            }

                            ServerFactions.SetCharacterInFactionDuty(online.CharacterId, true);
                            online.SetClothes(4, 24, 2, 0);
                            online.SetClothes(11, 250, 0, 0);
                            online.SetClothes(8, 155, 0, 0);
                            online.SetClothes(10, 58, 1, 0);
                            online.SetClothes(6, 25, 0, 0);
                            online.SetClothes(3, 87, 0, 0);
                            online.SetClothes(1, 0, 0, 0);
                            online.SetClothes(9, 0, 0, 0);
                            
                            online.SetProps(2, 2, 0);
                            online.SetProps(7, 0, 0);
                            Characters.SetCharacterArmor(online.CharacterId, 100);
                            HUDHandler.SendNotification(online, 2, 5000, "Du hast dich erfolgreich zum Dienst angemeldet.");
                        } else {
                            await message.RemoveReactionAsync(new Emoji("🛠️"), reaction.UserId);
                        }

                        break;
                    }
                    case "🍔":
                    {
                        if (reaction.UserId == _client.CurrentUser.Id) return;

                        var online = (ClassicPlayer) Alt.GetAllPlayers().ToList().Find(player =>
                        {
                            var discordID = player.GetSyncedMetaData("discordId", out string discordId);
                            if (!discordID) return false;
                            if (!ServerFactions.IsCharacterInFactionDuty(((ClassicPlayer) player).CharacterId)) return false;

                            return ulong.Parse(discordId) == reaction.UserId;
                        });

                        if (online != null) {
                            if (ServerFactions.GetCharacterFactionId(online.CharacterId) != Config.factionId) {
                                await message.RemoveReactionAsync(new Emoji("🍔"), reaction.UserId);
                                return;
                            }

                            Characters.SetCharacterCorrectClothes(online);
                        } else {
                            await message.RemoveReactionAsync(new Emoji("🍔"), reaction.UserId);
                        }

                        break;
                    }
                }
            }

            await Task.CompletedTask;
        }

        public async Task ReactionRemoved(Cacheable<IUserMessage, ulong> cachedMessage, ISocketMessageChannel originChannel,
            SocketReaction reaction) {
            var message = await cachedMessage.GetOrDownloadAsync();

            if (message != null && reaction.User.IsSpecified) {
                if (message.Id != Config.message) return;

                if (reaction.UserId == _client.CurrentUser.Id) {
                    await message.AddReactionAsync(new Emoji(reaction.Emote.Name));
                    return;
                }

                switch (reaction.Emote.Name) {
                    case "🛠️":
                    {
                        if (reaction.UserId == _client.CurrentUser.Id) return;

                        var online = (ClassicPlayer) Alt.GetAllPlayers().ToList().Find(player =>
                        {
                            var discordID = player.GetSyncedMetaData("discordId", out string discordId);
                            if (!discordID) return false;

                            return ulong.Parse(discordId) == reaction.UserId;
                        });

                        if (online != null) {
                            if (ServerFactions.GetCharacterFactionId(online.CharacterId) != Config.factionId)
                                return;

                            ServerFactions.SetCharacterInFactionDuty(online.CharacterId, false);
                            Characters.SetCharacterCorrectClothes(online);
                            await message.RemoveReactionAsync(new Emoji("🍔"), reaction.UserId);
                            HUDHandler.SendNotification(online, 2, 5000, "Du hast dich erfolgreich vom Dienst abgemeldet.");
                        }

                        break;
                    }
                    case "🍔":
                    {
                        if (reaction.UserId == _client.CurrentUser.Id) return;

                        var online = (ClassicPlayer) Alt.GetAllPlayers().ToList().Find(player =>
                        {
                            var discordID = player.GetSyncedMetaData("discordId", out string discordId);
                            if (!discordID) return false;
                            if (!ServerFactions.IsCharacterInFactionDuty(((ClassicPlayer) player).CharacterId)) return false;

                            return ulong.Parse(discordId) == reaction.UserId;
                        });

                        if (online != null) {
                            if (ServerFactions.GetCharacterFactionId(online.CharacterId) != Config.factionId)
                                return;

                            online.SetClothes(4, 24, 2, 0);
                            online.SetClothes(11, 250, 0, 0);
                            online.SetClothes(8, 155, 0, 0);
                            online.SetClothes(10, 58, 1, 0);
                            online.SetClothes(6, 25, 0, 0);
                            online.SetClothes(3, 87, 0, 0);
                            online.SetClothes(1, 0, 0, 0);
                            online.SetClothes(9, 0, 0, 0);
                            
                            online.SetProps(2, 2, 0);
                            online.SetProps(7, 0, 0);
                            Characters.SetCharacterArmor(online.CharacterId, 100);
                        }

                        break;
                    }
                }
            }

            await Task.CompletedTask;
        }

        public async Task MessageReceived(SocketMessage msg) {
            if (msg.Content == "here") {
                if (msg.Author.Id != 427057235286556673) return;

                var channel = msg.Channel as SocketGuildChannel;

                var embed = new EmbedBuilder();

                embed.WithDescription(":tools: - Dienst an-/abmeldung\n:hamburger: - Pause")
                    .WithFooter("Nicht spammen")
                    .WithColor(Color.DarkRed)
                    .WithTitle("Statusmeldung");

                var embedMsg = await msg.Channel.SendMessageAsync(embed: embed.Build());

                await embedMsg.AddReactionAsync(new Emoji("🛠️"));
                await embedMsg.AddReactionAsync(new Emoji("🍔"));

                await msg.DeleteAsync();
            }

            await Task.CompletedTask;
        }

        public static class Config
        {
            public static string token = "ODM2MzE0NjA2MDU3Njg1MDAz.YIcMrA.CdAjQQ-y3J9FlGGhERNhIVvVcAg";
            public static ulong guild = 840995072362807299;
            public static ulong channel = 841051031001366549;
            public static ulong message = 841204411660501012;
            public static int factionId = 3;
        }
    }
}