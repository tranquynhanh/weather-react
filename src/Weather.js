import './App.css';
import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from './WeatherInfo';

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [displayCity, setDisplayCity] = useState("");
  let [weather, setWeather] = useState({ready: false});

  function getData(response) {
    console.log(response.data.dt)
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      day: "10/19/2021",
      wind: response.data.wind.speed,
      humid: response.data.main.humidity,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
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
