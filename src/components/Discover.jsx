import React from "react";
import img from "../img/story.png";

const Discover = () => {
  return (
    <div className="flex md:items-center justify-between py-10 flex-col-reverse md:flex-row">
      <div className="w-1/2 mt-24 ml-16">
        <div className="md:w-[460px] bg-first-color ">
          <img
            className="md:w-[450px] relative left-16 bottom-16"
            src={img}
            alt=""
          />
        </div>
      </div>
      <div className="flex md:w-1/2 flex-col md:items-start items-center justify-center md:pl-20">
        <p className="border-t-[1px] border-first-color text-center pt-2 text-xl font-semibold ">
          OUR STORY
        </p>
        <h2 className="md:text-4xl text-2xl font-medium md:w-2/3 pt-10">
          Inspirational Watch of this year
        </h2>
        <span className="md:w-2/3 text-sm text-center md:text-start text-text-color pt-10 ">
          The latest and modern watches of this year, is available in various
          presentations in this store, discover them now.
        </span>
        <button className="mt-10 py-4 px-6 text-white bg-button-color hover:bg-button-color-alt transition">
          Discover
        </button>
      </div>
    </div>
  );
};

export default Discover;
