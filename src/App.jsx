import React from "react";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ProductProvider } from "./context/ContextProvider";
import "./App.css";
import "./shop.css";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />
  //   },
  //   {
  //     path: "/cart",
  //     element: <Cart/>
  //   },
  //   {
  //     path: "/count",
  //     element: <Count />
  //   }
  // ]);

  // return (
  //     <RouterProvider router={router} />
  // );

  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  )
}

export default App;
