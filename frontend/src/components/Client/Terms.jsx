import React from 'react';
import { motion } from 'framer-motion';

export default function Terms() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <div>
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
            Terms and Conditions
          </motion.h1>
          <motion.p 
            className="text-sm text-gray-600 mb-4"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 0.1 }}
          ></motion.p>

          <motion.h2 
            className="text-2xl font-semibold mt-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            1. Acceptance of Terms
          </motion.h2>
          <motion.p 
            className="mb-4"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            By accessing our website, you confirm that you are at least 18 years old or have the consent of a parent or guardian. If you are using the website on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
          </motion.p>

          <motion.h2 
            className="text-2xl font-semibold mt-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            2. Use of the Website
          </motion.h2>
          <ul className="list-disc list-inside mb-4">
            <motion.li 
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              You may use the website for lawful purposes only.
            </motion.li>
            <motion.li 
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              You must not use the website in any way that violates any applicable local, national, or international law or regulation.
            </motion.li>
            <motion.li 
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              You must not engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website.
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
            3. Intellectual Property
          </motion.h2>
          <motion.p 
            className="mb-4"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            All content on the Indian Rasoi website, including text, graphics, logos, images, and software, is the property of Indian Rasoi or its content suppliers and is protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </motion.p>

          <motion.h2 
            className="text-2xl font-semibold mt-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1 }}
          >
            4. User Contributions
          </motion.h2>
          <motion.p 
            className="mb-4"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Any User Contributions you make to the website will be considered non-confidential and non-proprietary. By providing any User Contribution, you grant us a right to use, reproduce, modify, publish, distribute, and disclose to third parties such User Contribution for any purpose.
          </motion.p>

          <motion.h2 
            className="text-2xl font-semibold mt-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            5. Ordering and Payment
          </motion.h2>
          <motion.p 
            className="mb-4"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            All orders placed through our website are subject to availability and confirmation of the order price. Prices for our products are subject to change without notice.
          </motion.p>

          <motion.h2 
            className="text-2xl font-semibold mt-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            6. Privacy Policy
          </motion.h2>
          <motion.p 
            className="mb-4"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy for information on how we collect, use, and disclose information about you.
          </motion.p>

          <motion.h2 
            className="text-2xl font-semibold mt-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            7. Limitation of Liability
          </motion.h2>
          <motion.p 
            className="mb-4"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            Indian Rasoi shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the website or any products purchased from the website.
          </motion.p>

          <motion.h2 
            className="text-2xl font-semibold mt-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            8. Indemnification
          </motion.h2>
          <motion.p 
            className="mb-4"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            You agree to indemnify, defend, and hold harmless Indian Rasoi, its affiliates, licensors, and service providers from and against any claims arising out of or relating to your violation of these Terms.
          </motion.p>

          <motion.h2 
            className="text-2xl font-semibold mt-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 2 }}
          >
            9. Changes to Terms
          </motion.h2>
          <motion.p 
            className="mb-4"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 2.1 }}
          >
            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page.
          </motion.p>

          <motion.h2 
            className="text-2xl font-semibold mt-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            10. Governing Law
          </motion.h2>
          <motion.p 
            className="mb-4"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 2.3 }}
          >
            These Terms shall be governed by and construed in accordance with the laws of [Your Country/State].
          </motion.p>

          <motion.h2 
            className="text-2xl font-semibold mt-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 2.4 }}
          >
            11. Contact Us
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            If you have any questions about these Terms, please contact us at [Your Contact Information].
          </motion.p>
        </div>
      </div>
    </div>
  );
}
