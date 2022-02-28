import React from 'react';
import './banner.css';
import { Banner1 } from '../../../assets';


const Banner = () => {
    const handleClick = (e) => {
        const buttonSlider = document.querySelectorAll('.auto-slide button')
        const buttonSlider1 = buttonSlider[0];
        const buttonSlider2 = buttonSlider[1];
        const buttonSlider3 = buttonSlider[2];
        const buttonSlider4 = buttonSlider[3];
        const bannerSlider = document.getElementById('banner-first');
        if (e.currentTarget.id === buttonSlider1.id){
            buttonSlider1.classList.add('active')
            buttonSlider2.classList.remove('active')
            buttonSlider3.classList.remove('active')
            buttonSlider4.classList.remove('active')
            bannerSlider.style.marginLeft = '0';
        }
        else if (e.currentTarget.id === buttonSlider2.id){
            buttonSlider1.classList.remove('active')
            buttonSlider2.classList.add('active')
            buttonSlider3.classList.remove('active')
            buttonSlider4.classList.remove('active')
            bannerSlider.style.marginLeft = '-20%';
        }
        else if (e.currentTarget.id === buttonSlider3.id){
            buttonSlider1.classList.remove('active')
            buttonSlider2.classList.remove('active')
            buttonSlider3.classList.add('active')
            buttonSlider4.classList.remove('active')
            bannerSlider.style.marginLeft = '-40%';
        }
        else if (e.currentTarget.id === buttonSlider4.id){
            buttonSlider1.classList.remove('active')
            buttonSlider2.classList.remove('active')
            buttonSlider3.classList.remove('active')
            buttonSlider4.classList.add('active')
            bannerSlider.style.marginLeft = '-60%';
        }
        
    }
  return (
    <div className='banner'>
        <div className='banner-slider'>
            <div className='banner-slides'>
                <div className='banner-slide' id='banner-first'>
                    <img src={Banner1} alt='' />
                </div>
                <div className='banner-slide'>
                    <img src={Banner1} alt='' />
                </div>
                <div className='banner-slide'>
                    <img src={Banner1} alt='' />
                </div>
                <div className='banner-slide'>
                    <img src={Banner1} alt='' />
                </div>
                <div className='auto-slide'>
                    <button id='btn1' onClick={handleClick} className='auto-btn active'></button>
                    <button id='btn2' onClick={handleClick} className='auto-btn'></button>
                    <button id='btn3' onClick={handleClick} className='auto-btn'></button>
                    <button id='btn4' onClick={handleClick} className='auto-btn'></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner