import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/navBar';
import * as bootstrap from 'bootstrap';
import './css/styles.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)
