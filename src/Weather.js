import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherInfo({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 3.6),
    });
  }

  if (weatherInfo.ready) {
    return (
      <div className="Weather">
        <h1>{weatherInfo.city}</h1>
        <div className="row">
          <div className="col">
            <ul className="dateDescription">
              <li>Wednesday, 15:00</li>
              <li className="text-capitalize">{weatherInfo.description}</li>
            </ul>
          </div>
          <div className="col">
            <img
              className="weatherIcon"
              src={`http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
              alt={weatherInfo.description}
            />
          </div>
          <div className="col">
            <h2 className="currentTemp">
              {weatherInfo.temp}
              <span className="weatherUnit">ºC</span>
            </h2>
          </div>
        </div>
        <div>
          <ul className="weatherExtra">
            <li>Humidity: {weatherInfo.humidity}%</li>
            <li>Wind: {weatherInfo.wind} km/h</li>
          </ul>
        </div>
        <div className="row row-cols-6">
          <Forecast hour="19:00" icon="01d" minTemp="17" maxTemp="24" />
          <Forecast hour="22:00" icon="01n" minTemp="16" maxTemp="23" />
          <Forecast hour="01:00" icon="02n" minTemp="15" maxTemp="26" />
          <Forecast hour="04:00" icon="02n" minTemp="17" maxTemp="27" />
          <Forecast hour="07:00" icon="02d" minTemp="19" maxTemp="26" />
          <Forecast hour="10:00" icon="01d" minTemp="20" maxTemp="27" />
        </div>
      </div>
    );
  } else {
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=5ce165099db98eb1a4172c9b8eea4597&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    return "Loading";
  }
}
