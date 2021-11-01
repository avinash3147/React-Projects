import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { AppProvider } from './SideBarModal/Context';
import SideBarModal from './SideBarModal/SideBarModal';
// import Navbar from './Navbar/Navbar';
// import GroceryBud from './GroceryBud/GroceryBud';
// import './GroceryBud/GroceryBud.css'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <GroceryBud /> */}

    <AppProvider>
      <SideBarModal />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

