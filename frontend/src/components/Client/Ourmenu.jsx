import React from 'react';
import Testimonials from './Testimonial';

export default function Ourmenu() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-black via-yellow-800 to-red-950 py-16 px-4 lg:px-8 text-white">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold hover:text-yellow-300 transition duration-300 ease-in-out">
          Explore Our Menu
        </h1>
      </div>

      {/* Menu Sections */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Pizzas Section */}
          <div className="menu-item p-6 bg-yellow-800 bg-opacity-60 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold mb-4 hover:text-yellow-300">
              Pizzas
            </h2>
            <ul className="space-y-2">
              <li className="hover:text-yellow-300 transition duration-300 ease-in-out">Classic Pepperoni Pizza: A timeless favorite with savory pepperoni.</li>
              <li className="hover:text-yellow-300 transition duration-300 ease-in-out">Tandoori Chicken Pizza: A flavorful twist with marinated tandoori chicken</li>
              <li className="hover:text-yellow-300 transition duration-300 ease-in-out"> Tandoor Paneer Pizza: A vegetarian delight topped with spiced paneer.</li>
              <li className="hover:text-yellow-300 transition duration-300 ease-in-out">Loaded Veggie lover: A colorful medley of fresh vegetables.</li>
            </ul>
          </div>

          {/* Indian Dishes Section */}
          <div className="menu-item p-6 bg-yellow-800 bg-opacity-60 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold mb-4 hover:text-yellow-300">
              Authentic Indian Dishes
            </h2>
            <ul className="space-y-2">
              <li className="hover:text-yellow-300 transition duration-300 ease-in-out">Butter Chicken: Creamy and rich, a must-try for any chicken lover.</li>
              <li className="hover:text-yellow-300 transition duration-300 ease-in-out">Goat Curry: Tender goat meat simmered in traditional spices.</li>
              <li className="hover:text-yellow-300 transition duration-300 ease-in-out">Vegetable Biryani: Fragrant basmati rice cooked with mixed vegetables and spices.</li>
            </ul>
          </div>

          {/* Special Dietary Options */}
          <div className="menu-item p-6 bg-yellow-800 bg-opacity-60 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold mb-4 hover:text-yellow-300">
              Special Dietary Options
            </h2>
            <ul className="space-y-2">
              <li className="hover:text-yellow-300 transition duration-300 ease-in-out">Halal: Halal options are also available upon request.</li>
              <li className="hover:text-yellow-300 transition duration-300 ease-in-out">Gluten-Free: Enjoy a selection of gluten-free pizzas and dishes.</li>
            </ul>
          </div>
        </div>

        {/* Link to Full Menu */}
        <div className="text-center mt-12">
          <a
            href="https://drive.google.com/file/d/17IzEywF_MQTe9Alq-6iQq1ItD5FiHQyp/view?usp=drive_link"  // Update this path to point to the actual PDF file location
            download="Indian_Rasoi_Menu.pdf"  // File name for the download
            className="inline-block px-6 py-3 bg-yellow-300 text-black font-bold rounded-lg hover:bg-yellow-400 transition duration-300 ease-in-out"
          >
            View Full Menu 
          </a>
        </div>
      </div>
    </div>
    <Testimonials/>
    </>

  );
}
