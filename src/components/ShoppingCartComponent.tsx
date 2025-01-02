import { ShoppingCart } from "@mui/icons-material";
import { useCart } from "../context/CartContext";

export const ShoppingCartComponent = () => {
  const { cart } = useCart();
  return (
    <>
      <ShoppingCart /> {cart.length} Cart
    </>
  );
};
