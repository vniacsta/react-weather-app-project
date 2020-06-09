import React from "react";
import "./Forecast.css";
import WeatherIcons from "./WeatherIcons";

export default function Forecast(props) {
  function hours() {
    let hours = new Date(props.info.dt * 1000).getHours();
    if (hours < 10) {
      return `0${hours}:00`;
    } else {
      return `${hours}:00`;
    }
  }

  if (props.unit === "celsius") {
    return (
      <div className="Forecast">
        <div className="col">
          <h6>{hours()}</h6>
          <div className="forecastIcons text-capitalize">
            <WeatherIcons
              icon={props.info.weather[0].icon}
              alt={props.info.weather[0].description}
              height="60"
            />
          </div>
          <div>
            <strong>
              <span className="maxTemp">
                {Math.round(props.info.main.temp_max)}
              </span>
            </strong>
            <span className="forecastUnit">ºC</span>{" "}
            <span className="minTemp">
              {Math.round(props.info.main.temp_min)}
            </span>
            <span className="forecastUnit">ºC</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Forecast">
        <div className="col">
          <h6>{hours()}</h6>
          <div className="forecastIcons text-capitalize">
            <WeatherIcons
              icon={props.info.weather[0].icon}
              alt={props.info.weather[0].description}
              height="60"
            />
          </div>
          <div>
            <strong>
              <span className="maxTemp">
                {Math.round(props.info.main.temp_max * 1.8 + 32)}
              </span>
            </strong>
            <span className="forecastUnit">ºF</span>{" "}
            <span className="minTemp">
              {Math.round(props.info.main.temp_min * 1.8 + 32)}
            </span>
            <span className="forecastUnit">ºF</span>
          </div>
        </div>
      </div>
    );
  }
}
