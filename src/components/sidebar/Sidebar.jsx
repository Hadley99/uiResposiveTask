import React from "react";
import Brand from "./Brand";
import { menu } from "./MenuData";
import MenuItem from "./MenuItem";

const Sidebar = ({ open, toggleOpen }) => {
  return (
    <div className="bg-white md:rounded-2xl md:mt-4 p-2 drop-shadow-xl w-screen h-screen md:w-auto md:h-auto ">
      <Brand open={open} toggleOpen={toggleOpen} />
      {menu.map((item, index) => (
        <MenuItem title={item.title} open={open} key={index} icon={item.icon} />
      ))}
    </div>
  );
};

export default Sidebar;
