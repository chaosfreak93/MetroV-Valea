import * as alt from 'alt-client';
import * as native from 'natives';

let markers: any[] = [];

export default class MarkerManager {
    static LoadAllMarkers(markerArray: any): void {
        markerArray = JSON.parse(markerArray);

        for (var i in markerArray) {
            markers.push({
                type: markerArray[i].type,
                x: markerArray[i].posX,
                y: markerArray[i].posY,
                z: markerArray[i].posZ,
                scaleX: markerArray[i].scaleX,
                scaleY: markerArray[i].scaleY,
                scaleZ: markerArray[i].scaleZ,
                red: markerArray[i].red,
                green: markerArray[i].green,
                blue: markerArray[i].blue,
                alpha: markerArray[i].alpha,
                bobUpAndDown: markerArray[i].bobUpAndDown
            });
        }
    }

    static addMarker(type: number, x: number, y: number, z: number, scaleX: number, scaleY: number, scaleZ: number, red: number, green: number, blue: number, alpha: number, bobUpAndDown: boolean): void {
        markers.push({
            type: type,
            x: x,
            y: y,
            z: z,
            scaleX: scaleX,
            scaleY: scaleY,
            scaleZ: scaleZ,
            red: red,
            green: green,
            blue: blue,
            alpha: alpha,
            bobUpAndDown: bobUpAndDown
        });
    }

    static removeMarkerByData(marker: any): void {
        let index: number = markers.indexOf(marker, 1);
        markers.splice(index, 1);
    }

    static drawMarker(): void {
        if (markers.length >= 1) {
            for (var i = 0; i < markers.length; i++) {
                native.drawMarker(markers[i].type, markers[i].x, markers[i].y, markers[i].z, 0, 0, 0, 0, 0, 0, markers[i].scaleX, markers[i].scaleY, markers[i].scaleZ, markers[i].red, markers[i].green, markers[i].blue, markers[i].alpha, markers[i].bobUpAndDown, false, 2, false, undefined, undefined, false);
            }
        }
    }
}

alt.onServer("Client:ServerMarkers:LoadAllMarkers", MarkerManager.LoadAllMarkers);
alt.everyTick(MarkerManager.drawMarker);