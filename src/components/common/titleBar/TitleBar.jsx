import React from "react";
import { BackArrowIcon } from "../../../icons/TitleBarIcons";
import Button from "../button/Button";
const TitleBar = ({ buttonText, buttonIcon, title }) => {
  return (
    <div className="flex justify-between items-center my-4">
      <h1 className="text-white font-medium text-xl ">{title}</h1>
      <Button theme="light" buttonIcon={buttonIcon} buttonText={buttonText} />
    </div>
  );
};

export default TitleBar;
