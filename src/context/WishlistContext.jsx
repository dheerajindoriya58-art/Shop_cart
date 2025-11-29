import { createContext, useContext, useEffect, useReducer } from "react";
import { wishlistReducer } from "../reducers/wishlistReducer";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, dispatch] = useReducer(wishlistReducer, [], () => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) =>
    dispatch({ type: "ADD_WISHLIST", payload: product });

  const removeFromWishlist = (id) =>
    dispatch({ type: "REMOVE_WISHLIST", payload: id });

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
