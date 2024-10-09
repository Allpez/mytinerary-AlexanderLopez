import React from 'react'
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom"; //Importamos dos funciones de Router-DOM

//Se importan las rutas
import Home from "./assets/Pages/Home";
import Cities from "./assets/Pages/Cities";
import User from "./assets/Pages/User";

//Se importan los layouts
import StandarLayout from "./assets/Layouts/StandarLayout";
import CitiesLayout from "./assets/Layouts/CitiesLayout";
import NotFoundPage from "./assets/Layouts/NotFoundPage";

const router = createBrowserRouter([
  {
    element: <StandarLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Home", element: <Navigate to="/" replace /> },
      { path: "/User", element: <User /> },
    ],
  },
  {
    element: <CitiesLayout />,
    children: [
      { path: "/Cities", element: <Cities /> },
    ],
  },
  {
    path: "/*", // Ruta "catch-all" para manejar 404
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <> 
      <RouterProvider router={router}></RouterProvider>
    </> // Encapsulador
  )
}

export default App;