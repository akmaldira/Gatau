import React from 'react';
import { Banner, Category, Game } from '../../components/moleculs';
import { Circle, Gap } from '../../components/atoms';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
        <div className='banner-wrapper'>
            <Banner />
        </div>
        <div className='circle1'>
            <Circle />
        </div>
        <div className='category-wrapper'>
            <Gap height={65}/>
            <Category />
        </div>
        <div className='circle2'>
            <Circle />
        </div>
        <div>
            <Gap height={10} />
            <Game />
            <Gap height={110} />
        </div>
    </div>
  )
}

export default Home