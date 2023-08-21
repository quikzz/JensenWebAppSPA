import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Login from './components/loginform/login.jsx'
import Options from './components/optionsform/options.jsx'
import './index.css'
import ScrolltoTop from './components/ScrollToTop/ScrollToTopComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <header>
            <Navbar />
        </header>
        <ScrolltoTop />
        <App />
        <Login />
        <Options/>
     </React.StrictMode>,
)
