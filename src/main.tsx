import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//tailwindcss
import "./tailwind.css";

//components
import { Footer, NavBar } from "./components";

//pages
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import BookCar from "./pages/BookCar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/book-car",
    element: <BookCar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
