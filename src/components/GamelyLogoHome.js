import React from 'react';
import { Link } from 'react-router-dom';

const GamelyLogo = () => {
  return (
    <div>
      <h1 className="mt-3 mb-6 mr-1">
        {' '}
        <Link
          to="/bids"
          className="text-8xl font-medium mb-8 hover:bg-opacity-25 hover:bg-gray-100 rounded-3xl text-leafly-green"
        >
          Gamely.
          <span className="font-light text-leafly-green text-opacity-50">
            biz
          </span>
        </Link>
      </h1>
    </div>
  );
};

export default GamelyLogo;
