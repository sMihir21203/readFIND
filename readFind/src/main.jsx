import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Route from "./Route";
import { BookInfo, BookList } from "./Components/CompsIndex";
import { Home } from "./Pages/PagesIndex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/book-list",
        element: <BookList />,
      },
      {
        path: "/book-info",
        element: <BookInfo />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
);
