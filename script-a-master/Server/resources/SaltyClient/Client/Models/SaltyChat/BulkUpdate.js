/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
export class BulkUpdate {
    constructor(playerStates, selfState) {
        this.playerStates = playerStates;
        this.selfState = selfState;
    }
}
