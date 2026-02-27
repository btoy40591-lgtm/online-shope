import { useState, useEffect } from "react";
import products from "../data/products";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductSlider() {
  const [slide, setSlide] = useState(0);

  const itemsPerSlide = 5; // max for desktop
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  // 🔥 Auto slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev >= totalSlides ? prev : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slide === totalSlides) {
      setTimeout(() => {
        setSlide(0);
      }, 700); // must match transition duration
    }
  }, [slide, totalSlides]);

  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0 }} // start transparent
        animate={{ opacity: 1 }} // fade in
        transition={{ duration: 1 }} // fade in duration
        className="text-center mb-3 mt-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Top Products
        </h2>
        <p className="text-gray-500 mt-3">Discover our most popular items</p>
      </motion.div>

      {/* SLIDER */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${slide * 100}%)`,
          }}
        >
          {Array.from({ length: totalSlides + 1 }).map((_, index) => {
            const start = index * itemsPerSlide;
            const slideProducts =
              index === totalSlides
                ? products.slice(0, itemsPerSlide) // clone first slide
                : products.slice(start, start + itemsPerSlide);

            return (
              <div
                key={index}
                className="min-w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
              >
                {slideProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                  >
                    <motion.img
                      initial={{ opacity: 0 }} // start transparent
                      animate={{ opacity: 1 }} // fade in
                      transition={{ duration: 1 }} // fade in duration
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <h3 className="font-semibold mt-3">{product.name}</h3>
                    <p className="text-gray-500">{product.price}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* View All Button Only */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/products")}
          className="px-8 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-700 transition cursor-pointer"
        >
          View All
        </button>
      </div>
    </div>
  );
}
