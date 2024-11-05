import React from 'react'
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom"; //Importamos dos funciones de Router-DOM

//Se importan las rutas
import Home from "./Pages/Home";
import Cities from "./Pages/Cities";
import User from "./Pages/User";
import CityDetails from './Pages/CityDetails';

//Se importan los layouts
import StandarLayout from "./Layouts/StandarLayout";
import CitiesLayout from "./Layouts/CitiesLayout";
import NotFoundPage from "./Layouts/NotFoundPage";

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
      { path: "/CityDetails", element: <CityDetails /> },
    ],
  },
  {
    path: "/*", 
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