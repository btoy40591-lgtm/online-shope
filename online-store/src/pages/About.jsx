import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 mt-10">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center text-indigo-600 mb-8"
      >
        About Us
      </motion.h1>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <motion.img
            initial={{ opacity: 0 }} // start transparent
            animate={{ opacity: 1 }} // fade in
            transition={{ duration: 1 }} // fade in duration
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="About Store"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to Our Online Store
          </h2>
          <p className="text-gray-600 mb-4">
            We provide high quality fashion products with affordable prices. Our
            goal is to make customers happy and confident with our style.
          </p>
          <p className="text-gray-600 mb-6">
            Founded in 2026, we continue to grow and bring the latest trends
            directly to you.
          </p>

          <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Shop Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}
