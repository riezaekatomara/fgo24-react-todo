import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/todo/:id",
      element: <DetailPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  );
};

export default Router;
