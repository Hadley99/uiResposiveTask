import React from "react";
import OrderCard from "./OrderCard";
import { ordersData } from "./ordersData";

const Orders = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 bg-white gap-4 mt-4 ">
      {ordersData.map((order) => (
        <OrderCard order={order} key={order.orderNo} />
      ))}
    </div>
  );
};

export default Orders;
