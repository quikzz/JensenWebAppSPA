import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar/navbar.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/loginform/login.jsx'
import Footer from './components/footer/footer.jsx'
import Leftpanel from './components/leftpanel/leftpanel.jsx'
import ScrollToTopButton from './components/ScrollToTop/ScrollToTopButton.jsx'

import Grid from '@/components/grid/grid.jsx'

//import './site.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Grid />
        <ScrollToTopButton />
  </React.StrictMode>,
)
