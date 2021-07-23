using System;
using System.Collections.Generic;
using System.Net;
using System.Text.Json;
using AltV.Net.Elements.Entities;

namespace Altv_Roleplay.Handler
{
    public class Weather
    {
        public string main { get; set; }
    }

    public class Root
    {
        public List<Weather> weather { get; set; }
    }

    internal class WeatherHandler
    {
        public static string currentWeatherType = "ExtraSunny";
        public static bool isNotDifferentWeather;

        public static void SetRealWeather(IPlayer player) {
            if (player == null || !player.Exists) return;

            player.Emit("Client:Weather:SetWeather", currentWeatherType);
        }

        public static void GetRealWeatherType() {
            using (var wc = new WebClient()) {
                // PLEASE GENERATE YOUR OWN API KEY AT https://openweathermap.org/ FOR FREE
                var apiKey = "28f5c573c6681dcc51cd39973c2cd4e0";

                var urljson = wc.DownloadString("http://api.openweathermap.org/data/2.5/weather?q=dortmund&appid=" + apiKey);

                /**var weather = "Clear";
                switch (weather)**/
                switch (JsonSerializer.Deserialize<Root>(urljson).weather[0].main) {
                    case "Drizzle":
                        if (currentWeatherType == "Clearing") isNotDifferentWeather = true;
                        else isNotDifferentWeather = false;
                        currentWeatherType = "Clearing";
                        break;
                    case "Clear":
                        if (currentWeatherType == "Clear") isNotDifferentWeather = true;
                        else isNotDifferentWeather = false;
                        currentWeatherType = "Clear";
                        break;
                    case "Clouds":
                        if (currentWeatherType == "Clouds") isNotDifferentWeather = true;
                        else isNotDifferentWeather = false;
                        currentWeatherType = "Clouds";
                        break;
                    case "Rain":
                        if (currentWeatherType == "Rain") isNotDifferentWeather = true;
                        else isNotDifferentWeather = false;
                        currentWeatherType = "Rain";
                        break;
                    case "Thunderstorm":
                        if (currentWeatherType == "Thunder") isNotDifferentWeather = true;
                        else isNotDifferentWeather = false;
                        currentWeatherType = "Thunder";
                        break;
                    case "Thunder":
                        if (currentWeatherType == "Thunder") isNotDifferentWeather = true;
                        else isNotDifferentWeather = false;
                        currentWeatherType = "Thunder";
                        break;
                    case "Foggy":
                        if (currentWeatherType == "Foggy") isNotDifferentWeather = true;
                        else isNotDifferentWeather = false;
                        currentWeatherType = "Foggy";
                        break;
                    case "Fog":
                        if (currentWeatherType == "Foggy") isNotDifferentWeather = true;
                        else isNotDifferentWeather = false;
                        currentWeatherType = "Foggy";
                        break;
                    case "Mist":
                        if (currentWeatherType == "Foggy") isNotDifferentWeather = true;
                        else isNotDifferentWeather = false;
                        currentWeatherType = "Foggy";
                        break;
                    case "Smoke":
                        if (currentWeatherType == "Foggy") isNotDifferentWeather = true;
                        else isNotDifferentWeather = false;
                        currentWeatherType = "Foggy";
                        break;
                    case "Smog":
                        if (currentWeatherType == "Smog") isNotDifferentWeather = true;
                        else isNotDifferentWeather = false;
                        currentWeatherType = "Smog";
                        break;
                    case "Overcast":
                        if (currentWeatherType == "Overcast") isNotDifferentWeather = true;
                        else isNotDifferentWeather = false;
                        currentWeatherType = "Overcast";
                        break;
                    case "Snowing":
                        if (currentWeatherType == "Snow") isNotDifferentWeather = true;
                        else isNotDifferentWeather = false;
                        currentWeatherType = "Snow";
                        break;
                    case "Snow":
                        if (currentWeatherType == "Snow") isNotDifferentWeather = true;
                        else isNotDifferentWeather = false;
                        currentWeatherType = "Snow";
                        break;
                    case "Blizzard":
                        if (currentWeatherType == "Smog") isNotDifferentWeather = true;
                        else isNotDifferentWeather = false;
                        currentWeatherType = "Smog";
                        break;
                    default:
                        Console.WriteLine("Missing Weather: " + JsonSerializer.Deserialize<Root>(urljson).weather[0].main);
                        if (currentWeatherType == "Clear") isNotDifferentWeather = true;
                        else isNotDifferentWeather = false;
                        currentWeatherType = "Clear";
                        break;
                }
            }
        }
    }
}