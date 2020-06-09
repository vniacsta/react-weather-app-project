import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function Search(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");
  const [colorC, setColorC] = useState("#f8cb7d");
  const [colorF, setColorF] = useState("#fff");
  const [forecast, setForecast] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
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

  function displayForecast(response) {
    setForecast({
      ready: true,
      data: response.data,
    });
  }

  function searchCity() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5ce165099db98eb1a4172c9b8eea4597&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5ce165099db98eb1a4172c9b8eea4597&units=metric`;
    axios.get(apiUrl).then(displayForecast);
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
    setColorC({ bgColor: "#f8cb7d" });
    setColorF({ bgColor: "#fff" });
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
    setColorC({ bgColor: "#fff" });
    setColorF({ bgColor: "#f8cb7d" });
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

  if (weather.ready && forecast.ready) {
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
            <button
              className="celsius-btn"
              onClick={showCelsius}
              style={{ backgroundColor: colorC.bgColor }}
            >
              ºC
            </button>
            <button
              className="fahrenheit-btn"
              onClick={showFahrenheit}
              style={{ backgroundColor: colorF.bgColor }}
            >
              ºF
            </button>
          </div>
        </div>
        <Weather info={weather} unit={unit} />
        <div className="row row-cols-6">
          <Forecast info={forecast.data.list[0]} unit={unit} />
          <Forecast info={forecast.data.list[1]} unit={unit} />
          <Forecast info={forecast.data.list[2]} unit={unit} />
          <Forecast info={forecast.data.list[3]} unit={unit} />
          <Forecast info={forecast.data.list[4]} unit={unit} />
          <Forecast info={forecast.data.list[5]} unit={unit} />
        </div>
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
