import React from 'react';
import './optionsform.css'

function options() {
  return (
      <div className="options-modal" id="options-modal">
          <div className="options-container" id="options-box">
              <header>Inställningar</header>
              <div className="toggle-container">
                  <input type="checkbox" id="toggle" onClick={changeMode } />
                  <label htmlFor="toggle" className="toggle-label">Växla mörkt och ljust läge</label>
              </div>
              <div className="form-outer">
                  <form action="#">
                      <div className="page">
                          <div className="field">
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default options;

function changeMode(){
    const toggleSwitch = document.getElementById('toggle');
    const logo = document.getElementById("settings-logo");
    const navlink = document.getElementById("nav-link-Optional");
    const login = document.getElementById("login-box");
    const optionsBox = document.getElementById("options-box");
    const body = document.body;

    if (toggleSwitch.checked) {
        body.classList.add('dark-mode');
        logo.classList.add('dark-mode-logo');
        navlink.classList.add('dark-mode-navlink');
        login.classList.add('darkmode-popup');
        optionsBox.classList.add('darkmode-popup');

    } else {
        body.classList.remove('dark-mode');
        logo.classList.remove('dark-mode-logo');
        navlink.classList.remove('dark-mode-navlink');
        login.classList.remove('darkmode-popup');
        optionsBox.classList.remove('darkmode-popup');
    }
}