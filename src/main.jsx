import { StrictMode } from 'react'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <App />
    </Router>
  </StrictMode>,
)
