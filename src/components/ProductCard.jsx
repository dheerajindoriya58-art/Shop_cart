import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { add } = useCart();

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-[20px]">

    <div className="border rounded shadow-md p-4 m-4  hover:shadow-xl transition w-[270px] h-[380px]">

      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-[220px] h-[auto] sm:h-48 object-contain mb-4"
      />

      {/* Title */}
      <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 line-clamp-2">
        {product.title}
      </h3>

      {/* Price */}
      <p className="text-lg font-bold mb-4">${product.price}</p>

      {/* Button */}
      <button
        onClick={() => add(product)}
        className="mt-auto bg-black text-white p-[8px_24px] rounded hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
    </div>
  );
}
