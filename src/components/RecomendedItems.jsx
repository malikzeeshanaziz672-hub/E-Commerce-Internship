import React from "react";
import RecommendedItemsData from "../JsonData/RecommendedItem.json";
import { NavLink } from "react-router-dom";

const RecomendedItems = () => {
  return (
    <div className="sm:bg-[#F7FAFC]">
      <h1 className="sm:ml-9 sm:mr-9 ml-4 mr-4 mt-4 mb-4 text-2xl font-semibold">
        Recommended Items
      </h1>

      <div className="grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2  mt-5 sm:ml-9 sm:mr-9 ml-4 mr-4 gap-3">
        {RecommendedItemsData.map((item) => (
          <div className=" flex flex-col   key={item.image}  bg-white  justify-center items-center  mx-auto gap-8 h-80 sm:h-80 w-full  border border-gray-300">
            <div className="sm:h-40 sm:w-40 h-24 w-24 grid text-center mx-auto items-center justify-center">
              <NavLink to={`/detail/${item.id}`}>
                <img
                  className="w-full h-full sm:h-36 sm:w-36"
                  src={item.image}
                  alt="..Loading"
                />
              </NavLink>
            </div>
            <div className="pl-6">
              <p>{item.price}%</p>
              <p className="text-gray-500">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecomendedItems;
