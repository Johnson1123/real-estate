import React from "react";
import images from "../assets/images";
import "./Propery.css";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { LiaBedSolid } from "react-icons/lia";
import { PiShowerLight } from "react-icons/pi";

import { TbChartAreaLine } from "react-icons/tb";

function Property({ setToggle }) {
  return (
    <div className="property">
      <div className="property-image">
        <img src={images.bg2} alt="" class="p-image" />
        <div className="overlay"></div>
        <div className="overlay-content">
          <span className="" onClick={() => setToggle(true)}>
            <BsArrowsAngleExpand size={20} />
          </span>
          <span className="">
            <AiOutlineHeart size={25} />
          </span>
          <span className="">
            <AiOutlinePlusCircle size={25} />
          </span>
        </div>
      </div>
      <div className="container mt-3 px-3">
        <h2 className="property-title w-[100%] truncate font-[500]">
          New Apartment Nice View
        </h2>
        <div className="flex justify-between py-3">
          <p className="price">#500,000/mon</p>
          <div className="">
            <div className="flex gap-2">
              <span className="property-details-icon flex gap-1">
                <LiaBedSolid size={20} color="#888888" />
                <span className="text-[#888888]">2</span>
              </span>
              <span className="property-details-icon flex gap-1">
                <PiShowerLight size={20} />
                <span className="text-[#888888]">2</span>
              </span>
              <span className="property-details-icon flex gap-1">
                <TbChartAreaLine size={20} color="#888888" />
                <span className="text-[#888888]">2</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <p></p>
    </div>
  );
}

export default Property;
