import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SortSelect from "../components/SortSelect";
import {CategoryList} from "../components/CategoryList";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

export default function Products() {
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
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <SearchBar search={search} setSearch={setSearch} />
      <SortSelect sort={sort} setSort={setSort} />

      <CategoryList categories={categories} />

      <div>
        {paginated.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  );
}
