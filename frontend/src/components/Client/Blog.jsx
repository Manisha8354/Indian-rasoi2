import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const dishes = [
  {
    title: "Indian Rasoi is pleased to",
    img: "https://media-cdn.tripadvisor.com/media/photo-p/2a/c2/cb/4b/selection-of-curries.jpg",
    description: "At Tasty Abbotsford, food is more than just a meal—it’s an experience. Whether you crave the creamy richness of our signature Butter Chicken or the smoky, velvety smoothness of Dal Makhni, each dish is crafted with passion and flavor. From the tangy zest of Fish Curry to the royal indulgence of Shahi Paneer, our menu promises a culinary journey through the vibrant spices of India",
  },
  {
    title: "Discover the Delight of Rasmalai...",
    img: "https://static.vecteezy.com/system/resources/previews/026/721/946/non_2x/illustration-of-indian-national-food-view-from-above-generative-ai-free-photo.jpg",
    description: "We believe that every bite tells a story, and our chefs take pride in using the freshest ingredients to ensure that your plate is bursting with authentic, unforgettable flavors. Let the aromas captivate your senses and indulge in the warmth of a meal that feels like home.",
  },
  {
    title: "The best South Indian restaurant...",
    img: "https://shahiraj.co.uk/img/curry_1386851531.jpg",
    description: "Indian cuisine is known for its intricate blend of spices and flavors, and we take that art to heart. From the creamy richness of Butter Chicken to the vibrant zest of our Fish Curry, each dish is a celebration of ingredients that have been cherished for generations",
  },
  {
    title: "Discovering Halal Indian Food..",

    img: "https://w0.peakpx.com/wallpaper/514/512/HD-wallpaper-indian-restaurant-san-francisco-deccan-house-sf-north-indian-food-thumbnail.jpg",
    description: "We use only the freshest produce, quality meats, and authentic spices to craft meals that are as satisfying as they are flavorful. Our Dal Makhni, slow-cooked to perfection, and our Shahi Paneer, fit for royalty, are perfect examples of how tradition meets taste in our kitchen.",
  },
];

const Blog = () => {
  useEffect(() => {
    gsap.fromTo(
      ".gsap-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
    <div className="container mx-auto py-12 px-4">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-10 gsap-heading">
        Our Blogs
      </h2>
  
      {/* Dishes Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="gsap-card bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-xl rounded-lg p-4 max-w-[18rem] flex flex-col transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl transform hover:rotate-2 relative group"
          >
            {/* Dish Image */}
            <img
              className="w-full h-48 object-cover rounded-md"
              src={dish.img}
              alt={dish.title}
            />
            {/* Dish Title */}
            <h3 className="text-center text-xl sm:text-2xl font-bold mt-4 text-orange-400 group-hover:text-orange-500 transition-colors">
              {dish.title}
            </h3>
            {/* Dish Description */}
            <p className="text-sm sm:text-base text-center opacity-75 mt-2 text-gray-200">
              {dish.description}
            </p>
            {/* View More Button */}
            <Link
              to='/viewmoreblog'
              className=" bg-orange-500 text-black font-bold  py-3 px-20 rounded-lg transition duration-300 ease-in-out hover:bg-orange-600 hover:scale-110 mt-auto"
            >
              View More
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
  

  );
};

export default Blog;
