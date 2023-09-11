import React from 'react';
import './navbar.css';
import Weather from '@/components/weather/weather.jsx';
import Settings from '@/components/optionsform/offcanvas.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setTopic, selectedTopic } from '@/redux/topicsortslice';
//import Navbar from 'react-bootstrap/Navbar';

var imgSrc = "./src/assets/images/";
function navbar() {
    const searchTopic = useSelector(selectedTopic);
    const dispatch = useDispatch();
    const topics = ["All", "Politik", "Utbildning", "Religion", "Miljo", "Ekonomi", "LivsstilFritt", "SamhalleKonflikter", "Halsa", "Idrott", "VetenskapTeknik"]

    const handleTopicChange = (e) => {
        const selectedTopic = e.target.value;
        dispatch(setTopic(selectedTopic));
    };



    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="weather-container mx-5">
                <Weather />
            </div>

            <div className="logo-fluid ps-7">
                <a className="logo" href="/index"><img src={imgSrc + "logoNameGrupp2.png"} /></a>
            </div>
            
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-1 mb-2 mb-lg-0">
                        <li className="nav-item col-md ">
                        </li>
                        <label htmlFor="topic">Topics</label>
                        <select id="topic" name="topic" value={searchTopic} onChange={handleTopicChange}>
                            {
                                topics.sort().map((t, i) => <option value={t} key={i}>{t}</option>)
                            }
                        </select>
                    </ul>
                    <form className="d-flex ms-3 p-2 " role="search">
                        <input className="form-control  " type="search" placeholder="Sök" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Sök</button>
                        <Settings />
                    </form>
                </div>
            </div>
        </nav>


    );
}

export default navbar;


