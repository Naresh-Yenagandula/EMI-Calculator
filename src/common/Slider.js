import React, { useState } from 'react'
import { convertToCurrency } from './CurrencyConverter';
import './Slider.css'

function Slider(props) {
    const { title, value, min, max, step, unit, setValue } = props;

    const [rangeValue, setrangeValue] = useState(value)

    const setData = (e) => {
        setrangeValue(e)
        setValue(e)
    }

    return (
        <div className="slider">
            <div className='clearflex'>
                <p className='float-left'>{title}</p>
                <p className='float-right'>{convertToCurrency(rangeValue)}{" "}{unit}</p>
            </div>
            <div className='w-100'>
                <input
                    type="range"
                    className='range'
                    name={title}
                    min={min}
                    max={max}
                    step={step}
                    defaultValue={rangeValue}
                    onChange={e => setData(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Slider
