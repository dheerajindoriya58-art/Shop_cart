import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="py-[20px]">
        <Outlet />
      </div>
    </>
  );
}
