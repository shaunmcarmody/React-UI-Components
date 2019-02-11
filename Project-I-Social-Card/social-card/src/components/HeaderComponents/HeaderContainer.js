import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import ContentContainer from './ContentContainer';

const HeaderContainer = () => {
    return (
        <div className="header-container">
            <ImageThumbnail />
            <ContentContainer />
        </div>
    )
}

export default HeaderContainer;
