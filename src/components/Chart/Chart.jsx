import React from 'react';
import ChartBar from './ChartBar';

function Chart({ dataPoints }) {
    const valueArray = dataPoints.map(each => each.value)
    const totalMax = Math.max(...valueArray)




    return (
        <div className='chart'>

            {dataPoints.map(each => {
                return (
                    <ChartBar
                        key={each.label}
                        value={each.value}
                        maxValue={totalMax}
                        label={each.label}
                    />
                )
            })}


        </div>
    );
}

export default Chart;