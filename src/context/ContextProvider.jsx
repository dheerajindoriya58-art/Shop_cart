import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("save");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("save", JSON.stringify(cart));
  }, [cart]);


  const AddToCart = (product) => {
    const existed = cart.find((item) => item.id === product.id);

    if (existed) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateItem = (id, newQty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: newQty } : item
      )
    );
  };

  const totalPrice = cart.reduce((acc, cur) => acc + cur.price * cur.qty, 0);

  return (
    <ProductContext.Provider
      value={{ cart, AddToCart, removeItem, updateItem, totalPrice }}>
      {children}
    </ProductContext.Provider>
  );
};

// CUSTOM HOOK
export const useCart = () => useContext(ProductContext);


// import React, { createContext, useContext, useReducer } from "react";
// import { cartReducer } from "./cartReducer";

// const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//   // initial state is an array
//   const [cart, dispatch] = useReducer(cartReducer, []);

//   const AddToCart = (product) =>
//     dispatch({ type: "ADD_TO_CART", payload: product });

//   const removeItem = (id) =>
//     dispatch({ type: "REMOVE_ITEM", payload: id });

//   const updateItem = (id, qty) =>
//     dispatch({ type: "UPDATE_QTY", payload: { id, qty } });

//   const totalPrice = cart.reduce((acc, cur) => acc + cur.price * cur.qty, 0);

//   return (
//     <ProductContext.Provider value={{ cart, AddToCart, removeItem, updateItem, totalPrice }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export const useCart = () => useContext(ProductContext);
