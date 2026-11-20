import { createRoot } from 'react-dom/client';
import "@fontsource-variable/readex-pro";
import { StrictMode } from 'react';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
