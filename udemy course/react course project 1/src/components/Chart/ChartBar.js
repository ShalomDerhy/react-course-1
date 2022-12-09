import React from "react";

export default function ChartBar(props) {
    let barFillHeight = '0%'
    if(props.maxValue > 0) {
        barFillHeight = Math.round((props.value/props.maxValue)*100)+'%'
    }
    const fillStyle = {
        height : barFillHeight
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={fillStyle}></div>
            </div>
            <label className="chart-bar__label">{props.label}</label>
            
        </div>
    )
}