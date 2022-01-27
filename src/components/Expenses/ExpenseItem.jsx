import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem({ title, amount, date }) {

    return (
        <Card className='expense-item'>
            <ExpenseDate
                date={date}
            />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>
                    {`${amount} Rs `}
                </div>
            </div>

        </Card>
    );

}

export default ExpenseItem;