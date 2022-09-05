import React from "react";
import img from "../img/home.png";
import Navbar from "./Navbar";
const Home = () => {
  const social = [
    { name: "Facebook", link: "#" },
    { name: "Twitter", link: "#" },
    { name: "Instagram", link: "#" },
  ];
  return (
    <div>
      {/* <Navbar /> */}
      <div className=" flex items-center justify-center  md:pt-0 flex-col-reverse md:flex-row ">
        <div className="flex flex-row -rotate-90 md:static absolute -left-24 md:left-0 top-56">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-text-color text-sm ml-5 hover:text-black transition"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="px-6 md:px-0">
          <h1 className="md-text-5xl text-3xl w-2/4 font-bold ">
            NEW WATCH COLLECTIONS B720
          </h1>
          <p className="text-text-color w-4/5 my-5">
            Latest arrival of the new imported watches of the B720 series, with
            a modern and resistant design.
          </p>
          <span className="text-2xl text-first-color font-semibold">$1245</span>
          <div className="pt-10">
            <button className="bg-[hsl(0,_0%,_75%)] p-4 text-title-color hover:bg-[hsl(0,_0%,_50%)] transition hover:text-white font-semibold">
              Discover
            </button>
            <button className="bg-button-color py-5 px-8 text-white hover:button-color-alt font-semibold transition hover:text-white">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="bg-first-color w-[260px] h-[450px] md:w-[580px] md:h-[680px] md:mr-20 self-end flex justify-center items-center ">
          <img
            className="md:w-[420px] md:h-[680px] w-[250px] object-contain"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
