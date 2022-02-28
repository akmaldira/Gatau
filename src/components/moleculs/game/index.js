import React from 'react';
import { MobileLegendImg, Diamond } from '../../../assets';
import './game.css';

const Game = () => {

    const games = [
        {
            name: 'Mobile Legends: Bang Bang',
            developer: 'Montoon',
            image: MobileLegendImg,
            asset: Diamond
        },
        {
          name: 'Mobile Legends: Bang Bang',
          developer: 'Montoon',
          image: MobileLegendImg,
          asset: Diamond
        },
        {
          name: 'Mobile Legends: Bang Bang',
          developer: 'Montoon',
          image: MobileLegendImg,
          asset: Diamond
        },
        {
          name: 'Mobile Legends: Bang Bang',
          developer: 'Montoon',
          image: MobileLegendImg,
          asset: Diamond
        },
        {
          name: 'Mobile Legends: Bang Bang',
          developer: 'Montoon',
          image: MobileLegendImg,
          asset: Diamond
        },
        {
          name: 'Mobile Legends: Bang Bang',
          developer: 'Montoon',
          image: MobileLegendImg,
          asset: Diamond
        },
        {
          name: 'Mobile Legends: Bang Bang',
          developer: 'Montoon',
          image: MobileLegendImg,
          asset: Diamond
        },
        {
          name: 'Mobile Legends: Bang Bang',
          developer: 'Montoon',
          image: MobileLegendImg,
          asset: Diamond
        }
    ]

  return (
    <div className='game'>
        <div className='title'>
            <h2>Game</h2>
            <p>Selengkapnya</p>
        </div>
        <div className='list-game'>
            {games.map((game, index) => {
                return (
                  <div key={index} className='box-game'>
                      <img src={game.image} alt='image-game' />
                      <div className='blur'>
                          <p>{game.developer}</p>
                          <h4>{game.name}</h4>
                          <a href='#'>Top Up Sekarang</a>
                      </div>
                      <div className='asset'>
                          <img src={game.asset} alt='asset' />
                      </div>
                      
                  </div>
                )
            })}
        </div>
    </div>
  )
}

export default Game