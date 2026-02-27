import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // ✅ correct
import Navbar from "./components/Navbar";
import Products from "./pages/Product";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from "./pages/Checkout";


function App() {
  return (
    <CartProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </CartProvider>
  );
}

export default App;
