import React from 'react'
import ReactDOM from 'react-dom/client'
//import 'bootstrap/dist/css/bootstrap.css'
import ScrollToTopButton from './components/ScrollToTop/ScrollToTopButton.jsx'

import Grid from '@/components/grid/grid.jsx'

//import './site.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Grid />
        <ScrollToTopButton />
  </React.StrictMode>,
)
