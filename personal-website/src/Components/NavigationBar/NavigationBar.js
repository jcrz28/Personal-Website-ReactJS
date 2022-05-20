import React from 'react';
import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand>JCRZ28</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#about-section">About Me</Nav.Link>
            <Nav.Link href="#skill-section">Skills</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );

}
export default NavigationBar