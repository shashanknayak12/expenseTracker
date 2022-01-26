import React from 'react';

function NewExpenseForm({ expenses }) {
    console.log(expenses[0])
    return (
        <div>

            <form>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={expenses[0].title}></input>
                    </div>

                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' value={expenses[0].amount} min='5' step='1'></input>
                    </div>

                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' value={expenses[0].date} min='2019-01-01' max='2050-12-31'></input>
                    </div>

                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>

        </div>
    );
}

export default NewExpenseForm;