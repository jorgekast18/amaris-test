import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Menu from './components/Menu';
import { Home } from './components/Home';
import { Openings, Withdrawals } from './screens';
import { BalanceProvider } from './context/BalanceContext';

function App() {

  return (
    <>
     <BalanceProvider>
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
      </BalanceProvider>
    </>
  )
}

export default App
