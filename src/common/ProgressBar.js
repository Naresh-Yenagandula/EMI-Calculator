import React from 'react'
import { convertToCurrency } from './CurrencyConverter';
import './ProgressBar.css'

function ProgressBar(props) {
    const { size, text, strokeWidth, circleOneStroke, circleTwoStroke, progress, value } = props;

    const center = size / 2;
    const radius = center - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = ((100 - progress) / 100) * circumference;
    return (
        <React.Fragment>
            <svg className='svg' width={size} height={size}>
                <circle
                    className='svg-circle-bg'
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                />
                <circle
                    className='svg-circle'
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
                <text x={center} y={center} textAnchor='middle'>
                    <tspan x={center} y={center} className='svg-circle-text'>{text}</tspan>
                    <tspan x={center} y={center+20} className='svg-circle-value'>{convertToCurrency(value)}</tspan>
                </text>
            </svg>
        </React.Fragment>
    )
}

export default ProgressBar
