import React from 'react';
import './Button.scss';

const NumberButton = props => <button className={props.buttonStyle}>{props.text}</button>;

export default NumberButton;
