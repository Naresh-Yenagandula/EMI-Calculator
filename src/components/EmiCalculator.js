import React, { useEffect, useState } from 'react';
import Slider from '../common/Slider';
import ProgressBar from '../common/ProgressBar';
import './EmiCalculator.css';
import { convertToCurrency } from '../common/CurrencyConverter';

function EmiCalculator(props) {
    const { piValue, interestValue, durationValue } = props;

    const [pi, setPI] = useState(piValue)
    const [interest, setinterest] = useState(interestValue)
    const [duration, setduration] = useState(durationValue)
    const [totalInterest, settotalInterest] = useState(0)
    const [totalPayment, settotalPayment] = useState(0)
    const [percent, setpercent] = useState(0)
    const [emi, setemi] = useState()

    useEffect(() => {
        const principalAmount = parseFloat(pi);
        const calculateInterest = parseFloat(interest) / 100 / 12;
        const calculateDuration = parseFloat(duration) * 12;

        const x = Math.pow(1 + calculateInterest, calculateDuration);
        const monthlyEmi = (principalAmount * calculateInterest * x) / (x - 1);

        const calculateTotalInterest = (monthlyEmi * calculateDuration - principalAmount)
        const calulateTotalPayment = monthlyEmi * calculateDuration

        const calculatePercentage = ((principalAmount - calculateTotalInterest) / principalAmount) * 100

        setemi(Math.round(monthlyEmi))
        settotalInterest(Math.round(calculateTotalInterest))
        settotalPayment(Math.round(calulateTotalPayment))
        setpercent(calculatePercentage)

    }, [pi, interest, duration])

    return (
        <div className="emi-container vh-80 vw-80">
            <div className="child sliders">
                <Slider
                    title="loan amount"
                    min="100000"
                    max="10000000"
                    value={pi}
                    step="50000"
                    unit="Rs"
                    setValue={setPI}
                />
                <Slider
                    title="rate of interest"
                    min="1"
                    max="30"
                    value={interest}
                    step="0.5"
                    unit="%"
                    setValue={setinterest}
                />
                <Slider
                    title="loan tenure"
                    min="1"
                    max="30"
                    value={duration}
                    step="1"
                    unit="years"
                    setValue={setduration}
                />
                <div className='clearflex emi'>
                    <h1 className='float-left'>EMI</h1>
                    <h1 className='float-right'>&#8377;{convertToCurrency(Math.round(emi))}</h1>
                </div>
            </div>
            <div className='child'>
                <div>
                    <ProgressBar
                        text={"Total Amount"}
                        value={totalPayment}
                        size={250}
                        strokeWidth={15}
                        circleOneStroke='#ffcccc'
                        circleTwoStroke='#697dd2'
                        progress={percent}
                    />
                    <div className='clearflex'>
                        <p className="float-left">
                            <span className='blue-dot'></span><span> principal amount</span>
                        </p>
                        <p className="float-right">{convertToCurrency(pi)}</p>
                    </div>
                    <div className='clearflex'>
                        <p className="float-left">
                            <span className='pink-dot'></span><span> total interest</span>
                        </p>
                        <p className="float-right">{convertToCurrency(totalInterest)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmiCalculator
