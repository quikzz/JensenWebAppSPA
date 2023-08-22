import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar/navbar.jsx'

import 'bootstrap/dist/css/bootstrap.css'

import Login from './components/loginform/login.jsx'
import Options from './components/optionsform/options.jsx'
<<<<<<< HEAD


=======
import Footer from './components/footer/footer.jsx'
import Leftpanel from './components/leftpanel/leftpanel.jsx'
import './index.css'
>>>>>>> 4c70c70f558747b1a55af0b1e42fec02f4013d75

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <header>
            <Navbar />
        </header>
        <aside>
            <Leftpanel />
        </aside>
        <App />
        <Login />
        <Options/>

        <Footer />
  </React.StrictMode>,
)
