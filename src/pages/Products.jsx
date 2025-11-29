import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Products() {
  const { add } = useCart();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const limit = 8;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  let filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "asc") filtered = filtered.sort((a, b) => a.price - b.price);
  if (sort === "desc") filtered = filtered.sort((a, b) => b.price - a.price);

  const totalPages = Math.ceil(filtered.length / limit);
  const paginated = filtered.slice((page - 1) * limit, page * limit);

  return (
    <div>
      <h1>Products</h1>

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="asc">Low → High</option>
        <option value="desc">High → Low</option>
      </select>

      <div>
        {categories.map((c) => (
          <Link
            key={c}
            to={`/categories/${c}`}
            style={{ marginRight: "10px" }}
          >
            {c}
          </Link>
        ))}
      </div>

      {paginated.map((p) => (
        <div key={p.id} style={{ margin: "20px 0" }}>
          <h3>{p.title}</h3>
          <img src={p.image} width="100" />
          <p>${p.price}</p>

          <Link to={`/product/${p.id}`}>View Details</Link>
          <button onClick={() => add(p)}>Add to Cart</button>
        </div>
      ))}

      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button onClick={() => setPage(i + 1)} key={i}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
