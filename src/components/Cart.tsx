import React from "react";
import { useCart } from "../context/CartContext";
import {
  Add,
  DeleteOutline,
  Paid,
  PlaylistRemove,
  Remove,
} from "@mui/icons-material";
import { useEffect } from "react";

const Cart: React.FC = () => {
  const {
    cart,
    removeFromCart,
    removeOneFromCart,
    total,
    emptyCart,
    addToCart,
  } = useCart();

  const [bought, setBought] = React.useState(false);
  useEffect(() => {
    if (bought) {
      setTimeout(() => {
        setBought(false);
        window.location.href = "/";
      }, 3000);
    }
  }, [bought]);
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-2xl mb-4">Shopping Cart</h2>
        <button
          disabled={cart.length === 0}
          onClick={() => emptyCart()}
          className="text-black hover:underline flex flex-row bg-red-400 rounded-lg py-1 px-2 shadow-[-2px_2px_6px_2px_rgba(0,0,0,0.5)]"
        >
          <DeleteOutline fontSize="small" />
          <span>Empty</span>
        </button>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="table-auto w-full border-collapse border rounded-lg shadow-[-2px_2px_6px_2px_rgba(0,0,0,0.5)] border-gray-300">
            <thead>
              <tr className="">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Product
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Quantity
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Price
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Total
                </th>
                <th className="border border-gray-300 px-4 py-2 w-0"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.price * (product.quantity ?? 0)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex flex-row gap-4">
                      <div className="flex flex-row gap-0 rounded-lg shadow-[-2px_2px_6px_2px_rgba(0,0,0,0.5)] w-fit">
                        <button
                          onClick={() => removeOneFromCart(product.id)}
                          className="text-black hover:underline flex flex-row items-center bg-yellow-200 rounded-lg rounded-r-none py-1 px-2"
                        >
                          <Remove fontSize="small" />
                          <span>1</span>
                        </button>
                        <button
                          onClick={() => addToCart(product)}
                          className="text-black hover:underline flex flex-row items-center bg-green-400 rounded-lg rounded-l-none py-1 px-2"
                        >
                          <Add fontSize="small" />
                          <span>1</span>
                        </button>
                      </div>
                      <div className="flex flex-row gap-0 rounded-lg shadow-[-2px_2px_6px_2px_rgba(0,0,0,0.5)] w-fit">
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-black hover:underline flex flex-row items-center bg-red-400 rounded-lg py-1 px-2"
                        >
                          <PlaylistRemove fontSize="small" />
                          <span> All</span>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h3 className="text-xl font-bold mt-4">
              Total: ${total.toFixed(2)}
            </h3>
            <button
              onClick={() => {
                emptyCart();
                setBought(true);
              }}
              className="text-black hover:underline flex flex-row items-center gap-2 bg-blue-400 rounded-lg py-1 px-2 shadow-[-2px_2px_6px_2px_rgba(0,0,0,0.5)]"
            >
              <Paid fontSize="small" /> Buy now
            </button>
          </div>
        </div>
      )}

      {bought && (
        <div className="place-self-center p-12 text-xl w-2/5 border border-gray-300 rounded-lg flex flex-col gap-4 items-center shadow-[-2px_2px_6px_2px_rgba(0,0,0,0.5)]">
          <p>Thanks for buying with us!</p>
          <p>Redirecting to the homepage...</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
