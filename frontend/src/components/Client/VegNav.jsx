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

export default function VegNav({ name, description, img }) {
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
    className="mt-[130px] p-[20px] h-screen transition-all duration-700 ease-in-out shadow-lg bg-black hover:bg-gradient-to-r from-black via-yellow-800 to-red-950"
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
  
      {/* Card 2 */}
      <div className="max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto p-2 rounded-full overflow-hidden shadow-lg text-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div
          ref={cardRef}
          className="p-2 rounded-full overflow-hidden shadow-lg bg-black text-white transition-all duration-300 ease-in-out transform hover:skew-y-3 hover:shadow-2xl"
        >
          <img
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full mx-auto"
            src="https://cdn3.didevelop.com/public/cdn/300_419642172e8ba844c5e08e3fc37abf17.jpg"
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
            src="https://cdn3.didevelop.com/public/cdn/300_ea4b2471956f1fae34496e37b271a1b5.jpg"
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
            src="https://cdn3.didevelop.com/public/cdn/300_b4992dfd999f6a4c328c9909bf260e87.jpg"
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
            src="https://cdn3.didevelop.com/public/cdn/300_059b3294d757e2e3187966dd51492c55.jpg"
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
            src="https://cdn3.didevelop.com/public/cdn/300_4042da88d36a80535edf57c01790346e.jpg"
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
