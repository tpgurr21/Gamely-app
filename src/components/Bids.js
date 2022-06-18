import React from 'react';
import BidSlider from './BidSlider';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Bids = () => {
  return (
    <div className="bid-component">
      <div className="flex flex-col items-start space-y-2">
        <div className="inline-bid">
          <PlatinumPlacement placementText="Platinum Placement" placement="5" />
          <HighestBidder isHighest="Highest bidder" />
        </div>
        <div className="inline-bid">
          <BidAmount amount="$740" />
          <BidCount />
        </div>
      </div>
      <hr className="ml-[-2rem] w-50% relative border divide-black " />
      <div className="items-start space-y-2">
        <QuickBid />
        <div className="inline-bid">
          <BidSlider
            minus={<AiOutlineMinus />}
            amount={'$740'}
            plus={<AiOutlinePlus />}
          />
          <BidTotal total={'$740'} />
        </div>
      </div>
    </div>
  );
};

const PlatinumPlacement = ({ placementText, placement }) => (
  <div className="platinum-placement-border platinum-placement-text ">
    {placementText} {placement}
  </div>
);

const HighestBidder = ({ isHighest }) => (
  <div className="highest-bidder-border highest-bidder-text ">{isHighest}</div>
);

const BidAmount = ({ amount }) => (
  <div className="bid-amount-top-display">{amount}</div>
);

const BidCount = ({ count = '0' }) => (
  <div className="bid-count">{count} bids</div>
);

const QuickBid = () => <div className="quick-bid">Quick Bid</div>;

// const BidSlider = ({ minus, amount = '$0', plus }) => (
//   <div>
//     <button className="bid-button">{minus}</button>
//     <a className="bid-amount-border bid-amount-text">{amount}</a>
//     <button className="bid-button">{plus}</button>
//   </div>
// );

const BidTotal = ({ total }) => (
  <div className="total-special-border total-border total-text">
    bid {total}
  </div>
);

const SliderAmount = (amount = '0') => {
  <div>${BidSlider.amount}</div>;
};

export default Bids;
