
"use client";

import { motion } from "framer-motion";


const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-50 to-white py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Text Section with animation */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Discover Your Next <span className="text-yellow-600">Great Read</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Explore thousands of books from every genre. Dive into worlds, ideas, and knowledge with every page.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition"
            >
              Shop Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-yellow-600 text-yellow-600 px-6 py-3 rounded-full hover:bg-yellow-100 transition"
            >
              Browse Categories
            </motion.button>
          </div>
        </motion.div>

        {/* Image Section with fade-in */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Bookshelf"
            className="rounded-xl shadow-lg max-h-[400px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;



