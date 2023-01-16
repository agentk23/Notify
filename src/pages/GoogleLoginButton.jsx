import React from 'react';
import { loginWithGoogle } from '../api/login';
import { useNavigate } from 'react-router-dom';
import { postUser } from '../api/login';


function GoogleLoginButton() {
    const navigate = useNavigate();
    
    async function handleSubmit(e){
        e.preventDefault();
        await loginWithGoogle()
            .then((res) => res)
            .then((data) => {
                postUser(data);
                navigate(`/dashboard/${data.uid}`);
            })
            .catch((error) => {
                alert(error);
            });
    }
    return (
        <button
            className='authBtn googleLoginBtn'
            type='submit'
            onClick={handleSubmit}
        >
            Log In with Google
        </button>
    );
}

export default GoogleLoginButton;