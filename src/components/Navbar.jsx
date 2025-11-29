import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav style={{ background: "#222", color: "white", padding: "15px" }}>
      <NavLink to="/" style={{ color: "white", marginRight: "15px" }}>Home</NavLink>
      <NavLink to="/products" style={{ color: "white", marginRight: "15px" }}>Products</NavLink>

      <NavLink to="/cart" style={{ color: "white" }}>
        🛒 Cart ({cart.length})
      </NavLink>
    </nav>
  );
}
