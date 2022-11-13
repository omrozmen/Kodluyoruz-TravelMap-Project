import React, { useState, useEffect } from "react";
import { appToast } from "../../utils";
import ActionAreaCardWeather from "../card/cartWeather";

let apiKeyHava = "ApiKey"
export default function WeatherApp({ city }) {
    const [weather, setWeather] = useState("")
    const [icon, setIcon] = useState("01d")
    const [iconUrl, setIconUrl] = useState("")

    var celcius = (d) => {
        let conv = Math.round(parseFloat(d) - 273.15)
        return conv
    };


    let baseUrlHavaDurumu = "https://api.openweathermap.org/data/2.5/weather?"
    let urlHavaDurumu = `${baseUrlHavaDurumu}appid=${apiKeyHava}&q=${city}`
    useEffect(() => {
        appToast.showToast(true);
        fetch(urlHavaDurumu)
            .then((res) => res.json())
            .then((data) => {
                setWeather(celcius(data.main.temp))
                setIcon(data.weather[0].icon)
                setIconUrl(`https://openweathermap.org/img/wn/${icon}@2x.png`)
                setTimeout(() => {
                    appToast.showToast(false)
                }, 1);
            }).catch(err=>{
                appToast.showToast(false);
            })
    }, [city]);

    return (
        <>
            <div>
                <h2>
                    <div className="container">
                        <ActionAreaCardWeather>
                            {iconUrl}
                            {city + " " + weather + "℃"}

                        </ActionAreaCardWeather>
                    </div>

                </h2>
            </div>
        </>
    )
}