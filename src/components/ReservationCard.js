import React from 'react';
import { useDispatch } from 'react-redux';
import { removeReservation } from '../features/reservationSlice';
import { addCustomer } from '../features/customerSlice';
import { v4 as uuid } from 'uuid';

export default function ReservationCard( props )
{
    const dispatch = useDispatch();

    return <div onClick={() => {
        dispatch(removeReservation(props.index));
        dispatch(addCustomer({
            id: uuid(),
            name:props.name,
            food: [],
        }));
    }} className='reservation-card-container'>{props.name}</div>
}
