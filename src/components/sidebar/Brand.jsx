import React from "react";

import { BrandIcon, CLoseIcon } from "../../icons/SidebarIcons";

const Brand = ({ open, toggleOpen }) => {
  return (
    <div className="text-center flex  justify-between items-center py-4 px-3 md:m-0 mb-4 ">
      <div className="flex justify-center items-center">
        <span className="mr-2 ">
          <BrandIcon />
        </span>
        <p className="font-bold">{open ? "LAUNDRY" : ""}</p>
      </div>
      <button className="block md:hidden" onClick={toggleOpen}>
        <CLoseIcon size="2em" />
      </button>
    </div>
  );
};

export default Brand;
