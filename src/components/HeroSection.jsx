import React, { useState } from "react";
import HeroImg from "../assets/Images/HeroImg.png";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const [click, setClick] = useState("");

  const JoinNowClick = () => {
    setClick(() => alert("Joined Successfully"));
    console.log("Joined Clicked");
  };

  const LoginClick = () => {
    setClick(() => alert("Login Successfully"));
    console.log("Login Clicked");
  };

  return (
    <div className=" sm:bg-[#F7FAFC] pt-6 pb-2">
      <div className="flex  justify-between gap-5 bg-white sm:ml-9 sm:mr-9 border-2 p-6 border-gray-300">
        {/* w-2/8 */}
        <div className="sm:w-2/8 max-lg:hidden">
          <div className="flex flex-col  text-gray-600 ">
            <NavLink className="hover:bg-[#E5F1FF] p-1.5 rounded-sm bg-[#E5F1FF] ">
              Clothes and Wear
            </NavLink>
            <NavLink className="hover:bg-[#E5F1FF] rounded-sm p-1.5">
              Home Interiors
            </NavLink>
            <NavLink className="hover:bg-[#E5F1FF] rounded-sm p-1.5">
              Automobiles
            </NavLink>
            <NavLink className="hover:bg-[#E5F1FF] rounded-sm p-1.5">
              Computer and tech
            </NavLink>
            <NavLink className="hover:bg-[#E5F1FF] rounded-sm p-1.5">
              Tools , equipments
            </NavLink>
            <NavLink className="hover:bg-[#E5F1FF] rounded-sm p-1.5">
              Sports and outdoor
            </NavLink>
            <NavLink className="hover:bg-[#E5F1FF] rounded-sm p-1.5">
              Animals and pets
            </NavLink>
            <NavLink className="hover:bg-[#E5F1FF] rounded-sm p-2">
              Machinery tools
            </NavLink>
            <NavLink className="hover:bg-[#E5F1FF] rounded-sm p-1.5">
              More Categary
            </NavLink>
          </div>
        </div>
        {/* w-4/8 */}
        <div className="lg:w-5/8 ">
          <div className="absolute mt-5 ml-5 sm:mt-10 sm:ml-7">
            <p className=" text-[20px] sm:text-2xl">Latest trending</p>
            <h1 className=" font-bold text-[20px] sm:text-2xl max-[720px]:-mt-2">
              Electronic items
            </h1>
            <button className="bg-white hover:text-blue-500 text-black pt-2 pb-2 pl-4 pr-4 font-medium cursor-pointer rounded-sm mt-3">
              Learn more
            </button>
          </div>

          <img className="lg:w-full w-screen h-full " src={HeroImg} alt="" />
        </div>
        {/* w-2/8 */}
        <div className="sm:w-2/8 max-lg:hidden ">
          <div className="flex flex-col justify-between h-full">
            <div className="bg-[#e3f0fff7] p-4 rounded-sm mb-2">
              <div className="flex gap-1 items-center mb-3">
                <Avatar sx={{ height: 50, width: 50, bgcolor: "#cfe9ff" }} />
                <h1 className="">
                  Hi, user <br /> let’s get stated
                </h1>
              </div>
              <div className="flex flex-col gap-1">
                <button
                  onClick={JoinNowClick}
                  className="bg-[#127FFF] cursor-pointer hover:bg-white hover:text-[#0D6EFD] v text-white p-1 rounded-sm"
                >
                  Join now
                </button>
                <button
                  onClick={LoginClick}
                  className="text-[#0D6EFD] cursor-pointer hover:bg-[#127FFF] hover:text-white bg-white p-1 rounded-sm"
                >
                  Log in
                </button>
              </div>
            </div>
            {/* .... */}
            <div className="bg-[#F38332] p-2 text-white rounded-xl mb-2">
              Get US $10 off <br /> with a new <br /> supplier
            </div>
            {/* .... */}
            <div className="bg-[#55BDC3] p-2 text-white rounded-xl">
              Send quotes with <br /> supplier <br /> preferences
            </div>
          </div>
        </div>
        {/* ... */}
      </div>
    </div>
  );
};

export default HeroSection;
