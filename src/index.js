import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './HackerNews/context';
import HackerNews from './HackerNews/HackerNews';
// import DarkMode from './DarkMode/DarkMode';
// import MoviesDB from './MoviesDB/MoviesDB';
// import Pagination from './Pagination/Pagination';
// import StockPhotos from './StockPhotos/StockPhotos';
// import MarkDownPreview from './MarkDownPreview/MarkDownPreview';
// import RandomUser from './RandomUser/RandomUser';
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
    <AppProvider>
      <HackerNews />
    </AppProvider>

    {/* </AppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

