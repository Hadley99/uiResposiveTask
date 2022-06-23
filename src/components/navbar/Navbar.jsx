import React from "react";
import { AddIcon, BarMenuIcon } from "../../icons/NavbarIcons";
import { PriceTagIcon, ProfileIcon } from "../../icons/SidebarIcons";
import SelectMenu from "./SelectMenu";

const Navbar = ({ toggleOpen }) => {
  return (
    <div className="flex w-full justify-between  mt-4  items-center">
      <button className="cursor-pointer sm:block hidden" onClick={toggleOpen}>
        <BarMenuIcon className="fill-white " />
      </button>
      <div className="flex items-center ml-auto sm:ml-0">
        <ul className="flex space-x-1">
          <li>
            <AddIcon size="1.2em" className="fill-white cursor-pointer" />
          </li>
          <li>
            <PriceTagIcon size="1.2em" className="fill-white cursor-pointer" />
          </li>
          <li>
            <ProfileIcon size="1.2em" className="fill-white cursor-pointer" />
          </li>
        </ul>
        <SelectMenu />
        <button
          className="cursor-pointer block sm:hidden ml-3"
          onClick={toggleOpen}
        >
          <BarMenuIcon className="fill-white " />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
