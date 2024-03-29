import React from 'react'

import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import App from './app';



import './assets/sass/main.scss';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index path="/*" element={<App/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)