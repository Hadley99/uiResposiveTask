import React from "react";
import Brand from "./Brand";
import { menu } from "./MenuData";
import MenuItem from "./MenuItem";

const Sidebar = ({ open }) => {
  return (
    <div className="bg-white rounded-2xl mt-4 p-2 drop-shadow-xl ">
      <Brand open={open} />
      {menu.map((item, index) => (
        <MenuItem title={item.title} open={open} key={index} icon={item.icon} />
      ))}
    </div>
  );
};

export default Sidebar;
