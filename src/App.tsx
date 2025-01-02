import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import { CartProvider } from "./context/CartContext";
import { ShoppingCartComponent } from "./components/ShoppingCartComponent";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col h-screen overflow-auto">
          <header className="p-4 flex flex-row justify-between items-center border-b border-gray-200  shadow-[0px_1px_5px_rgba(0,0,0,0.5)]">
            <h1 className="text-2xl font-bold">eCommerce App</h1>
            <div>
              <Link to="/" className="mr-4 text-blue-500 hover:underline">
                Products
              </Link>
              <Link to="/cart" className="text-blue-500 hover:underline">
                <ShoppingCartComponent />
              </Link>
            </div>
          </header>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
