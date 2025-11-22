import React, { useState } from "react";
import Logo from "../assets/Images/logo-colored.png";
import { FaHeart, FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { NavLink } from "react-router-dom";
import profileImg from "../assets/Images/user.png";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { BiHome } from "react-icons/bi";

const TopBar = () => {
  const [crossIcon, setCrossIcon] = useState(false);
  return (
    <>
      <div className="ml-9 mr-9 max-[720px]:hidden flex justify-between sm:h-15 xl:h-20  items-center ">
        <div className="w-30 h-10">
          <img src={Logo} alt="Logo Img" />
        </div>
        <div className="border-2 border-[#127FFF] sm:w-80  lg:w-130 flex justify-between rounded-sm ">
          <div>
            <input
              className="border-none outline-none lg:w-full sm:w-20 "
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex">
            <p>AllCateagry</p>

            <select className="outline-none" name="" id=""></select>
            <button className="bg-[#127FFF] text-white sm:w-15 lg:w-30">
              Search
            </button>
          </div>
        </div>
        <div className="max-[720px]:hidden">
          <ul>
            <li className="flex text-[13px] gap-2 items-center  text-gray-500">
              <NavLink
                className="flex text-center flex-col items-center"
                to="/profile"
              >
                <FaUser />
                Profile
              </NavLink>
              <NavLink
                className="flex text-center flex-col items-center"
                to="/msg"
              >
                <MdMessage /> Message
              </NavLink>
              <NavLink
                className="flex text-center flex-col items-center"
                t0="/orders"
              >
                <FaHeart /> Orders
              </NavLink>
              <NavLink
                className="flex text-center flex-col items-center"
                to="/mycart"
              >
                <IoMdCart /> My cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* for mobile view */}
      <div className="min-[720px]:hidden mr-4 ml-4">
        <div className="flex justify-between text-center h-20 items-center  ">
          <div className="flex text-center items-center">
            <AiOutlineMenuFold
              className="cursor-pointer"
              onClick={() => {
                setCrossIcon(true);
              }}
            />
            <img className="w-25 h-8 ml-4" src={Logo} alt="Logo Img" />
          </div>
          <div className="flex text-[22px]">
            <NavLink to="/mycart">
              <IoMdCart />
            </NavLink>
            <NavLink to="/profile">
              {" "}
              <img className="w-5 h-5 ml-4" src={profileImg} alt="" />
            </NavLink>
          </div>
        </div>

        <input
          className="w-full  rounded-md border-2 border-[#DEE2E7]  bg-[#F7FAFC] h-10 outline-none"
          type="text"
          placeholder="Search"
        />
      </div>

      {crossIcon && (
        <div className="absolute h-screen w-60 bg-gray-900  text-white top-0 left-0 flex-col flex text-[16px]  gap-9 ">
          <button>
            {" "}
            <RxCross1
              onClick={() => {
                setCrossIcon(false);
              }}
              className="absolute top-5 right-1 cursor-pointer"
            />
          </button>
          <NavLink className="hover:text-[#bda2a28e] ml-6" to="/profile">
            {" "}
            <img className="w-4 h-4 " src={profileImg} alt="" /> Profile
          </NavLink>
          <hr />
          <NavLink className="hover:text-[#bda2a28e] ml-6" to="/msg">
            {" "}
            <MdMessage /> Message
          </NavLink>{" "}
          <hr />
          <NavLink className="hover:text-[#bda2a28e] ml-6" t0="/orders">
            {" "}
            <FaHeart /> Orders
          </NavLink>{" "}
          <hr />
          <NavLink className="hover:text-[#bda2a28e] ml-6" to="/mycart">
            <IoMdCart /> My cart
          </NavLink>{" "}
          <hr />
          <NavLink className="hover:text-[#bda2a28e] ml-6" to="/">
            <BiHome /> Home
          </NavLink>{" "}
          <hr />
        </div>
      )}
    </>
  );
};

export default TopBar;
{
  /* <div className="sm:h-19 sm:w-15 h-15 w-11 rounded-sm bg-gray-200 text-gray-500 sm:bg-gray-800 sm:text-white flex flex-col justify-center text-center sm:p-2"></div> */
}
