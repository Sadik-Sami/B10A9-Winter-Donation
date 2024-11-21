import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Router, RouterProvider } from 'react-router-dom';
import router from './utils/router';
import AuthProvider from './context/AuthContext';

createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<RouterProvider router={router} />
	</AuthProvider>
);
