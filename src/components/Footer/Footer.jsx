import React from 'react';
import '../Footer/Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div
                                    className="f_widget company_widget wow fadeInLeft"
                                    data-wow-delay="0.2s"
                                    style={{
                                        visibility: 'visible',
                                        animationDelay: '0.2s',
                                        animationName: 'fadeInLeft',
                                    }}
                                >
                                    <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                    <form
                                        action="#"
                                        className="f_subscribe_two mailchimp"
                                        method="post"
                                        noValidate
                                    >
                                        <input
                                            type="text"
                                            name="EMAIL"
                                            className="form-control memail"
                                            placeholder="Email"
                                        />
                                        <button
                                            className="btn btn_get btn_get_two"
                                            type="submit"
                                        >
                                            Subscribe
                                        </button>
                                        <p className="mchimp-errmessage" style={{ display: 'none' }}></p>
                                        <p className="mchimp-sucmessage" style={{ display: 'none' }}></p>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div
                                    className="f_widget about-widget pl_70 wow fadeInLeft"
                                    data-wow-delay="0.4s"
                                    style={{
                                        visibility: 'visible',
                                        animationDelay: '0.4s',
                                        animationName: 'fadeInLeft',
                                    }}
                                >
                                    <h3 className="f-title f_600 t_color f_size_18">Navigate</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about-us">About Us</Link></li>
                                        <li><Link to="/Service">Service</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div
                                    className="f_widget about-widget pl_70 wow fadeInLeft"
                                    data-wow-delay="0.6s"
                                    style={{
                                        visibility: 'visible',
                                        animationDelay: '0.6s',
                                        animationName: 'fadeInLeft',
                                    }}
                                >
                                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><Link to="/faq">FAQ</Link></li>
                                        <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div
                                    className="f_widget social-widget pl_70 wow fadeInLeft"
                                    data-wow-delay="0.8s"
                                    style={{
                                        visibility: 'visible',
                                        animationDelay: '0.8s',
                                        animationName: 'fadeInLeft',
                                    }}
                                >
                                    <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                    <div className="f_social_icon">
                                        <a
                                            href="https://www.facebook.com"
                                            className="fab fa-facebook"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        ></a>
                                        <a
                                            href="https://twitter.com"
                                            className="fab fa-twitter"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        ></a>
                                        <a
                                            href="https://www.linkedin.com"
                                            className="fab fa-linkedin"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        ></a>
                                        <a
                                            href="https://www.pinterest.com"
                                            className="fab fa-pinterest"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
                <div className="footer_bottom"></div>
            </footer>
        </div>
    );
}
