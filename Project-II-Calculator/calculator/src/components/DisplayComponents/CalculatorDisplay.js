import React from 'react';
import './Display.scss';

const CalculatorDisplay = props => <div className={props.displayStyle}>{props.text}</div>;

export default CalculatorDisplay;