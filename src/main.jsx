import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { BiblioApp } from './BiblioApp'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <BiblioApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
