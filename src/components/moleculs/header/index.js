import React from 'react';
import { Logo } from '../../../assets';
import { berandaIcon, promoIcon, layananIcon } from '../../../assets';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <img src={Logo} alt='' />
        </div>
        <nav>
            <div>
                <h2>Beranda</h2>
                <img src={berandaIcon} alt='' />
            </div>
            <div>
                <h2>Promo</h2>
                <img src={promoIcon} alt='' />
            </div>
            <div>
                <h2>Layanan</h2>
                <img src={layananIcon} alt='' />
            </div>
        </nav>
        <div className='register-login'>
            <button>Masuk/Daftar</button>

        </div>
    </div>
  )
}

export default Header