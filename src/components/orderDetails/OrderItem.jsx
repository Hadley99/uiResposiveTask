import React from "react";

const OrderItem = ({ item }) => {
  return (
    <div className="bg-white flex justify-between px-4 py-2 pr-0 rounded-2xl">
      <div className="flex flex-col justify-around font-medium">
        <h2 className="text-sm text-customGray">{item.title}</h2>
        <p className="text-lg ">{item.noOfOrders}</p>
      </div>
      <div>
        <div
          style={{ backgroundColor: item.color }}
          className={`p-4 m-4 rounded-full`}
        >
          {item.icon}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
