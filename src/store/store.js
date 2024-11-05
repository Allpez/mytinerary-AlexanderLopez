// Store se encarga de contener nuestro reducer

import { configureStore } from "@reduxjs/toolkit" //sirve para simplificar la gestión del estado de una aplicación React
import { cityReducer } from "./reducers/cityReducer"
import { itineraryReducer } from "./reducers/itineraryReducer"

const store = configureStore({
    // Cuales son los reducers que tenemos y necesitamos aplicar.?
    reducer: {
        cityStore: cityReducer,
        itineraryStore: itineraryReducer
    }
})

export default store 