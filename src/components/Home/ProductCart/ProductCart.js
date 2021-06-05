import React from 'react';
import { connect } from "react-redux";
// import { addDataToCart } from "../../../redux/actions/cart";
import './ProductCart.css'
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import { addProductToCart } from '../../../redux';
const ProductCart = (props) => {
    
    const { image, price, name } = props.product;
    console.log(props);
    return (
        <div class="products-card">
            <img src={image} alt="" />
            <button class="add-cart" onClick={() =>props.addToCartHandler(props.product)}><FiShoppingCart /></button>
            {/* <a href="" class="add-cart" onClick={() =>props.addToCartHandler(props.product)}><FiShoppingCart /></a> */}
            <a href="#" class="add-wishlist"><FiShoppingBag /></a>
            <div class="cart-bottom">
                <a href="#" class="products-card-title">{name}</a>
                <p class="price"><s>${price * 1.2}</s> ${price}</p>
            </div>
        </div>
    );
};

export default ProductCart;