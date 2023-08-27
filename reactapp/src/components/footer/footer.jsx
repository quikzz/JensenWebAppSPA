import React from 'react';

function Footer() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <section className="col-md-4 footer">
                        <h3>Kontakta oss</h3>
                        <ul className="list-unstyled">
                            <li><a href="#">Kundservice</a></li>
                            <li><a href="#">Karriär</a></li>
                            <li><a href="#">Investerare</a></li>
                        </ul>
                    </section>
                    <section className="col-md-4 footer">
                        <h3>Information</h3>
                        <ul className="list-unstyled">
                            <li><a href="#">Om oss</a></li>
                            <li><a href="#">Personuppgiftspolicy</a></li>
                            <li><a href="#">Allmänna villkor</a></li>
                        </ul>
                    </section>
                    <section className="col-md-4 footer">
                        <h3>Tipsa oss</h3>
                        <ul className="list-unstyled">
                            <li><a href="#">0701234567</a></li>
                            <li><a href="#">1234@händelsehorisonten.se</a></li>
                        </ul>
                    </section>
                </div>
            </div>
            <div className="container text-center mt-3">
                <p>&copy; Copyright 2023 - Grupp 2 Jensen</p>
            </div>
        </div>
    );
}

export default Footer;