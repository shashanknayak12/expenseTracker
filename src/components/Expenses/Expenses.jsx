import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

function Expenses({ expenses }) {
    const [filteredYear, setFilterYear] = useState('2020')


    const handleFilterYear = (selectedYear) => {
        setFilterYear(selectedYear)
    }
    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onFilteredYear={handleFilterYear} />


            {expenses.map(each => {
                return (
                    <div key={each.id}>
                        <ExpenseItem
                            title={each.title}
                            amount={each.amount}
                            date={each.date}
                        />
                    </div>
                )
            })}


        </Card>
    );
}

export default Expenses;