import React from "react";

const TableBody = ({ increment, quantity, decrement }) => {
  return (
    <>
      <tr className="flex w-full mb-4">
        <td className="md:px-4 py-2 w-1/4 text-sm  font-medium text-gray-900">
          product name
        </td>
        <td className="md:px-4 py-2 w-1/4 text-sm text-gray-900 font-medium">
          <input
            type="color"
            className=" bg-white  border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-primary focus:shadow-inputShadow focus:border  focus:outline-none"
          />
        </td>
        <td className="md:px-4 py-2 md:m-0  mr-2 w-1/4 text-sm text-gray-900 font-medium ">
          <input
            type="number"
            className="form-control block w-full px-1  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-primary focus:shadow-inputShadow focus:border focus:outline-none"
          />
        </td>
        <td className="md:px-4 py-2 w-1/4 text-sm text-gray-900 font-medium ">
          <div className="flex justify-center items-center border border-gray-300 rounded-lg overflow-hidden ">
            <button
              className="bg-gray-300 w-full md:px-2 px-1 text-white font-bold text-xl"
              onClick={() => decrement(1)}
            >
              -
            </button>
            <span className="px-2 font-medium text-lg">{quantity}</span>
            <button
              className="bg-gray-300 w-full md:px-2 px-1 text-white font-bold text-xl "
              onClick={() => increment(1)}
            >
              +
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableBody;
