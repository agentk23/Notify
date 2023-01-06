import React from 'react';
import { NavLink } from 'react-router-dom';
import "./styles/navBar.css";

function NavBar({isLoggedIn, username}) {
    

    return (
        <nav className='navBar'>
            <img 
            className='logoNavBar'
            src="../../logo.svg" 
            alt="Logo for Notify" />
            {isLoggedIn 
                ?
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