import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Sharepages/Loading/Loading';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()



    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail( auth);

      if(loading){
        if(loading || sending){
            return <Loading></Loading>
          }
      }
      if(user) {
          navigate('/home');
      }
    const handleSubmit = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        

        signInWithEmailAndPassword(email, password);
     }
     const navigateRegister = event =>{
        Navigate('/registration');
    }
    const resetPassword =async()=>{
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent email')
        }
       else{
           toast('please enter your email address')
       }
    }
    return (
        <>
             <div className='login-form'>
            <h2 className='text-center text-primary'>PLEASE LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef}  type="email" name="email" id="" placeholder="Email Address" required/>
           
                <input ref={passwordRef}  type="password" name="password" id="" placeholder="Password" required/>
                <div className="">
                <input className='w-50 d-block mx-auto py-3 rounded-2 bg-primary' type="submit" value="LogIn" />
                </div>
            </form>
            <p>create new account? <Link to='/registration' className='text-primary text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forget Password? <button to='/register' className='text-primary btn btn-link text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
            </div>
        </>
    );
};

export default Login;