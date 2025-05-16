"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ImageRow = () => {
  return (
    <section className="pb-4 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          
          {/* Left Image - Animate from Left */}
          <motion.img
            src="https://content-enus.bwbcovers.com/content/images/jumbotron/LFL-2025-revised.png"
            alt="Little Free Library"
            className="h-72 w-5xl rounded-xl shadow-md"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Right Image - Animate from Right */}
          <motion.img
            src="https://content-enus.bwbcovers.com/content/images/jumbotron/Grad-2025-revised.png"
            alt="Gifts for Graduates"
            className="h-72 w-5xl rounded-xl shadow-md"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

        </div>

        <div className=" py-5 flex flex-col md:flex-row items-center justify-center gap-6">
          
          {/* Left Image - Animate from Left */}
          <motion.img
            src="https://share.trustpilot.com/images/company-rating?locale=en-GB&businessUnitId=5c6315a958ba3f0001df9873"
            alt="Little Free Library"
            className="h-72 w-5xl rounded-xl shadow-md"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Right Image - Animate from Right */}
          <motion.img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/5d7023175807253.Y3JvcCw3NzQsNjA2LDUsMA.png"
            alt="Gifts for Graduates"
            className="h-72 w-5xl rounded-xl shadow-md"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

        </div>

      </div>
    </section>
  );
};

export default ImageRow;
