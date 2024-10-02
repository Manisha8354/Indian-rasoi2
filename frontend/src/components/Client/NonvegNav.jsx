import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const foodItems = [
    {
      id: 1,
      name: 'Delicious Food 1',
      description: 'A tasty dish with fresh ingredients, made to order. Enjoy the rich flavors!',
      img: 'https://cdn3.didevelop.com/public/cdn/300_851261c95e19a85af1284c1df80ba623.jpg'
    },
    {
      id: 2,
      name: 'Delicious Food 2',
      description: 'A tasty dish with fresh ingredients, made to order. Enjoy the rich flavors!',
      img: 'https://cdn3.didevelop.com/public/cdn/300_851261c95e19a85af1284c1df80ba623.jpg'
    },
    {
      id: 3,
      name: 'Delicious Food 3',
      description: 'A tasty dish with fresh ingredients, made to order. Enjoy the rich flavors!',
      img: 'https://cdn3.didevelop.com/public/cdn/300_851261c95e19a85af1284c1df80ba623.jpg'
    },
    {
      id: 4,
      name: 'Delicious Food 4',
      description: 'A tasty dish with fresh ingredients, made to order. Enjoy the rich flavors!',
      img: 'https://cdn3.didevelop.com/public/cdn/300_851261c95e19a85af1284c1df80ba623.jpg'
    }
  ];

export default function NonvegNav({ name, description, img }) {
    const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    gsap.fromTo(
      card,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

     
    

  return (
    <>
     <div
    className="mt-[130px] h-screen transition-all duration-700 ease-in-out shadow-lg bg-black hover:bg-gradient-to-r from-black via-yellow-800 to-red-950"
  >
    {/* Card Container */}
    <div className="flex justify-center gap-6 flex-wrap">
        
      
      {/* Card 1 */}
      <div className="max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto p-2 rounded-full overflow-hidden shadow-lg text-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div
          ref={cardRef}
          className="p-2 rounded-full overflow-hidden shadow-lg bg-black text-white transition-all duration-300 ease-in-out transform hover:skew-y-3 hover:shadow-2xl"
        >
          <img
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full mx-auto"
            src="https://cdn3.didevelop.com/public/cdn/300_a3fdcc2cb5e1b046939a58b93656f845.jpg"
            alt="Delicious Food"
          />
          <div className="text-center px-4 py-2">
            <div className="font-bold text-lg mb-1">Delicious Food</div>
            <p className="text-gray-300 text-xs md:text-sm">
              A tasty dish with fresh ingredients, made to order. Enjoy the rich flavors and delightful aroma!
            </p>
          </div>
          <div className="text-center pb-2">
            <button className="bg-white text-gray-900 font-bold py-1 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out">
              Order Now
            </button>
          </div>
        </div>
      </div>
  
      {/* Card 2 */}
      <div className="max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto p-2 rounded-full overflow-hidden shadow-lg text-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div
          ref={cardRef}
          className="p-2 rounded-full overflow-hidden shadow-lg bg-black text-white transition-all duration-300 ease-in-out transform hover:skew-y-3 hover:shadow-2xl"
        >
          <img
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full mx-auto"
            src="https://cdn3.didevelop.com/public/cdn/300_ca85db60858d346b6340bb75618edb59.jpg"
            alt="Delicious Food"
          />
          <div className="text-center px-4 py-2">
            <div className="font-bold text-lg mb-1">Delicious Food</div>
            <p className="text-gray-300 text-xs md:text-sm">
              A tasty dish with fresh ingredients, made to order. Enjoy the rich flavors and delightful aroma!
            </p>
          </div>
          <div className="text-center pb-2">
            <button className="bg-white text-gray-900 font-bold py-1 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out">
              Order Now
            </button>
          </div>
        </div>
      </div>
  
      {/* Repeat the same for all other cards */}
      <div className="max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto p-2 rounded-full overflow-hidden shadow-lg text-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div
          ref={cardRef}
          className="p-2 rounded-full overflow-hidden shadow-lg bg-black text-white transition-all duration-300 ease-in-out transform hover:skew-y-3 hover:shadow-2xl"
        >
          <img
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full mx-auto"
            src="https://cdn3.didevelop.com/public/cdn/300_23f8c70da9bfb6a6a35d72f645790d6f.jpg"
            alt="Delicious Food"
          />
          <div className="text-center px-4 py-2">
            <div className="font-bold text-lg mb-1">Delicious Food</div>
            <p className="text-gray-300 text-xs md:text-sm">
              A tasty dish with fresh ingredients, made to order. Enjoy the rich flavors and delightful aroma!
            </p>
          </div>
          <div className="text-center pb-2">
            <button className="bg-white text-gray-900 font-bold py-1 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out">
              Order Now
            </button>
          </div>
        </div>
      </div>
  
      {/* Repeat as needed for additional cards */}
    </div>
  </div>  

  {/* finish */}
    
    <div
    className="h-screen transition-all duration-700 ease-in-out shadow-lg bg-black hover:bg-gradient-to-r from-black via-yellow-800 to-red-950"
  >
    {/* Card Container */}
    <div className="flex justify-center gap-6 flex-wrap">
      
      {/* Card 1 */}
      <div className="max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto p-2 rounded-full overflow-hidden shadow-lg text-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div
          ref={cardRef}
          className="p-2 rounded-full overflow-hidden shadow-lg bg-black text-white transition-all duration-300 ease-in-out transform hover:skew-y-3 hover:shadow-2xl"
        >
          <img
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full mx-auto"
            src="https://cdn3.didevelop.com/public/cdn/300_071c5971c1bbfbfb0e9a8be5bd7ade1e.jpg"
            alt="Delicious Food"
          />
          <div className="text-center px-4 py-2">
            <div className="font-bold text-lg mb-1">Delicious Food</div>
            <p className="text-gray-300 text-xs md:text-sm">
              A tasty dish with fresh ingredients, made to order. Enjoy the rich flavors and delightful aroma!
            </p>
          </div>
          <div className="text-center pb-2">
            <button className="bg-white text-gray-900 font-bold py-1 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out">
              Order Now
            </button>
          </div>
        </div>
      </div>
  
      {/* Card 2 */}
      <div className="max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto p-2 rounded-full overflow-hidden shadow-lg text-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div
          ref={cardRef}
          className="p-2 rounded-full overflow-hidden shadow-lg bg-black text-white transition-all duration-300 ease-in-out transform hover:skew-y-3 hover:shadow-2xl"
        >
          <img
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full mx-auto"
            src="https://cdn3.didevelop.com/public/cdn/300_a3fdcc2cb5e1b046939a58b93656f845.jpg"
            alt="Delicious Food"
          />
          <div className="text-center px-4 py-2">
            <div className="font-bold text-lg mb-1">Delicious Food</div>
            <p className="text-gray-300 text-xs md:text-sm">
              A tasty dish with fresh ingredients, made to order. Enjoy the rich flavors and delightful aroma!
            </p>
          </div>
          <div className="text-center pb-2">
            <button className="bg-white text-gray-900 font-bold py-1 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out">
              Order Now
            </button>
          </div>
        </div>
      </div>
  
      {/* Repeat the same for all other cards */}
      <div className="max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto p-2 rounded-full overflow-hidden shadow-lg text-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div
          ref={cardRef}
          className="p-2 rounded-full overflow-hidden shadow-lg bg-black text-white transition-all duration-300 ease-in-out transform hover:skew-y-3 hover:shadow-2xl"
        >
          <img
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full mx-auto"
            src="https://cdn3.didevelop.com/public/cdn/300_851261c95e19a85af1284c1df80ba623.jpg"
            alt="Delicious Food"
          />
          <div className="text-center px-4 py-2">
            <div className="font-bold text-lg mb-1">Delicious Food</div>
            <p className="text-gray-300 text-xs md:text-sm">
              A tasty dish with fresh ingredients, made to order. Enjoy the rich flavors and delightful aroma!
            </p>
          </div>
          <div className="text-center pb-2">
            <button className="bg-white text-gray-900 font-bold py-1 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out">
              Order Now
            </button>
          </div>
        </div>
      </div>
  
      {/* Repeat as needed for additional cards */}
    </div>
  </div>
  </>
  
  )
}
