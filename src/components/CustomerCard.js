import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../features/customerSlice';

export default function CustomerCard(props) {
    const dispatch = useDispatch();
    const [customerFoodInput, setCustomerFoodInput] = useState("");
    const handleAddFood = () => {
        if (!customerFoodInput) return;
        dispatch(addFoodToCustomer({
            id: props.id,
            food: customerFoodInput,
        }));
        setCustomerFoodInput('');
    };
    const handleInputFood = (e) => { setCustomerFoodInput(e.target.value); };

    return (    
        <div className="customer-food-card-container">
            <p>{ props.name }</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {(props.food).map((item,key) => 
                        <p key={key}>{item}</p>
                    )}
                </div>
                    <div className="customer-food-input-container">
                    <input value={customerFoodInput} onChange={handleInputFood} />
                    <button onClick={handleAddFood}>Add</button> 
                </div>
            </div> 
        </div>
    );
}

