import React from 'react'

import { motion } from 'framer-motion';

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

export default function About() {
  return (
    <div>
       
    <div className="min-h-screen bg-gray-100 text-gray-900 ">
      {/* Header */}
      <header className="bg-yellow-900 text-white py-6">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
            className="text-3xl font-bold"
          >
            {privacyPolicyContent.title}
          </motion.h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
            className="bg-white shadow-md rounded-lg p-6 mb-8"
          >
            <p>{privacyPolicyContent.introduction}</p>
          </motion.section>

          {privacyPolicyContent.sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 4, delay: index * 0.3 }}
              className="bg-white shadow-md rounded-lg p-6 mb-8"
            >
              <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
              <p>{section.content}</p>
            </motion.section>
          ))}
        </div>
      </main>

      {/* Footer */}
     
    </div>
    </div>
  )
}
