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
        if (currentUser) {
            setStatus(true);
        }
        else {
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
            <div className='navBarContainer'>
                <img
                    className='logoNavBar'
                    src="../../logo.svg"
                    alt="Notify" />
                {status
                    ?
                    <div className='navBarC'>
                        <div className="links">
                            <NavLink className="link" to="/dashboard">
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
                            <NavLink className="link" to="/groups">
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
                            <NavLink className="link" to="/createNote">
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
                        </div>
                        <button
                            className='btn signOutNavbarBtn'
                            onClick={handleSignOut}
                        >Sign out</button>
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
            </div>
        </nav>
    );
}

export default NavBar;