import React from 'react';
import offerBanner from '../../../images/offerBanner.jpg'
import './OfferSection.css'
const OfferSection = () => {
    return (
        <div className="offer-section">
            <img src={offerBanner} alt="" />
        </div>
    );
};

export default OfferSection;