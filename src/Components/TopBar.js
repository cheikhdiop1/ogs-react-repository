import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import styles from '../Styling/TopBar.module.css'; 

const TopBar = () => {
    const location = useLocation();
    const [activePage, setActivePage] = useState(location.pathname); 
    const [opacity, setOpacity] = useState(1); 

    useEffect(() => {
        setActivePage(location.pathname);

        const handleScroll = () => {
            const newOpacity = Math.max(1 - window.scrollY / 600, 0.25); 
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]); 

    
    const getActiveClass = (path) => {
        return path === activePage ? styles.activeMenuItem : '';
    };

    return (
        <Navbar sticky="top" className={styles.topNavbar} expand={false} style={{ opacity }}>
            <Navbar.Brand as={Link} to="/" className={`${styles.navbarBrand} mx-auto`}>
                PixelPulse Arcade
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" className={styles.navbarToggle} />
            <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" className={styles.offcanvas}>
                <Offcanvas.Body className={styles.offcanvasBody}>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link as={Link} to="/" className={`${styles.menuItem} ${getActiveClass('/')}`}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/account" className={`${styles.menuItem} ${getActiveClass('/account')}`}>Account</Nav.Link>
                        <Nav.Link as={Link} to="/games" className={`${styles.menuItem} ${getActiveClass('/games')}`}>Games</Nav.Link>
                        <Nav.Link as={Link} to="/scores" className={`${styles.menuItem} ${getActiveClass('/scores')}`}>Scores</Nav.Link>
                        <Nav.Link as={Link} to="/ourstory" className={`${styles.menuItem} ${getActiveClass('/ourstory')}`}>Our Story</Nav.Link>
                        <Nav.Link as={Link} to="/support" className={`${styles.menuItem} ${getActiveClass('/support')}`}>Support</Nav.Link>
                        <Nav.Link as={Link} to="/settings" className={`${styles.menuItem} ${getActiveClass('/settings')}`}>Settings</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
};

export default TopBar;
