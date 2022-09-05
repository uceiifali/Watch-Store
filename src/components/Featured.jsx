import React from "react";
import FeaturedItem from "./FeaturedItem";

const Featured = () => {
  return (
    <div className="flex items-center justify-center flex-col md:h-[800px] mt-8  ">
      <h1 className=" text-center text-3xl font-semibold border-t-[1px] border-first-color pt-4">
        FEATURED
      </h1>
      <div className="flex item-center justify-evenly ">
        <FeaturedItem />
      </div>
    </div>
  );
};

export default Featured;
