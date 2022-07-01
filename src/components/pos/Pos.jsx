import React from "react";
import { PlusIcon } from "../../icons/PosIcons";
import { BackArrowIcon } from "../../icons/TitleBarIcons";
import Button from "../common/button/Button";
import SearchBar from "../common/searchBar/SearchBar";
import TitleBar from "../common/titleBar/TitleBar";
import DateAndOrderDetails from "./DateAndOrderDetails";
import EachProductCard from "./EachProductCard";
import Table from "./table/Table";

const Pos = () => {
  return (
    <>
      <TitleBar
        title="Add Order"
        buttonIcon={<BackArrowIcon size="1.2em" className="fill-primary" />}
        buttonText="Back"
      />
      <div className="md:flex   w-full md:space-x-4  space-y-4 md:space-y-0">
        <section className="w-7/12">
          <div className="bg-white drop-shadow-xl w-full p-4 rounded-2xl">
            <SearchBar placeHolder="Search Here" />
            <div className="grid md:grid-cols-4 grid-cols-2  max-h-[374px]  overflow-y-scroll gap-4  mt-4">
              <EachProductCard />
            </div>
          </div>
        </section>
        <section className="w-5/12">
          <div className="bg-white drop-shadow-xl w-full p-4 rounded-2xl">
            <div className="flex space-x-4">
              <SearchBar placeHolder="Select A Customer" />
              <Button
                theme="primary"
                buttonText="Add"
                buttonIcon={<PlusIcon size="1.2em " />}
              />
            </div>

            <div className="flex space-x-4 mt-4">
              <DateAndOrderDetails />
            </div>
            <Table />
            <div className="flex justify-between mt-4">
              <div className="md:pl-4 text-lg">
                <h3>
                  Total: <span className="font-medium">2332</span>
                </h3>
              </div>
              <div className=" text-sm">
                <Button
                  theme="red"
                  buttonText="CLEAR ALL"
                  // buttonIcon={<PlusIcon size="1.2em " />}
                />
              </div>
              <div className=" text-sm">
                <Button
                  theme="primary"
                  buttonText="CONTINUE"
                  // buttonIcon={<PlusIcon size="1.2em " />}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pos;
