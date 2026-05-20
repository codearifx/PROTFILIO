import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { ActiveSectionProvider } from './context/ActiveSectionContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ActiveSectionProvider>
        <App />
      </ActiveSectionProvider>
    </ThemeProvider>
  </StrictMode>,
)
