import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/theme.css'

const root = document.getElementById('root')
if (!root) throw new Error('MIssing #root in index.html')

createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)

