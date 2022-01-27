import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';


function NewExpense({ onAddExpenses }) {
    const [showExpenseForm, setShowExpenseForm] = useState(false)

    const handleSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        onAddExpenses(expenseData)
    }
    const handleshowExpenseForm = () => {
        setShowExpenseForm(!showExpenseForm)

    }

    return (
        <div className='new-expense'>
            <button onClick={handleshowExpenseForm}>Add  New Expense</button>
            {showExpenseForm ?
                <ExpenseForm
                    handleshowExpenseForm={handleshowExpenseForm}
                    showExpenseForm={showExpenseForm}
                    onSaveExpenseData={handleSaveExpenseData}
                />
                : ''
            }

        </div>
    );
}

export default NewExpense;