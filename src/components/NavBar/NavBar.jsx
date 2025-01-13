import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="NavBar">
            <div className="logo">
                {/* <img src={logo} alt="logo_here" /> */}
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li 
                        className="dropdown" 
                        onMouseEnter={toggleDropdown} 
                        onMouseLeave={toggleDropdown}
                    >
                        <Link to="/Service">
                            Services 
                            <span className="dropdown-icon">▼</span>
                        </Link>
                        {dropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><Link to="/business-services">Business Services</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            <div className="profile">
                <Link to="/contact" className="Btn">Contact Us</Link>
            </div>
        </div>
    );
}
