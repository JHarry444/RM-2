import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // StrictMode is a tool for highlighting potential problems in an application. 
  // It activates additional checks and warnings for its descendants.
  // Causes components to render twice in development mode, but not in production mode.
  <StrictMode>
    <App />
  </StrictMode>,
)
