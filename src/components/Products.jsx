import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-12 md:mt-0">
      <div className="border-t-2 border-first-color text-center pt-2 text-3xl font-semibold">
        Products
      </div>
      <Product />
    </div>
  );
};

export default Products;
