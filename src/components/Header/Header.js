import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/medicare-logo-white.png'
import useAuth from '../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" className="header-container" sticky="top">
            <Container>
                <Navbar.Brand className="me-5" href="#home"><img className="logo" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="text-light" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-light" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="text-light" as={HashLink} to="/home#doctor">Doctor</Nav.Link>
                        <Nav.Link className="text-light" as={HashLink} to="/contact">Contact</Nav.Link>
                        <Nav.Link className="text-light" as={HashLink} to="/faq">FAQ</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            !user?.email ?
                                <div className="d-flex">
                                    <Nav.Link className="text-light" as={Link} to="/login"> Login </Nav.Link>
                                    <Nav.Link className="text-light btn-login px-3" as={Link} to="/signup"> Signup </Nav.Link>
                                </div>
                                :
                                <div className="d-flex">
                                    <button onClick={logOut} className="btn-login px-3 me-3">Logout</button>
                                    <p className="text-light">{user.displayName}</p>

                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;