import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"

function App() {
  return (
    
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>

  );
}

export default App;
