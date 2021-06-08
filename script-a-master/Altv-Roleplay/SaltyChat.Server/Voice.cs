using AltV.Net;
using AltV.Net.Async;

namespace SaltyChat.Server
{
    public class Voice : AsyncResource
    {
        public override void OnStart() {
            var voiceManager = new VoiceManager();
            Alt.Log("SaltyChat enabled.");
        }

        public override void OnStop() {
            Alt.Log("SaltyChat disabled.");
        }
    }
}