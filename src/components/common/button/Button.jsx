import React from "react";

const Button = ({ buttonIcon, buttonText, theme }) => {
  if (theme === "light") {
    return (
      <button className="bg-white  text-primary hover:shadow-inputShadow flex justify-center items-center p-2 rounded-md font-bold space-x-2 hover:-translate-y-[1px] hover:shadow-[0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)]">
        <span>{buttonIcon}</span>
        <span>{buttonText}</span>
      </button>
    );
  }
  if (theme === "red") {
    return (
      <button className="bg-customRed  text-white hover:shadow-inputShadow flex justify-center items-center p-2 rounded-md font-bold space-x-2 hover:-translate-y-[1px] hover:shadow-[0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)]">
        <span>{buttonIcon}</span>
        <span>{buttonText}</span>
      </button>
    );
  }
  if (theme === "primary") {
    return (
      <button className="bg-primary text-white hover:shadow-inputShadow flex justify-center items-center p-2 rounded-md font-bold space-x-2 hover:-translate-y-[1px] hover:shadow-[0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)]">
        <span>{buttonIcon}</span>
        <span>{buttonText}</span>
      </button>
    );
  }
};

export default Button;
