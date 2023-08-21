import React from 'react';
import './footer.css'

function Footer() {
    return (
        <footer id="footer-main">
        <div class="footer-grid">
            <section class="footer">
                <ul>
                    <li>
                        <h3>Kontakta oss</h3>
                    </li>
                    <li><a href="#">Kundservice</a></li>
                    <li><a href="#">Karriär</a></li>
                    <li><a href="#">Investerare</a></li>
                </ul>
            </section>
            <section class="footer">
                <ul>
                    <li>
                        <h3>Information</h3>
                    </li>
                    <li><a href="#">Om oss</a></li>
                    <li><a href="#">Personuppgiftspolicy</a></li>
                    <li><a href="#">Allmänna villkor</a></li>
                </ul>
            </section>
            <section class="footer">
                <ul>
                    <li>
                        <h3>Tipsa oss</h3>
                    </li>
                    <li><a href="#">0701234567</a></li>
                    <li><a href="#">1234@händelsehorisonten.se</a></li>
                </ul>
            </section>
        </div>
        <div class="copyright-footer">
            &copy; Copyright 2023 - Grupp 2 Jensen
        </div>
    </footer>
    );
}

export default Footer;