export class GameInstance {
    constructor(serverUniqueIdentifier, name, channelId, channelPassword, soundPack, swissChannels, sendTalkStates, sendRadioTrafficStates, ultraShortRangeDistance, shortRangeDistance, longRangeDistance) {
        this.serverUniqueIdentifier = serverUniqueIdentifier;
        this.name = name;
        this.channelId = channelId;
        this.channelPassword = channelPassword;
        this.soundPack = soundPack;
        this.swissChannelIds = swissChannels;
        this.sendTalkStates = sendTalkStates;
        this.sendRadioTrafficStates = sendRadioTrafficStates;
        this.ultraShortRangeDistance = ultraShortRangeDistance;
        this.shortRangeDistance = shortRangeDistance;
        this.longRangeDistance = longRangeDistance;
    }
}
