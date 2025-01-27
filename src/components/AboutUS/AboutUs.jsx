import React from 'react';
import NavBar from '../NavBar/NavBar';
import '../AboutUS/AboutUs.css';
import Footer from '../Footer/Footer';
// import ContactPageHp from '../Contact-form-HP/ContactPageHp';
import { Link } from "react-router-dom";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechInnovate",
        quote: "California's solutions transformed our business operations completely.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "CTO, DataStream",
        quote: "Exceptional service and cutting-edge technology that delivers real results.",
        rating: 5
    },
    {
        name: "Emily Rodriguez",
        role: "Startup Founder",
        quote: "The team's expertise and support have been game-changing for our company.",
        rating: 4
    }
];

export default function AboutUs() {
    return (
 
    <div className="AboutUs">
      <div className="aboutnav">
        <NavBar />
      </div>
      <div className="About_landing relative h-[96vh] max-w-full bg-cover bg-center flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-1"></div>
        <div className="abouthead relative flex flex-col justify-center w-4/5 h-[70vh] z-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white m-0 p-0">About Us</h1>
          <h2 className="text-xl md:text-3xl text-white mt-4">
            We simplify complexities, empowering your financial journey.
          </h2>
        </div>
        <div className="CTA-BTN relative z-2 mt-6">
          <button className="btn bg-blue-500 text-white py-2 px-4 rounded">
            <Link to="/Contact Us">Book a free consultation</Link>
          </button>
        </div>
      </div>
      <div className="abtstory h-auto max-w-full flex flex-1 flex-col md:flex-row py-10 px-5">
        <div className="story-container w-full md:w-[70%] h-auto p-6 md:p-12">
          <div className="story h-auto text-lg">
            <h2 className="font-bold text-4xl">Our Story</h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui corrupti veniam aliquid quos? Exercitationem eveniet eius libero! Provident autem iste alias? Consequatur pariatur inventore, atque est odit assumenda vero aut facilis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui corrupti veniam aliquid quos? Exercitationem eveniet eius libero! Provident autem iste alias? Consequatur pariatur inventore, atque est odit assumenda vero aut facilis.
            </p>
          </div>
          <div className="below-storycontainer mt-8"></div>
        </div>
        <div className="imgcontainer w-full md:w-[30%] h-96 bg-cover bg-no-repeat animate-[backgroundChange_10s_infinite]" style={{ backgroundImage: "url('../Assets/Story_Side_1.jpg')" }}></div>
      </div>
      <div className="testimonials h-auto bg-gray-800 ">
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-smooch text-center mb-12 text-gray-900">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-6 justify-center">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <p className="text-xl font-semibold font-smooch text-gray-800">{testimonial.quote}</p>
                  <div className="mt-4">
                    <p className="text-2xl font-bold font-smooch text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 font-smooch">{testimonial.role}</p>
                  </div>
                  <div className="mt-4">
                    {[...Array(testimonial.rating)].map((star, i) => (
                      <span key={i} className="text-yellow-500">&#9733;</span>
                    ))}
                    {[...Array(5 - testimonial.rating)].map((star, i) => (
                      <span key={i} className="text-gray-300">&#9733;</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="footer h-auto bg-black">
        <Footer />
      </div>
    </div>
  );
};

 