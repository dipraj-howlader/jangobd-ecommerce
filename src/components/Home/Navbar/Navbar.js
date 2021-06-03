import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="logo">
                <h2>JangoBD</h2>
            </div>
            <div className="menu">
                <ul>
                    <Link className="menu-item" to="">Home</Link>
                    <Link className="menu-item" to="">Shop</Link>
                    <Link className="menu-item" to="">Collections</Link>
                    <Link className="menu-item" to="">Blog</Link>
                    <Link className="menu-item" to="">Contact Us</Link>

                </ul>
            </div>
            <div className="essential-menu">
                <ul>
                    <Link className="item" to=""><FiUser/></Link>
                    <Link className="item" to=""><FiSearch/></Link>
                    <Link className="item" to=""><FiShoppingCart/></Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;