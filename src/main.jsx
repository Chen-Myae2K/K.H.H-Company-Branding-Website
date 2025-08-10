import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import SmoothScroll from "./components/SmoothScroll";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SmoothScroll>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </SmoothScroll>
);
