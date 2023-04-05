import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UnecesssaryContextProvider from './UnecessaryContext';
import ModalContextProvider from './ModalContext';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UnecesssaryContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </UnecesssaryContextProvider>
  </React.StrictMode>
);
