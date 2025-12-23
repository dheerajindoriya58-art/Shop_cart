import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="max-w-[1070px] mx-auto p-4">
      {/* Products Grid */}
      <div>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Product;
