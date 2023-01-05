import React from 'react';
import "./styles/loginPage.css"
import { useState } from 'react';

export default function Login() {
    const [username, setUsername]= useState('');
    const [password, setPassword] = useState('');

  
    function processLogin(e){
        e.preventDefault();
        
        console.log('processing login')
    }
    return (
        <div className="form-wrapper">
        <form 
            className="form form-login"
            onSubmit={(e) => processLogin(e)}>
        
        <label htmlFor="user">Username</label>
        <input 
            type="text" 
            name="user" 
            id="user"
            value={username}
            onChange={(e) => {setUsername(e.target.value)}}
        /> 

        <label htmlFor="pass">Password</label>
        <input 
            type="password" 
            name="pass" 
            id="pass"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
        />
        <button
            className='loginBtn' 
            type="submit"
        >Log in</button>
        </form>
    </div>
    )
}
