import React from 'react';
import Header from '../Header/Header';
import OfferSection from '../OfferSection/OfferSection';
import ProductSection from '../ProductSection/ProductSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ProductSection></ProductSection>
            <OfferSection></OfferSection>
        </div>
    );
};

export default Home;