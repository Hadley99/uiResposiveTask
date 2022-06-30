import React, { useState } from "react";
import Menu from "../../util/Menu";

const selectList = [
  { value: "allOrders", displayTitle: "All Orders" },
  { value: "pending", displayTitle: "Pending" },
  { value: "delivered", displayTitle: "Delivered" },
];

const Topbar = () => {
  const [selectedValue, setSelectedValue] = useState(selectList[0]);

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
        <div className="relative">
          <Menu
            setSelectedValue={setSelectedValue}
            selectList={selectList}
            displayValue={selectedValue.displayTitle}
            offsetValue={5}
            buttonStyles="bg-white ml-3 flex items-center font-medium  text-sm p-1 px-2 rounded-md"
            listStyles="p-1 px-2 hover:bg-primary  font-medium hover:text-white  rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
