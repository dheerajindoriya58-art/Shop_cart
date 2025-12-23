import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const { cart } = useCart();

  return (
    <div className="w-full shadow-md">
      <div className="max-w-[1070px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <h1 className="text-xl font-bold">Shop</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center">
            <li>
              <NavLink to="/" className="hover:text-blue-600">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="hover:text-blue-600">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="hover:text-blue-600">
                🛒 Cart ({cart.length})
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenu(!menu)}
            className="md:hidden bg-black text-white px-3 py-2 rounded"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <ul className="md:hidden flex flex-col gap-4 py-4">
            <li>
              <NavLink onClick={() => setMenu(false)} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setMenu(false)} to="/products">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setMenu(false)} to="/cart">
                🛒 Cart ({cart.length})
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
