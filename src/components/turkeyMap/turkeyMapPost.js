import React, { useState, useEffect } from 'react'
import Navbar from '../navbar';
import { Link, useLocation } from 'react-router-dom';
import TurkeyMap from 'turkey-map-react';
import Image from "react-bootstrap/Image"
import classes from "./styles.module.css"


import cityImages from "../../static/image/cities/default.png"
import ActionAreaCard from '../card';
import { appToast } from '../../utils';

let apiKeyHava = "ApiKey"


export default function TurkeyMapsPost(props) {
    //#region 
    const location = useLocation();
    const data = location.state?.cityData;
    const plateNumberData = location.state?.plateData
    console.log(plateNumberData,"plateNumberData")


    const [plate, setPlate] = useState(plateNumberData);
    const [city, setCity] = useState(data);
    const [weather, setWeather] = useState()
    //#endregion


    let baseUrlHavaDurumu = "https://api.openweathermap.org/data/2.5/weather?"
    let urlHavaDurumu = `${baseUrlHavaDurumu}appid=${apiKeyHava}&q=${city}`
    useEffect(() => {
        appToast.showToast(true);
        fetch(urlHavaDurumu)
            .then((res) => res.json())
            .then((resData) => {
                setWeather(celcius(resData.main.temp))
                setTimeout(() => {
                    appToast.showToast(false)
                }, 1000);
            }).catch(err => {
                appToast.showToast(false);
            })
    }, [city])
    var celcius = (d) => {
        let conv = Math.round(parseFloat(d) - 273.15)
        return conv
    };
    return (
        <>
            <Navbar />

            <div className="" style={{backgroundColor:"turquoise"}}>
                <div className={classes.imgClass}>
                    <Image className='center' bsPrefix='' thumbnail={true} rounded={true} fluid={true} style={{ borderRadius: "10px", verticalAlign: "center", "height": "450px", "width": "100%", backgroundSize: "cover" }} src={require(`../../static/image/cities/${plate}.png`)} alt={city} />
                    <div style={{ visibility: city ? "visible" : "hidden" }}>
                        <h2 className={classes.imgWeather}>
                            {weather + "℃"}
                        </h2>
                    </div>
                    <div className={classes.imgAbsolute}>
                        <i>  {city}</i>
                    </div>
                </div>
                <div className="row">
                    <div className={`col-md-1 ${classes.bodyColor}`}>
                    </div>
                    <div className="col-md-10">
                        <Link to={`/turkey/${plate}`}
                            state={{ data: city }}
                        >
                            <TurkeyMap
                                onClick={({ name, plateNumber }) => {
                                    setCity(name)

                                    setPlate(plateNumber);
                                }} />
                        </Link>
                    </div>
                    <div className={`col-md-1 ${classes.bodyColor}`}>
                    </div>
                </div>
                <div className="container">
                    <div className={classes.CardArea}>
                        <div className="row">
                            <div className="col-md-4"><ActionAreaCard city={city} plateNumber={plateNumberData} body="Lorem ipsum ... . ... .." /> </div>
                            <div className="col-md-4"><ActionAreaCard city={city} plateNumber={plateNumberData} body="Lorem ipsum ... . ... .." /> </div>
                            <div className="col-md-4"><ActionAreaCard city={city} plateNumber={plateNumberData} body="Lorem ipsum ... . ... .." /> </div>
                            <div className="col-md-4"><ActionAreaCard city={city} plateNumber={plateNumberData} body="Lorem ipsum ... . ... .." /> </div>
                            <div className="col-md-4"><ActionAreaCard city={city} plateNumber={plateNumberData} body="Lorem ipsum ... . ... .." /> </div>
                            <div className="col-md-4"><ActionAreaCard city={city} plateNumber={plateNumberData} body="Lorem ipsum ... . ... .." /> </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}
