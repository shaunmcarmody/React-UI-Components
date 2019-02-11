import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
    return (
        <h1 class="header-title">
            Lambda School
            <span className="handle">
                @Lambda School
            </span>
            <span className="timestamp">
                {moment().format('DD MMM')}
            </span>
        </h1>
    );
}


export default HeaderTitle;