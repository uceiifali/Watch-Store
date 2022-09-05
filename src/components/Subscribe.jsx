import React from "react";

const Subscribe = () => {
  return (
    <div className="flex justify-evenly items-center flex-col md:flex-row mt-20 md:mt-0 bg-first-color  w-[80%] h-[400px] m-auto rounded-lg">
      <div className="md:w-2/5 w-[100%] text-center">
        <h2 className="text-4xl font-bold ">Subscribe Our Newsletter</h2>
        <p className="mt-8 text-text-color w-full">
          Don't miss out on your discounts. Subscribe to our email newsletter to
          get the best offers, discounts, coupons, gifts and much more.
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="md:w-3/4 w-[100%] py-4 pl-2 outline-none rounded-sm"
        />
        <button className="py-4 bg-button-color text-white px-6  hover:bg-button-color-alt">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
