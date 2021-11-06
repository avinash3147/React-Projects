import React from 'react';
import ReactDOM from 'react-dom';
// import MarkDownPreview from './MarkDownPreview/MarkDownPreview';
import RandomUser from './RandomUser/RandomUser';
// import './index.css';
// import App from './App';

// import SideBarModal from './SideBarModal/SideBarModal';
// import { AppProvider } from './Stripe/Context';
// import Stripe from './Stripe/Stripe';
// import Navbar from './Navbar/Navbar';
// import GroceryBud from './GroceryBud/GroceryBud';
// import './GroceryBud/GroceryBud.css'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <GroceryBud /> */}

    {/* <AppProvider> */}
      <RandomUser />
    {/* </AppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

