import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CategoryPage() {
  const { name } = useParams();
  const { add } = useCart();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${name}`)
      .then((res) => res.json())
      .then(setProducts);
  }, [name]);

  return (
    <div>
      <h1>Category: {name}</h1>

      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <img src={p.image} width="100"/>
          <p>${p.price}</p>
          <NavLink to={`/product/${p.id}`}>View</NavLink>
          <button onClick={() => add(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
