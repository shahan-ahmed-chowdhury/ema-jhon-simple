import React from 'react';
import logo from '../../Resources/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <header>
                <div className="header-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-bar">
                    <nav>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/orders">Order Review</a></li>
                        <li><a href="/inventory">Manage Inventory</a></li>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;