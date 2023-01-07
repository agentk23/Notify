import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./styles/navBar.css";
import { signOut } from 'firebase/auth';
import { auth } from '../api/firebase/auth';
import { useAuth } from '../context/authContext';

function NavBar({ isLoggedIn, username }) {
    const {setLogged, isLogged} = useAuth();
    const [isShown, setIsShown] = useState('');
    

    async function handleSignOut(e) {
        signOut(auth)
            .then(() => {
                console.log("sign out succesful");
                setLogged(false);
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
            {isLoggedIn
                ?
                <div>
                    <ul>
                        <li>
                            <NavLink to="/dashboard">
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
                            <NavLink to="/groups">
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
                            <NavLink to="/createNote">
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
                        onClick={(e) => handleSignOut(e)}
                    >{username}</button>
                    {isShown &&
                        <div className="pop-up-menu">
                            <button
                                className='btn signOutBtn'
                                onClick={(e) => handleSignOut(e)}
                            >Sign out</button>
                        </div>
                    }
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