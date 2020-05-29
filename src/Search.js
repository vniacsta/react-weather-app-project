import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Weather from "./Weather";

export default function Search() {
  return (
    <div className="Search">
      <div className="row">
        <div className="col-9">
          <form>
            <input
              type="search"
              placeholder="Type a city"
              className="search-box"
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
          <button className="celsius-btn">ºC</button>
          <button className="fahrenheit-btn">ºF</button>
        </div>
      </div>
      <Weather defaultCity="Porto" />
    </div>
  );
}
