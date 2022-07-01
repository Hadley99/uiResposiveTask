import React, { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = () => {
  const [quantity, setQuantity] = useState(1);
  const increment = (num) => {
    setQuantity((prev) => prev + num);
  };
  const decrement = (num) => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - num);
  };
  return (
    <section className="mt-4">
      <table className="min-w-full  w-full text-center">
        <thead className="border-b  flex  w-full bg-gray-200">
          <TableHead />
        </thead>
        <tbody className="max-h-[265px]  overflow-y-scroll flex flex-col items-center justify-center  w-full">
          <TableBody
            increment={increment}
            quantity={quantity}
            decrement={decrement}
          />
        </tbody>
      </table>
    </section>
  );
};

export default Table;
