import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { logoutUser } from '../../redux/actions/Users';

const Navbar = ({ logoutUser, cartItems }) => {
    return (
        <div className='navbar'>
            <ul>
                <li><Link className="home" to="/">Home</Link></li>  
                <li><Link className="catalog" to="/catalog">Catalog</Link></li>  
                <li><Link className="register" to="/register">Register</Link></li>  
                <li><Link className="login" to="/login">Login</Link></li>
                <li className='right'><Link onClick={e => logoutUser()} className="logout" to="/">Logout</Link></li>  
                <li className='right'><Link className="Cart" to="/checkout">Cart {cartItems.length}</Link></li>
            </ul>   
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems : state.Cart.cartItems
})

export default connect(mapStateToProps, { logoutUser })(Navbar);
