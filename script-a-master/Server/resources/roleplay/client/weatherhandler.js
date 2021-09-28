import * as alt from "alt-client";
import * as native from "natives";
let oldWeather = "none";
class WeatherHandler {
    static SetWeather(newWeather) {
        if (oldWeather == "none") {
            native.setWeatherTypeNowPersist(newWeather);
            oldWeather = newWeather;
            return;
        }
        let i = 0;
        let interval = alt.setInterval(()=>{
            i++;
            if (i < 100) native.setWeatherTypeTransition(alt.hash(oldWeather), alt.hash(newWeather), i / 100);
            else {
                alt.clearInterval(interval);
                oldWeather = newWeather;
            }
        }, 200);
    }
}
export { WeatherHandler as default };
alt.onServer("Client:Weather:SetWeather", WeatherHandler.SetWeather);
