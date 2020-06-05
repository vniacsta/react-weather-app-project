import React from "react";
import "./Weather.css";
import DisplayDate from "./DisplayDate";
import Temperature from "./Temperature";

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
            src={`https://openweathermap.org/img/wn/${props.info.icon}@2x.png`}
            alt={props.info.description}
          />
        </div>
        <div className="col">
          <Temperature temp={props.info.temp} unit={props.unit} />
        </div>
      </div>
      <div>
        <ul className="weatherExtra">
          <li>Humidity: {props.info.humidity}%</li>
          <li>Wind: {props.info.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
