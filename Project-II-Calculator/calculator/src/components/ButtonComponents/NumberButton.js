import React from 'react';
import './Button.scss';

const NumberButton = props => <button className={props.buttonStyle}>{props.value}</button>;

export default NumberButton;
