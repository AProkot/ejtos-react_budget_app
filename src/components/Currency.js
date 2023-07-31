import React, { useContext } from 'react';
import {AppContext} from '../context/AppContext';

const Currency = () => {
    const {dispatch, currency} = useContext(AppContext);

    const changeCurrency = (val) => {
        let name="";
        switch(val){
            case"£": {
                name= "Pound";
                break;
            }
            case"$": {
                name = "Dollar";
                break;
            }
            case"€": {
                name = "Euro";
                break;
            }
            case"₹": {
                name = "Ruppee";
                break;
            }
            default: {
                name = "NaN";
            }
        }

        const newCurrency = {
            value: val,
            name: name
        };
        
        dispatch ({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    }

    return (
        <div className='alert alert-secondary'>
            <select className='btn btn-success dropdown-toggle'
            id='currency' onChange={(event)=>changeCurrency(event.target.value)}>
                <option disabled selected hidden>Currency ({currency.value} {currency.name})</option>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>            
        </div>
    )
}

export default Currency;