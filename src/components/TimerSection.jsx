import React, { useEffect, useState } from "react";
import data from "../JsonData/TimerSection.json";
import { NavLink } from "react-router-dom";

const TimerSection = () => {
  const [leftTime, setLeftTime] = useState(29 * 24 * 60 * 60);

  const [displayDays, setDisplayDays] = useState("00");
  const [displayHours, setDisplayHours] = useState("00");
  const [displayMin, setDisplayMin] = useState("00");
  const [displaySec, setDisplaySec] = useState("00");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLeftTime((prev) => {
        if (prev <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const days = Math.floor(leftTime / (60 * 60 * 24));
    const hours = Math.floor((leftTime % (60 * 60 * 24)) / 3600);
    const minutes = Math.floor((leftTime % 3600) / 60);
    const seconds = Math.floor(leftTime % 60);

    setDisplayDays(days.toString().padStart(2, "0"));
    setDisplayHours(hours.toString().padStart(2, "0"));
    setDisplayMin(minutes.toString().padStart(2, "0"));
    setDisplaySec(seconds.toString().padStart(2, "0"));
  }, [leftTime]);

  return (
    <div className="sm:bg-[#F7FAFC] ">
      <div className="sm:ml-9 sm:mr-9 ml-4 mr-4 flex flex-col sm:pt-4 sm:pb-7   h-90 sm:h-70 sm:flex sm:flex-row ">
        <div className="sm:w-2/8 flex justify-between sm:justify-normal sm:flex-col sm:border-2 sm:border-gray-300 bg-white items-center ">
          <div>
            <h2 className="sm:ml-5 sm:mr-5 font-semibold sm:text-lg">
              Deals and offers
            </h2>
            <p className="text-gray-500 sm:ml-5 sm:mr-5">Hygiene equipments</p>
          </div>

          <div className="flex  gap-2 mt-5 mb-5 sm:ml-5 sm:mr-5">
            {/* Days */}
            <div className="h-19 w-15 rounded-sm bg-gray-800 text-white flex flex-col justify-center text-center p-2 max-[1280px]:hidden">
              <h2 className="text-lg font-bold">{displayDays}</h2>
              <p className="text-xs">Days</p>
            </div>

            {/* Hours */}
            <div className="xl:h-19 xl:w-15 h-15 w-11 rounded-sm bg-gray-200 text-gray-500 xl:bg-gray-800 xl:text-white flex flex-col justify-center text-center sm:p-2">
              <h2 className="text-lg font-bold">{displayHours}</h2>
              <p className="text-xs">Hours</p>
            </div>

            {/* Minutes */}
            <div className="xl:h-19 xl:w-15 h-15 w-11 rounded-sm bg-gray-200 text-gray-500 xl:bg-gray-800 xl:text-white flex flex-col justify-center text-center sm:p-2">
              <h2 className="text-lg font-bold">{displayMin}</h2>
              <p className="text-xs">Min</p>
            </div>

            {/* Seconds */}
            <div className="xl:h-19 xl:w-15 h-15 w-11 rounded-sm bg-gray-200 text-gray-500 xl:bg-gray-800 xl:text-white flex flex-col justify-center text-center sm:p-2">
              <h2 className="text-lg font-bold">{displaySec}</h2>
              <p className="text-xs">Sec</p>
            </div>
          </div>
        </div>

        <div className="sm:w-6/8 flex overflow-auto overflow-y-hidden  bg-white">
          {data.map((item) => (
            <div className=" flex flex-col text-center key={item.image}   justify-center items-center mx-auto gap-2 h-50 sm:h-70 w-full pl-6 pr-6 border border-gray-300">
              <div className="h-24 w-24">
                <NavLink to={`/detail/${item.id}`}>
                  <img
                    className="w-full h-full"
                    src={item.image}
                    alt="..Loading"
                  />
                </NavLink>

                {/* <img
                  className="w-full h-full"
                  src={item.image}
                  alt="..Loading"
                /> */}
              </div>
              <p>{item.name}</p>
              <p className="text-[#EB001B] bg-[#FFE3E3] rounded-2xl w-10">
                {item.percentage}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimerSection;
