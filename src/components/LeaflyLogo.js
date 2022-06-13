import React from 'react';

const LeaflyLogo = () => {
  return (
    <div>
      <h1 className="mt-3 mb-6 mr-1">
        {' '}
        <a
          href="https://www.leafly.com/"
          className="text-4xl text-left font-medium pl-10 pt-4 mb-8  text-leafly-green"
        >
          Leafly.
          <span className="font-light text-leafly-green text-opacity-50">
            biz
          </span>
        </a>
      </h1>
    </div>
  );
};

export default LeaflyLogo;
