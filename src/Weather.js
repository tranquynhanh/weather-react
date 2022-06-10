import './App.css';
import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [displayCity, setDisplayCity] = useState("");
  let [weather, setWeather] = useState({ready: false});

  function getData(response) {
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      day: "10/19/2021",
      wind: response.data.wind.speed,
      humid: response.data.main.humidity,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      coord: response.data.coord
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDisplayCity(city);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ae73a0fdb9a246291b5e3911d1cd392&units=metric`;
    axios.get(url).then(getData);
  }

  function updateCity(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="city-input" id='city-input'>
      <input
        type="search"
        name="search"
        id="searchCity"
        placeholder="Enter your city"
        autoFocus="on"
        autoComplete="off"
        onChange={updateCity}
      />
      <input
        type="submit"
        value="Search"
        className="btn btn-success btn-search" id='btn'
      />
      </div>
    </form>
  );

  if (weather.ready) {
    return (
      <div className="App">
        <div className="container container-total">
          <div className="card total">
            <div className="card-body">
              {form} 
              <div className="card body">
                <div className="card-body">
                  <div className="header">
                    <h2>{displayCity}</h2>
                    <p className="temp">
                      <span>
                        <i className="fas fa-arrow-down icon-arrow"></i>
                        18°C
                      </span>
                      <span>
                        <i className="fas fa-arrow-up icon-arrow"></i>
                        27°C
                      </span>
                    </p>
                  </div>
                  <WeatherInfo data={weather}/>
                </div>
              </div>
              <WeatherForecast coord={weather.coord} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="container container-total">
          <div className="card total">
            <div className="card-body">{form}</div>
          </div>
        </div>
        <a href='https://github.com/tranquynhanh/weather-react' target="_blank" rel="noreferrer">github link</a>
      </div>
    );
  }
}
