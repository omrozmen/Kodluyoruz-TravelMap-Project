import { useState, useEffect } from 'react';
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

export default function TurkeyMaps({
}) {
    //#region StateFull
    const [city, setCity] = useState("Kodluyoruz");
    const [cityHower, setCityHower] = useState("");
    const [plateNumber, setPlateNumber] = useState("");
    //#endregion

    return (
        <div className={classes.pageColor}>
            <Navbar />
            <PageExtension>
                <div className="container">
                    <Container>
                        <TurkeyMap onClick={({ plateNumber, name }) => {
                            setCity(name);
                            setPlateNumber(plateNumber);
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
                                {/* <YoutubeEmbed embedId={video} /> */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={classes.imgBtn}>
                                <ModalState>
                                    <Modal.Header>
                                        <Modal.Title> {city}  Tanıtım Videosu</Modal.Title>
                                    </Modal.Header>
                                    <ModalBody>
                                        <YoutubeVideos city={city} />
                                    </ModalBody>
                                </ModalState>
                            </div>
                            <br />
                            <div className={classes.btnDetail}>
                                <Button style={{width:"100%"}}>
                                    <Link className='btn btn-md btn-outline-info' to={`/turkey/${plateNumber}`} state={{ cityData: city }} style={{width:"100%"}}>
                                        <h1>{city}
                                            <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                        </h1>
                                    </Link>
                                </Button>
                            </div>
                            <div className={classes.cityImageDetail}>
                                <i>     <h3>{city} Tanıtım</h3></i>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div >
            </PageExtension>
        </div>
    )
}