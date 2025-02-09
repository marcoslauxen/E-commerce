import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const useCart = () => useContext(CartContext);

export default useCart;
