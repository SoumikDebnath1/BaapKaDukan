// Navbar.js
import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { auth } from '../../Config/Config';
import { useNavigate } from 'react-router-dom';




const Navbar = ({ user }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        const shouldLogout = window.confirm('Are you sure you want to log out?');
        if (shouldLogout) {
            auth.signOut().then(() => {
                navigate('/shop');
            });
        }

    }
    const { getTotalCartItems } = useContext(ShopContext);
    const [menu, setMenu] = useState("shop");

    const handleMenuClick = (selectedMenu) => {
        setMenu(selectedMenu);
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>SHOPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => handleMenuClick("shop")} className={menu === "shop" ? "active" : ""}>
                    <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>  <hr />
                </li>
                <li onClick={() => handleMenuClick("mens")} className={menu === "mens" ? "active" : ""}>
                    <Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link> <hr />
                </li>
                <li onClick={() => handleMenuClick("womens")} className={menu === "womens" ? "active" : ""}>
                    <Link to='/Womens' style={{ textDecoration: 'none' }}>Women</Link>
                    <hr />
                </li>

                <li onClick={() => handleMenuClick("kids")} className={menu === "kids" ? "active" : ""}>
                    <Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link><hr />
                </li>
                <li onClick={() => handleMenuClick("stationary")} className={menu === "stationary" ? "active" : ""}>
                    <Link to='/stationary' style={{ textDecoration: 'none' }}>Stationary</Link> <hr />
                </li>
            </ul>
            {!user && (
                <div className='nav-login-cart'>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                        <button>Login</button>
                    </Link>
                </div>
            )}
            {user && (
                <div className='cart_icon'>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                    <Link to='/cart' style={{ textDecoration: 'none' }}>
                        <img src={cart_icon} alt="" />
                    </Link>
                </div>
            )}
            {user && (
                <div className='nav-login-cart'>
                    <p className='user-name'> {user}</p>
                    <button onClick={handleLogout} className='logut-button'>Logout</button>
                </div>
            )}
            <div className="Admin-Panel">
                <Link to='/admin' style={{ textDecoration: 'none' }}><button>Admin</button></Link>
            </div>

        </div>
    );
};

export default Navbar;
