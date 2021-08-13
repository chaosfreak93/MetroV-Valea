import * as alt from 'alt-client';
import * as native from 'natives';
import BlipManager from './blipmanager';
import MarkerManager from './markermanager';

let blip: alt.PointBlip = null;
let vehicle: alt.Vehicle = alt.Player.local.vehicle;
let markerCache: any[] = [];

export default class MinijobManager {
    static CreateJobMarker(name: string, color: number, sprite: number, markersprite: number, X: number, Y: number, Z: number, bobUpAndDown: boolean): void {
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

    static RemoveJobMarker(): void {
        if (blip != null)
            blip.destroy();
        for (var marker in markerCache) {
            MarkerManager.removeMarkerByData(marker);
        }
    }

    static RemoveJobMarkerWithFreeze(delay: number): void {
        if (blip != null)
            blip.destroy();
        for (var marker in markerCache) {
            MarkerManager.removeMarkerByData(marker);
        }

        alt.setTimeout(() => {
            if (vehicle != null) {
                native.freezeEntityPosition(vehicle, true);    
            }
            alt.setTimeout(() => {
                if (vehicle != null) {
                    native.freezeEntityPosition(vehicle, false);    
                }
            }, delay);
        }, 500);
    }
}

alt.onServer("Client:Minijob:CreateJobMarker", MinijobManager.CreateJobMarker);
alt.onServer("Client:Minijob:RemoveJobMarker", MinijobManager.RemoveJobMarker);
alt.onServer("Client:Minijob:RemoveJobMarkerWithFreeze", MinijobManager.RemoveJobMarkerWithFreeze);