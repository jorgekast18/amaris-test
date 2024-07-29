import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Menu from './components/Menu';
import { Home } from './components/Home';
import { Openings, Withdrawals } from './screens';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/openings" element={<Openings />} />
            <Route path="/withdrawals" element={<Withdrawals />} />
          </Routes>
        </div>
      </BrowserRouter>
      
    </>
  )
}

export default App
