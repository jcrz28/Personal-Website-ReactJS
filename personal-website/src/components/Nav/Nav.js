import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import classes from './Nav.module.css';

const NavigationBar = () => {
    return (
        <Navbar className = {classes.navbar} collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand>JCRZ28</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Link to = '/'>Home</Link>
                <Link to = '/AboutMe'>About Me</Link>
                <Link to = '/Skills'>Skills</Link>
                <Link to = '/Projects'>Projects</Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );

}
export default NavigationBar