import React from 'react';
import Header from '../Header/Header';
import OfferSection from '../OfferSection/OfferSection';
import OurFeatures from '../OurFeatures/OurFeatures';
import ProductSection from '../ProductSection/ProductSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ProductSection></ProductSection>
            <OfferSection></OfferSection>
            <OurFeatures></OurFeatures>
        </div>
    );
};

export default Home;