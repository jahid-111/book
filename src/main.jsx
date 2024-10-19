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
import Dashboard from "./structure/page/dashboard/Dashboard";
import DashList from "./structure/page/dashboard/DashList";
import Chart from "./structure/page/dashboard/dashboardPage/Chart";
import Supplier from "./structure/page/dashboard/dashboardPage/Supplier";
import SellToday from "./component/SellToday";

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
      // --------------------------- DASHBOARD
      {
        path: "/dashboard",
        element: <DashList />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/list",
            element: <DashList />,
          },
          {
            path: "/dashboard/chart",
            element: <Chart />,
          },
          {
            path: "/dashboard/supplier",
            element: <Supplier />,
          },
          {
            path: "/dashboard/sell",
            element: <SellToday />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
