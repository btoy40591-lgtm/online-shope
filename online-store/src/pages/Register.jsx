// App.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    
    className="min-h-screen flex items-center justify-center bg-gray-100 mt-10">
      <div className="bg-white rounded-xl shadow-lg flex max-w-4xl w-full overflow-hidden">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-2">
            Join Our Online Store Today
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Create your account to enjoy exclusive deals, fast checkout, and secure shopping.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your Full Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="password"
              placeholder="Create a secure password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Create Shopping Account
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-3 mb-4">
            <button className="flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100">
              <img
                src="https://i.pinimg.com/736x/2f/80/9e/2f809e3268f29a6f81eca9b0864af1d1.jpg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>
            <button className="flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"
                alt="Facebook"
                className="w-5 h-5 mr-2"
              />
              Continue with Facebook
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-500">
              Sign in to shop
            </Link>
          </p>

          <p className="text-xs text-gray-300 mt-2">
            By creating an account, you agree to our{" "}
            <a href="#" className="underline">
              Terms & Conditions
            </a>
            .
          </p>
        </div>

        {/* Right side - Image and testimonial */}
        <div className="hidden md:flex w-1/2 relative bg-gray-50">
          <img
            src="https://i.pinimg.com/736x/21/da/6d/21da6d53ae606125252c72aceb7f131e.jpg"
            alt="Happy Customer"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg max-w-xs">
            <p className="text-sm">
              "I found amazing deals and my orders arrived quickly! This is now
              my favorite online shopping store."
            </p>
            <p className="text-xs mt-2 font-semibold">
              Jessica Brown | Verified Customer | New York, USA
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;