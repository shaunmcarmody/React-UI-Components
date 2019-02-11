import React from 'react';

const FooterIcon = (props) => {
    return (
        <div>
            <span className={props.icon}></span>
            <span>{props.total}</span>
        </div>
    )
}

export default FooterIcon;