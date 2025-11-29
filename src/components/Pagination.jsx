export default function Pagination({ totalPages, page, setPage }) {
  return (
    <div style={{ marginTop: "30px" }}>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}
