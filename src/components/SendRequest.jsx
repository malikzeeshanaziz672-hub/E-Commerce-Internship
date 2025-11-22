import React, { useState } from "react";
import infoImg from "../assets/Images/infoImg.png";
import rectangularImg from "../assets/Images/Rectangle 299.png";

const SendRequest = () => {
  const [sendInquiry, setSendInquiry] = useState("");

  const SendInquiry = () => {
    setSendInquiry(() => {
      alert("Inquiry Send Successfully");
      console.log("quiry");
    });
  };

  return (
    <div className="sm:bg-[#F7FAFC]">
      <div className="sm:ml-9 sm:mr-9">
        <div className="sm:h-90 h-40 w-full relative overflow-hidden">
          <div>
            <div className=" absolute ml-5 mt-5 sm:ml-10 sm:mt-10  z-10 text-white">
              <h1 className="sm:text-3xl text-[15px] mb-4 font-semibold">
                An easy way to send <br /> requests to all suppliers
              </h1>
              <p className="max-[768px]:hidden">
                Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit,
                sed do eiusmod tempor incididunt.
              </p>
              <button
                onClick={SendInquiry}
                className="min-[768px]:hidden p-2 pl-3 pr-3 mt-2 rounded-lg w-30 hover:bg-blue-300 bg-[#0067FF] text-white"
              >
                Send Inquiry
              </button>
            </div>
            {/* ............... */}

            <div className=" absolute rounded-sm right-5 mt-5.5 max-lg:hidden z-10  w-100 bg-white text-black">
              <div className="p-5 flex flex-col gap-4 ">
                <h1 className="font-semibold">Send quote to suppliers</h1>
                <p className="border border-gray-300 p-2 rounded-sm">
                  What item you need?
                </p>
                <textarea
                  // cols={3}
                  // rows={13}
                  placeholder="Type more details"
                  className="resize-none w-full  outline-none p-3 border border-gray-300"
                />
                <div className="flex gap-3">
                  <p className="border border-gray-300 p-1 pl-2 w-45 rounded-sm">
                    Quantity
                  </p>
                  <p className="border border-gray-300 pt-1 pb-1  pl-2 w-20 rounded-sm">
                    Pcs <select className="outline-none ml-5"></select>
                  </p>
                </div>
                <button
                  onClick={SendInquiry}
                  className=" p-2 pl-3 pr-3 rounded-lg w-30 hover:bg-blue-300 bg-[#0067FF] text-white"
                >
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>
          <img
            className="absolute sm:h-90 h-40 w-full"
            src={rectangularImg}
            alt=""
          />
          <img className="sm:h-90 h-40 w-full" src={infoImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SendRequest;
