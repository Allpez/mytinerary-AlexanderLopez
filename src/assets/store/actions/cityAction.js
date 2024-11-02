import { createAction,createAsyncThunk } from "@reduxjs/toolkit"; //Para utilizar createAsynchthunk
import axios from "axios"; //Hay que importar la dependencia axios

// Creamos las acciones
export const changeSearch = createAction("CHANGE_SEARCH");

//creamos las acciones asincronas con Asynchthunk para realizar las solicitudes
export const getCities = createAsyncThunk("GET_CITIES", async () => {
    console.log("Entramos a la funcion asincrona");
    const response = await axios.get("http://localhost:8080/api/cities/all");
    console.log(response.data);
    await new Promise ((resolve) => setTimeout(resolve,1500))
    return response.data.response
})

