export default function SearchBar({ search, setSearch }) {
  return (
    <input
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ padding: "8px", width: "200px", marginRight: "10px" }}
    />
  );
}
