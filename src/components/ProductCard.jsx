import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { add } = useCart();

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "20px 0",
        width: "250px",
        borderRadius: "10px",
      }}
    >
      <h3>{product.title}</h3>

      <img
        src={product.image}
        style={{ width: "150px", height: "150px", objectFit: "contain" }}
      />

      <p>${product.price}</p>

      <NavLink to={`/product/${product.id}`}>View Details</NavLink>

      <button onClick={() => add(product)} style={{ marginLeft: "10px" }}>
        Add to Cart
      </button>
    </div>
  );
}
