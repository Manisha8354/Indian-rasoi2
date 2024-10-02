import React from 'react';

export default function Location() {
  return (
    <div className='mt-[130px]'>
      <div className="relative w-full h-60 sm:h-72 md:h-96 lg:h-[500px] xl:h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/beautiful-restaurant-food-black-background-generative-ai_74760-6670.jpg)' }}>
        {/* Content to overlap */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-4">
          {/* Larger Map Icon */}
          <svg className="w-16 h-16 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8.14 2 5 5.14 5 9c0 4.37 7 13 7 13s7-8.63 7-13c0-3.86-3.14-7-7-7zm0 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>

          <h1 className="text-2xl sm:text-3xl md:text-[4rem] mb-2 text-white font-bold font-serif">Location</h1>
          <p className="text-sm sm:text-lg mt-2 md:text-xl mb-4">Join us in the journey of a lifetime with your perfect match.</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-4 sm:p-8 bg-black text-white">
        <h1 className="text-3xl font-bold mb-4">Visit Us</h1>
        <div className="flex items-center mb-4">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/marker.png" // Marker icon
            alt="Location Marker"
            className="w-12 h-12"
          />
          <p className="text-lg ml-2">
            31877 South Fraser Way, Abbotsford, BC V2T 1V4
          </p>
        </div>
        <p className="text-center mb-6 text-lg px-4">
          Experience the best of Indian cuisine and delicious pizzas. We are located in the heart of Abbotsford.
        </p>

        <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.9962815586036!2d-122.3439011243133!3d49.04869428729632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5484354ceb302817%3A0xc499b1a067e099ed!2s31877%20South%20Fraser%20Way%2C%20Abbotsford%2C%20BC%20V2T%201V4%2C%20Canada!5e0!3m2!1sen!2sin!4v1726831851523!5m2!1sen!2sin"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
