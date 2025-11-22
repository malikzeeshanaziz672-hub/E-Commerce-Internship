import React from "react";
import data from "../JsonData/OurExtraServices.json";
// import { CiSearch } from "react-icons/ci";

const OurExtraServices = () => {
  return (
    <div className="sm:bg-[#F7FAFC] ">
      <div className="ml-4 mr-4 sm:ml-9 sm:mr-9 ">
        <h1 className="font-semibold text-2xl mt-5 mb-5">Our extra services</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6  w-full">
          {data.map((item) => {
            return (
              <div className="bg-white border border-gray-300 min-sm:[w-full]">
                <img src={item.image} alt="" />
                <div className="flex justify-end -mt-4 mr-5">
                  <p className="rounded-full w-10 text-center flex justify-center items-center h-10 bg-[#D1E7FF] text-black p-6 border border-white">
                    {item.icon}
                  </p>
                </div>
                <p className="font-semibold pl-2 sm:pt-2">{item.text1}</p>
                <p className="font-semibold pl-2 pb-2">{item.text2}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurExtraServices;
