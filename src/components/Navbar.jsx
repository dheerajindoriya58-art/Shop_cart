import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <header className="nav-header">
      <div className="navbar container grid grid-two-box">

        <div className="logo">
          <h1>Shop</h1>
        </div>

        <nav className="nav-link">

          <ul className="flex-end">
            <li> <NavLink to="/">Home</NavLink> </li>
            <li>
              <NavLink to="/products">Products</NavLink></li>
            <li>
              <NavLink to="/cart">
                🛒 Cart ({cart.length})
              </NavLink>
            </li>
          </ul>

        </nav>
      </div>


    </header>

  );
}