import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div `
    .navbar {
        background: none;
        position: sticky;
        z-index: 1;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: black;
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
                <Nav classname="mr-auto">
                    <Nav.Item><Nav.Link href="/website/#">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/website/#/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/website/#/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)