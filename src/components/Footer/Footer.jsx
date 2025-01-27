import React from 'react';
import '../Footer/Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa';

export default function Footer() {
    return (
        <div>
          <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                <form action="#" className="f_subscribe_two mailchimp" method="post" noValidate>
                  <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                  <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                <h3 className="f-title f_600 t_color f_size_18">Navigate</h3>
                <ul className="list-unstyled f_list">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/service">Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s">
                <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                <ul className="list-unstyled f_list">
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s">
                <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                <div className="f_social_icon">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                    <FaPinterest />
                  </a>
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
