import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, redirect, useNavigate } from 'react-router-dom';
import "./styles/navBar.css";
import { signOut } from 'firebase/auth';
import { auth } from '../api/firebase/auth';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';

function NavBar() {
    const currentUser = useContext(AuthContext);
    const [status, setStatus] = useState(false);
    const navigateTo = useNavigate();

    useEffect(() => {
        if(currentUser) {
            setStatus(true);
        }
        else{
            setStatus(false)
        }
    }, [currentUser]);

    

    async function handleSignOut(e) {
        await signOut(auth)
            .then(() => {
                setStatus(false);
                console.log(currentUser)
                
                navigateTo('/');
                
            }).catch(error => {
                console.log(error);
            });
    }

    return (
        <nav className='navBar'>
            <img
                className='logoNavBar'
                src="../../logo.svg"
                alt="Logo for Notify" />
            {status
                ?
                <div>
                    <ul>
                        <li>
                            <NavLink to={`/dashboard/${currentUser.uid}`}>
                                {({ isActive }) => (
                                    <span
                                        className={
                                            isActive ? "activeNavBar" : "link"
                                        }
                                    >
                                        Notes
                                    </span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/groups/${currentUser.uid}`}>
                                {({ isActive }) => (
                                    <span
                                        className={
                                            isActive ? "activeNavBar" : "link"
                                        }
                                    >
                                        Groups
                                    </span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/createNote/${currentUser.uid}`}>
                                {({ isActive }) => (
                                    <span
                                        className={
                                            isActive ? "activeNavBar" : "link"
                                        }
                                    >
                                        Create New Note
                                    </span>
                                )}
                            </NavLink>
                        </li>
                    </ul>

                    <button
                        className='btn usernameNavbarBtn'
                        onClick={handleSignOut}
                    >{currentUser.email}</button>
                </div>
                :
                <NavLink to="/login">
                    {({ isActive }) => (
                        <span
                            className={
                                isActive ? "activeNavBar" : "link"
                            }
                        >
                            Sign in
                        </span>
                    )}
                </NavLink>
            }

        </nav>
    );
}

export default NavBar;