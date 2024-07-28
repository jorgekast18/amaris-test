import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Menu from './components/Menu';
import { Home } from './components/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
      
    </>
  )
}

export default App
