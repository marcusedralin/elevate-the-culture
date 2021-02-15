import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Col, Row, Container, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';

export default class Header extends Component {

    state = {
        isNavOpen: false,
        isModalOpen: false
    };

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <>
                <header className="banner">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <h1>Elevate<br />the<br/>Culture</h1>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>     
                            <Navbar className="main-nav" sticky="top" expand="sm">
                                <Container>
                                    <NavbarBrand className="mr-auto" href="/">
                                        <img className="logo" src="/assets/images/etcGradientTopDown.jpeg" alt="ETC Logo" width="30" height="30"></img>
                                    </NavbarBrand>
                                    <NavbarToggler onClick={this.toggleNav} />
                                    <Collapse isOpen={this.state.isNavOpen} navbar>
                                        <Nav navbar>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/home" href="/" active>
                                                <i className="fa fa-home fa-lg" /> Home
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/media" href="/">
                                                <i className="fa fa-film  fa-lg" /> Media
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/store" href="/">
                                                <i className="fa fa-shopping-bag fa-lg" /> Store
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link" to="/contactus" href="/">
                                                <i className="fa fa-shopping-bag fa-lg" /> Contact Us
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Collapse>
                                </Container>
                            </Navbar>
                        </Row>
                    </Container>
                </header>
            </>
        );
    }
}
