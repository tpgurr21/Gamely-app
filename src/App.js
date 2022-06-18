import React from 'react';
import SideBar from './components/Sidebar';
import Bids from './components/Bids';
import Bids2 from './components/Bids2';
import Bids3 from './components/Bids3';
import Bids4 from './components/Bids4';
import Bids5 from './components/Bids5';

function App() {
  return (
    <div className="container">
      <SideBar />
      <div className="space-y-3">
        <Bids5 />
        <Bids4 />
        <Bids3 />
        <Bids2 />
        <Bids />
      </div>
    </div>
  );
}

export default App;
