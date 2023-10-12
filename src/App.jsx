import { useState } from 'react';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
