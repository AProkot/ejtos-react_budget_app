import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {dispatch, budget, expenses, currency} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item)=> {
        return (total=total+item.cost);
    }, 0);

    const changeBudget = (val) => {
        if (val>20000) {
            alert("The value cannot exceed " + currency.value + "20000");
        } else if (val<totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
        } else {
            dispatch ({
                type: 'SET_BUDGET',
                payload: val
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency.value}</span>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                step="10"
                style={{marginLeft: '0.5rem', size: 10}}
                onChange={(event)=>changeBudget(event.target.value)}>
            </input>

        </div>
    );
}

export default Budget;