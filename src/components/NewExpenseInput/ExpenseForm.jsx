import React, { useState } from 'react';

function ExpenseForm({ onSaveExpenseData, handleshowExpenseForm }) {
    const [enteredTitle, setEnterTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')




    const handleTitleChange = (e) => {
        setEnterTitle(e.target.value)

    }
    const handleAmountChange = (e) => {
        setEnteredAmount(e.target.value)
    }
    const handleDateChange = (e) => {
        setEnteredDate(e.target.value)
    }



    const handleSubmit = (e) => {
        e.preventDefault();


        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }

        onSaveExpenseData(expenseData)



        setEnteredAmount('')
        setEnterTitle('')
        setEnteredDate('')
        handleshowExpenseForm()


    }
    const handleCancelForm = () => {
        handleshowExpenseForm()
    }


    return (
        <div>

            <form onSubmit={handleSubmit} >
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input
                            type='text'
                            value={enteredTitle}
                            onChange={handleTitleChange}
                        ></input>
                    </div>

                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input
                            type='number'
                            value={enteredAmount}
                            onChange={handleAmountChange}
                            min='0.01'
                            step='0.01'
                        >
                        </input>
                    </div>

                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' value={enteredDate} onChange={handleDateChange} min='2019-01-01' max='2023-12-31'></input>
                    </div>

                </div>
                <div className='new-expense__actions'>

                    <button type='button' onClick={handleCancelForm}>Cancel </button>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>

        </div>
    );
}

export default ExpenseForm;