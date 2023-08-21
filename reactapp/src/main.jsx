import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Login from './components/loginform/login.jsx'
import Options from './components/optionsform/options.jsx'
import AdScripts from './components/ads/adScript.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <header>
            <Navbar />
        </header>
        
        <AdScripts />
        <App />
        <Login />
        <Options/>
  </React.StrictMode>,
)
