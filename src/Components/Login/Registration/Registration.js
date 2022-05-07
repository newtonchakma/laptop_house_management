import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Registration.css'
const Registration = () => {
    const navigate = useNavigate();
        const handleSubmit = e =>{
            e.preventDefault();
            
         }
         const navigateLogin =()=>{
            navigate('/login')
        }
       
    return (
        <>
        <div className='register-form'>
       <h2 className='text-center text-primary'>PLEASE SIGN UP</h2>
       <form onSubmit={handleSubmit}>
             <input type="text" name="name" id="" placeholder="Your Name" required/>
           <input  type="email" name="email" id="" placeholder="Email Address" required/>
      
           <input  type="password" name="password" id="" placeholder="Password" required/>
           <div className="">
           <input className='w-50 d-block mx-auto py-3 rounded-2 bg-primary' type="submit" value="SIGN UP" />
           </div>
       </form>
       <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
       </div>
   </>
    );
};

export default Registration;