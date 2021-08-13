import * as alt from 'alt-client';
import * as native from 'natives';

let oldWeather: string = "none";

export default class WeatherHandler {
    static SetWeather(newWeather: string): void {
        if (oldWeather == "none") {
            native.setWeatherTypeNowPersist(newWeather);
            oldWeather = newWeather;
            return;
        }
    
        let i = 0;
        let interval = alt.setInterval(() => {
            i++;
            if (i < 100) native.setWeatherTypeTransition(alt.hash(oldWeather), alt.hash(newWeather), (i / 100));
            else {
                alt.clearInterval(interval);
                oldWeather = newWeather;
            }
        }, 200);
    }
}

alt.onServer("Client:Weather:SetWeather", WeatherHandler.SetWeather);