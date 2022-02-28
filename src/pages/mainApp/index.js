import React from 'react'
import { Footer, Header } from '../../components'
import Home from '../home'
import './mainApp.css';

const MainApp = () => {
  return (
    <div className='main-app'>
        <div className='header-wrapper'>
            <Header />
        </div>
        <div className='home-wrapper'>
            <Home />
        </div>
        <div className='footer-wrapper'>
            <Footer />
        </div>
    </div>
  )
}

export default MainApp