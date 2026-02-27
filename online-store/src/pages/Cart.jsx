import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <motion.div
     initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
     className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-20">
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-3xl font-extrabold text-gray-800">Your Cart</h1>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
          {cart.length} {cart.length === 1 ? "Item" : "Items"}
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg italic">
            Your cart is currently empty.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <h2 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h2>
                  <p className="text-gray-600">
                    ${item.price.toFixed(2)}{" "}
                    <span className="text-gray-400 mx-1">×</span>{" "}
                    {item.quantity}
                  </p>
                </div>

                <div className="text-right flex flex-col items-end">
                  <span className="font-bold text-gray-900 mb-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm font-medium text-red-500 hover:text-red-700 hover:underline transition-all"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-medium text-gray-600">
                Total Amount:
              </span>
              <span className="text-3xl font-bold text-gray-900">
                ${total.toFixed(2)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={clearCart}
                className="w-full py-3 px-4 border border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Clear Cart
              </button>
              <button onClick={() => navigate("/checkout")} className="w-full py-3 px-4 bg-indigo-500 text-white font-semibold rounded-lg hover:bg--700 shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}
