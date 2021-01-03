import React, { useState } from 'react';
import { connect } from 'react-redux';

import './Login.css';
import { registerUser } from '../../redux/actions/Users';

const Register = ({registerUser}) => {

    const [formData, setFormData] = useState({
        username : '',
        email : '',
        password : '',
        age : 0,
        gender : '',
        deliveryAddress : ''
    })

    const { username, email, password, age, gender, deliveryAddress } = formData;

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name] : e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        registerUser(formData);
        alert("Registered Successfully!")
    }


    return (
        <div>
            <h1>Register</h1>
           <form onSubmit={e => handleSubmit(e)}>
                <label>Name</label>
                <input onChange={e => handleChange(e)} type='text' name='username' value ={username} required/>
                <label>Email ID</label>
                <input onChange={e => handleChange(e)} type='email' name='email' value ={email} required/>
                <label>Password</label>
                <input onChange={e => handleChange(e)} type='password' name='password' value ={password} required/>
                <label>Age</label>
                <input onChange={e => handleChange(e)} type='number' name='age' value ={age} />
                <label>Gender</label>
                <input onChange={e => handleChange(e)} type='text' name='gender' value ={gender}/>
                <label>Delivery Address</label>
                <input onChange={e => handleChange(e)} type='text' name='deliveryAddress' value ={deliveryAddress} required/>
                <button type='submit'>Submit</button>
            </form> 
        </div>
    )
}

export default connect(null, { registerUser })(Register);
