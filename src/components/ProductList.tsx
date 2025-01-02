import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { FC } from "react";
import { useEffect } from "react";

const ProductList: FC = () => {
  const { addToCart, categories, products, fetchProducts } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    if (selectedCategory !== "all")
      fetch("https://dummyjson.com/products/category/" + selectedCategory)
        .then((res) => res.json())
        .then((data) => {
          fetchProducts(data.products);
          setSearchProduct("");
        });
    else
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((json) => fetchProducts(json.products));
  }, [selectedCategory]);
  useEffect(() => {
    if (searchProduct)
      fetch("https://dummyjson.com/products/search?q=" + searchProduct)
        .then((res) => res.json())
        .then((json) => fetchProducts(json.products));
    else
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((json) => fetchProducts(json.products));
  }, [searchProduct]);

  return (
    <div className="p-4">
      <div className="flex flex-row gap-0">
        <input
          disabled={selectedCategory !== "all"}
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          className="text-black px-4 py-2 w-1/5 border border-gray-400 rounded-xl rounded-r-none border-r-0"
          placeholder="Search Product"
        />
        <select
          disabled={searchProduct !== ""}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="text-black px-4 py-2 w-1/12 border border-gray-400 rounded-xl rounded-l-none"
        >
          <option value="all">All</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 p-3">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
