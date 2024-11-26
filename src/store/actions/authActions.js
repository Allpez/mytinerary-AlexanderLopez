import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const setUser = createAction("setUser", ({ user, token }) => {
    return {
        payload: ({ user, token }),
    }
})

// Acción de login
const login = createAsyncThunk("login", async ({ firstname, lastname, email, password, photo, country }) => {
    console.log("Entramos al Login");
    const credentials = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        photo: photo,
        country: country
    }
    const response = await axios.post("http://localhost:8080/api/auth/signIn", credentials)
    console.log("Se proceso la solicitud");
    console.log("Response", response.data);
    console.log("Superamos la solicitud de Login");

    localStorage.setItem("token", response.data.token)
    return response.data
})

// Acción de registro (sign up)
const signUp = createAsyncThunk("signUp", async ({ email, password, firstname, lastname, photo, country }) => {
    console.log("Entramos al signUp");
    const userData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        photo: photo,
        country: country
    };
    const response = await axios.post("http://localhost:8080/api/users/register", userData);
    localStorage.setItem("token", response.data.token);
    return response.data;
});

//Accion de Logout
const logout = createAction("logout");


export { login, setUser, logout, signUp };


