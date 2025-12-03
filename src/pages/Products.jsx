import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SortSelect from "../components/SortSelect";
import { CategoryList } from "../components/CategoryList";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

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

  if (sort === "asc")
    filtered.sort((a, b) => a.price - b.price);
  if (sort === "desc") filtered.sort((a, b) => b.price - a.price);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <SearchBar search={search} setSearch={setSearch} />
      <SortSelect sort={sort} setSort={setSort} />

      <CategoryList categories={categories} />

      <div>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

    </div>
  );
}
