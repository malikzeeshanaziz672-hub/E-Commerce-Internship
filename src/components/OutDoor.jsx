import React from "react";
import outDoorImg from "../assets/Images/Group 969.png";
import outDoorData from "../JsonData/OutDoor.json";

const OutDoor = () => {
  return (
    <div className="sm:bg-[#F7FAFC]">
      <div className="sm:ml-9 sm:mr-9 ml-4 mr-4 flex sm:flex-row flex-col overflow-hidden">
        {/* left */}

        <div className="sm:w-2/8">
          <div className="w-90 h-70 max-[640px]:hidden ">
            <h1 className="absolute mt-5 ml-5 text-2xl font-semibold">
              Home <br /> and Outdoor <br />
            </h1>
            <button className="absolute mt-25 ml-5 bg-white rounded-sm font-medium h-9 w-28">
              Source Now
            </button>
            <img className="w-full h-full" src={outDoorImg} alt="" />
          </div>
        </div>
        {/* Right */}
        <div className="w-6/8 bg-white overflow-auto overflow-y-hidden grid  grid-cols-4 max-[640px]:hidden">
          {outDoorData.map((data) => (
            <div className="border border-gray-300 pl-4 pr-2 flex flex-col justify-center">
              <h2>{data.name}</h2>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-500">{data.From}</p>
                  <p className="text-gray-500">{data.Price}</p>
                </div>
                <div className="w-21 h-21">
                  <img className="w-full h-full" src={data.image} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* for mobile responsiveness */}
        <div className="min-[640px]:hidden flex flex-col">
          <h1 className=" ml-4 text-lg mb-5">Home and Outdoor</h1>
          <div className="flex overflow-x-auto overflow-y-hidden w-full bg-white ">
            {outDoorData.map((data) => (
              <div className="flex flex-col text-center  justify-center items-center gap-2 h-50 pl-6 pr-6 border border-gray-300">
                <div className="h-24 w-24">
                  <img
                    className="w-full h-full"
                    src={data.image}
                    alt="..Loading"
                  />
                </div>
                <p>{data.name}</p>
                <div className="flex gap-1">
                  <p className="text-gray-500" key={data.image}>
                    {data.From}
                  </p>
                  <p className="text-gray-500" key={data.name}>
                    {data.Price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutDoor;
