import React, { useState } from "react";
import { ArrowIcon } from "../../icons/NavbarIcons";
const selectList = [
  { value: "english", displayTitle: "English" },
  { value: "kannada", displayTitle: "Kannada" },
  { value: "hindi", displayTitle: "Hindi" },
];
const SelectMenu = () => {
  const [open, setOpen] = useState(false);
  const [anchorElm, setAnchorElm] = useState(null);
  const [selectedValue, setSelectedValue] = useState({
    value: "english",
    displayTitle: "English",
  });
  const toggleShow = (e) => {
    setAnchorElm(e.currentTarget.getBoundingClientRect());

    // console.log(e.currentTarget.getBoundingClientRect());
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
        value="hello"
      >
        {selectedValue.displayTitle}
        <span>
          <ArrowIcon
            size="1.3em"
            className={`fill-customGray ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      {open && (
        <ul
          style={{ top: anchorElm.top + 35, left: anchorElm.left }}
          className="bg-white absolute  drop-shadow-xl  p-2 rounded-md font-medium text-sm cursor-pointer"
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

export default SelectMenu;
