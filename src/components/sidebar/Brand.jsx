import React from "react";

import { BrandIcon } from "../../icons/SidebarIcons";

const Brand = ({ open }) => {
  return (
    <div className="text-center flex  justify-center items-center py-4 px-3">
      <span className="mr-2">
        <BrandIcon />
      </span>
      <p className="font-bold">{open ? "LAUNDRY" : ""}</p>
    </div>
  );
};

export default Brand;
