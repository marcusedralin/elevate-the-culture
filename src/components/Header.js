import React, { Component }  from 'react';
import { Nav, Navbar, Col, Row, Container, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, List } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <>
                <header className="banner">
                    <Container>
                            <Row>
                                <Col>
                                    <h1>Elevate<br />the<br/>Culture</h1>
                                </Col>
                            </Row> 
                        <Row>
                            <Col>                   
                                <Nav className="main-nav">
                                    <Navbar sticky="top">
                                        <ul>
                                            <a className="navbar-brand" href="/">
                                                <img className="logo" src="/assets/images/etcGradientTopDown.jpeg" alt="ETC Logo" width="30" height="30"></img>
                                            </a>
                                            <li><a href="/">Home</a></li>            
                                            <li><a href="#newsletter">Newsletter</a></li>
                                            <li><a href="#media">Media</a></li>                                                    
                                            <li><a href="#merchandise">Merchandise</a></li>
                                        </ul>                      
                                    </Navbar>
                                </Nav>
                            </Col> 
                        </Row>
                    </Container> 
                </header>
            </>
        );
    }
}
