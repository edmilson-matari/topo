import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Academy from "./pages/Academy";
import Contact from "./pages/Contact";
import Library from "./pages/Library";
import AdminHome from "./pages/Admin/AdminHome";
import AdminLayout from "./components/Admin/AdminLayout";
import { CartProvider } from "./components/contexts/CartContext";

const route = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Services />,
        path: "/services",
      },
      {
        element: <Academy />,
        path: "/academia_digital",
      },
      {
        element: <Contact />,
        path: "/contacto",
      },
      {
        element: <Library />,
        path: "/biblioteca_de_geodados",
      },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        element: <AdminHome />,
        path: "/admin",
      },
    ],
  },
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={route} />
    </CartProvider>
  );
};

export default App;
