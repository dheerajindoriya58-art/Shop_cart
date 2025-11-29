import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function Navbar() {
  const { totalQty } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <nav style={{ background: "#222", color: "white", padding: "15px" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
      <Link to="/products" style={{ color: "white", marginRight: "15px" }}>Products</Link>

      <Link to="/wishlist" style={{ color: "white", marginRight: "15px" }}>
        ❤️ Wishlist ({wishlistCount})
      </Link>

      <Link to="/cart" style={{ color: "white" }}>
        🛒 Cart ({totalQty})
      </Link>
    </nav>
  );
}
