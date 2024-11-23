import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const setUser = createAction("setUser", (datos) => {
    return {
        payload: datos,
    }
})

// Acción de login
const login = createAsyncThunk("login", async ({ email, password, photo, firstname }) => {
    console.log("Entramos al Login");
    const credentials = {
        email: email,
        password: password,
        name: firstname,
        photo: photo
    }
    const response = await axios.post("http://localhost:8080/api/auth/signIn", credentials)
    console.log("Se proceso la solicitud");
    console.log("Response", response.data);
    console.log("Superamos la solicitud de Login");

    localStorage.setItem("token", response.data.token)
    return response.data
}) //fullfilled,pending,rejected

// Acción de registro (sign up)
const signUp = createAsyncThunk("signUp", async ({ email, password, firstName, lastName, country }) => {
    const userData = {
        firstName,
        lastName,
        email,
        password,
        country,
        online
    };
    const response = await axios.post("http://localhost:8080/api/users/register", userData);
    // localStorage.setItem("token", response.data.token);
    return response.data;
});

//Accion de Logout
const logout = createAction("logout");


export { login, setUser, logout, signUp };


