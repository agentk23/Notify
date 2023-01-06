import React from 'react';
import "./styles/loginPage.css"
import { useState } from 'react';
import axios from "axios";

export default function Login() {
    const [username, setUsername]= useState('');
    const [password, setPassword] = useState('');
    const [auth, isAuth] = useState(false);

  
  async function processLogin(e){
    let user = {
        username: username,
        password: password
    };
    e.preventDefault();
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    await fetch('/api/auth', requestOptions)
        .then((response) => {
            console.log(response);
            response.json()
                .then((data)=>console.log(data))
        }
            );
    }
    return (
        <div className="form-wrapper">
        <form 
            className="form form-login"
            onSubmit={e => processLogin(e)}>
        
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
