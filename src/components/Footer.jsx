import React from "react";
import Logo from "../assets/Images/logo-colored.png";
import { FaAppStore, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaYoutube } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="sm:ml-9 sm:mr-9 ml-4 mr-4 flex sm:flex-row  flex-col max-lg:gap-3 justify-between pt-6 pb-6">
        {/* .... */}
        <div className="flex flex-col  gap-3">
          <img className="w-30 h-10" src={Logo} alt="Logo Img" />
          <p className="text-gray-600">
            Best information about the company <br /> gies here but now lorem
            ipsum is
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100034874028384"
              target="_blank"
            >
              <FaFacebook className="bg-gray-400 text-white rounded-full p-1 w-6 h-6" />
            </a>
            <a href="https://www.google.com" target="_blank">
              <FaTwitter className="bg-gray-400 text-white rounded-full p-1 w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/malik-zeeshan-aziz-8b507535a/"
              target="_blank"
            >
              <FaLinkedin className="bg-gray-400 text-white rounded-full p-1 w-6 h-6" />
            </a>
            <FaInstagram className="bg-gray-400 text-white rounded-full p-1 w-6 h-6" />
            <FaYoutube className="bg-gray-400 text-white rounded-full p-1 w-6 h-6" />
          </div>
        </div>
        {/* ....... */}
        <div className="flex flex-col max-lg:hidden">
          <h1 className="font-semibold mb-3">About</h1>
          <NavLink className="text-gray-500" to="/msg">
            About Us
          </NavLink>
          <NavLink className="text-gray-500" to="/mycart">
            Find store
          </NavLink>
          <NavLink className="text-gray-500" to="/orders">
            Categories
          </NavLink>
          <NavLink className="text-gray-500" to="/profile">
            Blogs
          </NavLink>
        </div>
        {/* ..... */}
        <div className="flex flex-col max-lg:hidden">
          <h1 className="font-semibold mb-3">About</h1>
          <NavLink className="text-gray-500" to="/msg">
            About Us
          </NavLink>
          <NavLink className="text-gray-500" to="/mycart">
            Find store
          </NavLink>
          <NavLink className="text-gray-500" to="/orders">
            Categories
          </NavLink>
          <NavLink className="text-gray-500" to="/profile">
            Blogs
          </NavLink>
        </div>
        {/* .... */}
        <div className="flex flex-col max-lg:hidden">
          <h1 className="font-semibold mb-3">About</h1>
          <NavLink className="text-gray-500" to="/msg">
            About Us
          </NavLink>
          <NavLink className="text-gray-500" to="/mycart">
            Find store
          </NavLink>
          <NavLink className="text-gray-500" to="/orders">
            Categories
          </NavLink>
          <NavLink className="text-gray-500" to="/profile">
            Blogs
          </NavLink>
        </div>
        {/* ..... */}
        <div className="flex flex-col">
          <h1 className="font-semibold mb-3">About</h1>
          <NavLink className="text-gray-500" to="/msg">
            About Us
          </NavLink>
          <NavLink className="text-gray-500" to="/mycart">
            Find store
          </NavLink>
          <NavLink className="text-gray-500" to="/orders">
            Categories
          </NavLink>
          <NavLink className="text-gray-500" to="/profile">
            Blogs
          </NavLink>
        </div>
        {/* ...... */}
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold mb-3">Get app</h1>
          <div className="bg-black text-white p-1 rounded-lg h-10 w-30">
            <div className="flex items-center">
              <FaAppStore />
              <div className="flex flex-col">
                <p className="text-[9px]">Download on the</p>
                <h1 className="font-semibold -mt-1">App Store</h1>
              </div>
            </div>
          </div>
          <div className="bg-black text-white p-1 rounded-lg h-10 w-30">
            <div className="flex items-center">
              <FaAppStore />
              <div className="flex flex-col ">
                <p className="text-[9px]">Get it on</p>
                <h1 className="font-semibold -mt-1">Google Play</h1>
              </div>
            </div>
          </div>
        </div>
        {/* ...... */}
      </div>
    </div>
  );
};

export default Footer;
