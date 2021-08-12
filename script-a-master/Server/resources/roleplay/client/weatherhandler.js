import * as alt from 'alt-client';
import * as native from 'natives';
class WeatherHandler {
    static SetWeather(newWeather) {
        if (this.oldWeather == "none") {
            native.setWeatherTypeNowPersist(newWeather);
            this.oldWeather = newWeather;
            return;
        }
        let i = 0;
        let interval = alt.setInterval(()=>{
            i++;
            if (i < 100) native.setWeatherTypeTransition(alt.hash(this.oldWeather), alt.hash(newWeather), i / 100);
            else {
                alt.clearInterval(interval);
                this.oldWeather = newWeather;
            }
        }, 200);
    }
}
WeatherHandler.oldWeather = "none";
export { WeatherHandler as default };
alt.onServer("Client:Weather:SetWeather", WeatherHandler.SetWeather);
