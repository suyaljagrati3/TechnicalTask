import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import BrowserRouter
import './index.css'; // Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Must be added */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

