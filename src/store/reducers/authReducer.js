import { createReducer } from "@reduxjs/toolkit";
import { login, setUser, logout, signUp } from "../actions/authActions";

const initialState = {
    loading: false,
    error: false,
    user: null,
    token: null
}

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
        console.log("Se ejecuto correctamente");
        console.log(action);
        state.loading = false,
        state.error = false,
        state.user = action.payload.user,
        state.token = action.payload.token

    }).addCase(login.pending, (state, action) => {
        console.log("Se inicio sign in");
        state.loading = true,
        state.error = false,
        state.user = null,
        state.token = null

    }).addCase(login.rejected, (state, action) => {
        console.log("Error en el sign in");
        localStorage.removeItem("token");
        state.loading = false,
        state.error = action.error.message,
        state.user = null,
        state.token = null

    }).addCase(setUser, (state, action) => {
        state.user = action.payload.user,
        state.token = action.payload.token

    }).addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload.user;
        state.token = action.payload.token;

    }).addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = false;

    }).addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;

    }).addCase(logout, (state, action) => {
        localStorage.removeItem("token");
        state.user = null,
        state.token = null
    })

})

export default authReducer;