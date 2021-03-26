import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Header from './components/Header';
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
      <br></br>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

