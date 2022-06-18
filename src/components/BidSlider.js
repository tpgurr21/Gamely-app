import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const BidSlider = () => {
    
  return (
    <Slider
            minus={<AiOutlineMinus />}
            amount={'$740'}
            plus={<AiOutlinePlus />}
          />
          );
        };

  const Slider = ({ minus, amount = '$0', plus }) => (
    <div>
      <button className="bid-button">{minus}</button>
      <a className="bid-amount-border bid-amount-text">{amount}</a>
      <button className="bid-button">{plus}</button>
    </div>
  );

export default BidSlider