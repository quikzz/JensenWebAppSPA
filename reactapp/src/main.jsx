import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar/navbar.jsx'

import 'bootstrap/dist/css/bootstrap.css'

import Login from './components/loginform/login.jsx'
import Options from './components/optionsform/options.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <header>
            <Navbar />
        </header>
        
        <App />
        <Login />
        <Options/>
  </React.StrictMode>,
)
