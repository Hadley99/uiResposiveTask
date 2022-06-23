import React, { useState } from "react";
import { ArrowIcon } from "../../icons/NavbarIcons";

const Menu = ({
  displayValue,
  selectList,
  setSelectedValue,
  offsetValue,
  listStyles,
  buttonStyles,
}) => {
  const [open, setOpen] = useState(false);
  const [anchorElm, setAnchorElm] = useState(null);
  const toggleShow = (e) => {
    setAnchorElm(e.currentTarget.getBoundingClientRect());
    setOpen((prev) => !prev);
  };

  const close = (e) => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleShow} className={buttonStyles}>
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
              className={listStyles}
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
