import React from 'react'
import { DataProvider } from './utils/context/dataContext';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/header';
import Routeur from './utils/Routes'; 
import './assets/sass/main.scss';
import Footer from './components/footer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
    <Router>
      <Header/>
      <Routeur />
      <Footer/>
    </Router>
    </DataProvider>
  </React.StrictMode>,
)
