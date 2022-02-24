import axios from "axios";
import React, {useState, useEffect} from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null)

    useEffect(() => {
        setLoaded(false);
    }, [props.coord])

    function handleResponse(response) {
        setForecast(response.data.daily);
        console.log(response.data.daily)
        setLoaded(true);
    }
    
    if (loaded) {
        console.log(forecast)
        return (
            <div className="card footer">
                <div className="card-body card-body-footer">                    

                {forecast.map(function(dailyForecast, index) {
                    if (index < 5) {
                        return (
                            <div className="container-footer" key={index}>
                                <WeatherForecastDay data={dailyForecast}/>
                            </div>
                        )
                    } else return null;
                })}
                </div>
            </div>
        )
   
    } else {
        let lat = props.coord.lat;
        let lon = props.coord.lon;
        let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=7ae73a0fdb9a246291b5e3911d1cd392&units=metric`
        console.log(api)
        console.log(handleResponse)

        axios.get(api).then(handleResponse)

        return "hi there";
    }
}