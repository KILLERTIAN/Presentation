import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
        <div className='nav'>
            <div className='logo'>
                <a href="/Home">
                    <img src="https://media-mycbseguide.s3.amazonaws.com/images/direct/books.png"
                        alt="myCBSEguide" />
                </a>
                <h2>myCBSEguide</h2>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/class">Class</a></li>
                </ul>
                
            </div>
        </div>
    )
}

export default Navbar