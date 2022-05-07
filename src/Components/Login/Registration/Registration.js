import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Registration.css'
import auth from '../../../firebase.init';
const Registration = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

        const handleSubmit = e =>{
            e.preventDefault();
            const name = e.target.name.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            console.log(name, email, password);
            createUserWithEmailAndPassword(email, password);
            
         }
         const navigateLogin =()=>{
            navigate('/login')
        }
        if(user){
            navigate('/home');
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