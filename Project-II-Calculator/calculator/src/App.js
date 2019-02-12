import React from 'react';
import './App.scss';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay displayStyle="display" text="0"/>
      <div className="flex">
        <ActionButton buttonStyle="clear" text="clear" />
        <NumberButton buttonStyle="symbol" text="÷"/>
      </div>
      <div className="flex wrap">
        <NumberButton buttonStyle="number" text="7"/>
        <NumberButton buttonStyle="number" text="8"/>
        <NumberButton buttonStyle="number" text="9"/>
        <NumberButton buttonStyle="symbol" text="×"/>
        <NumberButton buttonStyle="number" text="4"/>
        <NumberButton buttonStyle="number" text="5"/>
        <NumberButton buttonStyle="number" text="6"/>
        <NumberButton buttonStyle="symbol" text="-"/>
        <NumberButton buttonStyle="number" text="1"/>
        <NumberButton buttonStyle="number" text="2"/>
        <NumberButton buttonStyle="number" text="3"/>
        <NumberButton buttonStyle="symbol" text="+"/>
      </div>
      <div className="flex">
      <ActionButton buttonStyle="big zero" text="0" />
        <NumberButton buttonStyle="symbol" text="="/>
      </div>
    </div>
  );
};

export default App;
