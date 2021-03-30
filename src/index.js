import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import App from './components/App';
import Header from './components/Header';
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

