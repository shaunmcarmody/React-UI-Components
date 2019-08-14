import React from 'react';
import './Button.scss';

const ActionButton = props => {
    return (
        <button
            className={props.buttonStyle}
            onClick={props.handleAction}
            value={props.operator}
        >
            {props.value}
        </button>
    )
}

export default ActionButton;
