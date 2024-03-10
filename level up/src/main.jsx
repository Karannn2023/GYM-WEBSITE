import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs.jsx";
import HomeImage from "./components/homeImage.jsx";
import Pricing from "./components/pricing.jsx";
import Trainers from "./components/trainers.jsx";
import Contact from "./components/contact.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeImage />,
      },
      {
        path: "/about_us",
        element: <AboutUs />,
      },
      {
        path: "/pricing_plan",
        element: <Pricing />,
      },
      {
        path: "/tainers",
        element: <Trainers />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
