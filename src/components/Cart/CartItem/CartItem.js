import React from 'react';

import { IoAdd, IoRemove } from "react-icons/io5";
const CartItem = (props) => {
    const {name, price, image} = props.product;
    return (

        <div class="item-cart">
            <div class="buttons">
                <span class="delete-btn"></span>
                <span class="like-btn"></span>
            </div>

            <div class="image">
                <img src={image} alt="" />
            </div>

            <div class="description">
                <span>{name}</span>
            </div>

            <div class="quantity">
                <button class="plus-btn" type="button" name="button">
                    <IoAdd />
                </button>
                <input type="text" name="name" value="1" />
                <button class="minus-btn" type="button" name="button">
                    <IoRemove />
                </button>
            </div>

            <div class="total-price">${price}</div>
        </div>

    );
};

export default CartItem;