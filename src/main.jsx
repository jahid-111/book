import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./structure/Layout";
import Page from "./structure/Home";
import About from "./structure/page/About";
import Contact from "./structure/page/Contact";
import DetailsBook from "./structure/page/Details";
import Payment from "./structure/page/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Page />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/details/:id",
        element: <DetailsBook />,
      },
      {
        path: "/payment/:id",
        element: <Payment />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
