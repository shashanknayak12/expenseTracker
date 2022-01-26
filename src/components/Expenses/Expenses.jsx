import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses({ expenses }) {
    return (
        <Card className='expenses'>


            {expenses.map(each => {
                return (<ExpenseItem
                    title={each.title}
                    amount={each.amount}
                    date={each.date}
                />)
            })}


        </Card>
    );
}

export default Expenses;