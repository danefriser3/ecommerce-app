import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded shadow-[-2px_2px_6px_2px_rgba(0,0,0,0.3)] flex flex-col justify-between hover:shadow-[-2px_2px_6px_2px_rgba(0,0,0,0.5)] transition-shadow">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-32 object-contain mb-4 rounded"
        />
        <h3 className="text-lg font-bold">{product.title}</h3>
        <p className="text-gray-600 mb-4">${product.price}</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex gap-2 w-fit"
      >
        <ShoppingCartIcon />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
