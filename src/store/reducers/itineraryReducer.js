import { createReducer } from "@reduxjs/toolkit";
import { getItineraries } from "../actions/itineraryAction";

// El estado inicial
const initialState = {
    itineraries: [],
    search: "",
    loading: true,
    error: false
};

//configuración
export const itineraryReducer = createReducer(initialState, (builder) => {
    //Casos para solicitud los itinerarios
    builder.addCase(getItineraries.pending, (state, action) => { //
        console.log("Estado pendiente");
        state.loading = true;
    }).addCase(getItineraries.fulfilled, (state, action) => {
        console.log("Estado resuelto");
        state.loading = false;
        state.itineraries = action.payload;
    }).addCase(getItineraries.rejected,(state, action) => {
        console.log("Estado rechazado");
        state.error = true;
        state.loading = false;
    })
})