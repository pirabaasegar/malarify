import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                <Link href="/" className="logo me-auto me-lg-0">
                    <img src="/logo.png" alt="[Company Name]" height={25} />
                </Link>
                <nav
                    id="navbar"
                    className="navbar order-last order-lg-0 p-0"
                    style={{ float: "right" }}
                >
                    <ul>
                        <li>
                            <Link to="/" className="nav-link" activeClassName="active">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/solution" className="nav-link" activeClassName="active">
                                Our Solution
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link" activeClassName="active">
                                About Us
                            </Link>
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
                            <Link to="/" className="nav-link" activeClassName="active">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/solution" className="nav-link" activeClassName="active">
                                Our Solution
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link" activeClassName="active">
                                About Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;