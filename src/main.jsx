import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routing from "./components/Routing/Routing.jsx";
import App from "./App.jsx";

import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

const router = Routing();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
