import React from 'react';
import './navbar.css';
import Weather from '@/components/weather/weather.jsx';
import Settings from '@/components/optionsform/offcanvas.jsx';


var imgSrc = "./src/assets/images/";
function navbar() {
    return (
        <div className="d-flex justify-content-center mt-5">
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
                        </form>
                    </div>
                </div>
            </nav>
        </div>

    );
}
/*
function navbar() {
  return (
      <nav classNameName="navbar ">
          <div classNameName="container-navbar">
              <div classNameName="navbar-header">
                  <div classNameName="header-side-items">
                      <div classNameName="nav-head-left">
                          <div classNameName="datetime" id="datetime">{new Date().toLocaleDateString("en-GB")}</div>
                          <div id="weather" classNameName="weather-button-container">
                              <button id="weatherButton">
                                  <img src={imgSrc + "weather/clear_day.svg"} alt="WeatherImg not found" id="condition" />
                                  <div id="temperature">Temp:</div>
                              </button>
                          </div>
                      </div>
                      <div classNameName="nav-head-center">
                          <img src={imgSrc + "logoNameGrupp2.png"}alt="logo1" id="settings-logo" />
                      </div>
                      <div classNameName="nav-head-right">
                          <Settings />
                      </div>
                  </div>
              </div>
              <div classNameName="navbar-hyperlink">
                  <ul classNameName="navbar-nav">
                      <li classNameName="nav-item">
                          <a id="nav-link-Optional" classNameName="nav-link" href="#">Sport</a>
                      </li>
                      <li classNameName="nav-item">
                          <a id="nav-link-Optional" classNameName="nav-link" href="#">Fritid</a>
                      </li>
                      <li classNameName="nav-item">
                          <a id="nav-link-Optional" classNameName="nav-link" href="#">Kultur</a>
                      </li>
                      <li classNameName="nav-item">
                          <a id="nav-link-Optional" classNameName="nav-link" href="#">Nöje</a>
                      </li>
                      <li classNameName="dropdown">
                          <a href="#" classNameName="drop-link">Väder</a>
                          <div classNameName="dropdown-content">
                              <div id="forecast" classNameName="forecast-container"></div>
                              <div id="gps-info"></div>
                              <script src="./components/gps.jsx"></script>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
}*/


export default navbar;


