import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GroceryBud from './GroceryBud/GroceryBud';
import './GroceryBud/GroceryBud.css'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <GroceryBud />
  </React.StrictMode>,
  document.getElementById('root')
);

