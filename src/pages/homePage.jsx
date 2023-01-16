import React from 'react';
import "./styles/homePage.css";
import { Link } from 'react-router-dom';

function HomePage() {


    return (
        <>
            <div className="card">
                <p>Notify</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam deleniti voluptas labore nisi repudiandae tenetur et nostrum aliquam itaque, necessitatibus ad aut magnam quo consectetur libero omnis iure quis quasi.</p>

                <button className='btn'>
                    <Link className='link' to="/login">
                        Sign In
                    </Link>
                </button>
            </div>


        </>
    );
}

export default HomePage;