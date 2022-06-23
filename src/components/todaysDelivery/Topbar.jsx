import React from "react";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="font-medium text-xl">Today's Delivery</h2>
      <div className="flex justify-between items-center space-x-4">
        <div>
          <input
            type="text"
            className="form-control block w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
            placeholder="Search Here"
          />
        </div>
        <div>
          <select className="focus:outline-none px-3 py-1.5 border appearance-none font-medium border-solid border-gray-300 text-gray-700 bg-white rounded-lg ">
            <option value="allorder">All Order</option>
            <option value="xyz">xyz</option>
            <option value="zyx">zyx</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
