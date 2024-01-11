import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {UsersProvider} from "./contexts/users/provider"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UsersProvider>
    <App />
  </UsersProvider>
);

