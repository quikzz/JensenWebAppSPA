import React from 'react';
import './navbar.css'

var imgSrc = "./src/assets/images/";
function navbar() {
    return (

        <nav className="navbar">
            <div className="container-navbar">
                <div className="navbar-header">
                    <div className="header-side-items">
                        <div className="nav-head-left">
                            <div className="datetime" id="datetime">{new Date().toLocaleDateString("en-GB")}</div>
                            <div id="weather" className="weather-button-container">
                                <button id="weatherButton">
                                    <img src={imgSrc + "weather/clear_day.svg"} alt="WeatherImg not found" id="condition" />
                                    <div id="temperature">Temp:</div>
                                </button>
                            </div>
                        </div>
                        <div className="nav-head-center">
                            <img src={imgSrc + "logoNameGrupp2.png"} alt="logo1" id="settings-logo" />
                        </div>
                        <div className="nav-head-right">
                            <button className="login-button" id="login-button">Logga in</button>
                            <button id="options-button">
                                <img src={imgSrc + "settingGrupp2.png"} alt="logo3" className="permainv" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="navbar-hyperlink bg-dark border-bottom border-body" data-bs-theme="dark">
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item">
                            <a id="nav-link-Optional" className="nav-link" href="#">Sport</a>
                        </li>
                        <li className="nav-item">
                            <a id="nav-link-Optional" className="nav-link" href="#">Fritid</a>
                        </li>
                        <li className="nav-item">
                            <a id="nav-link-Optional" className="nav-link" href="#">Kultur</a>
                        </li>
                        <li className="nav-item">
                            <a id="nav-link-Optional" className="nav-link" href="#">Nöje</a>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="drop-link">Väder</a>
                            <div className="dropdown-content">
                                <div id="forecast" className="forecast-container"></div>
                                <div id="gps-info"></div>
                                <script src="./components/gps.jsx"></script>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default navbar;