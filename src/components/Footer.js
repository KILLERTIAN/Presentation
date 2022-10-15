import React from 'react';
import './Footer.css';
// import 'boxicons';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div class='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/sign-up'>Contact</Link>
                    <Link to='/sign-up'>Support</Link>
                    <Link to='/sign-up'>Bug</Link>
                    <Link to='/sign-up'>Report</Link>
                </div>
                <div class='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            myCBSEguide
                            {/* <i class='fab fa-typo3' /> */}
                        </Link>
                    </div>
                    <small class='website-rights'>myCBSEguide © 2022</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            {/* <i class='bx bxl-facebook-square' style='color:#3588ff'  ></i> */}
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            {/* <i class='bx bxl-instagram' style='color:#ff9067'  ></i> */}
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            {/* <i class='bx bxl-youtube' style='color:#fb2a2a'  ></i> */}
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >

                            {/* <i class='bx bxl-twitter' style='color:#2aa7fb'  ></i> */}
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            {/* <i class='fab fa-linkedin' /> */}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;