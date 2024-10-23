import React from "react";
import banner from "./assets/banner.jpeg";
import pfp from "./assets/pfp.jpg";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

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
  const typoverients = {
    initial: {
      opacity: 0,
      scale: 0.8,
      y: -50,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <Tilt options={defaultOptions}>
      <div
        className=" w-[80vw] md:w-[70vw]  max-w-[350px] border-[4px] border-[#97d3f6]  rounded-xl shadow-lg  bg-black"
        style={{
          background:
            " linear-gradient(0deg, rgba(131,58,180,1) 0%, rgba(151,211,246,1) 100%)",
        }}
      >
        <div className=" min-h-[200px] w-full relative rounded-t-xl">
          <motion.img
            src={banner}
            alt="banner"
            loading="lazy"
            className=" h-full w-full rounded-t-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.img
            src={pfp}
            className="  object-cover object-bottom absolute top-[50%] h-24 w-24 rounded-full left-[50%] translate-x-[-50%] translate-y-[50%] mx-auto"
            alt={pfp}
            initial={{ opacity: 0, top: 0 }}
            animate={{ opacity: 1, top: "50%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
        <motion.div
          variants={typoverients}
          className="mt-14 flex flex-col pointer-events-none"
        >
          <motion.p
            variants={typoverients}
            initial="initial"
            animate="animate"
            className=" text-white text-xl"
          >
            Mohammad Riza
          </motion.p>
          <motion.p
            variants={typoverients}
            initial="initial"
            animate="animate"
            className=" text-white text-sm"
          >
            manHunter0028
          </motion.p>
        </motion.div>
        <div className=" px-4 py-4 text-gray-50">
          <motion.p
            variants={typoverients}
            initial="initial"
            animate="animate"
            className=" text-sm font-light text-gray-50 pointer-events-none"
          >
            20yo Frontend Dev & Web Designer. Food lover, extrovert. Talkative,
            always ready to fight for my dreams. Colossal appetite, Armored
            determination,passion for coding!
          </motion.p>
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
