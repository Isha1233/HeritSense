import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from "./store/Auth.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider> {/* Make sure AuthProvider wraps your entire application */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <ToastContainer />
  </AuthProvider>
);
