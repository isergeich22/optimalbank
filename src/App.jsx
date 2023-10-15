import React, { createContext, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import './App.css';
export const PopupContext = createContext();
function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState('departments');
  const [params, setParams] = useState([]);
  const [startDot, setStartDot] = useState([55.751574, 37.573856]);

  return (
    <BrowserRouter>
      <PopupContext.Provider
        value={{
          selectedItem,
          setSelectedItem,
          activeTab,
          setActiveTab,
          params,
          setParams,
          startDot,
        }}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </PopupContext.Provider>
    </BrowserRouter>
  );
}

export default App;
