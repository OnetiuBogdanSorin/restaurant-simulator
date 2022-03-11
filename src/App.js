import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice"

function App() {

    //Rezervation functinality
const [reservationInput, setReservationInput] = useState("")
const reservations = useSelector((state) => state.reservations.value)
const dispatch = useDispatch();
const handleAddReservation = () => { 
    if (!reservationInput) return;//in case the input is empty
    dispatch(addReservation(reservationInput));//in case we have a value we need to take that value and put in the reservation
    setReservationInput("");//we need to empty the input
}
    
    //Customer functinality
const customers = useSelector((state) => state.customers.value);//customers from store.js
console.log(customers);

return (
    <div className="App">
    <div className="container"> 
        <div className="reservation-container">
        <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
            {reservations.map((name, index) => <ReservationCard key={index} index={index} name={name}/> )}
            </div>
        </div>
        <div className="reservation-input-container">
        <input value={reservationInput} onChange={(e) => setReservationInput(e.target.value)} />
        <button onClick={handleAddReservation}>Add</button>
        </div>
        </div>
        <div className="customer-food-container">
        {customers.map((customer) => {
            if (customer.id !== '') return <CustomerCard key={customer.id} id={customer.id} name={customer.name} food={customer.food} />;
            return null;
        })}
        </div>
    </div>
    </div>
    );
}

export default App;