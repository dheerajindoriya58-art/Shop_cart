import { NavLink } from "react-router-dom";

export const CategoryList = ({ categories }) => {
  return (
    <div className="flex flex-wrap gap-3 my-6">
      {categories.map((c) => (
        <NavLink
          key={c}
          to={`/categories/${c}`}
          className={({ isActive }) =>
            `px-4 py-2 rounded border text-sm capitalize transition
             ${
               isActive
                 ? "bg-black text-white"
                 : "bg-gray-100 hover:bg-gray-200"
             }`
          }
        >
          {c}
        </NavLink>
      ))}
    </div>
  );
};
