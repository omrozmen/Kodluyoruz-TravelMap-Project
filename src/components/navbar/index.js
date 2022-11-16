import React from "react"
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./style.module.css"

function Navbar() {
    let nums = Math.floor(Math.random() * (81));
    const darkTheme = () => {

    }
    return (
        <nav className={`navbar navbar-expand-lg sticky-top ${classes.NavbarClass}`}>
            <div className={classes.imgPosition}>
                <Link className="navbar-link" to="/"><img src={require("../../static/image/buttons/worlds.png")} style={{ height: "50px" }} /></Link>
            </div>
            <div className="container">
                <Nav>

                    <Link className="navbar-brand" to="/">
                        <span className={`mb-0 h1 ${classes.stylesLink}`}>...Ana Sayfa</span> </Link>
                    <Link className="navbar-brand " to="/turkey">
                        <span className={`mb-0 h2 ${classes.styles}`}>Harita Sayfası</span>
                    </Link>
                </Nav>
                <Link className={`navbar-brand `} to={`/turkey/${nums}`} state={{ plateData: nums }}>
                    <span className={`mb-0 h2 ${classes.stylesExample}`}>Şansımı Dene..</span>
                </Link>

            </div>
        </nav >


    );
}

export default Navbar;