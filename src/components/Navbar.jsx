import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <div className="navbar-section">
      <div className="container">
        <div className="navbar grid grid-two-box">

          <div className="logo">
            <h1>Shop</h1>
          </div>

          <nav>
            <ul>
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
      </div>



    </div>

  );
}