import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div style={{ backgroundColor: order.color }} className="rounded-2xl">
      <div className="text-sm font-medium bg-white ml-1.5 rounded-2xl rounded-tl-xl rounded-bl-xl p-4  m-px">
        <div className="flex justify-between items-center">
          <h2>{order.title}</h2>
          <p>{order.orderNo}</p>
        </div>
        <div className="flex mt-3">
          {order.orders.map((item, i) => (
            <div className="bg-gray-200 rounded-lg mr-2  p-1" key={i}>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
