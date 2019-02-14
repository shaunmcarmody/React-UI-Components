import React from 'react';
import './Button.scss';

const ActionButton = props => <button className={props.buttonStyle}>{props.value}</button>;

export default ActionButton;
