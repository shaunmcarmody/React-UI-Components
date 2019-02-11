import React from 'react';

const FooterIcon = (props) => {
    return (
        <div className="icon">
            <i className={props.icon}></i>
            <span>{props.total}</span>
        </div>
    )
}

export default FooterIcon;