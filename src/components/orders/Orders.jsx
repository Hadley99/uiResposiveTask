import React from "react";
import { PlusIcon } from "../../icons/PosIcons";
import TitleBar from "../common/titleBar/TitleBar";

const Orders = () => {
  return (
    <>
      <TitleBar
        title="Orders"
        buttonIcon={<PlusIcon size="1.1em" className="fill-primary" />}
        buttonText="Add new order"
      />
    </>
  );
};

export default Orders;
