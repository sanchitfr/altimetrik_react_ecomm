import React from 'react';

import './Login.css';

const Login = () => {
    return (
        <div>
           <form>
                <label>Name</label>
                <input type='text' required/>
                <label>Email ID</label>
                <input type='email' required/>
                <label>Password</label>
                <input type='password' required/>
                <label>Age</label>
                <input type='number'/>
                <label>Gender</label>
                <input type='text'/>
                <label>Delivery Address</label>
                <input type='text' required/>
                <button type='submit'>Submit</button>
            </form> 
        </div>
    )
}

export default Login;
