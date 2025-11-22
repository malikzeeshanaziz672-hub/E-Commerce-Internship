import React from "react";
import data from "../JsonData/SuppliersByRegion.json";

const SuppliersByRegion = () => {
  return (
    <div className="sm:bg-[#F7FAFC] mb-4">
      <div className="sm:ml-9 sm:mr-9 ml-4 mr-4">
        <h1 className="mt-5 mb-5 font-semibold text-2xl">
          Suppliers by region
        </h1>
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-6">
          {data.map((items) => {
            return (
              <div className="flex gap-5  items-center">
                <img className="w-10 h-7" src={items.flag} alt="" />
                <div>
                  <h2>{items.name}</h2>
                  <p className="text-gray-500 text-[11px]">{items.visit}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SuppliersByRegion;
