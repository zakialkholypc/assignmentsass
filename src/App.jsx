import { useState } from "react";
import * as React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { HeroUIProvider } from "@heroui/react";
import Home from "./pages/Home/Home";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from "./Layouts/Mainlayout";
import Catigory from "./pages/Catigory/Catigory";
import Mealdetails from "./pages/Mealdetails/Mealdetails";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import NotFound from "./pages/NotFound/NotFound";

const queryClient = new QueryClient();

const router = createHashRouter([
  {
    path: "",
    element: <Mainlayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/Catigory/:id",
        element: <Catigory />,
      },
      {
        path: "/Mealdetails/:id",
        element: <Mealdetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <HeroUIProvider></HeroUIProvider>
      </RouterProvider>
    </QueryClientProvider>
  );
}
