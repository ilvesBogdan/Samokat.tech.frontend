import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from "./Pages/Main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import AuthPage from './Pages/AuthPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        <Route path="/login" element={<AuthPage/>} />
        <Route path="/" element={<Main/>} />

      </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
