import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { add } = useCart();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>
      <img src={product.image} width="200" />
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>

      <button onClick={() => add(product)}>Add to Cart</button>
    </div>
  );
}
