import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.length === 0 && <p>Loading...</p>}

      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "20px" }}>
          <h3>{p.title}</h3>
          <img src={p.image} width="100" />
          <p>₹ {p.price}</p>

          <Link to={`/product/${p.id}`}>View Details</Link>
          <br />

          <button onClick={() => addToCart(p)}>Add to Cart</button>

          <hr />
        </div>
      ))}
    </div>
  );
}
