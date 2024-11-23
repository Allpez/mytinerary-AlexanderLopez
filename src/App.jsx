import React from 'react'
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom"; //Importamos dos funciones de Router-DOM
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from './store/actions/authActions';

//Se importan las rutas
import Home from "./Pages/Home";
import Cities from "./Pages/Cities";
import User from "./Pages/User";
import CityDetails from './Pages/CityDetails';
import SignRoute from './Components/SignRoute';

//Se importan los layouts
import StandarLayout from "./Layouts/StandarLayout";
import CitiesLayout from "./Layouts/CitiesLayout";
import NotFoundPage from "./Layouts/NotFoundPage";
import UserLayout from "./Layouts/UserLayout";

const router = createBrowserRouter([
  {
    element: <StandarLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Home",
        element: <Navigate to="/" replace />
      },
    ],
  },
  {
    element: <CitiesLayout />,
    children: [
      {
        path: "/Cities",
        element: <Cities />
      },
      {
        path: "/CityDetails",
        element: <CityDetails />
      },
    ],
  },
  {
    element: <UserLayout />,
    children: [
      {
        path: "/User",
        element: (
        <SignRoute>
          <User></User>
        </SignRoute>
      )},
    ],
  },

  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);

const loginWithToken = async (token) => {
  try {
    console.log("se ejecuto login whith token");

    const response = await axios.get(
      "http://localhost:8080/api/users/validateToken",
      {
        headers: {
          Authorization: `bearer ${token}`
        },
      }
    )
    return response.data.response;

  } catch (error) {
    console.log("error", error);
  }
}

function App() {
  const dispatch = useDispatch()
  let token = localStorage.getItem("token");
  if (token) {
    loginWithToken(token).then((user) => {
      dispatch(setUser({ user, token }))
    })
  }

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </> // Encapsulador
  )
}

export default App;