import React from "react";
import ChartBar from "./ChartBar";

export default function Chart(props) {
    const dataPointsValues = props.chartDataPoints.map(data => {
        return data.value
    })
    const maxVal = Math.max(...dataPointsValues) //from array with the value i want to compare, to a standalone argumants/ standalone values (that because math.max have to get a list of value and not an array) 

    const ChartBarElements = props.chartDataPoints.map(barData => 
    <ChartBar 
        key={barData.label}
        value={barData.value} 
        label={barData.label} 
        maxValue={maxVal}/>)

    return (
        <div className="chart">
            {ChartBarElements}
        </div>
    )
}