import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
    const { add } = useCart();

    return (
        <div >
            <h3>{product.title}</h3>
            <img src={product.image} />
            <p>${product.price}</p>

            <NavLink to={`/product/${product.id}`}>View Details</NavLink>
            <button onClick={() => add(product)}>
                Add to Cart
            </button>
        </div>
    );
}
