import React from 'react';
import ExpenseForm from './ExpenseForm';


function NewExpense({ expenses }) {

    return (
        <div className='new-expense'>
            {/* <button>Add Expense</button> */}

            <ExpenseForm expenses={expenses} />

        </div>
    );
}

export default NewExpense;