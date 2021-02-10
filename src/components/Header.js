import React from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, List } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Elevate<br />the<br/>Culture</h1>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                            <div className="row">
                                <div className="col">
                                    <nav className="navbar">
                                    <a href="/"><img className="logo" src="/assets/images/etcGradientTopDown.jpeg" alt="ETC Logo" width="30" height="30"></img></a>
                                        <navbar sticky="top">
                                                <a href="/">Home </a>
                                                <a href="#about">About </a>
                                                <a href="#newsletter">Newsletter </a>
                                                <a href="#media">Media </a>
                                                <a href="#merchandise">Merchandise </a>
                                        </navbar>
                                    </nav>
                                </div>
                            </div>
                    </div>
                </div>
        </>
    )
}
