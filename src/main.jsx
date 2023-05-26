import React from 'react'
import ReactDOM from 'react-dom/client'
import Reffered from './pages/Reffered'
import Dashboard from './pages/Dashboard'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" Component={Dashboard} />
        <Route path="referred" element={<Reffered/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
