import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import OrderDetails from "./components/orderDetails/OrderDetails";
import Overview from "./components/overview/Overview";
import Sidebar from "./components/sidebar/Sidebar";
import TodaysDelivery from "./components/todaysDelivery/TodaysDelivery";

const App = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="bg-primary h-2/5 absolute -z-50 top-0 left-0 right-0 "></div>
      {/* main content */}
      <main className="px-4 pb-4 md:pb-0">
        <div className="flex md:space-x-4 ">
          <section
            className={`md:flex block fixed z-50 md:static ${
              open ? "top-0 left-0 " : " -top-full -left-full "
            } `}
          >
            <Sidebar open={open} toggleOpen={toggleOpen} />
          </section>

          <section className="md:grow">
            <>
              <Navbar toggleOpen={toggleOpen} />
            </>
            <>
              <OrderDetails />
            </>

            <div className="md:flex md:space-x-4">
              <div className="md:grow ">
                <TodaysDelivery />
              </div>
              <div>
                <Overview />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
