import './App.css';
import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [displayCity, setDisplayCity] = useState("");
  let [weather, setWeather] = useState({});

  function getData(response) {
    setWeather({
      day: "Tuesday 10:10",
      date: "10/19/2021",
      wind: response.data.wind.speed,
      humid: response.data.main.humidity,
      temperature: response.data.main.temp,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoaded(true);
    setDisplayCity(city);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ae73a0fdb9a246291b5e3911d1cd392&units=metric`;
    axios.get(url).then(getData);
  }

  function updateCity(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  let form = (
    <form className="city-input" onSubmit={handleSubmit}>
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
        className="btn btn-success btn-search"
      />
    </form>
  );

  if (loaded) {
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

                  <div className="weather-body">
                    <div className="weather__details">
                      <p className="time">{weather.day}</p>
                      <p className="date">{weather.date}</p>
                      <p className="wind">Wind {weather.wind}km/h</p>
                      <p className="humid">
                        <i className="fas fa-tint"></i>
                        {weather.humid}%
                      </p>
                    </div>

                    <div className="weather-today">
                      <img className="fas fa-cloud" src={weather.icon} />
                      <p>{weather.description}</p>
                    </div>
                    <div className="weather-temperature">
                      <span className="current-temperature">
                        {weather.temperature}
                      </span>
                      <span id="btn-group">
                        <button className="deg active">°C</button>
                        {/* <button className="far">°F</button> */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card footer">
                <div className="card-body card-body-footer">
                  <div className="container-footer">
                    <strong className="day">WED</strong> <br />
                    <i className="fas fa-cloud-moon-rain weather"></i>
                    <br />
                    <strong className="temperature">25°C</strong>
                  </div>

                  <div className="container-footer">
                    <strong className="day">THU</strong> <br />
                    <i className="fas fa-sun weather"></i>
                    <br />
                    <strong className="temperature">27°C</strong>
                  </div>

                  <div className="container-footer">
                    <strong className="day">FRI</strong> <br />
                    <i className="fas fa-cloud-sun-rain weather"></i>
                    <br />
                    <strong className="temperature">28°C</strong>
                  </div>

                  <div className="container-footer">
                    <strong className="day">SAT</strong> <br />
                    <i className="fas fa-cloud-moon-rain weather"></i>
                    <br />
                    <strong className="temperature">24°C</strong>
                  </div>

                  <div className="container-footer">
                    <strong className="day">SUN</strong> <br />
                    <i className="fas fa-cloud-sun-rain weather"></i>
                    <br />
                    <strong className="temperature">30°C</strong>
                  </div>
                </div>
              </div>
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
