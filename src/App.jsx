import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/product",
        element: <Product/>
      },
      {
        path: "/product/:id",
        element: <ProductDetail/>
      },
      {
        path: "/categories/:name",
        element: <CategoryPage/>
      },
      {
        path: "/cart",
        element: <CartPage/>
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
