import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { add } = useCart();

  return (
    <div className="border rounded-lg shadow-md p-4 
      hover:shadow-xl transition 
      flex flex-col"
    >
      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-4"
      />

      {/* Title */}
      <h3 className="text-sm md:text-base font-semibold mb-2 line-clamp-2">
        {product.title}
      </h3>

      {/* Price */}
      <p className="text-lg font-bold mb-4">${product.price}</p>

      {/* Button */}
      <button
        onClick={() => add(product)}
        className="mt-auto bg-black text-white px-6 py-2 rounded 
        hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
