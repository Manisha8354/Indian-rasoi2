import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import img from '../../assets/log.png'
import { FaChevronDown } from 'react-icons/fa'; 

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);


   
    const [isLocationOpen, setIsLocationOpen] = useState(false);
  
  
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleAbout = () => setIsAboutOpen(!isAboutOpen);
    const toggleProducts = () => setIsProductsOpen(!isProductsOpen);
    const toggleContact = () => setIsContactOpen(!isContactOpen);
  return (
    <>
    <div>
  {/* Top Bar */}
  <div className="fixed top-0 left-0 w-full text-white py-2 bg-yellow-800 z-50 flex flex-col md:flex-row items-center justify-between px-6"> {/* Changed py-2.5 to py-2 */}
  <a href="tel:+17788780033" className="flex items-center space-x-4 hover:text-yellow-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 rotate-90"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5h2a2 2 0 012 2v3a2 2 0 01-2 2H3v2a9 9 0 009 9h2a9 9 0 009-9V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v3a2 2 0 002 2h2v2a9 9 0 01-9 9h-2a9 9 0 01-9-9V7a2 2 0 012-2z"
      />
    </svg>
    <span className="text-white font-semibold">+1 (778) 878-0033</span>
  </a>

  <p className="text-sm font-semibold text-center mx-auto my-2 md:my-0">
    Indian Rasoi offers a delightful journey through authentic Indian cuisine –{' '}
    <Link to='/about'>
      <span className="underline cursor-pointer hover:text-white">
        Learn More
      </span>
    </Link>
  </p>
</div>




  {/* Navbar */}
  <nav className="navbar bg-black text-white fixed w-full shadow-lg z-50 top-10 ">
  <div className="container mx-auto flex h-24 justify-between items-center py-1 px-2"> {/* Adjusted padding to reduce height */}
    {/* Left Side - Logo */}
    <div className="text-6xl font-bold">
      <Link to='/'>
        <img src={img} alt="Logo" className="w-40" /> {/* Reduced logo height from 40 to 20 */}
      </Link>
    </div>

    {/* Middle - Links with dropdowns */}
    <ul className="hidden lg:flex space-x-4 font-semibold text-lg">
      <li><Link to="/" className="hover:text-yellow-800 transition-colors duration-300">Home</Link></li>
      <Link to='/about' onClick={toggleContact} className="hover:text-yellow-600 transition-colors duration-300 focus:outline-none">
          About Us
        </Link>
      <li className="relative group">
        <button onClick={toggleMenu} className="hover:text-yellow-600 transition-colors duration-300 focus:outline-none">
          Our Menu
        </button>
      </li>
      <li><Link to="/location" className="hover:text-yellow-800 transition-colors duration-300">Locations</Link></li>
      <li className="relative group">
        <Link to='/contact' onClick={toggleContact} className="hover:text-yellow-600 transition-colors duration-300 focus:outline-none">
          Contact Us
        </Link>
      </li>
      <li className="relative group">
        <Link to='/blog' onClick={toggleContact} className="hover:text-yellow-600 transition-colors duration-300 focus:outline-none">
          Our Blogs
        </Link>
      </li>
    </ul>

    {/* Right Side - Buttons */}
    <div className="hidden lg:flex space-x-4">
      <Link to='/order'>
      <button className="border border-yellow-600 bg-black text-white px-2 py-1 rounded-lg font-semibold transition-transform transform hover:bg-yellow-600 hover:scale-105 duration-300">
        Order Now
      </button>
      </Link>
    </div>

    {/* Hamburger Menu for Mobile */}
    <div className="lg:hidden">
      <button className="text-white focus:outline-none" onClick={toggleMenu}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="lg:hidden bg-skin-color p-2">
      <ul className="space-y-2 font-semibold">
        <li>
          <Link to='/' onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:text-black flex items-center w-full">
            Home
           
          </Link>
        </li>
        <li><Link to="/about" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>Our Menu</Link></li>
        <li><Link to="/location" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>Location</Link></li>
        <li><Link to="/contact" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
        <li><Link to="/blog" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>Blogs</Link></li>
        <div className="space-y-4">
          <button className="bg-black text-white w-full py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300">Order Now</button>
        </div>
      </ul>
    </div>
  )}
</nav>


</div>

    </>
  )
}
