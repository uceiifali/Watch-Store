import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="grid justify-between gap-4 md:grid-cols-4 grid-cols-1 ml-20 mt-20 pb-20">
      <div className="flex flex-col ">
        <p className="font-bold">Out Information</p>
        <a href="#" className="text-md text-text-color mt-2">
          Cairo
        </a>
        <a href="#" className="text-md text-text-color mt-2">
          Giza
        </a>
        <a href="#" className="text-md text-text-color mt-2">
          0112-687-1615
        </a>
      </div>
      <div>
        <p className="font-bold">About Us</p>
        <div className="flex flex-col">
          <a href="#" className="text-md text-text-color mt-2">
            Support Center
          </a>
          <a href="#" className="text-md text-text-color mt-2">
            Customer Support
          </a>
          <a href="#" className="text-md text-text-color mt-2">
            About Us
          </a>
          <a href="#" className="text-md text-text-color mt-2">
            Copy Right
          </a>
        </div>
      </div>
      <div>
        <p className="font-bold">Product</p>
        <div className="flex flex-col">
          <a href="#" className="text-md text-text-color mt-2">
            Road bikes
          </a>
          <a href="#" className="text-md text-text-color mt-2">
            Mountain bikes
          </a>
          <a href="#" className="text-md text-text-color mt-2">
            Electric
          </a>
          <a href="#" className="text-md text-text-color mt-2">
            Accessories
          </a>
        </div>
      </div>
      <div>
        <p className="font-bold">Social</p>
        <div className="flex text-2xl mt-2">
          <FaFacebookF className="ml-2 cursor-pointer" />
          <AiOutlineTwitter className="ml-2 cursor-pointer" />
          <AiOutlineInstagram className="ml-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
