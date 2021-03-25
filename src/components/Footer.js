import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer className="site-footer">
                <div className="container text-center">
                    <div className="brandAcronym">
                        <h3>ETC</h3>
                    </div>
                    <div style={{ color: 'white' }}>
                        <p>HANDCRAFTED IN THE USA</p>
                    </div>
                    <div style={{ padding: '10px' }}>
                        <a role="button" className="btn btn-link" href="tel:+12065551234">888-888-8888</a>
                    </div>
                    <div style={{ paddingBottom: '35px' }}>
                        <ul className="list-unstyled">
                            <li><Link to='/products'>SHOP</Link></li>
                            <li><Link to='/media'>MEDIA</Link></li>
                            <li><Link to='/contactus'>CONTACT US</Link></li>
                            <li><Link to='/home'>HOME</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: '#00A59E' }}>ELEVATE WITH US</h4>
                        <p>Get the latest updates on new products and promotions</p>
                        <input
                            style={{ backgroundColor: '#1d1b1b' }}
                            placeholder="Your email address"
                        />
                        <button style={{ backgroundColor: 'green' }}>Go</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}