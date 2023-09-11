import React from 'react'
import ReactDOM from 'react-dom/client'
//import 'bootstrap/dist/css/bootstrap.css'
import ScrollToTopButton from './components/ScrollToTop/ScrollToTopButton.jsx'
import store from '@/redux/store'
import Grid from '@/components/grid/grid.jsx'
import { Provider } from 'react-redux'

//import './site.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <Grid />
            <ScrollToTopButton />
        </Provider>
        
  </React.StrictMode>,
)
