export default function SortSelect({ sort, setSort }) {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}>
      <option value="">Sort</option>
      <option value="asc">Low → High</option>
      <option value="desc">High → Low</option>
    </select>
  );
}
