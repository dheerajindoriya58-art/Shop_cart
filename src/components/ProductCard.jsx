import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
    const { add } = useCart();

    return (
        <div className="card">
            <h3>{product.title}</h3>
            <img src={product.image} />
            <p>${product.price}</p>

            <button onClick={() => add(product)}>
                Add to Cart
            </button>
        </div>
    );
}
