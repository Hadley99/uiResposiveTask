import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ icon, title, open, link }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive
          ? "p-3 group  bg-primary text-white hover:cursor-pointer flex justify-start items-center text-sm rounded-md  font-medium"
          : "p-3 group   hover:cursor-pointer flex justify-start items-center text-sm rounded-md  font-medium"
      }
    >
      <span className={`mr-2`}>{icon}</span>
      <p>{open && title}</p>
    </NavLink>
  );
};

export default MenuItem;
