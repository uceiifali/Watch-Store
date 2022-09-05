import React from "react";
import img1 from "../img/new1.png";
import img2 from "../img/new2.png";
import img3 from "../img/new3.png";
import img4 from "../img/new4.png";
const Arrivals = () => {
  const New = [
    { img: img1, title: "LONGINES ROSE", price: "980" },
    { img: img2, title: "JASSMASTER", price: "1150" },
    { img: img3, title: "DREYFUSS GOLD", price: "750" },
    { img: img4, title: "PORTUGUESE ROSE", price: "1590" },
  ];
  return (
    <div className="md:flex mt-16 md:h-[480px] ">
      {New.map((item) => (
        <div className="mx-8 w-[250px] h-[400px] bg-container-color border-[1px] relative flex items-center pt-[56px] flex-col hover:h-[480px] transition-all duration-300  group hover:bg-first-color mt-10 md:mt-0">
          <div className="absolute bg-first-color px-4 py-2 text-white text-sm right-3 top-12">
            New
          </div>
          <img
            className="object-contain h-[214px] "
            src={item.img}
            alt={item.title}
          />
          <p className="font-semibold text-xl my-[16px]">{item.title}</p>
          <span className="text-first-color text-lg group-hover:text-black">
            ${item.price}
          </span>

          <button className="bg-button-color text-white font-normal text-base px-8 py-5 mt-4 hover:bg-button-color-alt  hidden   group-hover:block group-hover:duration-1000 delay-75">
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Arrivals;
