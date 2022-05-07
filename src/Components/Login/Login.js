import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = e =>{
        e.preventDefault();
        
     }
     const navigateRegister = event =>{
        Navigate('/registration');
    }
    return (
        <>
             <div className='login-form'>
            <h2 className='text-center text-primary'>PLEASE LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <input  type="email" name="email" id="" placeholder="Email Address" required/>
           
                <input  type="password" name="password" id="" placeholder="Password" required/>
                <div className="">
                <input className='w-50 d-block mx-auto py-3 rounded-2 bg-primary' type="submit" value="LogIn" />
                </div>
            </form>
            <p>create new account? <Link to='/registration' className='text-primary text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            </div>
        </>
    );
};

export default Login;