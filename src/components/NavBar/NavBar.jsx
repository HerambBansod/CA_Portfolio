import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-200 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link className="text-xl font-bold" to="/">
          FirmName
        </Link>
        <button
          className="block lg:hidden px-2 py-1 border rounded text-gray-700 border-gray-700"
          type="button"
          aria-expanded={dropdownOpen}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-label="Toggle navigation"
        >
          <FaBars className="h-6 w-6" />
        </button>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${dropdownOpen ? "block" : "hidden"}`}>
          <ul className="lg:flex lg:flex-row lg:space-x-4 lg:mt-0">
            <li className="nav-item">
              <Link className="block lg:inline-block lg:mt-0 text-gray-700 hover:text-black" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="block lg:inline-block lg:mt-0 text-gray-700 hover:text-black" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="relative">
              <button
                className="block lg:inline-block lg:mt-0 text-gray-700 hover:text-black"
                type="button"
                aria-expanded={dropdownOpen}
              >
                <Link className="block lg:inline-block lg:mt-0 text-gray-700 hover:text-black" to="/service">
                  Services
                </Link>
              </button>
            </li>
          </ul>
          <div className="lg:mt-0 lg:ml-4">
            <Link className={`inline-block ${isMobile ? "px-1" : "px-4"} py-2 leading-none border rounded text-gray-700 border-gray-700 hover:border-transparent hover:text-white hover:bg-gray-700`} to="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
