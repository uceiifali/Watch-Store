import React from "react";
import img1 from "../img/product1.png";
import img2 from "../img/product2.png";
import img3 from "../img/product3.png";
import img4 from "../img/product4.png";
import img5 from "../img/product5.png";
import { AiOutlineShopping } from "react-icons/ai";
const Product = () => {
  const Products = [
    { img: img1, title: "SPIRIT ROSE", price: "1500" },
    { img: img2, title: "KHAKI PILOT", price: "1350" },
    { img: img3, title: "JUBILEE BLACK", price: "870" },
    { img: img4, title: "FOSIL ME3", price: "650" },
    { img: img5, title: "DUCHEN", price: "950" },
  ];
  return (
    <div className="grid md:grid-cols-3 justify-center gap-10 flex-wrap mt-12">
      {Products.map((item) => (
        <div
          className="w-[200px] border-[1px] p-8 flex items-center justify-center flex-col  bg-container-color relative hover:shadow-[0_12px_32px_hsl(0deg_0%_20%_/_10%)]  transition"
          key={item.title}
        >
          <img className="w-[80px]" src={item.img} alt={item.title} />
          <p className="text-sm font-medium mt-4">{item.title}</p>
          <span className="text-first-color font-semibold mt-2">
            ${item.price}
          </span>
          <div className="bg-button-color-alt w-8 h-8 flex items-center justify-center text-white absolute right-0 bottom-0 text-lg cursor-pointer">
            <AiOutlineShopping />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
