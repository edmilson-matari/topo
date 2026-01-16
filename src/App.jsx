import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Academy from "./pages/Academy";

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
