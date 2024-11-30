import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import Login from './pages/login.page';  
import firebaseConfig from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import Home from './pages/home.page';  


export const app = initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;


