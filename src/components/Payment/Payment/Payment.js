import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import PaymentHeader from '../PaymentHeader/PaymentHeader';
import './Payment.css';

const Payment = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PaymentHeader></PaymentHeader>
        </div>
    );
};

export default Payment;