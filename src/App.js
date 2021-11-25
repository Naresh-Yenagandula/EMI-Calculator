import './App.css';
import EmiCalculator from './components/EmiCalculator';

function App() {
  return (
    <div className='vh-100 center'>
      <EmiCalculator piValue={1000000} interestValue={7} durationValue={10} />
    </div>
  );
}

export default App;
