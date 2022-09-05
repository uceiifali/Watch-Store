import React from "react";
import img1 from "../img/featured1.png";
import img2 from "../img/featured2.png";
import img3 from "../img/featured3.png";

const FeaturedItem = () => {
  const featured = [
    { img: img1, name: "JAZZMASTER", price: "1050" },
    { img: img2, name: "INGERSOLL", price: "250" },
    { img: img3, name: "ROSE GOLD", price: "890" },
  ];
  return (
    <div className="md:flex mt-16 md:h-[480px] ">
      {featured.map((item) => (
        <div className="mx-8 w-[300px] h-[400px] bg-container-color border-[1px] relative flex items-center pt-[56px] flex-col hover:h-[480px] transition-all duration-300  group hover:shadow-[0_12px_32px_hsl(0deg_0%_20%_/_10%)] mt-10 md:mt-0">
          <div className="absolute bg-first-color px-4 py-2 text-white -rotate-90 -left-3 top-12">
            Sale
          </div>
          <img
            className="object-contain h-[214px] "
            src={item.img}
            alt={item.name}
          />
          <p className="font-semibold text-xl my-[16px]">{item.name}</p>
          <span className="text-first-color text-lg">${item.price}</span>

          <button className="bg-button-color text-white font-normal text-base px-8 py-5 mt-4 hover:bg-button-color-alt  hidden   group-hover:block group-hover:duration-1000 delay-75">
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default FeaturedItem;
