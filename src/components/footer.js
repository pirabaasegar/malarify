import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row pb-4 gap-5">
                    <div className="col-lg-4 col-md-6">
                        <Link href="/" className="logo me-auto me-lg-0">
                            <img src={logo} alt="[Company Name]" height={25} />
                        </Link>
                        <p>
                            Malarify Drones innovates Nigerian healthcare with strategic UAV deployment, swiftly delivering treatments to underserved areas, fostering economic viability, equity, and healthcare resilience.
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h3 className="footer-title">Product</h3>
                        <ul>
                            <li>
                                <Link to="/" className="nav-link">
                                    How it Works
                                </Link>
                            </li>
                            <li>
                                <Link to="/solution" className="nav-link">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="nav-link">
                                    Impact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h3 className="footer-title">About Us</h3>
                        <ul>
                            <li>
                                <Link to="/about" className="nav-link">
                                    The Vision
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="nav-link">
                                    Team Values
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="nav-link">
                                    Members
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <h3 className="footer-title">Contact Info</h3>
                        <ul>
                            <li>
                                <a href="tel:+1234567890">
                                    <i className="bi bi-telephone-fill" /> +1 (123) 456-7890
                                </a>
                            </li>
                            <li>
                                <a href="mailto:malarify@gmail.com">
                                    <i className="bi bi-envelope-fill" /> malarify@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bi bi-geo-alt-fill" /> Toronto, ON, Canada
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <span className="text-center">
                        © 2024 - <Link to="/">Malarify</Link>&nbsp;&nbsp;|&nbsp;&nbsp;All Rights Reserved
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;