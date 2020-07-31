import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div `
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;
 
export const NavBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Personal Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav classname="ml-auto">
                    <Nav.Item><Nav.Link href="/website">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/website/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/website/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)