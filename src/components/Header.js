import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Col, Row, Container, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';


export default class Header extends Component {

    constructor(props) {
        super(props);
    

    this.state = {
        isNavOpen: false,
        isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
}

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen 
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <>
                <div className="banner">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <h1>Elevate<br />the<br/>Culture</h1>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row> 
                            <Col lg={6}>
                            <Navbar className="main-nav" dark sticky="top" expand="sm">
                                    <NavbarBrand className="mr-auto" href="/">
                                        <img className="logo" src="/assets/images/etcGradientTopDown.jpeg" alt="ETC Logo" width="30" height="30" />
                                    </NavbarBrand>
                                    <NavbarToggler onClick={this.toggleNav} />
                                    <Collapse isOpen={this.state.isNavOpen} navbar>
                                            <Nav navbar>
                                                <NavItem>
                                                    <NavLink className="nav-link" to="/home" href="/" active>
                                                    <i className="fa fa-home fa-md" /> Home
                                                    </NavLink>
                                                </NavItem>
                                            
                                                <NavItem>
                                                    <NavLink className="nav-link" to="/media" href="/">
                                                    <i className="fa fa-film  fa-md" /> Media
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className="nav-link" to="/shop" href="/">
                                                    <i className="fa fa-shopping-bag fa-md" /> Store
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className="nav-link" to="/contactus" href="/">
                                                    <i className="fa  fa-address-card-o fa-md" /> Contact Us
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                    </Collapse>
                            </Navbar>
                            </Col> 
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}
