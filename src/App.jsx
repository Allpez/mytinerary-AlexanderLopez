import React from 'react'
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"; //Importamos dos funciones de Router-DOM
import Home from "./assets/Pages/Home"; //Ser importan las rutas
import Cities from "./assets/Pages/Cities";
import User from "./assets/Pages/User";
import NotFound from "./assets/Pages/NotFound";
import StandarLayout from "./assets/Layouts/StandarLayout";
import CitiesLayout from "./assets/Layouts/CitiesLayout";


const router = createBrowserRouter([ //Lista de objetos con la ruta y el componente a renderizar
  { element: <StandarLayout></StandarLayout>, //usando el esqueleto (plantilla) para los componentes a renderizar
    children: [ //Hijos para usarse con la plantilla StandarLayout
      { path: "/", element: <Home></Home> },
      { path: "/Home", element: <Home></Home> },
      { path: "/User", element: <User></User> },
    ]
  },
  { element: <CitiesLayout></CitiesLayout>,
    children: [
      { path: "/Cities", element: <Cities></Cities> },
      { path: "/*", element: <NotFound></NotFound> },
    ]
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