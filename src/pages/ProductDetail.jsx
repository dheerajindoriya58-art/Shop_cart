import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
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

  if (!product)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Image Section */}
        <div className="flex justify-center items-center border rounded-lg p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-xl font-semibold text-green-600 mb-4">
            ${product.price}
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => add(product)}
              className="bg-black text-white px-6 py-2 rounded 
              hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>

            <NavLink to="/">
              <button
                className="border border-black px-6 py-2 rounded 
                hover:bg-black hover:text-white transition"
              >
                Back
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
