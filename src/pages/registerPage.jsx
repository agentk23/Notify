import React from 'react'
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../api/firebase/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import GoogleLoginButton from './GoogleLoginButton';
import { postUser } from '../api/login';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(null); 
 
    async function handleRegister(e){
        e.preventDefault();

        (await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                let newUser = {};
                //send user to backend
                newUser.displayName = displayName;
                newUser.email = email;
                newUser.uuid = userCredentials.user.uid;
                newUser.photoURL = userCredentials.user.photoURL;
                postUser(newUser);
                navigate(`/dashboard/${userCredentials.user.uid}`);
                //navigate to dashboard
                //give access to private routes -> GET data from DB
            }).catch((error) => {
                //auth_register error codes -> use a switch statement to file through them
                setError(error);
            }));
    }

  return (
    <div className="form-wrapper">
    <form
        className="form form-register"
        onSubmit={handleRegister}>

        <label htmlFor="displayName">Name:</label>
        <input
            type="text"
            name="displayName"
            id="displayName"
            autoComplete='off'
            placeholder='Enter your name'
            value={displayName}
            onChange={(e) => { setDisplayName(e.target.value) }}
        />
        <label htmlFor="user">Email</label>
        <input
            type="text"
            name="user"
            id="user"
            autoComplete='off'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
        />

        <label htmlFor="pass">Password</label>
        <input
            type="password"
            name="pass"
            id="pass"
            autoComplete='off'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
        />
        <button
            className='authBtn registerBtn'
            type="submit"
        >Sign Up</button>
        <GoogleLoginButton/>
    </form>
    <Link to="/login">Already have an account? Sign in now!</Link>
</div>
  )
}
