import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './app/index.tsx';
import './styles/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
