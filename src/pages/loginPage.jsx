import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./styles/loginPage.css"
import { auth } from '../api/firebase/auth.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from '../context/authContext';



export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { user, setLogged } = useAuth();

    async function processLogin(e) {
        e.preventDefault();

        (await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //send token to backend
                setLogged(true);
                console.log(userCredential);
                navigate("/dashboard");

            })
            .catch((error) => {
                //switch statement to serve each error
                //auth/invalid-email
                //auth/missing-continue-uri
                //auth/invalid-continue-uri
                //auth/unauthorized-continue-uri
                //auth/user-not-found
                console.log(error);
            }));


    }
    return (
        <div className="form-wrapper">
            <form
                className="form form-login"
                onSubmit={e => processLogin(e)}>

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
                    className='btn loginBtn'
                    type="submit"
                >Log in</button>
            </form>
            <Link to="/register">Don't have an account? Sign up now!</Link>
        </div>
    )
}
