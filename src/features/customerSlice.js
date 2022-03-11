import { createSlice } from "@reduxjs/toolkit";


const customer = {
    id: "",
    name: "",
    food: []
};

const initialState = {
    value: [customer],
};

export const customersSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomer: (state, action) => {
            state.value.push(action.payload);
        },
        addFoodToCustomer: (state, action) => {
            state.value.forEach((customer) => {
                if (customer.id === action.payload.id) {
                    customer.food.push(action.payload.food);
                    return;
                }
            })
        },
    },
})

export const { addCustomer, addFoodToCustomer } = customersSlice.actions
export default customersSlice.reducer;