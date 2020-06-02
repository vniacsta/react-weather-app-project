import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";
import Weather from "./Weather";
import UnitButtons from "./UnitButtons";

export default function Search(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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
              <button type="button" className="icons">
                <FontAwesomeIcon icon={faLocationArrow} />
              </button>
            </form>
          </div>
          <div className="col-3">
            <UnitButtons />
          </div>
        </div>
        <Weather info={weatherInfo} />
      </div>
    );
  } else {
    searchCity();
    return (
      <div>
        <h1>Weather app is loading</h1>
        <Loader
          type="ThreeDots"
          color="#636363"
          height={100}
          width={100}
          timeout={10000} //3 secs
        />
      </div>
    );
  }
}
