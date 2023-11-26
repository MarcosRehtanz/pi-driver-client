import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD
=======
import axios from 'axios'
>>>>>>> 2a0c46d49a62f39d3bd396319a1f7bade3a95e0d
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

<<<<<<< HEAD
=======
axios.defaults.baseURL = 'https://driver-server.onrender.com'

>>>>>>> 2a0c46d49a62f39d3bd396319a1f7bade3a95e0d
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
