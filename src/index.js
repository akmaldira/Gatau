import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './config/routes';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
