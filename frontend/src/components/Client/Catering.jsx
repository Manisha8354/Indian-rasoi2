import React, { useEffect, useRef } from 'react';
import { FaUtensils } from 'react-icons/fa';
import { gsap } from 'gsap';
import Testimonials from './Testimonial';

const Catering = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    // GSAP animation for heading
    gsap.fromTo(headingRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 2.5, ease: "power3.out" }
    );
  }, []);

  return (
    <>
    <div className="bg-white text-black mt-[130px]">
      {/* Header Section with Image */}
      <div className="relative">
        <img
          src="https://cdn0.weddingwire.in/vendor/0145/3_2/1280/jpg/catering-brown-sugar-catering-setup-8_15_360145-160866368833488.jpeg"
          alt="Catering Services"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          {/* Icon above the heading */}
          <FaUtensils className="text-yellow-500 text-5xl mb-4 animate-bounce ml-[-20px]" />


          {/* Heading with GSAP animation */}
          <h1
            ref={headingRef}  // Reference for GSAP animation
            className="text-white text-4xl lg:text-6xl font-bold"
          >
            Catering Services
          </h1>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24 mx-auto mt-4  text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10l6 6m0 0l6-6m-6 6V3"
                />
              </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 bg-orange-50">
      {/* Heading Section */}
      <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-red-700 hover:text-red-600 transition-colors duration-300 content-section">
        Planning an Event? Let Indian Rasoi Cater for You!
      </h2>

      {/* Introduction */}
      <p className="text-lg lg:text-xl text-gray-800 mb-6 content-section hover:scale-105 transition-transform duration-300">
        We offer catering services for all types of events, including:
      </p>

      {/* List of Events with hover effect */}
      <ul className="list-disc pl-6 text-lg lg:text-xl text-gray-900 mb-8 content-section">
        <li className="hover:text-yellow-600 transition-colors duration-300">Birthday Parties</li>
        <li className="hover:text-yellow-600 transition-colors duration-300">Wedding Functions</li>
        <li className="hover:text-yellow-600 transition-colors duration-300">Corporate Events</li>
        <li className="hover:text-yellow-600 transition-colors duration-300">Family Gatherings</li>
      </ul>

      {/* Menu and Contact Section */}
      <p className="text-lg lg:text-xl text-gray-800 mb-6 content-section hover:scale-105 transition-transform duration-300">
        Our catering menu features a range of pizzas and Indian dishes to ensure your guests have a memorable dining experience.
      </p>
      <p className="text-lg lg:text-xl text-gray-800 mb-8 content-section hover:scale-105 transition-transform duration-300">
        Contact us today for more information and to discuss your catering needs.
      </p>

      {/* Contact Us Button with GSAP animation */}
      <div className="flex justify-center content-section">
        <a
          href="/contact"
          className="border border-yellow-600 bg-yellow-600 text-white py-2 px-6 rounded-lg font-semibold transition-transform transform hover:scale-110 duration-300"
        >
          Contact Us for Catering
        </a>
      </div>
    </div>
    </div>
    <Testimonials/>
    </>
  );
};

export default Catering;
