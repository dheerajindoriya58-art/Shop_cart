export default function Pagination({ totalPages, page, setPage }) {
  return (
    <div style={{ marginTop: "30px" }}>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          style={{
            padding: "5px 10px",
            margin: "5px",
            background: page === i + 1 ? "black" : "white",
            color: page === i + 1 ? "white" : "black",
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
