import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Shop from "./pages/Shop";
import { CartProvider } from "./CartContext";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      { path: "/", element: <Home/> },
      { path: "/products", element: <Products/> },
      { path: "/products/:id", element: <Detail/> },
      { path: "/shop", element: <Shop/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
