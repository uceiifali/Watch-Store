import React, { useEffect, useState } from "react";
import { FiWatch, FiMoon } from "react-icons/fi";

import { AiOutlineShopping, AiOutlineClose } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Featured", link: "/" },
    { name: "Products", link: "/" },
    { name: "New", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  useEffect(() => {}, []);
  const changeColor = () => {
    if (window.scrollY > 68) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div
      className={`w-full flex  items-center justify-around h-20 fixed  z-50 ${
        color
          ? "bg-white shadow-[0_1px_4px_hsl(0deg_4%_15%_/_10%)]"
          : "bg-transparent"
      }  `}
    >
      <div className="px-20  md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-center ">
          <FiWatch className="text-2xl cursor-pointer" />
          <a href="#" className="text-base mx-2 md:ml-5">
            ROLEX
          </a>
        </div>
        <ul
          className={`flex items-center justify-center md:pb-0 pb-12 pt-2 md:pt-0 absolute md:static md:z-auto z-[-1] left-0 w-full md-w-auto md:pl-0 pl-0 transition-all
          md:flex-row flex-col
            
          ease-in ${
            open
              ? "top-0 opacity-100 bg-white z-30 w-full h-screen "
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          {Links.map((item) => (
            <li key={item.name} className="md:my-0 my-7">
              <a
                href={item.link}
                className="mx-6 font-semibold hover:text-first-color transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mr-9 items-center">
        <FiMoon className="text-2xl mx-2 cursor-pointer" />
        <AiOutlineShopping className="text-2xl mx-2 cursor-pointer" />
        {open ? (
          <AiOutlineClose
            className="text-2xl md:hidden cursor-pointer z-50"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <CgMenuGridO
            className="text-2xl md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
