import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>,
)
