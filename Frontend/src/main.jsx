import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Routes, Route, BrowserRouter } from "react-router"
import Auth from '../context/Auth.jsx'

createRoot(document.getElementById('root')).render(
  <Auth>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Auth>,
)
