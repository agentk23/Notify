import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./styles/loginPage.css"
import GoogleLoginButton from './GoogleLoginButton';
import { loginWithEmail, loginWithGoogle, postUser } from '../api/login';



export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('empty');
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    async function processLogin(e) {
        e.preventDefault();
        setStatus('submitting');

        await loginWithEmail(email, password)
        .then((res) => res)
        .then((data) => {
            postUser(data);
            setStatus('success');
            navigate(`/dashboard`);
        });
        
    }
            

    
    return (
        <div className="form-wrapper">
            <form
                className="form form-login"
                >

                <label htmlFor="user">Email</label>
                <input
                    type="text"
                    name="user"
                    id="user"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value)}}
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
                    className='authBtn loginBtn'
                    type="submit"
                    onClick={processLogin}
                    disabled={status === 'submitting' || email.length === 0 || password.length === 0} 
                >Log In</button>
            </form>
            <GoogleLoginButton/>
            <Link to="/register">Don't have an account? Sign up now!</Link>
        </div>
    )
}

