import React from 'react';

var imgSrcGlob = "@/assets/images/weather/";
function weather() {
  return (
      <div id="weather" className="weather-button-container">
          <button id="weatherButton" onClick={showWeather}>
              <img src={imgSrcGlob + "clear_day.svg"} alt="WeatherImg not found" id="condition" />
              <div id="temperature">Temp:</div>
          </button>
      </div>
  );
}

export default weather;

function showWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Call the model to fetch weather data with coordinates
                const weatherData = await WeatherModel.fetchWeatherData(latitude, longitude);
                console.log(weatherData);

                // Update the view with the retrieved weather data
                WeatherView.updateUI(weatherData);
            },
            (error) => {
                console.error('Error retrieving geolocation:', error);
            }
        );
    }
    else
        console.error('Geolocation is not supported by this browser.');
}
const weatherCodeMap = new Map();
weatherCodeMap.set(0, 'Unknown');
weatherCodeMap.set(1000, 'clear');
weatherCodeMap.set(1001, 'cloudy');
weatherCodeMap.set(1100, 'mostly_clear_day');
weatherCodeMap.set(1101, 'partly_cloudy');
weatherCodeMap.set(1102, 'mostly_cloudy');
weatherCodeMap.set(2000, 'fog');
weatherCodeMap.set(2100, 'light_fog');
weatherCodeMap.set(3000, 'light_wind');
weatherCodeMap.set(3001, 'wind');
weatherCodeMap.set(3002, 'strong_wind');
weatherCodeMap.set(4000, 'drizzle');
weatherCodeMap.set(4001, 'rain');
weatherCodeMap.set(4200, 'light_rain');
weatherCodeMap.set(4201, 'heavy_rain');
weatherCodeMap.set(5000, 'snow');
weatherCodeMap.set(5001, 'flurries');
weatherCodeMap.set(5100, 'light_snow');
weatherCodeMap.set(5101, 'heavy_snow');
weatherCodeMap.set(6000, 'freezing_drizzle');
weatherCodeMap.set(6001, 'freezing_rain');
weatherCodeMap.set(6200, 'light_freezing_rain');
weatherCodeMap.set(6201, 'heavy_freezing_rain');
weatherCodeMap.set(7000, 'ice_pellets');
weatherCodeMap.set(7101, 'heavy_ice_pellets');
weatherCodeMap.set(7102, 'light_ice_pellets');
weatherCodeMap.set(8000, 'thunderstorm');

//const dayCodeMap = new Map();
// weatherModel.js
const WeatherModel = {
    fetchWeatherData: async (lat, long) => {
        const apiKey = 'QwLHgOoFjKpuhJgwJjXDAzSB1jdtbNrd'; //alla borde g�ra en egen f�r b�sta resultat
        const mainUrl = "https://api.tomorrow.io/v4/timelines?location=";
        const optionsUrl = `${lat},${long}&fields=temperature,weatherCode&timesteps=1d&units=metric&apikey=${apiKey}`;
        const apiUrl = mainUrl + optionsUrl;
        const options = { method: 'GET', headers: { accept: 'application/json' } };

        const weatherdata = fetch(apiUrl, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const intervals = data.data.timelines[0].intervals.map(interval => ({
                    startTime: interval.startTime,
                    temperature: interval.values.temperature,
                    weatherCode: interval.values.weatherCode
                }));

                return intervals;
            })
            /*.then(intervalsArray => {
                console.log(intervalsArray);
                // Use the intervalsArray here or pass it to another function
            })*/
            .catch(error => {
                console.error('Error fetching JSON:', error);
            });
        return weatherdata;
    }
}
// weatherView
const WeatherView = {
    updateUI: (weatherInfo) => {
        const temperatureElement = document.getElementById('temperature');
        const conditionElement = document.getElementById('condition');
        // Update DOM elements with weather information
        temperatureElement.textContent = `${Math.round(weatherInfo[0].temperature)}\u00B0C`;
        const imgSrc = weatherCodeMap.get(weatherInfo[0].weatherCode);
        conditionElement.src = imgSrcGlob + imgSrc+'.svg';
    },
};

