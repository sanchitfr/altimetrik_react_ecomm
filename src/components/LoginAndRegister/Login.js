import React, {useState} from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Login.css';
import {loginUser} from '../../redux/actions/Users';

const Login = ({ Users : {isAuthenticated}, loginUser }) => {

    const [formData, setFormData] = useState({
        email : '',
        password : '',
        password2 : ''
    });

    const { email, password, password2 } = formData;

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name] : e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(password !== password2){
            alert('Passwords do not match. Try again.')
        }
        else{
            loginUser(formData);
        }
    }

    
    if(isAuthenticated){
        alert("Logged in sucessfully!")
        return <Redirect to='/catalog' />  
    }

    return (
        <div>
            <h1>Login</h1>
            <div>New user? <Link to='/register'>Register.</Link></div>
           <form onSubmit={e => handleSubmit(e)}>
                <label>Email</label>
                <input onChange={e => handleChange(e)} type='email' name='email' value ={email}  required/>
                <label>Password</label>
                <input onChange={e => handleChange(e)} type='password' name='password' value ={password}  required/>
                <label>Confirm Password</label>
                <input onChange={e => handleChange(e)} type='password' name='password2' value ={password2}  required/>
                <button type='submit'>Submit</button>
            </form> 
        </div>
    )
}

const mapStateToProps = state => ({
    Users : state.Users
})

export default connect(mapStateToProps, { loginUser })(Login);
