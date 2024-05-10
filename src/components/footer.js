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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="footer-title">Pages</h3>
                        <ul>
                            <li>
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/solution" className="nav-link">
                                    Our Solution
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="nav-link">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="footer-title">Contact Info</h3>
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="bi bi-telephone-fill" /> +1 (123) 456-7890
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bi bi-envelope-fill" /> info@malarify.ca
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
                        © <Link to="/">Malarify</Link>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;