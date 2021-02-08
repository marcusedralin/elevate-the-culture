import React from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, List } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <Jumbotron>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Elevate<br />the<br/>Culture</h1>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Navbar dark sticky="top" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/">
                    <img src="/assets/images/etcGradientTopDown.jpeg" alt="Etc Logo" width="30" height="30"></img>
                    </NavbarBrand>
                    <Collapse navbar>
                        <Nav navbar>
                            <List className="unstyled">
                                <NavItem>
                                    <a href="/">Home</a>
                                </NavItem>
                                <NavItem>
                                    <a href="#about">About</a>
                                </NavItem>
                                <NavItem>
                                <a href="#story">Daily Elevation</a>
                                </NavItem>
                                <NavItem>
                                <a href="#media">Media</a>
                                </NavItem>
                                <NavItem>
                                <a href="#store">Store</a>
                                </NavItem>
                            </List>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>

        </>
    )
}
