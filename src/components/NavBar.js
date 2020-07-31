import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
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
            <Navbar.Brand href="/website/#">Jiankai Pu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav pullRight classname="ml-auto">
                    <NavItem><Nav.Link href="/website/#">Home</Nav.Link></NavItem>
                    <NavItem><Nav.Link href="/website/#/about">About</Nav.Link></NavItem>
                    <NavItem><Nav.Link href="/website/#/contact">Contact</Nav.Link></NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)