import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar/navbar.jsx'
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css'
=======
import Login from './components/loginform/login.jsx'
import Options from './components/optionsform/options.jsx'
import './index.css'
>>>>>>> 8323deca4e73acd8d9cfba0323ae3aa83f0513ca

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
