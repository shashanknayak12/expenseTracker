import React, { Component } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

class ExpenseItem extends Component {

    render() {
        const { title, amount, date } = this.props

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
}

export default ExpenseItem;