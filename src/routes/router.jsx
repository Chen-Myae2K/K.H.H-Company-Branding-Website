import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProductsPage from "@/pages/ProductsPage";
import TrackOrderPage from "@/pages/TrackOrderPage";
import ContactPage from "@/pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/trackOrder",
    element: <TrackOrderPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);
