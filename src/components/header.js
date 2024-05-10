import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

const Header = () => {
    const [mobileNavVisible, setMobileNavVisible] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('header');
            const headerOffset = header.offsetTop;
            const isScrolled = window.pageYOffset > headerOffset;
            setIsSticky(isScrolled);
        };                     
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);    

    const toggleMobileNav = () => {
        setMobileNavVisible(!mobileNavVisible);
    };

    return (
        <header id="header" className={`header fixed-top ${isSticky ? 'header-scroll' : ''}`}>
            <div className="container d-flex justify-content-between">
                <NavLink to="/" className="logo me-auto me-lg-0">
                    <img src={logo} alt="[Company Name]" height={25} />
                </NavLink>
                <nav
                    id="navbar"
                    className="navbar order-last order-lg-0 p-0"
                    style={{ float: "right" }}
                >
                    <ul>
                        <li>
                            <NavLink exact to="/" className="nav-link" activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/solution" className="nav-link" activeClassName="active">
                                Our Solution
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="nav-link" activeClassName="active">
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                    <i
                        className={`mobile-nav-toggle ${mobileNavVisible ? 'bi-x' : 'bi-list'}`}
                        onClick={toggleMobileNav}
                    />
                </nav>
                <nav id="mobile-nav" className={`mobile-nav ${mobileNavVisible ? 'mobile-nav-show' : ''}`}>
                    <ul>
                        <li>
                            <NavLink exact to="/" className="nav-link" activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/solution" className="nav-link" activeClassName="active">
                                Our Solution
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="nav-link" activeClassName="active">
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;