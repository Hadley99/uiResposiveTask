import React, { useState } from "react";
import Navbar from "../common/navbar/Navbar";
import OrderDetails from "./orderDetails/OrderDetails";
import Overview from "./overview/Overview";

import TodaysDelivery from "./todaysDelivery/TodaysDelivery";

const Dashboard = ({ open, toggleOpen }) => {
  return (
    <>
      <OrderDetails />

      <div className="md:flex md:space-x-4">
        <div className="md:grow ">
          <TodaysDelivery />
        </div>
        <div>
          <Overview />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
