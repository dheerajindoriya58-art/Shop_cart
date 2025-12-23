export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full sm:w-52 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
    />
  );
}
