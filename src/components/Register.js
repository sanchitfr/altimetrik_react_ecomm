import React from 'react';

import './Login.css';

const Register = () => {
    return (
        <div>
           <form>
                <label>email</label>
                <input type='email' required/>
                <label>Password</label>
                <input type='password' required/>
                <label>Confirm Password</label>
                <input type='password' required/>
                <button type='submit'>Submit</button>
            </form> 
        </div>
    )
}

export default Register;
