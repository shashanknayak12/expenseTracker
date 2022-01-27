import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';

function Expenses({ expenses }) {

    const [filteredYear, setFilterYear] = useState('2022')


    const handleFilterYear = (selectedYear) => {
        setFilterYear(selectedYear)

    }

    const filteredExpenses = expenses.filter(each => {
        return (each.date.getFullYear().toString() === filteredYear)

    })




    return (
        <Card className='expenses'>
            <ExpenseFilter
                selected={filteredYear}
                onFilteredYear={handleFilterYear}
            />


            <ExpenseList
                filteredExpenses={filteredExpenses}
            />


        </Card>
    );
}

export default Expenses;