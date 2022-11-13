import React from "react"
import { Link } from "react-router-dom";

function Navbar() {
    let nums = Math.floor(Math.random() * (81));
    return (
        <nav className="navbar navbar-expand-lg bg-light sticky-top">
            <div className="container">
                <ul>
                    <Link className="navbar-brand " to="/turkey">
                        <span className="mb-0 h2">Harita Sayfası</span>
                    </Link>
                </ul>
                
                <Link className="navbar-link" to="/">
                    <span className="mb-0 h1">...</span> </Link>
            </div>
        </nav >


    );
}

export default Navbar;