import React from 'react';
import './Herosection.css';
import { Typewriter } from 'react-simple-typewriter';

function Herosection() {
    return (
        <div className='herosection'>
            <div className="container">
                <div className="box">
                    <div className="hero-content">
                        <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                            Complete guide for CBSE{' '}
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection