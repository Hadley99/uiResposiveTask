import React, { useState } from "react";
import { AddIcon, BarMenuIcon } from "../../../icons/NavbarIcons";
import { PriceTagIcon, ProfileIcon } from "../../../icons/SidebarIcons";
import Menu from "../../util/Menu";

const selectList = [
  { value: "english", displayTitle: "English" },
  { value: "kannada", displayTitle: "Kannada" },
  { value: "hindi", displayTitle: "Hindi" },
];

const Navbar = ({ toggleOpen, open }) => {
  const [selectedValue, setSelectedValue] = useState(selectList[0]);
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
        <div className="relative">
          <Menu
            setSelectedValue={setSelectedValue}
            selectList={selectList}
            displayValue={selectedValue.displayTitle}
            offsetValue={5}
            buttonStyles="bg-white ml-3 flex items-center font-medium text-primary text-sm p-1 px-2 rounded-md"
            listStyles="p-1 px-2 hover:bg-primary text-primary font-medium hover:text-white  rounded-md"
          />
        </div>
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
