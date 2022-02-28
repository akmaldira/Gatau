import React from 'react';
import './footer.css';
import { Pembayaran } from '../../../assets';
import { facebookIcon, instagramIcon, youtubeIcon, linkedinIcon } from '../../../assets';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-title'>
            <div className='title'>
                <h3>Product</h3>
                <p>Landing Page</p>
                <p>Popup Builder</p>
                <p>Web-design</p>
                <p>Content</p>
                <p>Integrations</p>
            </div>
            <div className='title'>
                <h3>Use Cases</h3>
                <p>Web-designer</p>
                <p>Marketers</p>
                <p>Small Business</p>
                <p>Web Builder</p>
            </div>
            <div className='title'>
                <h3>Resources</h3>
                <p>Academy</p>
                <p>Blog</p>
                <p>Themes</p>
                <p>Hosting</p>
                <p>Developers</p>
                <p>Support</p>
            </div>
            <div className='pembayaran'>
                <h3>Pembayaran</h3>
                <img src={Pembayaran} alt='' />
            </div>
        </div>
        <div className='footer-copyright'>
            <p>© 2022 All Rights Reserved</p>
            <div className='social-media'>
                <img src={facebookIcon} alt='' />
                <img src={instagramIcon} alt='' />
                <img src={youtubeIcon} alt='' />
                <img src={linkedinIcon} alt='' />
            </div>
        </div>
    </div>
  )
}

export default Footer