
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = ({ scrollToServices }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-red-700 bg-white shadow-md">
      <div className="container px-2 mx-auto">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4 md:space-x-6">
            <img
              src={logo}
              className="w-20 h-20 md:w-28 md:h-28"
              alt="ProGuard Services Logo"
            />
            <div className="ml-2 md:ml-6">
              <h1 className="text-lg font-bold md:text-2xl">
                ProGuard Services
              </h1>
              <p className="text-sm font-bold text-yellow-400 md:text-base">
                Your Safety, Our Priority
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="items-center hidden space-x-6 md:text-lg md:flex">
              <Link
                to="/"
                className="font-semibold transition hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)} // Close menu if open
              >
                Home
              </Link>
              <button
                onClick={() => {
                  scrollToServices(); // Scroll to Services section
                  setIsMenuOpen(false);
                }}
                className="font-semibold transition hover:text-yellow-400"
              >
                Services
              </button>
              <Link
                to="/careers"
                className="font-semibold transition hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/blogs"
                className="font-semibold transition hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                to="/about"
                className="font-semibold transition hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>

            
            <Link
              to="/contact"
              className="px-2 py-1 text-sm font-bold text-white transition bg-red-500 rounded-full hover:bg-red-700 md:px-4 md:py-2 md:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="text-red-700 md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-2 md:hidden">
            <div className="flex flex-col pt-4 space-y-4 border-t border-gray-300">
              <Link
                to="/"
                className="font-semibold text-left transition hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={() => {
                  scrollToServices(); // Scroll to Services section
                  setIsMenuOpen(false);
                }}
                className="font-semibold text-left transition hover:text-yellow-400"
              >
                Services
              </button>
              <Link
                to="/careers"
                className="font-semibold transition hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/blogs"
                className="font-semibold transition hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                to="/about"
                className="font-semibold transition hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
