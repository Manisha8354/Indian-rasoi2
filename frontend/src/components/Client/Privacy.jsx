import React from 'react';
import { motion } from 'framer-motion';

export default function Privacy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-12 px-4 mt-[100px]">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-8">
        <motion.h1 
          className="text-4xl font-bold mb-6 text-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          Privacy Policy
        </motion.h1>
        <motion.p 
          className="text-sm text-gray-600 mb-4 text-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          
        </motion.p>

        <motion.h2 
          className="text-2xl font-semibold mt-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          1. Introduction
        </motion.h2>
        <motion.p 
          className="mb-4"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Welcome to Indian Rasoi's Privacy Policy. Your privacy is important to us. This policy outlines the types of personal information we collect, how we use it, and your rights regarding your data.
        </motion.p>

        <motion.h2 
          className="text-2xl font-semibold mt-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          2. Information We Collect
        </motion.h2>
        <ul className="list-disc list-inside mb-4">
          <motion.li 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Personal Information: Name, email address, contact number, etc.
          </motion.li>
          <motion.li 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Usage Data: Information on how you use our website.
          </motion.li>
          <motion.li 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Cookies: We use cookies to enhance your experience on our website.
          </motion.li>
        </ul>

        <motion.h2 
          className="text-2xl font-semibold mt-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          3. How We Use Your Information
        </motion.h2>
        <p className="mb-4">
          We may use the information we collect in the following ways:
        </p>
        <ul className="list-disc list-inside mb-4">
          <motion.li 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            To provide and maintain our service.
          </motion.li>
          <motion.li 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1 }}
          >
            To notify you about changes to our service.
          </motion.li>
          <motion.li 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            To allow you to participate in interactive features when you choose to do so.
          </motion.li>
          <motion.li 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            To provide customer support.
          </motion.li>
          <motion.li 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            To gather analysis or valuable information so that we can improve our service.
          </motion.li>
        </ul>

        <motion.h2 
          className="text-2xl font-semibold mt-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          4. Data Security
        </motion.h2>
        <motion.p 
          className="mb-4"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          We take the security of your data seriously and implement reasonable security measures to protect it. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
        </motion.p>

        <motion.h2 
          className="text-2xl font-semibold mt-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          5. Your Rights
        </motion.h2>
        <motion.p 
          className="mb-4"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          You have the right to:
        </motion.p>
        <ul className="list-disc list-inside mb-4">
          <motion.li 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            Request access to your personal information.
          </motion.li>
          <motion.li 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            Request correction of your personal information.
          </motion.li>
          <motion.li 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 2 }}
          >
            Request deletion of your personal information.
          </motion.li>
          <motion.li 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 2.1 }}
          >
            Object to the processing of your personal information.
          </motion.li>
        </ul>

        <motion.h2 
          className="text-2xl font-semibold mt-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, delay: 2.2 }}
        >
          6. Changes to This Privacy Policy
        </motion.h2>
        <motion.p 
          className="mb-4"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, delay: 2.3 }}
        >
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </motion.p>

        <motion.h2 
          className="text-2xl font-semibold mt-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, delay: 2.4 }}
        >
          7. Contact Us
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].
        </motion.p>
      </div>
    </div>
  );
}
