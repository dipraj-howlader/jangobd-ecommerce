import React from 'react';
import './OurFeatures.css'
import { FiTruck, FiUser, FiSearch } from "react-icons/fi";

const OurFeatures = () => {
    return (
        <div className="feature-section">
            <div className="feature-card">
                <FiTruck className="card-icon" />
                <h3>Free Worldwide Shipping</h3>
                <p>On all orders over $75.00</p>
                <a href="#">Learn More</a>
            </div>
            <div className="feature-card">
                <FiTruck className="card-icon" />
                <h3>Free Worldwide Shipping</h3>
                <p>On all orders over $75.00</p>
                <a href="#">Learn More</a>
            </div>
            <div className="feature-card">
                <FiTruck className="card-icon" />
                <h3>Free Worldwide Shipping</h3>
                <p>On all orders over $75.00</p>
                <a href="#">Learn More</a>
            </div>
        </div>
    );
};

export default OurFeatures;