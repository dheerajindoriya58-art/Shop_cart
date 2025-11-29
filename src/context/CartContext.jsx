import { createContext, useContext, useEffect, useReducer } from "react";
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

  const add = (product) => dispatch({ type: "ADD", payload: product });
  const removeOne = (id) => dispatch({ type: "REMOVE_ONE", payload: id });
  const deleteItem = (id) => dispatch({ type: "DELETE", payload: id });

  const totalQty = cart.reduce((a, b) => a + b.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, add, removeOne, deleteItem, totalQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
