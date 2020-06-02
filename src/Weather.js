import React from "react";
import "./Weather.css";
import Forecast from "./Forecast";
import DisplayDate from "./DisplayDate";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h1>{props.info.city}</h1>
      <div className="row">
        <div className="col">
          <ul className="dateDescription">
            <li>
              <DisplayDate date={props.info.date} />
            </li>
            <li className="text-capitalize">{props.info.description}</li>
          </ul>
        </div>
        <div className="col">
          <img
            className="weatherIcon"
            src={`http://openweathermap.org/img/wn/${props.info.icon}@2x.png`}
            alt={props.info.description}
          />
        </div>
        <div className="col">
          <Temperature temp={props.info.temp} />
        </div>
      </div>
      <div>
        <ul className="weatherExtra">
          <li>Humidity: {props.info.humidity}%</li>
          <li>Wind: {props.info.wind} km/h</li>
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
