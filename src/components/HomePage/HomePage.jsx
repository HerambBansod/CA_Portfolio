import React from 'react'
import { Link } from "react-router-dom";
import "./HomePage.css"
import Section from './Section';
import NavBar from '../NavBar/NavBar'
import ContactPageHp from '../Contact-form-HP/ContactPageHp';
import LandingVideo from '../Assets/LandingVideo.mp4';
import Footer from '../Footer/Footer';



export default function HomePage() {
    return (
        <div className="home">
            <div className="landingpage">
                <div className="navindex">
                    <NavBar />
                </div>
                <div className="hero">
                    <div className="video-container">
                        <video autoPlay muted loop className="background-video">
                            <source src={LandingVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="video-overlay">
                            <div className="text">
                                <h1>Simplify Your Taxes and Finances   with Expert CA Services</h1>
                                <button className='Btn'><Link to="/Contact Us">Book a free consultation </Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="About-section">
                <div className="CA-profile">

                </div>
                <div className="CA-achievement">
                    <div className="head-achieve">
                        <h1>Achievements</h1>
                        <p> Celebrating Milestones and Success Stories </p>
                    </div>
                    <div className="list-achievements">
                        {/* {[
                            { title: "Award 1", img },
                            { title: "Award 2", img },
                            { title: "Award 3", img },
                            { title: "Award 4", img },
                            { title: "Award 5", img },
                            { title: "Award 6", img },
                            { title: "Award 7", img },
                            { title: "Award 8", img },
                        ].map((achievement, index) => (
                            <div key={index} className="card" style={{ backgroundImage: `url(${achievement.img})` }}>
                                <div className="card-overlay">
                                    <h2>{achievement.title}</h2>
                                </div>
                            </div>
                        ))} */}
                    </div>
                </div>
            </div>
            <div className="service-section">
                <Section />
            </div>
            <div className="contactus">
                <div className="contact-form-section">
                    <div className="header-contact-section">
                        <h1>Contact</h1>
                        <p>Lets Us know if you any question!?</p>
                    </div>
                    <div className="contact-form">
                        <ContactPageHp />
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
