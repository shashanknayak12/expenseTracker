import React, { Component } from 'react';

class ExpenseItem extends Component {




    render() {
        const expenseDate = new Date(2022, 1, 20);
        const ExpenseTitle = 'car sevies'
        const ExpensePrice = 295
        return (
            <div className='expense-item'>
                <div >
                    {expenseDate.toISOString()}
                </div>
                <div className='expense-item__description'>
                    <h2>{ExpenseTitle}</h2>
                    <div className='expense-item__price'>
                        {ExpensePrice}
                    </div>
                </div>
            </div>
        );
    }
}

export default ExpenseItem;