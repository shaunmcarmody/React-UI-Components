import React from 'react';
import './Display.scss';

const CalculatorDisplay = props => <div className={props.displayStyle}>{props.value}</div>;

export default CalculatorDisplay;