import React, { useState, useEffect } from "react"; // Added useEffect here
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the user has scrolled more than 10 pixels, trigger the state
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (

    <nav
      className={`bg-white shadow-sm fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <img src={Logo} alt="Online Store" className="w-24" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-indigo-700">
              Home
            </Link>
            <Link to="/products" href="#" className="hover:text-indigo-700">
              Products
            </Link>
            <Link to="/about" className="hover:text-indigo-700">
              About
            </Link>
            <Link to="/contact" className="hover:text-indigo-700">
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6 text-gray-700 text-xl">
            {/* Cart Icon */}
            <Link to="/cart" className="relative">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="hover:text-indigo-700 cursor-pointer"
              />
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            </Link>

            {/* Profile Icon */}
            <Link to="/login">
              <FontAwesomeIcon
                icon={faUser}
                className="hover:text-indigo-700 cursor-pointer"
              />
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-gray-700 text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-in */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-2xl transform transition-transform duration-[1000ms] ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* Close Button at the top */}
        <div className="p-6 flex justify-between items-center">
          <span className="text-xl font-bold text-indigo-600">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col px-6 py-4 space-y-6">
          {[
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)} // Closes the menu on click
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
