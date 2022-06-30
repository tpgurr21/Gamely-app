import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const BidSlider = ({ minus, amount = '$0', plus }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        className="bid-button"
        onClick={() => setCount(count - 50)}
        disabled={count === 0}
      >
        <AiOutlineMinus />
      </button>
      <a className="bid-amount-border bid-amount-text">{`$${count}`}</a>
      <button className="bid-button" onClick={() => setCount(count + 50)}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};

// const Slider = ({ minus, amount = '$0', plus }) => (

//   <div>
//     <button className="bid-button" onClick={() => setCount(count - 1)}>{minus}</button>
//     <a className="bid-amount-border bid-amount-text">{amount}</a>
//     <button className="bid-button">{plus}</button>
//   </div>
// );

export default BidSlider;
