import { createReducer } from "@reduxjs/toolkit";
import { changeSearch, getCities } from "../actions/cityActions";

// El estado inicial
const initialState = {
    cities: [],
    search: "",
    loading: true,
    error: false
};

//configuración
export const cityReducer = createReducer(initialState, (builder) => { //builder para construir los casos que van a cambiar el estado.
    //Tenemos una accion y un return con el nuevo estado    
    builder.addCase(changeSearch, (state, action) => {
        state.search = action.payload
       
        //Casos para solicitud las ciudades
    })
    .addCase(getCities.pending, (state, action) => { //
        console.log("Estado pendiente");
        state.loading = true;
    }).addCase(getCities.fulfilled, (state, action) => {
        console.log("Estado resuelto");
        state.loading = false;z
        state.cities = action.payload;
    }).addCase(getCities.rejected,(state, action) => {
        console.log("Estado rechazado");
        state.error = true;
        state.loading = false;
    })
})