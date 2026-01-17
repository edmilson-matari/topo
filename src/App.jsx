import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Academy from "./pages/Academy";
import Contact from "./pages/Contact";

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
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
};

export default App;
