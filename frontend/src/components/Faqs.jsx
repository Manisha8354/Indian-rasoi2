import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

function Faqs() {
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
      <div className="bg-gradient-to-r from-red-900 via-yellow-800 to-orange-900 py-5">
        {/* Heading Section */}
        <div className="font-bold flex flex-col gap-6 items-center text-white">
          <p className="text-2xl">How to Invest?</p>
          <h1 className="text-5xl">
            It’s really <span className="text-yellow-400">simple</span> with Grip
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
            <img src='https://files.oaiusercontent.com/file-yrmCH1ejleWfJBflHly0T6Y2?se=2024-10-04T10%3A55%3A22Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D273bb471-de02-4ffe-a66e-59304ea555c4.webp&sig=eThaSBRN8qE2GNJ4dKEhYuvH4iJQzYrnfi4uXDC8ioY%3D' alt="Mobile FAQ" className="w-96 object-contain" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;
