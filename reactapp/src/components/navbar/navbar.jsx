import React from 'react';
import './navbar.css';
import Weather from '@/components/weather/weather.jsx';
import Settings from '@/components/optionsform/offcanvas.jsx';
import Navbar from 'react-bootstrap/Navbar';


var imgSrc = "./src/assets/images/";
function navbar() {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item col-md ">
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-3 me-4" href="#">Sport</a>
                            </li>
                            <li className="nav-item fs-3 me-4">
                                <a className="nav-link" href="#">N&#246;je</a>
                            </li>
                            <li className="nav-item fs-3 me-4">
                                <a className="nav-link" href="#">Politik</a>
                            </li>
                            <li className="nav-item fs-3 me-5">
                                <a className="nav-link" href="#">Kultur</a>
                            </li>
                        </ul>
                        <form className="d-flex mx-auto p-2 " role="search">
                            <input className="form-control  " type="search" placeholder="S&#246;k" aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit">S&#246;k</button>
                            <Settings />
                        </form>
                    </div>
                </div>
            </nav>


    );
}

export default navbar;


