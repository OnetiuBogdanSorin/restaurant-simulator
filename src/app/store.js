import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationSlice"; 
import customersReducer from "../features/customerSlice"

export const store = configureStore({
    reducer: {
        reservations: reservationsReducer,
        customers: customersReducer,
    }, //in here we are going to have our reducers, inside reducers we are going to have our slyces
})
