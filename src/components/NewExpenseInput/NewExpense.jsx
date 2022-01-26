import React from 'react';
import ExpenseForm from './ExpenseForm';


function NewExpense({ onAddExpenses }) {

    const handleSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        onAddExpenses(expenseData)
    }

    return (
        <div className='new-expense'>
            {/* <button>Add Expense</button> */}

            <ExpenseForm
                onSaveExpenseData={handleSaveExpenseData}
            />

        </div>
    );
}

export default NewExpense;