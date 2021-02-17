import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">             
                        <div className="col-4 col-sm-2 offset-1">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/media'>Media</Link></li>
                                <li><Link to='/store'>Store</Link></li>
                                <li><Link to='/contactus'>Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                        </div>
                        <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-555-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> elevatetheculture@gmail.com</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
