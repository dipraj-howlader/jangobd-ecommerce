import React, { useEffect, useState } from 'react';
import './ProductSection.css'
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import ProductCart from '../ProductCart/ProductCart';
import { connect } from 'react-redux';
import { addProductToCart } from '../../../redux';

const ProductSection = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("https://mocki.io/v1/9f273413-f9f2-441c-ae23-8152ab20f723")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const addToCartHandler = (product) => {
        props.addProductToCart(product)
    }
    console.log(props);
    return (
        <div className="product-container">
            <h2>Trending Products</h2>
            <p>Top view in this week</p>
            <h2>{props.products.products}</h2>
            <div className="products">
            {
                products.map(product => <ProductCart product={product} addToCartHandler={addToCartHandler}></ProductCart>)
            }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.cart.products
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addProductToCart: product => {dispatch(addProductToCart(product));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSection)
