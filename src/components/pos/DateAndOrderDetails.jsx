import React from "react";

const DateAndOrderDetails = () => {
  return (
    <>
      <input
        className="form-control block w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none"
        type="readonly"
        value="ORD-100"
        disabled
      />
      <input
        className="form-control block w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-primary focus:shadow-inputShadow focus:border  focus:outline-none"
        type="date"
      />
    </>
  );
};

export default DateAndOrderDetails;
