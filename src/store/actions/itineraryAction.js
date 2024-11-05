// itineraryAction.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getItineraries = createAsyncThunk("GET_ITINERARIES", async (cityId) => {
    console.log("Fetching itineraries for city ID:", cityId);
    const response = await axios.get(`http://localhost:8080/api/itineraries/city/${cityId}`);
    console.log("esto es response", response);
    
    return response.data.response;
});
