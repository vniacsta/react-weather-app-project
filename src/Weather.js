import React from "react";
import "./Weather.css";
import Forecast from "./Forecast";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Porto</h1>
      <div className="row">
        <div className="col">
          <ul className="dateDescription">
            <li>Wednesday, 15:00</li>
            <li>Clear sky</li>
          </ul>
        </div>
        <div className="col">
          <img
            className="weatherIcon"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="Clear Sky"
          />
        </div>
        <div className="col">
          <h2 className="currentTemp">
            22<span className="weatherUnit">ºC</span>
          </h2>
        </div>
      </div>
      <div>
        <ul className="weatherExtra">
          <li>Humidity: 20%</li>
          <li>Wind: 6 km/h</li>
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
}
