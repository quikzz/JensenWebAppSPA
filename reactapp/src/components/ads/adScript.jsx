import React, { Component } from 'react';
import './ads.css'

const imgSrc = "./src/assets/images/";

class Ad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adBanner1Index: 0,
            adBanner2Index: 0,
        };
        this.adBanners = [
            {
                id: 'adBanner1',
                images: [
                    imgSrc + 'Malmo_basta-kebab.webp',
                    imgSrc + 'Hands_to_small.webp',
                ]
            },
            {
                id: 'adBanner2',
                images: [
                    imgSrc + 'Hands_to_small.webp',
                    imgSrc + 'Malmo_basta-kebab.webp',
                ]
            }

        ];
    }

    componentDidMount() {
        // Start the rotation for each ad banner
        this.adBanners.forEach(adBanner => this.rotate(adBanner));
    }

    rotate(adBanner) {
        const imgElement = document.getElementById(adBanner.id);
        imgElement.classList.remove('show');

        setTimeout(() => {
            imgElement.src = adBanner.images[this.state[adBanner.id + 'Index']];
            imgElement.classList.add('show');

            this.setState(prevState => {
                const nextIndex = prevState[adBanner.id + 'Index'] + 1;
                return {
                    [adBanner.id + 'Index']: nextIndex === adBanner.images.length ? 0 : nextIndex
                };
            });

            setTimeout(() => this.rotate(adBanner), 4 * 1000);
        }, 1000);
    }

    render() {
        return (
            <div>
                <div className="adBox">
                    <div className="ad">
                        <img id="adBanner1" />
                    </div>
                    <div className="ad">
                        <img id="adBanner2" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Ad;
