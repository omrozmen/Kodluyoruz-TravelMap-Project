import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import classes from "./styles.module.css"
import TurkeyMap from 'turkey-map-react';



export default function HomePage() {
    return (
        <>
            <Navbar />
            <div className={classes.NewLines}>
                <div className="container" >
                    <i>
                        Travel Map Project Home Page
                    </i>
                    <div>
                        <i>
                            Proje Sayfası İçin <Link to="/turkey">...</Link>
                        </i>
                    </div>
                </div>
            </div>
            <div className={classes.NewLine} >
                <TurkeyMap />
            </div>
        </>
    )
}
