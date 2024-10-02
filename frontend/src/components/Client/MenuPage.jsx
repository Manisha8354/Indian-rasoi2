import React from 'react';

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-white mt-[130px]">
      {/* Banner */}
      <div className="bg-yellow-800 text-white text-center p-3">
        We are closed at the moment. Ordering system is disabled.
      </div>

      {/* Main Menu Container */}
      <div className="container mx-auto px-4 py-8">
        {/* Title */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          Menu of Laziz Pizzeria & Curry House
        </h1>

        {/* Legend */}
        <div className="flex justify-center items-center mb-4 text-sm sm:text-lg">
          <span className="flex items-center">
            <span className="text-red-600 mr-2">&#x1F525;</span> spicy
          </span>
          <span className="flex items-center ml-4">
            <span className="text-orange-500 mr-2">&#x1F331;</span> vegetarian
          </span>
        </div>

        {/* Menu Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Vegetarian Appetizer Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Vegetarian Appetizer</h2>
            <ul className="space-y-2">
              <li className="flex justify-between border-b pb-1">
                <span>Vegetable Samosa</span>
                <span>$1.50</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Paharganj Ke Chole Bhature</span>
                <span>$7.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Veggie Noodle Tikki Burger</span>
                <span>$6.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Vegetable Pakora</span>
                <span>$8.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Sweet Chili Garlic Cauliflower <span className="text-red-600">&#x1F525;</span></span>
                <span>$11.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Veggie Fried Momos (8 pcs)</span>
                <span>$12.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Chaat Papri</span>
                <span>$7.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Paneer Pakora</span>
                <span>$10.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Paneer 65</span>
                <span>$10.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Amritsari Kulcha</span>
                <span>$10.99</span>
              </li>
            </ul>
          </div>

          {/* Veggie Pizza Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Veggie Pizza</h2>
            <ul className="space-y-2">
              <li className="flex justify-between border-b pb-1">
                <span>Loaded Veggie Lover Pizza (Small)</span>
                <span>$9.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Cheese Lover Pizza (Small)</span>
                <span>$9.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Shahi Paneer Pizza (Small) <span className="text-red-600">&#x1F525;</span></span>
                <span>$10.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Tandoori Paneer Pizza (Small)</span>
                <span>$10.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Pesto Veggie Pizza (Small)</span>
                <span>$9.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Mediterranean Special Pizza (Small)</span>
                <span>$9.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Greek Pizza (Small)</span>
                <span>$9.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Spicy Mexican Hot Pizza (Small) <span className="text-red-600">&#x1F525;</span></span>
                <span>$9.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Fiery Pineapple Pizza (Small)</span>
                <span>$9.99</span>
              </li>
            </ul>
          </div>
 
          <div>
            <h2 className="text-xl font-bold mb-4">Vegetarian Appetizer</h2>
            <ul className="space-y-2">
              <li className="flex justify-between border-b pb-1">
                <span>Vegetable Samosa</span>
                <span>$1.50</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Paharganj Ke Chole Bhature</span>
                <span>$7.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Veggie Noodle Tikki Burger</span>
                <span>$6.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Vegetable Pakora</span>
                <span>$8.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Sweet Chili Garlic Cauliflower <span className="text-red-600">&#x1F525;</span></span>
                <span>$11.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Veggie Fried Momos (8 pcs)</span>
                <span>$12.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Chaat Papri</span>
                <span>$7.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Paneer Pakora</span>
                <span>$10.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Paneer 65</span>
                <span>$10.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Amritsari Kulcha</span>
                <span>$10.99</span>
              </li>
            </ul>
          </div>


          <div>
            <h2 className="text-xl font-bold mb-4">Veggie Pizza</h2>
            <ul className="space-y-2">
              <li className="flex justify-between border-b pb-1">
                <span>Loaded Veggie Lover Pizza (Small)</span>
                <span>$9.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Cheese Lover Pizza (Small)</span>
                <span>$9.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Shahi Paneer Pizza (Small) <span className="text-red-600">&#x1F525;</span></span>
                <span>$10.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Tandoori Paneer Pizza (Small)</span>
                <span>$10.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Pesto Veggie Pizza (Small)</span>
                <span>$9.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Mediterranean Special Pizza (Small)</span>
                <span>$9.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Greek Pizza (Small)</span>
                <span>$9.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Spicy Mexican Hot Pizza (Small) <span className="text-red-600">&#x1F525;</span></span>
                <span>$9.99</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>Fiery Pineapple Pizza (Small)</span>
                <span>$9.99</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
