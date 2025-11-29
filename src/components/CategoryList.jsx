import { NavLink } from "react-router-dom";

export default function CategoryList({ categories }) {
  return (
    <div style={{ margin: "20px 0" }}>
      {categories.map((c) => (
        <NavLink
          key={c}
          to={`/categories/${c}`}
          style={{ marginRight: "20px", textTransform: "capitalize" }}
        >
          {c}
        </NavLink>
      ))}
    </div>
  );
}
