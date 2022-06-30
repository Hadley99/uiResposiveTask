import React from "react";
import { orderDetailsData } from "./orderDetailsData";
import OrderItem from "./OrderItem";

const OrderDetails = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1  gap-4 mt-4">
      {orderDetailsData.map((item, i) => (
        <OrderItem key={i} item={item} />
      ))}
    </div>
  );
};

export default OrderDetails;
