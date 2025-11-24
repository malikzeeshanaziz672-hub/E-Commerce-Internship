import React from "react";
import FlagImg from "../assets/Images/flagCat.png";
import { AiOutlineMenuFold } from "react-icons/ai";

const AllCategories = () => {
  return (
    <div className="border border-t-gray-300 border-b-gray-300 pt-4 pb-4">
      <div className="sm:ml-9 sm:mr-9 ml-4 mr-4 flex justify-between">
        <div className="flex items-center gap-7 overflow-x-auto whitespace-nowrap">
          <div className="flex items-center gap-1 ">
            <AiOutlineMenuFold />
            <a href=""> All category</a>
          </div>

          <a className="flex-none" href="">
            Hot offers
          </a>
          <a className="flex-none" href="">
            Gift boxes
          </a>
          <a className="flex-none" href="">
            Project
          </a>
          <a className="flex-none" href="">
            Menu item
          </a>
          <a className="flex-none" href="">
            Help <select></select>
          </a>
        </div>
        {/* 
        <div className="sm:w-3.5/5 w-full flex gap-7 overflow-x-auto overflow-y-hidden">
          <div className="flex items-center gap-1">
            <AiOutlineMenuFold />
            <a href=""> All category</a>
          </div>

          <a href="">Hot offers</a>
          <a href="">Gift boxes</a>
          <a href="">Project </a>
          <a href="">Menu item</a>
          <a href="">
            Help <select></select>
          </a>
        </div> */}
        <div className="sm:w-1.5/5 flex gap-6 justify-between max-[1024px]:hidden">
          <div>
            <p className="flex">
              English,USD <select></select>{" "}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1">
              Ship to <img className="w-8 h-5" src={FlagImg} alt="" />{" "}
              <select></select>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
