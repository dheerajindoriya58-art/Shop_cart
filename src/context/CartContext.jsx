import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducers/cartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item or increase qty
  const add = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  // Decrease qty
  const removeOne = (id) =>
    dispatch({ type: "REMOVE_ONE", payload: id });

  // Delete entire product
  const deleteItem = (id) =>
    dispatch({ type: "DELETE_ITEM", payload: id });

  // Clear full cart
  const clear = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider value={{ cart, add, removeOne, deleteItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);


