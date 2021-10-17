import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import logo from '../../images/medicare-logo-white.png'
import './Header.css'

const Header = () => {
    const { user, googleSignIn, logOut } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_url);
            });

    };

    return (
        <Navbar collapseOnSelect expand="lg" className="header-container">
            <Container>
                <Navbar.Brand className="me-5" href="#home"><img className="logo" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="text-light" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/home#about">About us</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/home#doctor">Doctor</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/home#contact">Contact</Nav.Link>

                    </Nav>
                    <Nav>
                        <button className="btn-regular">Sign up</button>

                        {
                            !user?.email ? <button onClick={handleGoogleSignIn} className="btn-login">Login</button>
                                :
                                <div className="d-flex justify-content-center align-items-center"><button onClick={logOut} className="btn-login">logout</button>
                                    <p>{user.displayName}</p></div>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;