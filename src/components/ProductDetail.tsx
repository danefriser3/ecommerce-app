import React from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import { ArrowBack, ShoppingCart } from "@mui/icons-material";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id || "", 10));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-64 object-contain mb-4 rounded"
      />
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-600 mb-4">${product.price}</p>
      <p className="text-gray-700 mb-6">{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
      >
        <ShoppingCart />
        Add to Cart
      </button>
      <Link to="/" className="text-blue-500 hover:underline flex items-center gap-2 mt-4">
        <ArrowBack />
        Back to Products
      </Link>
    </div>
  );
};

export default ProductDetail;
