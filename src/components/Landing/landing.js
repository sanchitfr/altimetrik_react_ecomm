import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import catalogData from '../Catalog/catalogData';
import {addProducts} from '../../redux/actions/Products';


import './landing.css'

const LandingPage = ({addProducts}) => {

    useEffect(() => {
        addProducts(catalogData);
    }, []);

    return (
        <div className='landing'>
            <h1>Welcome to All Store!</h1>
            <h4>Hi there! What would you like to do?</h4>

            <div><Link className='link' to='/catalog'>Browse Catalogue</Link></div>
            <div><Link className='link' to='/register'>Create a new account</Link></div>
            <div><Link className='link' to='/login'>Login to existing account</Link></div>
        </div>
    )
};

export default connect(null, {addProducts} )(LandingPage);
