import React, { useState, useEffect , useRef} from 'react';
import 'tailwindcss/tailwind.css';
import { gsap } from 'gsap';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome for arrow icons




import { motion } from 'framer-motion';
import Blog from './Blog';
import About from './About';
import { Link } from 'react-router-dom';

// testimonial
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
  // testimonial
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


  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: 'https://img.freepik.com/premium-photo/assorted-indian-food-black-background-copy-space_1319109-8691.jpg',
      content: 'Your go-to destination for a delightful fusion of Indian flavors right here in Abbotsford. As a take-out only restaurant,',
    },
    {
      image: 'https://www.shutterstock.com/image-photo/close-professional-chef-serving-pasta-600nw-2481669133.jpg',
      content: 'we pride ourselves on offering a diverse menu that features a wide variety of pizzas and authentic Indian dishes.',
    },
    {
      image: 'https://static.vecteezy.com/system/resources/previews/037/349/394/non_2x/ai-generated-this-is-a-male-chef-on-a-commercial-cooking-stove-free-photo.jpg',
      content: 'Enjoy our culinary creations from the comfort of your own home, and experience the magic of Indian Rasoi!as.',
    },
    {
      image: 'https://i.ytimg.com/vi/vwLvogxr0uU/sddefault.jpg',
      content: 'Your go-to destination for a delightful fusion of Indian flavors right here in Abbotsford. As a take-out only restaurant,',
    },
    {
      image: 'https://img.freepik.com/premium-photo/bowl-coffee-with-coffee-beans-floating-air_719364-1600.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717632000&semt=ais_user',
      content: 'we pride ourselves on offering a diverse menu that features a wide variety of pizzas and authentic Indian dishes.',
    },
  ];

  // faq
  const faqs = [
    {
      question: "Do you offer Halal options??",
      answer:
        " Yes, Halal options are also available upon request.",
    },
    {
      question: "Are there gluten-free options available?",
      answer: " Absolutely! We have a selection of gluten-free pizzas and dishes.",
    },
    {
      question: "Can I place an order for pickup?",
      answer: " Yes, we are a take-out restaurant. Place your order via phone, through our website, Doordash, Skip the dishes or Uber Eats.",
  
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
//  faq
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setExpandedIndex((prevIndex) => {
        if (prevIndex === null) {
          return 0; // Start with the first FAQ
        }
        return (prevIndex + 1) % faqs.length; // Cycle through the FAQs
      });
    }, 3000); // 3 seconds delay

    return () => clearInterval(interval); // Cleanup the interval
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
        Welcome to Indian <br /> Rasoi
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
          src="https://st.depositphotos.com/1003814/5052/i/450/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg"
          alt="Delicious Food"
        />
        <div className="text-center px-4 py-2">
          <div className="font-bold text-lg mb-1">Tandoori Pizza</div>
        </div>
      </div>
    </div>
  </div>

  {/* View More Menu Button */}
  <div className="flex justify-center items-center h-12  mt-[-10px]">
    <Link to='/order' className="bg-yellow-500 text-black font-bold px-2 py-2  rounded-lg transition duration-300 ease-in-out hover:bg-yellow-600 hover:scale-105">
      View More Menu
    </Link>
  </div>
</div>







</div>
{/* about us */}

<div className="min-h-screen lg:h-[80vh] transition-all duration-700 ease-in-out shadow-lg bg-gradient-to-r from-black via-yellow-800 to-red-950 ">
      <div className="h-32 flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4 hover:text-yellow-300 transition duration-300 ease-in-out"
        >
          Who We Are
        </motion.h2>
      </div>

      {/* Container for the content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        
        {/* Image Section - two images on the left side */}
        <div className="md:w-1/2 flex flex-col space-y-4 md:space-y-8 overflow-hidden">
          <motion.img
            src="https://img.grouponcdn.com/deal/3cNassrMgFWYb39wxt4QvbzDuFxU/3c-1452x871/v1/t600x362.webp"
            alt="Indian Rasoi Dish 1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="rounded-lg shadow-lg w-full h-auto max-h-48 object-cover mx-auto md:mx-0"
          />
          <motion.img
            src="https://c0.wallpaperflare.com/preview/308/461/142/indian-food-indian-kitchen-meal-cooking.jpg"
            alt="Indian Rasoi Dish 2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="rounded-lg shadow-lg w-full h-auto max-h-48 object-cover mx-auto md:mx-0"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Welcome to Indian Rasoi Curry House and Pizzeria
          </motion.h1>

          <div className="space-y-4"> {/* Add space between paragraphs */}
            {[
              "Indian Rasoi Curry House and Pizzeria was founded with a passion for bringing authentic Indian flavors and delicious pizza to the Abbotsford community.",
              " Our chefs are dedicated to preparing each dish with the finest ingredients and traditional spices, ensuring a genuine taste of India in every bite. Whether you're craving pizza or traditional Indian cuisine, we have something for everyone!",
              "We also serve Indian favorites such as butter chicken and vegetable biryani, crafted with traditional spices for authentic flavors.",
              "We cater to diverse dietary needs, offering Halal and gluten-free options so everyone can enjoy our meals.",
              "Planning an event? We offer catering services for all occasions!",
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 + index * 0.3 }} // Add staggered delay
                className="text-yellow-200 leading-relaxed mb-4"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </div>




<Blog/>

{/* faqs */}

<div className="bg-gradient-to-r from-red-900 via-yellow-800 to-orange-900 py-5">
        {/* Heading Section */}
        <div className="font-bold flex flex-col gap-6 items-center text-white">
          
          <h1 className="text-5xl">
            It’s really <span className="text-yellow-400">simple</span> with Indian Rasoi
          </h1>
        </div>

        {/* FAQ and Image Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mx-5 my-10">
          
          {/* FAQ Section (Left Side) */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-8 text-white">Frequently Asked Questions</h1>

            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-yellow-300 mb-4 p-4 rounded-lg bg-yellow-900 bg-opacity-70 shadow-lg"
                initial={{ opacity: 0, height: "auto" }}
                animate={{
                  opacity: expandedIndex === index ? 1 : 0.9,
                  height: expandedIndex === index ? "auto" : "auto",
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="cursor-pointer text-lg font-semibold text-yellow-300 flex justify-between items-center"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  {faq.question}
                  <motion.div
                    className="ml-2"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  >
                    ▼
                  </motion.div>
                </div>

                {expandedIndex === index && (
                  <motion.p
                    className="text-yellow-200 mt-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Image Section (Right Side) */}
          <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
  <img
    src='https://files.oaiusercontent.com/file-yrmCH1ejleWfJBflHly0T6Y2?se=2024-10-04T10%3A55%3A22Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D273bb471-de02-4ffe-a66e-59304ea555c4.webp&sig=eThaSBRN8qE2GNJ4dKEhYuvH4iJQzYrnfi4uXDC8ioY%3D'
    alt="Mobile FAQ"
    className="w-96 object-contain transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
  />
</div>

        </div>
      </div>   
{/* testimonial  */}




    
  
</>

  );
};

export default Home;
