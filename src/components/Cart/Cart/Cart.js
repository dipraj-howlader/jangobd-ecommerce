import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../../Home/Navbar/Navbar';
import CartItem from '../CartItem/CartItem';
import './cart.css'
const Cart = () => {
    const products = useSelector(state => state.cart.products)
    return (
        <div>
            <Navbar></Navbar>
            

            <div class="shopping-cart">

                <div class="title">
                    Shopping Bag
                </div>

               {
                   products.map(product => <CartItem product={product}></CartItem>)
               }
                
            <Link to="/payment" className="checkout-button">Checkout</Link>
            </div>
        </div>
    );
};

export default Cart;