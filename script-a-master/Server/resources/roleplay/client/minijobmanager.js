import * as alt from 'alt-client';
import * as native from 'natives';
import BlipManager from './blipmanager';
import MarkerManager from './markermanager';
let blip = null;
let vehicle = alt.Player.local.vehicle;
let markerCache = [];
class MinijobManager {
    static CreateJobMarker(name, color, sprite, markersprite, X, Y, Z, bobUpAndDown) {
        blip = BlipManager.createBlipWithRoute(X, Y, Z, sprite, 0.8, color, true, false, name);
        MarkerManager.addMarker(markersprite, X, Y, Z, 1, 1, 1, 46, 133, 232, 150, bobUpAndDown);
        markerCache.push({
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
        if (blip != null) blip.destroy();
        for(var marker in markerCache){
            MarkerManager.removeMarkerByData(marker);
        }
    }
    static RemoveJobMarkerWithFreeze(delay) {
        if (blip != null) blip.destroy();
        for(var marker in markerCache){
            MarkerManager.removeMarkerByData(marker);
        }
        alt.setTimeout(()=>{
            if (vehicle != null) {
                native.freezeEntityPosition(vehicle, true);
            }
            alt.setTimeout(()=>{
                if (vehicle != null) {
                    native.freezeEntityPosition(vehicle, false);
                }
            }, delay);
        }, 500);
    }
}
export { MinijobManager as default };
alt.onServer("Client:Minijob:CreateJobMarker", MinijobManager.CreateJobMarker);
alt.onServer("Client:Minijob:RemoveJobMarker", MinijobManager.RemoveJobMarker);
alt.onServer("Client:Minijob:RemoveJobMarkerWithFreeze", MinijobManager.RemoveJobMarkerWithFreeze);
