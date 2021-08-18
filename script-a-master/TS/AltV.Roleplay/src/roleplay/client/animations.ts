import * as alt from 'alt-client';
import * as native from 'natives';
import { loadAnimDictAsync } from './utilities';

const storage: alt.LocalStorage = alt.LocalStorage;

alt.on('keyup', (key: number) => {
    if (alt.Player.local.getSyncedMeta("HasHandcuffs") == true || alt.Player.local.getSyncedMeta("HasRopeCuffs") == true || alt.Player.local.getSyncedMeta("HasFootCuffs") == true || alt.Player.local.getSyncedMeta("IsUnconscious") == true || alt.Player.local.getMeta("IsCefOpen") == true) return;
    if (key == 96) { //Numpad0 
        native.clearPedTasks(alt.Player.local.scriptID);
    } else if (key == 97) { //Numpad1
        if (storage.get('Num1Hotkey') == null || storage.get('Num1AnimName') == null || storage.get('Num1AnimDict') == null || storage.get('Num1AnimFlag') == null || storage.get('Num1AnimDuration') == null) return;
        native.clearPedTasks(alt.Player.local.scriptID);
        AnimationHandler.playAnimation(storage.get('Num1AnimDict'), storage.get('Num1AnimName'), storage.get('Num1AnimDuration'), storage.get('Num1AnimFlag'), false);
    } else if (key == 98) { //Numpad2
        if (storage.get('Num2Hotkey') == null || storage.get('Num2AnimName') == null || storage.get('Num2AnimDict') == null || storage.get('Num2AnimFlag') == null || storage.get('Num2AnimDuration') == null) return;
        native.clearPedTasks(alt.Player.local.scriptID);
        AnimationHandler.playAnimation(storage.get('Num2AnimDict'), storage.get('Num2AnimName'), storage.get('Num2AnimDuration'), storage.get('Num2AnimFlag'), false);
    } else if (key == 99) { //Numpad3
        if (storage.get('Num3Hotkey') == null || storage.get('Num3AnimName') == null || storage.get('Num3AnimDict') == null || storage.get('Num3AnimFlag') == null || storage.get('Num3AnimDuration') == null) return;
        native.clearPedTasks(alt.Player.local.scriptID);
        AnimationHandler.playAnimation(storage.get('Num3AnimDict'), storage.get('Num3AnimName'), storage.get('Num3AnimDuration'), storage.get('Num3AnimFlag'), false);
    } else if (key == 100) { //Numpad4
        if (storage.get('Num4Hotkey') == null || storage.get('Num4AnimName') == null || storage.get('Num4AnimDict') == null || storage.get('Num4AnimFlag') == null || storage.get('Num4AnimDuration') == null) return;
        native.clearPedTasks(alt.Player.local.scriptID);
        AnimationHandler.playAnimation(storage.get('Num4AnimDict'), storage.get('Num4AnimName'), storage.get('Num4AnimDuration'), storage.get('Num4AnimFlag'), false);
    } else if (key == 101) { //Numpad5 
        if (storage.get('Num5Hotkey') == null || storage.get('Num5AnimName') == null || storage.get('Num5AnimDict') == null || storage.get('Num5AnimFlag') == null || storage.get('Num5AnimDuration') == null) return;
        native.clearPedTasks(alt.Player.local.scriptID);
        AnimationHandler.playAnimation(storage.get('Num5AnimDict'), storage.get('Num5AnimName'), storage.get('Num5AnimDuration'), storage.get('Num5AnimFlag'), false);
    } else if (key == 102) { //Numpad6 
        if (storage.get('Num6Hotkey') == null || storage.get('Num6AnimName') == null || storage.get('Num6AnimDict') == null || storage.get('Num6AnimFlag') == null || storage.get('Num6AnimDuration') == null) return;
        native.clearPedTasks(alt.Player.local.scriptID);
        AnimationHandler.playAnimation(storage.get('Num6AnimDict'), storage.get('Num6AnimName'), storage.get('Num6AnimDuration'), storage.get('Num6AnimFlag'), false);
    } else if (key == 103) { //Numpad7
        if (storage.get('Num7Hotkey') == null || storage.get('Num7AnimName') == null || storage.get('Num7AnimDict') == null || storage.get('Num7AnimFlag') == null || storage.get('Num7AnimDuration') == null) return;
        native.clearPedTasks(alt.Player.local.scriptID);
        AnimationHandler.playAnimation(storage.get('Num7AnimDict'), storage.get('Num7AnimName'), storage.get('Num7AnimDuration'), storage.get('Num7AnimFlag'), false);
    } else if (key == 104) { //Numpad 8
        if (storage.get('Num8Hotkey') == null || storage.get('Num8AnimName') == null || storage.get('Num8AnimDict') == null || storage.get('Num8AnimFlag') == null || storage.get('Num8AnimDuration') == null) return;
        native.clearPedTasks(alt.Player.local.scriptID);
        AnimationHandler.playAnimation(storage.get('Num8AnimDict'), storage.get('Num8AnimName'), storage.get('Num8AnimDuration'), storage.get('Num8AnimFlag'), false);
    } else if (key == 105) { //Numpad 9
        if (storage.get('Num9Hotkey') == null || storage.get('Num9AnimName') == null || storage.get('Num9AnimDict') == null || storage.get('Num9AnimFlag') == null || storage.get('Num9AnimDuration') == null) return;
        native.clearPedTasks(alt.Player.local.scriptID);
        AnimationHandler.playAnimation(storage.get('Num9AnimDict'), storage.get('Num9AnimName'), storage.get('Num9AnimDuration'), storage.get('Num9AnimFlag'), false);
    }
});

const player: alt.Player = alt.Player.local;

export default class AnimationHandler {
    static async playAnimation(animDict: string, animName: string, duration: number, flag: number, lockpos: boolean): Promise<void> {
        await loadAnimDictAsync(animDict);
        native.taskPlayAnim(player.scriptID, animDict, animName, 8.0, 8.0, duration, flag, 1, lockpos, lockpos, lockpos);
    }

    static stopAnimation(): void {
        native.clearPedTasks(player.scriptID);
    }
}

alt.onServer("Client:Inventory:PlayAnimation", AnimationHandler.playAnimation);
alt.onServer("Client:Inventory:StopAnimation", AnimationHandler.stopAnimation);