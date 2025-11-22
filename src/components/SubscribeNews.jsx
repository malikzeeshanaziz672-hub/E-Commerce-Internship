import React, { useState } from "react";

const SubscribeNews = () => {
  const [subscribe, setSubscribe] = useState("");

  const SubscribeBtn = () => {
    setSubscribe(() => {
      alert("Subscribed Successfully");
    });
    console.log("Subscribed");
  };

  return (
    <div className="bg-gray-200 flex flex-col gap-3 justify-center items-center text-center p-4">
      <h1 className="font-semibold text-xl">Subscribe on our newsletter</h1>
      <p className="text-gray-800">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <div className="flex sm:flex-row flex-col gap-4 items-center">
        <input
          className="bg-white outline-none pl-2 rounded-lg w-70 border border-gray-300"
          type="text"
          placeholder="Email"
        />
        <button
          onClick={SubscribeBtn}
          className="w-30 p-2 bg-[#127FFF] rounded-lg text-white hover:bg-blue-400"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeNews;
