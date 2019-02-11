import React from 'react';
import './Footer.css';
import FooterIcon from './FooterIcon';

const Footer = () => {
    return (
        <div>
            <FooterIcon icon="Icon Comment" />
            <FooterIcon icon="Icon Retweet" total="6" />
            <FooterIcon icon="Icon Like" total="4" />
            <FooterIcon icon="Icon Message" />
        </div>
    )
}

export default Footer;