import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";

import cartProductsLoader from "./components/Loaders/cartProductsLoader";

import CheckOut from "./components/CheckOut/CheckOut";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },

      {
        path: "/checkout",
        element: (
        
            <CheckOut></CheckOut>
         
        ),
      },

      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },

      {
        path: "/inventory",
        element: (
        
            <Inventory></Inventory>
        
        ),
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
