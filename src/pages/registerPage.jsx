import React from 'react'
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../api/firebase/auth';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    
    const {user, setIsLogged} = useAuth();
 
    async function handleRegister(e){
        e.preventDefault();

        (await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                //send token to backend
                //user is automatically logged in
                setIsLogged(true);
                Navigate("/dashboard");              
                console.log(userCredentials);
            }).catch((error => {
                //auth_register error codes -> use a switch statement to file through them
            })));
    }

  return (
    <div className="form-wrapper">
    <form
        className="form form-register"
        onSubmit={e => handleRegister(e)}>

        <label htmlFor="user">Email</label>
        <input
            type="text"
            name="user"
            id="user"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
        />

        <label htmlFor="pass">Password</label>
        <input
            type="password"
            name="pass"
            id="pass"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
        />
        <button
            className='btn registerBtn'
            type="submit"
        >Sign Up</button>
    </form>
    <Link to="/login">Already have an account? Sign in now!</Link>
</div>
  )
}
