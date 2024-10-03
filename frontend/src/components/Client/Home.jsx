import React, { useState, useEffect , useRef} from 'react';
import 'tailwindcss/tailwind.css';
import { gsap } from 'gsap';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome for arrow icons



import { motion } from 'framer-motion';
import Blog from './Blog';
import About from './About';
import { Link } from 'react-router-dom';

const privacyPolicyContent = {
  title: "About Us",
  introduction: "Welcome to our about  page.Welcome to Indian Rasoi Curry House and Pizzeria, your go-to destination for a delightful fusion of Indian flavors in Abbotsford. As a take-out only restaurant, we take pride in offering a diverse menu featuring a wide variety of pizzas and authentic Indian dishes that you can enjoy in the comfort of your own home.",
  sections: [
    {
      
      content: "Indulge in our delicious pizzas, from classic pepperoni to exotic toppings like tandoori chicken and paneer tikka, all made with fresh ingredients and baked to perfection. Our commitment to quality ensures a crispy crust and gooey cheese with every bite.."
    },
    {
      
      content: "In addition to our pizza offerings, we serve up a mouth-watering selection of Indian dishes such as butter chicken, goat curry, and vegetable biryani, prepared with care and attention to detail using traditional spices and cooking techniques to bring out the flavors of India."
    },
    {
      
      content: "At Indian Rasoi, we understand the importance of catering to diverse dietary needs. That's why we offer Halal options for our Muslim patrons and gluten-free options for those with dietary restrictions. Everyone deserves to enjoy a delicious meal, and we are here to make that happen."
    },
    {
    
      content: "Planning an event? Let us take care of the catering for you. Our catering services are available for all types of events, from birthday parties to wedding functions, ensuring that your guests will be treated to a memorable dining experience filled with flavorful food.."
    },
    {
      
      content: "Visit us at Indian Rasoi Curry House and Pizzeria in Abbotsford to experience the best of Indian cuisine with our wide variety of offerings, including Halal and gluten-free options. We look forward to serving you and making your experience a truly special one. have the right to access, correct, or delete your personal information. Contact us if you wish to exercise these rights."
    },
    {
      
      content: "We may update our Privacy Policy from time to time. We will notify you of any significant changes through our website or other communication channels."
    },
   
  ]
};

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: 'https://img.freepik.com/premium-photo/assorted-indian-food-black-background-copy-space_1319109-8691.jpg',
      content: 'from the freshest ingredients to the most innovative techniques, we have spared no effort in bringing you a dining experience that is truly exceptional. Join us and savor the flavors of the season.',
    },
    {
      image: 'https://www.shutterstock.com/image-photo/close-professional-chef-serving-pasta-600nw-2481669133.jpg',
      content: 'stay tuned for the grand openenig of our newest loaction in abbotsford, and join us for our grand reveal.',
    },
    {
      image: 'https://static.vecteezy.com/system/resources/previews/037/349/394/non_2x/ai-generated-this-is-a-male-chef-on-a-commercial-cooking-stove-free-photo.jpg',
      content: 'stay tuned for the grand openenig of our newest loaction in abbotsford, and join us for our grand reveal.',
    },
    {
      image: 'https://i.ytimg.com/vi/vwLvogxr0uU/sddefault.jpg',
      content: 'from the freshest ingredients to the most innovative techniques, we have spared no effort in bringing you a dining experience that is truly exceptional. Join us and savor the flavors of the season.',
    },
    {
      image: 'https://img.freepik.com/premium-photo/bowl-coffee-with-coffee-beans-floating-air_719364-1600.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717632000&semt=ais_user',
      content: 'stay tuned for the grand openenig of our newest loaction in abbotsford, and join us for our grand reveal.',
    },
  ];

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    // GSAP animation to move the <h2> from below to its normal position
    gsap.fromTo(
      ".gsap-h2",
      { y: 50, opacity: 0 },  // Starting point (50px below, invisible)
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }  // Ending point (normal position, visible)
    );
  }, [currentIndex]); // Re-run animation when slide changes

  useEffect(() => {
    // GSAP ScrollTrigger animation for <p> tag
    gsap.from(".gsap-p", {
      x: -100, // Start 100px left
      opacity: 1, // Start invisible
      duration: 1, // Duration of the animation
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".gsap-p", // Trigger animation when <p> comes into view
        start: "top 80%", // Animation starts when the top of <p> reaches 80% of the viewport height
        toggleActions: "play none none reset", // Play the animation, no action on other states
      },
    });
  }, [currentIndex]);

  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to detect scroll and update background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // for cards
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    gsap.fromTo(card, 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);


  return (
    <>

<div>
<div className="mt-[130px] h-[80vh] w-full lg:px-0 flex items-center justify-center" >
  {/* Slider Container */}
  <div className="relative flex flex-col lg:flex-row w-full h-full overflow-hidden">
    {/* Content Section */}
    <div className="flex-1 bg-gradient-to-r from-black via-gray-950 to-yellow-800 text-gray-300 p-6 md:p-8 lg:p-12 flex flex-col justify-center h-full order-2 lg:order-1 transition-all duration-500 ease-in-out">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-yellow-800 rounded-full p-2 transition"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      <h2 className="gsap-h2 text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:ml-24">
        Tasty Abbotsford, <br /> Get Ready!
      </h2>

      <p className="gsap-p text-xl md:text-2xl pl-32 md:pl-0 lg:text-3xl lg:ml-44 hover:text-yellow-400">
        {slides[currentIndex].content}
      </p>
    </div>

    {/* Image Section */}
    <div className="flex-1 relative h-full order-1 lg:order-2">
      <img
        src={slides[currentIndex].image}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
      />
      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-yellow-800 rounded-full p-2 transition"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</div>


  {/* Decreased height for this section */}
  <div className="h-auto lg:h-[80vh] transition-all duration-700 ease-in-out shadow-lg bg-black hover:bg-gradient-to-r from-black via-yellow-800 to-red-950">
  {/* Heading */}
  <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white opacity-80 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-yellow-500 py-6">
    Our Popular Dishes
  </h3>

  {/* Cards Container */}
  <div className="flex justify-center gap-4 flex-wrap px-4 py-8">
    {/* Card 1 */}
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[18rem] mx-auto p-4 rounded-lg overflow-hidden shadow-lg text-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="p-4 rounded-lg overflow-hidden shadow-lg bg-black text-white transition-all duration-300 ease-in-out transform hover:skew-y-3 hover:shadow-2xl">
        <img
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 object-cover rounded-full mx-auto"
          src="https://t3.ftcdn.net/jpg/06/01/41/68/360_F_601416862_AfYdeefqT1kGqWTx1DZCsJZVzYIDFzPR.jpg"
          alt="Delicious Food"
        />
        <div className="text-center px-4 py-2">
          <div className="font-bold text-lg mb-1">Butter Chicken</div>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[18rem] mx-auto p-4 rounded-lg overflow-hidden shadow-lg text-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="p-4 rounded-lg overflow-hidden shadow-lg bg-black text-white transition-all duration-300 ease-in-out transform hover:skew-y-3 hover:shadow-2xl">
        <img
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 object-cover rounded-full mx-auto"
          src="https://www.vegrecipesofindia.com/wp-content/uploads/2024/02/dal-makhani-recipe-1.jpg"
          alt="Delicious Food"
        />
        <div className="text-center px-4 py-2">
          <div className="font-bold text-lg mb-1">Dal Makhni</div>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[18rem] mx-auto p-4 rounded-lg overflow-hidden shadow-lg text-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="p-4 rounded-lg overflow-hidden shadow-lg bg-black text-white transition-all duration-300 ease-in-out transform hover:skew-y-3 hover:shadow-2xl">
        <img
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 object-cover rounded-full mx-auto"
          src="https://t4.ftcdn.net/jpg/06/41/69/71/360_F_641697160_Lw5c6PSLkvS5GPkyo37JAp1EHOlBaFK8.jpg"
          alt="Delicious Food"
        />
        <div className="text-center px-4 py-2">
          <div className="font-bold text-lg mb-1">Shahi Paneer</div>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[18rem] mx-auto p-4 rounded-lg overflow-hidden shadow-lg text-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="p-4 rounded-lg overflow-hidden shadow-lg bg-black text-white transition-all duration-300 ease-in-out transform hover:skew-y-3 hover:shadow-2xl">
        <img
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 object-cover rounded-full mx-auto"
          src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/146843-jnxhqckdaa-1598964061.jpg"
          alt="Delicious Food"
        />
        <div className="text-center px-4 py-2">
          <div className="font-bold text-lg mb-1">Fish Curry</div>
        </div>
      </div>
    </div>
  </div>

  {/* View More Menu Button */}
  <div className="flex justify-center items-center h-12  mt-[-10px]">
    <Link to='/viewmoremenu' className="bg-yellow-500 text-black font-bold px-2 py-2  rounded-lg transition duration-300 ease-in-out hover:bg-yellow-600 hover:scale-105">
      View More Menu
    </Link>
  </div>
</div>







</div>
<About/>
<Blog/>
{/* about us */}


      
    
    
  
</>

  );
};

export default Home;
