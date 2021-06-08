using AltV.Net;

namespace SaltyChat.Server.Writables
{
    public class ClientInitData : IWritable
    {
        public ClientInitData(string teamSpeakName) {
            _teamSpeakName = teamSpeakName;
        }

        private string _teamSpeakName { get; }

        public void OnWrite(IMValueWriter writer) {
            writer.BeginObject();
            writer.Name("serverIdentifier");
            writer.Value(VoiceManager.Configuration.ServerIdentifier);
            writer.Name("teamSpeakName");
            writer.Value(_teamSpeakName);
            writer.Name("soundPack");
            writer.Value(VoiceManager.Configuration.SoundPack);
            writer.Name("ingameChannel");
            writer.Value(VoiceManager.Configuration.IngameChannel);
            writer.Name("ingameChannelPassword");
            writer.Value(VoiceManager.Configuration.IngameChannelPassword);
            writer.Name("swissChannels");

            writer.BeginArray();
            foreach (var channel in VoiceManager.Configuration.SwissChannels) writer.Value(channel);
            writer.EndArray();

            writer.Name("voiceRanges");
            writer.BeginArray();
            foreach (var voiceRange in VoiceManager.Configuration.VoiceRanges) writer.Value(voiceRange);
            writer.EndArray();

            writer.Name("radioTowers");
            writer.BeginArray();

            foreach (var radioTower in VoiceManager.Configuration.RadioTowers) {
                writer.BeginObject();
                writer.Name("X");
                writer.Value(radioTower.X);
                writer.Name("Y");
                writer.Value(radioTower.Y);
                writer.Name("Z");
                writer.Value(radioTower.Z);
                writer.Name("Range");
                writer.Value(radioTower.Range);
                writer.EndObject();
            }

            writer.EndArray();

            writer.Name("requestTalkStates");
            writer.Value(VoiceManager.Configuration.RequestTalkStates);
            writer.Name("requestRadioTrafficStates");
            writer.Value(VoiceManager.Configuration.RequestRadioTrafficStates);
            writer.Name("ultraShortRangeDistance");
            writer.Value(VoiceManager.Configuration.UltraShortRangeDistance);
            writer.Name("shortRangeDistance");
            writer.Value(VoiceManager.Configuration.ShortRangeDistance);
            writer.Name("longRangeDistance");
            writer.Value(VoiceManager.Configuration.LongRangeDistance);
            writer.EndObject();
        }
    }
}