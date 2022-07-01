import React from "react";
import { TshirtIcons } from "../../icons/TodaysDeliveryIcons";

const EachProductCard = () => {
  return (
    <div className="col-span-1 row-span-1 rounded-lg border-dashed border border-customGray py-4 flex flex-col justify-between items-center cursor-pointer">
      <span>
        <TshirtIcons size="3em" />
      </span>
      <span className="mt-3 text-sm text-customGray">Tess 1</span>
    </div>
  );
};

export default EachProductCard;
