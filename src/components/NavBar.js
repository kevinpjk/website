import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div `
    .navbar {
        background-color: white;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 5;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #29476c;
    }

    .navbar-nav, .nav-link {
        float: right;

        &:hover {
            color: #92bfde;
        }
    }
`;
 
export const NavBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/website/#">Jiankai Pu</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav></Nav>
                <Nav classname="ml-auto">
                    <Nav.Item><Nav.Link href="/website/#">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/website/#/experience">Experience</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/website/#/passion">Passion</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)