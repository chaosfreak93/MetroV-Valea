import * as alt from 'alt-client';
import * as native from 'natives';
class MarkerManager {
    static LoadAllMarkers(markerArray) {
        markerArray = JSON.parse(markerArray);
        for(var i in markerArray){
            this.markers.push({
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
    static addMarker(type, x, y, z, scaleX, scaleY, scaleZ, red, green, blue, alpha, bobUpAndDown) {
        this.markers.push({
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
    static removeMarkerByData(marker) {
        let index = this.markers.indexOf(marker, 1);
        this.markers.splice(index, 1);
    }
    static drawMarker() {
        if (this.markers.length >= 1) {
            for(var i = 0; i < this.markers.length; i++){
                native.drawMarker(this.markers[i].type, this.markers[i].x, this.markers[i].y, this.markers[i].z, 0, 0, 0, 0, 0, 0, this.markers[i].scaleX, this.markers[i].scaleY, this.markers[i].scaleZ, this.markers[i].red, this.markers[i].green, this.markers[i].blue, this.markers[i].alpha, this.markers[i].bobUpAndDown, false, 2, false, undefined, undefined, false);
            }
        }
    }
}
export { MarkerManager as default };
alt.onServer("Client:ServerMarkers:LoadAllMarkers", MarkerManager.LoadAllMarkers);
alt.everyTick(MarkerManager.drawMarker);
