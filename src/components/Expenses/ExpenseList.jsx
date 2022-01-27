import React from 'react';
import ExpenseItem from './ExpenseItem'

function ExpenseList({ filteredExpenses }) {

    if (filteredExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Expense Not Found</h2>
    }



    return (
        <ul className='expenses-list'>
            {
                filteredExpenses.map(each => {
                    return (
                        <div key={each.id}>
                            <ExpenseItem
                                title={each.title}
                                amount={each.amount}
                                date={each.date}
                            />
                        </div>
                    )
                })
            }

        </ul>
    );
}

export default ExpenseList;