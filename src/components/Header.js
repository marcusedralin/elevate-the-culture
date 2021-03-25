import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Carousel, CarouselControl, CarouselIndicators } from "reactstrap";

// const carouselItems = [
//     {
//         src: '',
//         altText: 'Slide 1',
//     },
//     {
//         src: '',
//         altText: 'Slide 2',
//     },
//     {
//         src: '',
//         altText: 'Slide 3',
//     },
// ]

const Sale = () => {
  return (
    <div className="saleHeader d-flex">
      <div className="col-5 justify-content-center" style={{ color: "white" }}>
        <a href="/">
          <img className="logo" src="/assets/images/etcGradientTopDown.jpeg" alt="ETC Logo" width="30" height="30" />
        </a>
      </div>
      <div className="col justify-content-center" style={{ color: "white" }}>
        <a href="/">50% off SALE!!!</a>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      <div className="text-center">
        <div className="myContainer">
          <div className="row">
            <div className="col-sm-12">
              <div className="bannerTextBg">
                <h1 style={{ color: "black", fontWeight: "600" }}>Elevate the Culture</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class EtcNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <>
        <div className="mainNav sticky-top">
          <Navbar dark expand="sm">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <div className="container-fluid justify-content-center">
                <div classsName="row">
                  <Nav navbar>
                    <NavItem>
                      <NavLink className="nav-link col" to="/home" href="/" active>
                        <i className="fa fa-home fa-md" /> Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link col" to="/media" href="/">
                        <i className="fa fa-film  fa-md" /> Media
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link col" to="/products" href="/">
                        <i className="fa fa-shopping-bag fa-md" /> Store
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link col" to="/contactus" href="/">
                        <i className="fa  fa-address-card-o fa-md" /> Contact
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
            </Collapse>
          </Navbar>
        </div>
        <div className="saleHeader" />
      </>
    );
  }
}

export default function Header() {
  return (
    <div>
      <Sale />
      <EtcNav />
      <Banner />
    </div>
  );
}
