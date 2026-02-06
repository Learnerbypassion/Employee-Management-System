import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'

// enable forwarding console logs to backend dev server terminal (DEV ONLY)
if (import.meta.env.MODE === 'development') {
  import('./utils/serverLogger').then(mod => mod.enableServerConsole());
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
