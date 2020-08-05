import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div `
    .navbar {
        background: transparent;
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
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/website/#">Jiankai Pu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav pullRight classname="ml-auto">
                    <Nav.Item><Nav.Link href="/website/#">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/website/#/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/website/#/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)