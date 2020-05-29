import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="col">
        <h6>{props.hour}</h6>
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt="Weather Icon"
          height="75"
        />
        <div>
          <strong>
            <span className="maxTemp">{props.maxTemp}</span>
          </strong>
          <span className="forecastUnit unit">ºC</span>{" "}
          <span className="minTemp">{props.minTemp}</span>
          <span className="forecastUnit unit">ºC</span>
        </div>
      </div>
    </div>
  );
}
