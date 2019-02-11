import React from 'react';
import './Footer.css';
import FooterIcon from './FooterIcon';

const Footer = () => {
    return (
        <div className="footer">
            <FooterIcon icon="far fa-comment fa-2x" />
            <FooterIcon icon="fas fa-retweet fa-2x" total="6" />
            <FooterIcon icon="far fa-heart fa-2x" total="4" />
            <FooterIcon icon="far fa-envelope fa-2x" />
        </div>
    )
}

export default Footer;