import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideBar from '../components/Sidebar';
import Bids5 from '../components/Bids5';
import Bids4 from '../components/Bids4';
import Bids3 from '../components/Bids3';
import Bids2 from '../components/Bids2';
import Bids from '../components/Bids';

const BidContainer = () => {
  return (
    <div className="container h-full">
      <SideBar />
      <div className="space-y-3 h-full">
        <Bids5 />
        <Bids4 />
        <Bids3 />
        <Bids2 />
        <Bids />
      </div>
    </div>
  );
};

export default BidContainer;
