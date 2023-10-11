import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import "./App.css";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, useLocation } from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
  </React.StrictMode>,
)
