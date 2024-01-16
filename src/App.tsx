import React, { ChangeEvent, useEffect, useState } from 'react';

import './App.css';
import { Settings } from './components/Settings';
import { Counter } from './components/Counter';


function App() {

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [counter, setCounter] = useState(0);

  let disabled = false;
  let error = false;

  if (counter >= 10 || counter >= maxValue) {
        disabled = true
      } 

if( minValue >= maxValue) {
  error = true
}

  useEffect(() => {
    let minValueAsString = localStorage.getItem('minValue');
    let maxValueAsString = localStorage.getItem('maxValue');

    if (minValueAsString && maxValueAsString) {
      let newMinValue = JSON.parse(minValueAsString)
      let newMaxValue = JSON.parse(maxValueAsString)
      setMinValue(newMinValue)
      setMaxValue(newMaxValue)
      setCounter(newMinValue)
    } else {
      localStorage.setItem('minValue', JSON.stringify(minValue))
      localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
  }, [])

  const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMinValue(Number(e))
  }

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(e))
  }

  const saveSettings = () => {
    localStorage.setItem('minValue', JSON.stringify(minValue))
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    setCounter(minValue)
  }

  const incHandler = () => {
    setCounter(counter + 1)
  }

  const resetCounter = () => {
    setCounter(minValue)
  }

  return (
    <div className="App">
      <Settings minValue={minValue} maxValue={maxValue} onChangeMinValue={onChangeMinValue} onChangeMaxValue={onChangeMaxValue} saveSettings={saveSettings} error={error} />
      <Counter counter={counter} incHandler={incHandler} resetCounter={resetCounter} disabled = {disabled}/>
    </div>
  );
}

export default App;
