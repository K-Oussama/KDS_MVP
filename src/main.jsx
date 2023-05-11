import React from 'react'
import ReactDOM from 'react-dom/client'
//import { config } from 'dotenv';
import App from './App.jsx'
import './static/css/index.css'

//config();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
