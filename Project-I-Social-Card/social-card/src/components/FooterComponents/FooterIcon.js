import React from 'react';

const handleClick = () => {
    console.log('works');
}

const FooterIcon = (props) => {
    return (
        <div className="icon" onClick={handleClick}>
            <i className={props.icon}></i>
            <span>{props.total}</span>
        </div>
    )
}

export default FooterIcon;