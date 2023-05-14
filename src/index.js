import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from "./Pages/Main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import AuthPage from './Pages/AuthPage';
import Profile from  './Pages/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        <Route path="/login" element={<AuthPage/>} />
        <Route path="/news" element={<Main/>} />
        <Route path="/lk" element={<Profile/>} />
        <Route path="/" element={<Main/>} />
        <Route path="/lk/:id" element={<Profile/>} />
      </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
