import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import logo from "../../images/my-logo2.png";
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './style.css';

const NavBar = (props) => {
    return (
        <Navbar className="nav-bar" bg="dark" expand="lg">
            <Container fluid className="p-0 mr-2">
                <Navbar.Brand href="#home"><img className="logoImg" src={logo} alt="logo..." /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span>
                        <FaBars color="#ccd6f6" />
                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Router>
                            <Link smooth className="navLink"  to="#home">Home</Link>
                            <Link smooth className="navLink" to="#about">About</Link>
                            <Link smooth className="navLink" to="#services">Services</Link>
                            <Link smooth className="navLink" to="#projects">Projects</Link>
                            <Link smooth className="navLink" to="#contactBanner">Contact</Link>
                        </Router>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )

}

export default NavBar