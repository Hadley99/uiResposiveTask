import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/navbar/Navbar";
import Sidebar from "./components/common/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Pos from "./components/pos/Pos";

const App = () => {
  // for sidebar
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  //

  return (
    <>
      <main className="px-4 pb-4 md:pb-0">
        <div className="bg-primary h-2/5 absolute -z-50 top-0 left-0 right-0 "></div>
        {/* main content */}
        <Router>
          <div className="flex md:space-x-4 ">
            <section
              className={`md:flex block fixed z-50 md:static ${
                open ? "top-0 left-0 " : " -top-full -left-full "
              } `}
            >
              <Sidebar open={open} toggleOpen={toggleOpen} />
            </section>
            <section className="md:grow">
              <Navbar toggleOpen={toggleOpen} />
              <Routes>
                <Route
                  path="/admin/dashboard"
                  element={<Dashboard open={open} toggleOpen={toggleOpen} />}
                />
                <Route
                  path="/admin/pos"
                  element={<Pos open={open} toggleOpen={toggleOpen} />}
                />
              </Routes>
            </section>
          </div>
        </Router>
      </main>
    </>
  );
};

export default App;
