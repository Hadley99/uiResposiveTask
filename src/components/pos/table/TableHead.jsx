import React from "react";

const TableHead = () => {
  return (
    <tr className="flex w-full ">
      <th className="text-sm text-gray-400   w-1/4 md:px-4 py-2">SERVICES</th>
      <th className="text-sm text-gray-400  w-1/4 md:px-4 py-2">COLOR</th>
      <th className="text-sm  text-gray-400  w-1/4 md:px-4 py-2">RATE</th>
      <th className="text-sm  text-gray-400  w-1/4 md:px-4 py-2">QTY</th>
    </tr>
  );
};

export default TableHead;
