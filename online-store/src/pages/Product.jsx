import products from "../data/products";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function Products() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-4 gap-6 mt-10">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg">
          <motion.img
           initial={{ opacity: 0 }} // start transparent
      animate={{ opacity: 1 }} // fade in
      transition={{ duration: 1 }} // fade in duration
           src={product.image} alt={product.name} />
          <h2 className="font-bold">{product.name}</h2>
          <p>${product.price}</p>

          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 mt-2 cursor-pointer"
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}