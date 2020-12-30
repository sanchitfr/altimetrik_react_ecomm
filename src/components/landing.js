import React from 'react';
import {Link} from 'react-router-dom';

export const LandingPage = () => {
    return (
        <div>
            <h1>Welcome to All Store!</h1>
            <h4>Hi there! What would you like to do?</h4>

            <div><Link to='/catalog'>Browse Catalogue</Link></div>
            <div><Link to='/login'>Create a new account</Link></div>
            <div><Link to='/register'>Login to existing account</Link></div>
        </div>
    )
};

export default LandingPage;
