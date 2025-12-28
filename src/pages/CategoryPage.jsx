import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CategoryPage() {
  const { name } = useParams();
  const { add } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const data = await res.json();
      setProducts(data);
    };
    getProducts();
  }, [name]);

  return (
    <div className="max-w-[1070px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 capitalize bg-">
        Category: {name}
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded shadow-sm p-4 flex flex-col"
          >
            {/* Image */}
            <img
              src={p.image}
              alt={p.title}
              className="h-40 object-contain mb-4"
            />

            {/* Title */}
            <h3 className="font-semibold text-sm mb-2 line-clamp-2">
              {p.title}
            </h3>

            {/* Price */}
            <p className="font-bold mb-3">${p.price}</p>

            {/* Buttons */}
            <div className="mt-auto flex gap-2">
              <NavLink
                to={`/product/${p.id}`}
                className="flex-1 text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                View
              </NavLink>

              <button
                onClick={() => add(p)}
                className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
