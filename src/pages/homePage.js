import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import classes from "./styles.module.css"
import TurkeyMap from 'turkey-map-react';
import ImgButton from '../components/button/imagebtn';



export default function HomePage() {
    let arrays = []
    for (let i = 1; i < 20; i++) {
        let cityNum = Math.floor(Math.random() * (1,81));
        arrays[i] = cityNum;

    }
    
    return (
        <>
            <Navbar />
            <div>
                <div className='container'>
                    <div className={classes.NewLines}>
                        <div className={`container ${classes.homeFont}`} >
                            <i>
                                Travel Map Project Home Page
                            </i>
                            <div>
                                <i>
                                    Proje Sayfası İçin <Link to="/turkey">...</Link>
                                </i>
                            </div>
                        </div>
                        <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Link to={`/turkey/${arrays[12]}`} state={{ plateData: arrays[10] }}>
                                    <ImgButton cty={arrays[12]} />
                                </Link>
                            </div>
                        </div>

                            <div className="row">
                                <div className="col-md-3">
                                    <Link to={`/turkey/${arrays[1]}` } state={{ plateData: arrays[1] }}>
                                        <ImgButton cty={arrays[1]} />
                                    </Link>
                                </div>

                                <div className="col-md-5">
                                    <Link to={`/turkey/${arrays[2]}`}state={{ plateData: arrays[2] }}>
                                        <ImgButton cty={arrays[2]} />
                                    </Link>
                                </div>
                                <div className="col-md-4">
                                    <Link to={`/turkey/${arrays[3]}`} state={{ plateData: arrays[3] }}>
                                        <ImgButton cty={arrays[3]} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                <Link to={`/turkey/${arrays[4]}`} state={{ plateData: arrays[4] }}>
                                    <ImgButton cty={arrays[4]} />
                                </Link>
                            </div>

                            <div className="col-md-4">
                                <Link to={`/turkey/${arrays[5]}`} state={{ plateData: arrays[5] }}>
                                    <ImgButton cty={arrays[5]} />
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <Link to={`/turkey/${arrays[9]}`} state={{ plateData: arrays[9] }}>
                                    <ImgButton cty={arrays[9]} />
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to={`/turkey/${arrays[6]}`} state={{ plateData: arrays[6] }}>
                                    <ImgButton cty={arrays[6]} />
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to={`/turkey/${arrays[7]}`} state={{ plateData: arrays[7] }}>
                                    <ImgButton cty={arrays[7]} />
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to={`/turkey/${arrays[8]}`} state={{ plateData: arrays[8] }}>
                                    <ImgButton cty={arrays[8]} />
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Link to={`/turkey/${arrays[10]}`} state={{ plateData: arrays[10] }}>
                                    <ImgButton cty={arrays[10]} />
                                </Link>
                            </div>

                            <div className="col-md-6">
                                <Link to={`/turkey/${arrays[11]}`} state={{ plateData: arrays[11] }}>
                                    <ImgButton cty={arrays[11]} />
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>

       
            </div>
        </>
    )
}
