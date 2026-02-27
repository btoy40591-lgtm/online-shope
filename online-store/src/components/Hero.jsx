import React from "react";
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";

const Hero = () => {
    const navigate = useNavigate();

  return (
    <section className="relative bg-gray-900 text-white">

      {/* Background Image */}
      <div
      
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            `url(https://i.pinimg.com/1200x/12/1e/fb/121efb883a0c027c3e47d9219fc15f71.jpg)`,
        }}
      ></div>

      {/* Content */}
      <motion.div 
       initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      
      className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover Amazing Products
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Shop the latest trends with the best prices and quality guaranteed.
        </p>

        <button onClick={() => navigate("/products")} className="bg-indigo-500 hover:bg-indigo-700 px-8 py-3 rounded-lg text-lg font-semibold transition duration-300 cursor-pointer">
          Shop Now
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;