import { useState } from 'react';
import Navbar from '../navbar'

import { Link, useLocation } from "react-router-dom";
import TurkeyMap from 'turkey-map-react';
import Container from 'react-bootstrap/Container';
import classes from "./styles.module.css"
import { Button, Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import WeatherApp from '../weather';
import ModalState from "../modal"
import { YoutubeVideos } from '../youtubeVideo/youtubevideos';
import PageExtension from '../pageextension';
let cityNum = Math.floor(Math.random() * (1, 81))
let cityNum2 = Math.floor(Math.random() * (1, 81))


export default function TurkeyMaps({ ...props }) {
    //#region StateFull
    const [city, setCity] = useState("Kodluyoruz");
    const [cityButton, setCityButton] = useState("");
    const [cityHower, setCityHower] = useState("");
    const [plateNumber, setPlateNumber] = useState("");
    //#endregion

    //#region YoutubeDeneme
    const location = useLocation();
    const dataLocation = location.state?.videoDetay;
    let promotion = "Tanıtım"
    //#endregion
    const background = require(`../../static/image/cities/${cityNum}.png`)
    const background2 = require(`../../static/image/cities/${cityNum2}.png`)
    return (
        <>
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <Navbar />
                <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <PageExtension>
                        <div className="container"  >

                            <Container>
                                <TurkeyMap onClick={({ plateNumber, name }) => {

                                    setTimeout(() => {
                                        setCity(name);
                                        setPlateNumber(plateNumber);
                                    }, 1000);
                                    setTimeout(() => {
                                        setCityButton(name)
                                    }, 1700);
                                }} hoverable={true} onHover={({ plateNumber, name }) => {
                                    setCityHower(name)
                                }} />
                            </Container>
                            <div className="row" style={{ visibility: city == "Kodluyoruz" ? "hidden" : "visible" }}>
                                <div className="col-md-6">
                                    <h2 className='' style={{ visibility: cityHower ? "visible" : "hidden", margin: "auto" }}>
                                        <WeatherApp city={cityHower} />
                                    </h2>

                                    <div style={{ visibility: city == "Kodluyoruz" ? "hidden" : "visible" }}>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={classes.imgBtn}>
                                        <ModalState plate={plateNumber}>
                                            <Modal.Header>
                                                <Modal.Title> {city} {promotion} Videosu</Modal.Title>
                                            </Modal.Header>
                                            <ModalBody>
                                                <YoutubeVideos city={city} searchKeyIndex={promotion} />
                                            </ModalBody>
                                        </ModalState>
                                    </div>
                                    <br />
                                    <div className={classes.btnDetail} style={{ visibility: cityButton == "" ? "hidden" : "visible" }}>
                                        <Button style={{ width: "100%", borderRadius: "30px" }}>
                                            <Link className='btn btn-md btn-outline-info' to={`/turkey/${plateNumber}`} state={{ cityData: city, plateData: plateNumber }} style={{ width: "100%", borderRadius: "20px" }}>
                                                <h1>{city}
                                                </h1>
                                            </Link>
                                        </Button>
                                    </div>
                                    <div className={classes.cityImageDetail}>
                                        <i> <h3>{city}</h3></i>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div >
                    </PageExtension>
                </div>
            </div>
        </>
    )
}