import React from 'react';
import './ProductSection.css'
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";
const ProductSection = () => {
    return (
        <div className="product-container">
            <h2>Trending Products</h2>
            <p>Top view in this week</p>
            <div className="products">

                
                <div class="products-card">
                    <img src="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-Pro-500x500.jpg" alt="" />
                    <a href="#" class="add-cart"><FiShoppingCart /></a>
                    <a href="#" class="add-wishlist"><FiShoppingBag /></a>
                    <div class="cart-bottom">
                        <a href="#" class="products-card-title">Iphone 12pro Max</a>
                        <p class="price"><s>$600</s> $500</p>
                    </div>
                </div> 
                <div class="products-card">
                    <img src="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-Pro-500x500.jpg" alt="" />
                    <a href="#" class="add-cart"><FiShoppingCart /></a>
                    <a href="#" class="add-wishlist"><FiShoppingBag /></a>
                    <div class="cart-bottom">
                        <a href="#" class="products-card-title">Iphone 12pro Max</a>
                        <p class="price"><s>$600</s> $500</p>
                    </div>
                </div> 
                <div class="products-card">
                    <img src="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-Pro-500x500.jpg" alt="" />
                    <a href="#" class="add-cart"><FiShoppingCart /></a>
                    <a href="#" class="add-wishlist"><FiShoppingBag /></a>
                    <div class="cart-bottom">
                        <a href="#" class="products-card-title">Iphone 12pro Max</a>
                        <p class="price"><s>$600</s> $500</p>
                    </div>
                </div> 
                <div class="products-card">
                    <img src="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-Pro-500x500.jpg" alt="" />
                    <a href="#" class="add-cart"><FiShoppingCart /></a>
                    <a href="#" class="add-wishlist"><FiShoppingBag /></a>
                    <div class="cart-bottom">
                        <a href="#" class="products-card-title">Iphone 12pro Max</a>
                        <p class="price"><s>$600</s> $500</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ProductSection;