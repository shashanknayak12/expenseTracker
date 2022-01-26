import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem({ title, amount, date }) {

    const [titles, setTitle] = useState(title)

    const handleUpdate = () => {
        setTitle('updates')
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate
                date={date}
            />
            <div className='expense-item__description'>
                <h2>{titles}</h2>
                <div className='expense-item__price'>
                    {`${amount} Rs `}
                </div>
            </div>
            <button onClick={handleUpdate}>update</button>
        </Card>
    );

}

export default ExpenseItem;