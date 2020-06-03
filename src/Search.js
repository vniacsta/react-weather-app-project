import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function Search(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");
  const [forecastLocation, setForecastLocation] = useState(null);

  function displayWeather(response) {
    setWeatherInfo({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 3.6),
    });
  }

  function searchCity() {
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5ce165099db98eb1a4172c9b8eea4597&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayForecast(response) {
    setForecastLocation(response.data);
  }

  function displayLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5ce165099db98eb1a4172c9b8eea4597&units=metric`;
      axios.get(apiUrl).then(displayWeather);

      apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=5ce165099db98eb1a4172c9b8eea4597&units=metric`;
      axios.get(apiUrl).then(displayForecast);
    });
  }

  if (weatherInfo.ready) {
    return (
      <div className="Search">
        <div className="row">
          <div className="col-9">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Type a city"
                className="search-box"
                onChange={updateCity}
              />
              <button type="submit" className="icons">
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <button type="button" className="icons" onClick={displayLocation}>
                <FontAwesomeIcon icon={faLocationArrow} />
              </button>
            </form>
          </div>
          <div className="col-3">
            <button onClick={showCelsius} className="celsius-btn">
              ºC
            </button>
            <button onClick={showFahrenheit} className="fahrenheit-btn">
              ºF
            </button>
          </div>
        </div>
        <Weather info={weatherInfo} unit={unit} />
        <Forecast city={city} unit={unit} location={forecastLocation} />
      </div>
    );
  } else {
    searchCity();
    return (
      <div className="error">
        <div>Weather app is loading</div>
        <Loader
          type="ThreeDots"
          color="#636363"
          height={60}
          width={60}
          timeout={10000}
        />
      </div>
    );
  }
}
