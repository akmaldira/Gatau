import React from 'react';
import './category.css';
import { gameIcon, voucherIcon, pulsaIcon, paketIcon, socialmediaIcon } from '../../../assets/icons';

const Category = () => {
  return (
    <div className='category'>
        <div>
        <img src={gameIcon} alt='' />
            <h4>Game</h4>
        </div>
        <div>
            <img src={voucherIcon} alt='' />
            <h4>Voucher</h4>
        </div>
        <div>
            <img src={pulsaIcon} alt='' />
            <h4>Pulsa</h4>
        </div>
        <div>
            <img src={paketIcon} alt='' />
            <h4>Paket Data</h4>
        </div>
        <div>
            <img src={socialmediaIcon} alt='' />
            <h4>Social Media</h4>
        </div>
    </div>
  )
}

export default Category