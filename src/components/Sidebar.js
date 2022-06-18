import React from 'react';

import {
  IoHomeOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from 'react-icons/io5';
import { IoMdSunny } from 'react-icons/io';
import { BsTags } from 'react-icons/bs';
import { VscMegaphone, VscPersonAdd } from 'react-icons/vsc';
import { AiOutlineRise } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BiBriefcase } from 'react-icons/bi';

import GamelyLogo from './GamelyLogo';

const SideBar = () => {
  return (
    <div className="bg-sidebar-bg fixed top-0 left-0 h-screen w-72 flex flex-col  shadow-lg border">
      <GamelyLogo />
      <SideBarIcon icon={<IoHomeOutline size="28" />} text={'Dashboard'} />
      <SideBarIcon
        icon={<IoMdSunny size="28" />}
        text={'Menu'}
        dropdown={<RiArrowDropDownLine size="28" />}
      />
      <SideBarIcon
        icon={<BsTags size="28" />}
        text={'Deals'}
        dropdown={<RiArrowDropDownLine size="28" />}
      />
      <SideBarIcon icon={<BiBriefcase size="28" />} text={'Orders'} />
      <SideBarIcon
        icon={<AiOutlineRise size="28" />}
        text={'Insights'}
        dropdown={<IoLogOutOutline size="26" id="briefcase" />}
      />
      <SideBarIcon
        icon={<VscMegaphone size="28" />}
        text={'Communications'}
        dropdown={<RiArrowDropDownLine size="28" />}
      />
      <SideBarIcon
        icon={<VscPersonAdd size="28" />}
        text={'Access Billing'}
        dropdown={<IoLogOutOutline size="26" id="briefcase" />}
      />
      <SideBarIcon
        icon={<BsTags size="28" id="deals" />}
        text={'Deals'}
        dropdown={<IoLogOutOutline size="26" id="briefcase" />}
      />

      {/* ////////////////////////////////DIVIDE//////////////// */}

      <hr className="divide-y-4 divide-black my-6" />

      <SideBarIcon
        icon={<IoSettingsOutline size="28" />}
        text={'Settings'}
        dropdown={<RiArrowDropDownLine size="28" />}
      />
      <SideBarIcon
        icon={<IoSettingsOutline size="28" />}
        text={'Admin Tools'}
        dropdown={<RiArrowDropDownLine size="28" />}
      />
      <div className=" justify-between mx-5 rounded-md border border-x p-1 rounded-smfont-light pb-4 mt-8">
        {/* <div className=" relative flex left-0 container  border rounded-smfont-light"> */}
        <Feedback icon={<VscMegaphone size="32" />} text={'Feedback'} />
        <p className="mb-2 pl-16">
          Let us know your reaction to the new Gamely Biz.
        </p>
        <a
          href="https://www.gamely.com/contact"
          className="underline font-medium my-4 pl-16 "
        >
          Provide Feedback
        </a>
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'Menu Item', dropdown }) => (
  <div className="sidebar-icon">
    {icon}
    <span className="sidebar-option">{text}</span>
    <span className="dropdown-icon">{dropdown}</span>
  </div>
);
const Feedback = ({ icon, text = 'Menu Item' }) => (
  <div className="feedback-icon">
    {icon}
    <span className="feedback-option">{text}</span>
  </div>
);

export default SideBar;
