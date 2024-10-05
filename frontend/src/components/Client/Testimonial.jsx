import React, { useState, useEffect } from 'react';

// Testimonials Data
const testimonials = [
  {
    name: '— Sarah L.',
    photo: 'images/abhishek_saini.webp',
    text: 'The tandoori chicken pizza is out of this world! Highly recommend!',
  },
  {
    name: '— Michael T.',
    
    photo: 'images/asha_sharma.webp',
    text: "The butter chicken was the best I've ever tasted. Will definitely order again!.",
  },
 
  
  
];

// Main Component
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  // Function to cycle through testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setProgressWidth(100); // Set progress to full width
      setTimeout(() => setProgressWidth(0), 1000); // Reset after 1 second
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  const { name, position, photo, text } = testimonials[index];

  return (
    <div className="px-4 md:px-8 transition-all duration-700 ease-in-out shadow-lg bg-gradient-to-r from-black via-yellow-800 to-red-950">
  {/* Testimonials Section */}
  <div className="testimonialSection rounded-lg p-4 md:p-6 lg:p-8 shadow-md">
    <div className="monialHead text-xl md:text-2xl font-bold text-center mb-4 text-white"> {/* Changed to white for contrast */}
      What Our Customers Say
    </div>
    <div className="testimonial-container relative">
      {/* Progress Bar */}
      <div
        className="progress-bar bg-yellow-400 h-1 rounded absolute top-0 left-0 transition-all duration-1000"
        style={{ width: `${progressWidth}%` }}
      ></div>
      <div className="fas fa-quote-right fa-quote text-gray-200 absolute top-4 right-4 text-3xl md:text-4xl"></div> {/* Changed to a lighter gray */}
      <div className="fas fa-quote-left fa-quote text-gray-200 absolute top-4 left-4 text-3xl md:text-4xl"></div> {/* Changed to a lighter gray */}

      {/* Testimonial Text */}
      <p className="testimonial text-base md:text-lg text-gray-200 text-center my-4 md:my-6">{text}</p> {/* Changed to a lighter gray for better contrast */}

      {/* User Details */}
      <div className="user flex items-center justify-center mt-4">
        <div className="user-details ml-4 text-center">
          <h4 className="username text-base md:text-lg font-semibold text-white">{name}</h4> {/* Changed to white for contrast */}
          <p className="role text-gray-300">{position}</p> {/* Changed to a lighter gray for better visibility */}
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
