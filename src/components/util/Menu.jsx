import React, { useState } from "react";
import { ArrowIcon } from "../../icons/NavbarIcons";

const Menu = ({ displayValue, selectList, setSelectedValue, offsetValue }) => {
  const [open, setOpen] = useState(false);
  const [anchorElm, setAnchorElm] = useState(null);
  const toggleShow = (e) => {
    // console.log(e.currentTarget.getBoundingClientRect(), e.currentTarget);
    setAnchorElm(e.currentTarget.getBoundingClientRect());
    setOpen((prev) => !prev);
  };

  const close = (e) => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={toggleShow}
        className="bg-white ml-3 flex items-center font-medium text-primary text-sm p-1 px-2 rounded-md"
      >
        {displayValue}
        <span>
          <ArrowIcon
            size="1.3em"
            className={`fill-customGray ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      {open && (
        <ul
          style={{
            position: "absolute",
            top: anchorElm.height + offsetValue,
            left: 0,
          }}
          className="bg-white   drop-shadow-xl  p-2 rounded-md font-medium text-sm cursor-pointer"
        >
          {selectList.map((item, i) => (
            <option
              key={i}
              className="p-1 px-2 hover:bg-primary text-primary font-medium hover:text-white  rounded-md"
              value={item.value}
              onClick={(e) => {
                close();
                setSelectedValue(item);
              }}
            >
              {item.displayTitle}
            </option>
          ))}
        </ul>
      )}
    </>
  );
};

export default Menu;
