import React from "react";

const MenuItem = ({ icon, title, open }) => {
  return (
    <div className="p-3 group hover:bg-primary hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium">
      <span className="mr-2">{icon}</span>
      <p>{open && title}</p>
    </div>
  );
};

export default MenuItem;
