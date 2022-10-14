import React from 'react';
import './Herosection.css';
import { Typewriter } from 'react-simple-typewriter';

function Herosection() {
    return (
        <div className='herosection'>
            <div className="container">
                <div className="box">
                    <div className="hero-content">
                        <div className='sec1'>
                            <h1>
                                Complete Guide For CBSE{' '}
                                <span style={{ color: 'red', fontWeight: 'bold' }}>
                                    <Typewriter
                                        words={['Students.', 'Teachers.', 'Parents.']}
                                        loop={5}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={130}
                                        deleteSpeed={60}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h1>
                            <p>Learning App for CBSE students and Test Generator for teachers to create question papers in minutes.</p>
                            <a href="#" className='classbutton'>Classes</a>
                        </div>
                        <div className="sec2">
                            <img src="https://media-mycbseguide.s3.amazonaws.com/images/direct/home_top.png" alt="image" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection