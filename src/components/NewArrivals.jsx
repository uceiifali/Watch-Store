import React from "react";
import Arrivals from "./Arrivals";

const NewArrivals = () => {
  return (
    <div className="flex items-center justify-center flex-col text-2xl font-semibold mt-24">
      <div className="border-t-[1px] border-first-color pb-12">
        New Arrivals
      </div>
      <Arrivals />
    </div>
  );
};

export default NewArrivals;
