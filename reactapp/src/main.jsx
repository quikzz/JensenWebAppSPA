import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Login from './components/loginform/login.jsx'
import Options from './components/optionsform/options.jsx'
import ScrolltoTop from './components/ScrollToTop/ScrollToTopComponent.jsx'
import LeftPanel from './components/leftpanel/leftpanel.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <header>
            <Navbar />
        </header>
        <aside className="main__leftPanel">
            <LeftPanel/>
        </aside>
        <ScrolltoTop />
        <App />
        <Login />
        <Options/>
     </React.StrictMode>,
)
