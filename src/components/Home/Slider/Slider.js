import React from 'react';
import './Slider.css';
import sliderImage from '../../../images/banner.png'
import sliderImage2 from '../../../images/banner 2.jpg'
import Image from 'react-bootstrap/Image';

const Slider = () => {
    return (
        <div className="slider-container">
            <Image src={sliderImage2} fluid />
        </div>
    );
};

export default Slider;