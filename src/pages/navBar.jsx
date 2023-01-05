import React from 'react';
import { Link } from 'react-router-dom';
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
                            <Link className='link' to="/dashboard">Notes</Link>
                        </li>
                        <li>
                            <Link className='link' to="/groups">Groups</Link>
                        </li>
                        <li>
                            <Link className='link' to="/createNote">Create a note</Link>
                        </li>
                    </ul>

                : 
                    <Link className='link textNavBar' to="/login">Sign in</Link>
            }
        </nav>
    );
}

export default NavBar;