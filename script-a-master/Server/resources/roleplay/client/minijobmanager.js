import * as alt from 'alt-client';
import * as native from 'natives';
import BlipManager from './blipmanager';
import MarkerManager from './markermanager';
class MinijobManager {
    static CreateJobMarker(name, color, sprite, markersprite, X, Y, Z, bobUpAndDown) {
        this.blip = BlipManager.createBlipWithRoute(X, Y, Z, sprite, 0.8, color, true, false, name);
        MarkerManager.addMarker(markersprite, X, Y, Z, 1, 1, 1, 46, 133, 232, 150, bobUpAndDown);
        this.markerCache.push({
            type: markersprite,
            x: X,
            y: Y,
            z: Z,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
            red: 46,
            green: 133,
            blue: 232,
            alpha: 150,
            bobUpAndDown: bobUpAndDown
        });
    }
    static RemoveJobMarker() {
        this.blip.destroy();
        for(var marker in this.markerCache){
            MarkerManager.removeMarkerByData(marker);
        }
    }
    static RemoveJobMarkerWithFreeze(delay) {
        this.blip.destroy();
        for(var marker in this.markerCache){
            MarkerManager.removeMarkerByData(marker);
        }
        alt.setTimeout(()=>{
            native.freezeEntityPosition(alt.Player.local.scriptID, true);
            if (alt.Player.local.vehicle != null) {
                native.freezeEntityPosition(alt.Player.local.vehicle.scriptID, true);
            }
            alt.setTimeout(()=>{
                native.freezeEntityPosition(alt.Player.local.scriptID, false);
                if (alt.Player.local.vehicle != null) {
                    native.freezeEntityPosition(alt.Player.local.vehicle.scriptID, false);
                }
            }, delay);
        }, 1500);
    }
}
export { MinijobManager as default };
alt.onServer("Client:Minijob:CreateJobMarker", MinijobManager.CreateJobMarker);
alt.onServer("Client:Minijob:RemoveJobMarker", MinijobManager.RemoveJobMarker);
alt.onServer("Client:Minijob:RemoveJobMarkerWithFreeze", MinijobManager.RemoveJobMarkerWithFreeze);
