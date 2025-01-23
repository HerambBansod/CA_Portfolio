import React from 'react'
import NavBar from '../NavBar/NavBar'
import '../AboutUS/AboutUs.css'
import Footer from '../Footer/Footer'
import ContactPageHp from '../Contact-form-HP/ContactPageHp'
import { Link } from "react-router-dom";


export default function AboutUs() {
    return (
        <div className='AboutUs'>
            <div className="aboutnav">
                <NavBar />
            </div>
            <div className="About_landing">
                <div className="abouthead">
                    <h1>
                        About Us
                    </h1>
                    <h2>We simplify complexities, empowering your financial journey.</h2>
                </div>
                <div className="CTA-BTN">
                    <button className='Btn'><Link to="/Contact Us">Book a free consultation </Link></button>
                </div>
            </div>
            <div className="abtstory">
                <div className="story-container">
                    <div className="story">
                        <h2>Our Story</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit qui corrupti veniam aliquid quos? Exercitationem eveniet eius libero! Provident autem iste alias? Consequatur pariatur inventore, atque est odit assumenda vero aut facilis.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit qui corrupti veniam aliquid quos? Exercitationem eveniet eius libero! Provident autem iste alias? Consequatur pariatur inventore, atque est odit assumenda vero aut facilis.
                        </p>
                    </div>
                    <div className="below-storycontainer">

                    </div>
                </div>
                <div className="imgcontainer">

                </div>
            </div>
            <div className="testimonials">

            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}
