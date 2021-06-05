import React from 'react';
import './OurFeatures.css'
import { FiTruck, FiUser, FiSearch } from "react-icons/fi";
import { buyProduct } from '../../../redux';
import { connect } from 'react-redux';


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
                <h3>100% Payment Secure</h3>
                <p>We ensure secure payment</p>
                <p> with PEV</p>
                <a href="#">Learn More</a>
            </div>
            <div className="feature-card">
                <FiTruck className="card-icon" />
                <h3>30 Days Return</h3>
                <p>Return it within 20 day </p>
                <p>for an exchange</p>
                <a href="#">Learn More</a>
            </div>
        </div>
    );
};

// const mapsStateToProps = (state) =>{
//     return {
//         numberOfProduct : state.product.numberOfProducts,
//         numberOf : state.product.numberOf
//     }
// }

// const mapsDispatchToProps = (dispatch) =>{
//     return {
//         buyProduct : ()=>dispatch(buyProduct())
//     }
// }

// export default connect(mapsStateToProps,mapsDispatchToProps)(OurFeatures)

export default OurFeatures;