import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/ContextProvider';
import { RiMenu3Line } from 'react-icons/ri';

function Navbar() {
    const { totalQty } = useCart();

    const [navbar, setNavbar] = useState(false);

    const handleMenuBtn = () => {
        setNavbar(!navbar);
    };

    return (
        <>
            <header className="navbar-section">
                <div className="container">
                    <div className="navbar grid grid-two-cols">

                        {/*  Logo */}
                        <div className="logo">
                            <NavLink to="/">
                                <h3>Shop</h3>
                            </NavLink>
                        </div>

                        {/* Nav Links */}
                        <nav className={navbar ? "mobile" : "web"}>
                            <ul>
                                <li className="active"><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/Products">Products</NavLink></li>
                                <li><NavLink to="/Contact">Contact</NavLink></li>

                                {/* ✅ Login Button */}
                                <div className="sign">
                                    <NavLink to="/Contact">
                                        <button className="login">Log in</button>
                                    </NavLink>
                                </div>

                                <NavLink to="/cart" >
                                    <span>Cart ({totalQty})</span>
                                </NavLink>
                            </ul>
                        </nav>

                        <div className="menu-icon">
                            <button className="menu" onClick={handleMenuBtn}>
                                <RiMenu3Line />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;
