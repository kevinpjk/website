import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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
            <Navbar.Brand href="/">Jiankai Pu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav pullRight classname="ml-auto">
                    <NavItem><NavLink to="/website">Home</NavLink></NavItem>
                    <NavItem><NavLink to="/website/about">About</NavLink></NavItem>
                    <NavItem><NavLink to="/website/contact">Contact</NavLink></NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)