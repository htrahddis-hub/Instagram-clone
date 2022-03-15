import React from 'react';
import { BrowserRouter, Route, Routes, Link ,useLocation} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
