import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FaShoppingCart, FaSearch, } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="logo">
                <h3>JangoBD</h3>
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
                    <Link className="item" to=""><BsFillPersonFill/></Link>
                    <Link className="item" to=""><FaSearch/></Link>
                    <Link className="item" to=""><FaShoppingCart/></Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;