import React from "react";
import banner from "./assets/banner.jpeg";
import pfp from "./assets/pfp.jpeg";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
const Card = () => {
  //#a7634f primary
  //#32130e accent
  return (
    <Tilt options={defaultOptions}>
      <div
        className=" w-[80vw] md:w-[70vw] h-full max-w-[350px] border-[4px] border-[#32130e]  rounded-xl shadow-lg  bg-black"
        style={{
          background:
            "linear-gradient(0deg, rgba(50,19,14,1) 0%, rgba(167,99,79,1) 100%)",
        }}
      >
        <div className=" min-h-[200px]  w-full relative rounded-t-xl">
          <img
            src={banner}
            alt="banner"
            className=" h-full w-full rounded-t-lg"
            />
          <img
            src={pfp}
            className="  object-cover object-bottom absolute top-[50%] h-24 w-24 rounded-full left-[50%] translate-x-[-50%] translate-y-[50%] mx-auto"
            alt=""
          />
        </div>
        <div className="mt-14 flex flex-col pointer-events-none">
          <p className=" text-white text-xl">Mohammad Riza</p>
          <p className=" text-white text-sm">manHunter0028</p>
        </div>
        <div className=" px-4 py-4 text-gray-50">
          <p className=" text-sm font-light text-gray-50 pointer-events-none">
            20yo Frontend Dev & Web Designer. Food lover, extrovert. Titans fan,
            always ready to fight for my dreams. Colossal appetite, Armored
            determination, Eren-like passion for coding!
          </p>
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
