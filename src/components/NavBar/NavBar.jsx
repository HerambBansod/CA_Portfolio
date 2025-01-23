import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css"

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">FirmName</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">About Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/services/personal">Personal Service</Link></li>
                                <li><Link className="dropdown-item" to="/services/business">Business Service</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link className="btn btn-outline-success contact-us-btn" to="/contact-us">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
