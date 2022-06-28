import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/Sidebar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Bids from './components/Bids';
import Bids2 from './components/Bids2';
import Bids3 from './components/Bids3';
import Bids4 from './components/Bids4';
import Bids5 from './components/Bids5';
import BidContainer from './pages/BidContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bids" element={<BidContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
