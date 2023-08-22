import React from 'react';
import './navbar.css';
import Weather from '@/components/weather/weather.jsx';


var imgSrc = "./src/assets/images/";
function navbar() {
  return (
      <nav className="navbar ">
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
                          <img src={imgSrc + "logoNameGrupp2.png"}alt="logo1" id="settings-logo" />
                      </div>
                      <div className="nav-head-right">
                          <button className="login-button" id="login-button">Logga in</button>
                          <button id="options-button">
                              <img src={imgSrc + "settingGrupp2.png"} alt="logo3" className="permainv" />
                          </button>

                      </div>
                  </div>
              </div>
              <div className="navbar-hyperlink">
                  <ul className="navbar-nav">
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

function showLogin() {
    // Get the modal and the login button
    var modal = document.getElementById('login-modal');
    var btn = document.getElementById('login-button');
    btn.onclick = function () {
        modal.style.display = "block";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
function showOptions() {
    // Get the modal and the options button
    var modal = document.getElementById('options-modal');
    var btn = document.getElementById('options-button');
    btn.onclick = function () {
        modal.style.display = "block";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

