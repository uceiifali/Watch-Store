import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import img1 from "../img/testimonial1.jpg";
import img2 from "../img/testimonial2.jpg";
import img3 from "../img/testimonial3.jpg";
import test from "../img/testimonial.png";

import { ImQuotesLeft } from "react-icons/im";
import "@splidejs/splide/dist/css/splide.min.css";

const Test = () => {
  const Cast = [
    {
      img: img1,
      name: "Lee Dee",
      text: "They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.",
      date: "March 27.2021",
      job: "Director of company",
    },
    {
      img: img2,
      name: "Samantha Mey",
      text: "They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.",
      date: "july 7.2021",
      job: "Director of company",
    },
    {
      img: img3,
      name: "Raul Zaman",
      text: "They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.",
      date: "june 21.2021",
      job: "Director of company",
    },
  ];
  return (
    <div className="flex items-center justify-center flex-col md:flex-row py-24 h-[800px]">
      <div className="md:w-2/5 w-3/4">
        <Splide
          className="h-[400px]"
          options={{ pagination: false, arrows: false, autoplay: true }}
        >
          {Cast.map((item) => (
            <SplideSlide key={item.name}>
              <div className="w-12 h-10 flex items-center justify-center text-first-color shadow-[0_12px_32px_hsl(0deg_0%_20%_/_10%)] bg-white">
                <ImQuotesLeft />
              </div>
              <p className="md:w-2/4 text-text-color font-medium text-sm pt-9 pb-2">
                {item.text}
              </p>
              <span className="font-medium ">{item.date}</span>
              <div className="flex pt-12 items-center">
                <img
                  className="w-[80px] h-[80px] rounded-full"
                  src={item.img}
                  alt={item.title}
                />
                <div className="pl-10">
                  <p className="font-semibold">{item.name}</p>
                  <span className="text-text-color text-sm">{item.job}</span>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="pl-20">
        <div className="bg-first-color md:w-[450px] w-[250px] ">
          <img
            className="md:w-[450px] w-[250px] relative right-24 top-20"
            src={test}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
