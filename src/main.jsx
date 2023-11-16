import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RulePage from "./rulePage.jsx";
import { NormalGame } from "./game.jsx";
import { HardGame } from "./game.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/rule",
    element: <RulePage />,
  },
  {
    path: "/normal",
    element: <NormalGame />,
  },
  {
    path: "/hard",
    element: <HardGame />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
