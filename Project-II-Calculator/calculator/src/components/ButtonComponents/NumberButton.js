import React from 'react';
import './Button.scss';

const NumberButton = props => {
    return (
        <button
            className={props.buttonStyle}
            onClick={props.assignCurrent}
            value={props.value}
        >
            {props.value}
        </button>
    )
}

export default NumberButton;
