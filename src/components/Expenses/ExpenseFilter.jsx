import React from 'react';

function ExpenseFilter({ onFilteredYear, selected }) {
    const handleDropDown = (e) => {
        onFilteredYear(e.target.value)
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter By Year</label>
                <select onChange={handleDropDown} value={selected}>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                </select>

            </div>

        </div>
    );
}

export default ExpenseFilter;