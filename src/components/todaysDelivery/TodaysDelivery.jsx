import React from "react";
import Orders from "./Orders";
import Topbar from "./Topbar";

const TodaysDelivery = () => {
  return (
    <div className="mt-4 bg-white rounded-2xl  p-4 sm:p-0 drop-shadow-xl ">
      <Topbar />
      <Orders />
    </div>
  );
};

export default TodaysDelivery;
